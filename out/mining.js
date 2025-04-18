"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiningSession = void 0;
const helpers_1 = require("./utils/helpers");
const borderboxstyles_1 = require("./ui/styles/borderboxstyles");
const print_1 = require("./ui/print");
const pagehandlers_1 = require("./utils/pagehandlers");
const configloader_1 = require("./utils/configloader");
const mineMetricsDb_1 = require("./db/mineMetricsDb");
const phantom_1 = require("./phantom");
const miningConfig = (0, configloader_1.loadMiningConfig)();
/**
 * updatelcd
 * ---------
 * Reads elements with the class "lcdbox" from the current page, parses their inner text,
 * and returns an LCD object representing the current display values.
 *
 * @param {Page} page - The Puppeteer Page instance to evaluate.
 * @returns {Promise<LCD>} A promise that resolves to an LCD object containing parsed values.
 */
const updatelcd = async (page) => {
    const lcd = await page.evaluate(() => {
        const LCD = {
            CONNECTION: null,
            STATUS: null,
            UNCLAIMED: null,
            TIME: null,
            HASHRATE: null,
            BOOST: null,
        };
        // Parse each element with the class "lcdbox" and map its innerText into key/value pairs.
        Array.from(document.querySelectorAll(".lcdbox")).forEach((v) => {
            const kv = v.innerText.replace(/\n/g, "").split(":");
            if (kv.length > 1 && kv[0] in LCD) {
                LCD[kv[0]] = kv[1] || null;
            }
        });
        return LCD;
    });
    return lcd;
};
/**
 * MiningSession
 * -------------
 * Encapsulates the mining session functionality including:
 * - Initialization (delays, popups, and metric setup)
 * - Periodic LCD polling and metric updates
 * - Evaluation of claim conditions and performing stop/claim actions.
 *
 * @class MiningSession
 */
class MiningSession {
    /**
     * Constructor for MiningSession.
     *
     * @param {Page} page - The Puppeteer page instance.
     * @param {Browser} browser - The Puppeteer browser instance.
     */
    constructor(page, browser) {
        this.sessionStartTime = 0;
        this.previousUpdateTime = 0;
        this.iterationCount = 0; // Corresponds to variable "c" in the original code.
        this.prevReward = 0;
        this.boostRegistered = 0; // Stores the first positive boost after iteration 5.
        this.page = page;
        this.browser = browser;
    }
    /**
     * initSession
     * -----------
     * Initializes the mining session by:
     * - Waiting for an initial delay.
     * - Triggering the mining popup.
     * - Reading the initial LCD values.
     * - Setting up the initial metrics.
     *
     * @private
     * @returns {Promise<void>}
     */
    async initSession() {
        (0, print_1.printMessageLinesBorderBox)(["Starting mining loop..."], borderboxstyles_1.miningStyle);
        await (0, helpers_1.d)(miningConfig.initialDelayMs);
        // Trigger the mining popup using Phantom's popup handler.
        await (0, phantom_1.handlephanpopup)(this.page, this.browser, miningConfig.confirmButtonText, miningConfig.mineButtonTrigger);
        await (0, helpers_1.d)(miningConfig.popupDelayMs);
        // Read initial LCD values and initialize metrics.
        const initialLCD = await updatelcd(this.page);
        this.sessionStartTime = Date.now();
        this.previousUpdateTime = this.sessionStartTime;
        const initialUnclaimed = (0, helpers_1.parseFormattedNumber)(initialLCD.UNCLAIMED || "0");
        this.metrics = {
            claimedAmount: 0,
            unclaimedAmount: initialUnclaimed,
            unclaimedIncrement: 0,
            avgHashRate: 0,
            miningTimeMin: 0,
            miningTimeIncrement: 0,
            maxBoost: 0,
            claimed: false,
            extraMiningData: {},
            incrementalExtraData: { checkCount: 0 },
        };
        // Mark initial flag for incremental data.
        this.metrics.incrementalExtraData.initial = 1;
        (0, mineMetricsDb_1.updateAggregatedMiningMetrics)(this.metrics);
        if (this.metrics.incrementalExtraData) {
            delete this.metrics.incrementalExtraData.initial;
        }
        this.prevReward = initialUnclaimed;
    }
    /**
     * updateMetrics
     * -------------
     * Updates the in-memory metrics based on the latest LCD values.
     * Calculates changes in unclaimed tokens, updates the average hash rate,
     * mining time, and maximum boost if applicable.
     *
     * @private
     * @param {LCD} lcd - The current LCD values.
     * @returns {void}
     */
    updateMetrics(lcd) {
        const tnum = parseInt(lcd.TIME) || 0;
        const hnum = parseFloat(lcd.HASHRATE) || 0;
        const unum = (0, helpers_1.parseFormattedNumber)(lcd.UNCLAIMED || "0");
        const statString = (0, helpers_1.parseString)(lcd.STATUS);
        const connectionString = (0, helpers_1.parseString)(lcd.CONNECTION);
        const bnum = lcd.BOOST ? parseFloat(lcd.BOOST) || 0 : 0;
        // Display the current LCD values.
        (0, print_1.printMessageLinesBorderBox)([
            `CONNECTION = ${connectionString}`,
            `STATUS = ${statString}`,
            `UNCLAIMED = ${unum}`,
            `TIME = ${tnum}`,
            `HASHRATE = ${hnum}`,
            `BOOST = ${bnum}`,
        ], borderboxstyles_1.miningStyle);
        // Update the unclaimed amount metric.
        this.metrics.unclaimedAmount = unum;
        // Update unclaimed increment if the unclaimed amount has increased.
        if (unum > this.prevReward) {
            const diff = unum - this.prevReward;
            this.metrics.unclaimedIncrement = diff;
            (0, print_1.printMessageLinesBorderBox)([
                `Unclaimed increased from ${this.prevReward} to ${unum}.`,
                "Updating unclaimed increment and resetting iteration counter.",
            ], borderboxstyles_1.miningStyle);
            this.iterationCount = 0;
            this.prevReward = unum;
        }
        else {
            this.metrics.unclaimedIncrement = 0;
            this.iterationCount++;
        }
        // Update average hash rate using a weighted average.
        const previousCount = this.metrics.incrementalExtraData.checkCount;
        const newCount = previousCount + 1;
        this.metrics.avgHashRate =
            (this.metrics.avgHashRate * previousCount + hnum) / newCount;
        this.metrics.incrementalExtraData.checkCount = newCount;
        // Update mining time metrics.
        const now = Date.now();
        this.metrics.miningTimeMin = parseFloat(((now - this.sessionStartTime) / 60000).toFixed(2));
        this.metrics.miningTimeIncrement = parseFloat(((now - this.previousUpdateTime) / 60000).toFixed(2));
        this.previousUpdateTime = now;
        // Update maximum boost if a new higher boost value is detected.
        if (bnum > this.metrics.maxBoost) {
            (0, print_1.printMessageLinesBorderBox)([`New max boost detected: ${bnum}`], borderboxstyles_1.miningStyle);
            this.metrics.maxBoost = bnum;
        }
        // Register the first positive boost after 5 iterations.
        if (this.iterationCount >= 5 && bnum > 0 && this.boostRegistered === 0) {
            this.boostRegistered = bnum;
            (0, print_1.printMessageLinesBorderBox)([`Registered boost value: ${bnum}`], borderboxstyles_1.miningStyle);
        }
        // Record the current iteration count in the incremental metrics.
        this.metrics.incrementalExtraData.iterations = this.iterationCount;
        (0, mineMetricsDb_1.updateAggregatedMiningMetrics)(this.metrics);
        // Reset incremental values after aggregation.
        this.metrics.unclaimedIncrement = 0;
        this.metrics.miningTimeIncrement = 0;
        for (const key in this.metrics.incrementalExtraData) {
            if (key !== "final" && key !== "initial") {
                this.metrics.incrementalExtraData[key] = 0;
            }
        }
    }
    /**
     * stopAndClaim
     * ------------
     * Helper function to stop the mining session and claim tokens.
     * Updates the metrics with the claimed token amount, logs a success message if provided,
     * and simulates clicking the stop/claim button.
     *
     * @private
     * @param {number} tokens - The amount of tokens to claim.
     * @param {string} [successMessage] - Optional success message to log.
     * @returns {Promise<boolean>} Resolves to true upon successful claim.
     */
    async stopAndClaim(tokens, successMessage) {
        this.metrics.claimedAmount = tokens;
        this.metrics.claimed = true;
        if (successMessage) {
            (0, print_1.printMessageLinesBorderBox)([successMessage], borderboxstyles_1.miningStyle);
        }
        await (0, pagehandlers_1.clickbyinnertxt)(this.page, "button", [
            miningConfig.stopClaimButtonText,
            miningConfig.stopAnywayButtonText,
        ]);
        // Wait for the mining success delay before concluding the claim.
        (0, helpers_1.d)(miningConfig.miningSuccessDelayMs);
        return true;
    }
    /**
     * checkMaxIterations
     * ------------------
     * Checks if the maximum number of iterations has been reached.
     * If so, attempts to claim tokens if the unclaimed amount exceeds the minimum threshold,
     * logs appropriate messages, and returns true to indicate the session should end.
     *
     * @private
     * @returns {Promise<boolean>} Resolves to true if max iterations are reached and session should end.
     */
    async checkMaxIterations() {
        if (this.iterationCount > miningConfig.maxIterations) {
            (0, print_1.printMessageLinesBorderBox)([
                "Max iterations reached.",
                `Unclaimed tokens: ${this.metrics.unclaimedAmount}.`,
                "Attempting to claim if tokens available...",
            ], borderboxstyles_1.miningStyle);
            if (this.metrics.unclaimedAmount >
                miningConfig.miningCompleteUnclaimedThreshold) {
                try {
                    return await this.stopAndClaim(this.metrics.unclaimedAmount, `Successfully claimed ${this.metrics.unclaimedAmount} tokens.`);
                }
                catch (error) {
                    (0, print_1.printMessageLinesBorderBox)(["Claim attempt failed:", "Ending session anyway."], borderboxstyles_1.warningStyle);
                    this.metrics.claimed = false;
                    return true;
                }
            }
            else {
                (0, print_1.printMessageLinesBorderBox)(["Not enough tokens to claim.", "Ending session without claiming."], borderboxstyles_1.miningStyle);
                this.metrics.claimed = false;
                return true;
            }
        }
        return false;
    }
    /**
     * checkClaimMaxThreshold
     * -----------------------
     * Checks if the unclaimed token amount exceeds the maximum claim threshold.
     * Logs final metrics and attempts to claim tokens if the condition is met.
     *
     * @private
     * @param {number} unum - The current unclaimed token amount.
     * @returns {Promise<boolean>} Resolves to true if claim threshold is met and tokens are claimed.
     */
    async checkClaimMaxThreshold(unum) {
        if (unum >= miningConfig.claimMaxThreshold) {
            (0, print_1.printMessageLinesBorderBox)(["Max claim condition met:"], borderboxstyles_1.miningStyle);
            (0, print_1.printMessageLinesBorderBox)([
                "Final Metrics before Claim:",
                ` - Unclaimed Amount: ${unum}`,
                ` - Claimed Amount set to: ${unum}`,
                ` - Average Hash Rate: ${this.metrics.avgHashRate}`,
                ` - Mining Time (min): ${this.metrics.miningTimeMin}`,
                ` - Max Boost: ${this.metrics.maxBoost}`,
            ], borderboxstyles_1.miningStyle);
            return await this.stopAndClaim(unum);
        }
        return false;
    }
    /**
     * checkZeroHashRateStart
     * ------------------------
     * Checks if the hash rate remains zero after several iterations.
     * If true, stops the mining session.
     *
     * @private
     * @param {number} hnum - The current hash rate.
     * @returns {Promise<boolean>} Resolves to true if the hash rate is zero beyond the allowed iterations.
     */
    async checkZeroHashRateStart(hnum) {
        if (this.iterationCount > 5 && hnum === 0) {
            (0, print_1.printMessageLinesBorderBox)(["Hash rate is 0.", "Stopping mining session"], borderboxstyles_1.miningStyle);
            this.metrics.claimed = false;
            return true;
        }
        return false;
    }
    /**
     * checkTimeThreshold
     * ------------------
     * Checks if the elapsed time exceeds the claim time threshold.
     * If the unclaimed amount is below the minimum threshold, stops the session;
     * otherwise, attempts to claim tokens.
     *
     * @private
     * @param {number} tnum - The current time value.
     * @param {number} unum - The current unclaimed token amount.
     * @returns {Promise<boolean>} Resolves to true if the time threshold triggers a claim or session end.
     */
    async checkTimeThreshold(tnum, unum) {
        if (tnum >= miningConfig.claimTimeThreshold) {
            if (unum < miningConfig.miningCompleteUnclaimedThreshold) {
                (0, print_1.printMessageLinesBorderBox)(["Time limit reached but unclaimed is below the minimum threshold."], borderboxstyles_1.miningStyle);
                this.metrics.claimed = false;
                return true;
            }
            else {
                (0, print_1.printMessageLinesBorderBox)(["Time limit reached and unclaimed meets the minimum threshold."], borderboxstyles_1.miningStyle);
                return await this.stopAndClaim(unum);
            }
        }
        return false;
    }
    /**
     * checkZeroHashRateEnd
     * ----------------------
     * Checks the primary claim condition based on hash rate and unclaimed token thresholds.
     * If met, attempts to claim tokens.
     *
     * @private
     * @param {number} hnum - The current hash rate.
     * @param {number} unum - The current unclaimed token amount.
     * @returns {Promise<boolean>} Resolves to true if the claim condition is met.
     */
    async checkZeroHashRateEnd(hnum, unum) {
        if (hnum === miningConfig.miningCompleteHashRate &&
            unum > miningConfig.miningCompleteUnclaimedThreshold) {
            (0, print_1.printMessageLinesBorderBox)(["Primary claim condition met."], borderboxstyles_1.miningStyle);
            return await this.stopAndClaim(unum);
        }
        return false;
    }
    /**
     * checkBoost
     * ----------
     * Checks if a previously registered positive boost (maxBoost) exists and, after at least 5 iterations,
     * whether the current boost drops below that registered maximum.
     * If so, triggers a claim action.
     *
     * @private
     * @param {LCD} lcd - The current LCD values.
     * @returns {Promise<boolean>} Resolves to true if the boost condition triggers a claim.
     */
    async checkBoost(lcd) {
        const bnum = lcd.BOOST ? parseFloat(lcd.BOOST) || 0 : 0;
        if (this.iterationCount >= 5 &&
            this.metrics.maxBoost > 0 &&
            bnum < this.metrics.maxBoost) {
            (0, print_1.printMessageLinesBorderBox)([
                `Boost dropped from recorded maximum ${this.metrics.maxBoost} to ${bnum}.`,
                "Claiming tokens because boost has dropped below its maximum.",
            ], borderboxstyles_1.miningStyle);
            const unum = (0, helpers_1.parseFormattedNumber)(lcd.UNCLAIMED || "0");
            return await this.stopAndClaim(unum);
        }
        return false;
    }
    /**
     * checkClaimConditions
     * ----------------------
     * Sequentially evaluates all claim conditions using helper methods.
     * Returns true if any condition is met and a claim or stop action is executed.
     *
     * @private
     * @param {LCD} lcd - The current LCD values.
     * @returns {Promise<boolean>} Resolves to true if a claim condition is satisfied.
     */
    async checkClaimConditions(lcd) {
        const tnum = parseInt(lcd.TIME) || 0;
        const hnum = parseFloat(lcd.HASHRATE) || 0;
        const unum = (0, helpers_1.parseFormattedNumber)(lcd.UNCLAIMED || "0");
        if (await this.checkMaxIterations())
            return true;
        if (await this.checkClaimMaxThreshold(unum))
            return true;
        if (await this.checkZeroHashRateStart(hnum))
            return true;
        if (await this.checkTimeThreshold(tnum, unum))
            return true;
        if (await this.checkZeroHashRateEnd(hnum, unum))
            return true;
        if (await this.checkBoost(lcd))
            return true;
        return false;
    }
    /**
     * start
     * -----
     * Starts the mining session by:
     * - Initializing the session.
     * - Entering a loop to periodically poll LCD values.
     * - Updating metrics and evaluating claim conditions.
     * - Finalizing metrics once a claim or stop condition is met.
     *
     * @public
     * @returns {Promise<boolean>} Resolves to true when the session completes.
     */
    async start() {
        await this.initSession();
        let mineComplete = false;
        try {
            while (!mineComplete) {
                // Ensure incrementalExtraData exists.
                if (!this.metrics.incrementalExtraData) {
                    this.metrics.incrementalExtraData = { checkCount: 0 };
                }
                // Read the latest LCD values.
                const lcd = await updatelcd(this.page);
                this.updateMetrics(lcd);
                // Evaluate all claim conditions.
                mineComplete = await this.checkClaimConditions(lcd);
                // Wait for the loop iteration delay if no claim/stop condition met.
                if (!mineComplete) {
                    await (0, helpers_1.d)(miningConfig.loopIterationDelayMs);
                }
            }
        }
        finally {
            // Mark the final state in the incremental extra data and update overall metrics.
            if (!this.metrics.incrementalExtraData) {
                this.metrics.incrementalExtraData = {};
            }
            this.metrics.incrementalExtraData.final = 1;
            (0, mineMetricsDb_1.updateAggregatedMiningMetrics)(this.metrics);
            await (0, helpers_1.d)(500);
        }
        return true;
    }
}
exports.MiningSession = MiningSession;
