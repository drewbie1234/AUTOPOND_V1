"use strict";
// swapping.ts
// This module handles the swapping logic for the Pond0x platform.
// It automates UI interactions with Puppeteer and performs on‑chain actions with Solana.
// Console output is styled using chalk via our unified print functions.
Object.defineProperty(exports, "__esModule", { value: true });
exports.signtxloop = exports.swappond = exports.connectwallet = void 0;
const tslib_1 = require("tslib");
const helpers_1 = require("./utils/helpers");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const web3_js_1 = require("@solana/web3.js");
const metrics_1 = require("./metrics/metrics");
const print_1 = require("./ui/print");
const solana_1 = require("./solana");
const swapMetricsDb_1 = require("./db/swapMetricsDb");
const borderboxstyles_1 = require("./ui/styles/borderboxstyles");
const pagehandlers_1 = require("./utils/pagehandlers");
const phantom_1 = require("./phantom");
const printtable_1 = require("./ui/tables/printtable");
// Global state for tracking current token configuration.
let currentFromToken;
let currentFromMint;
let currentThreshold;
let currentOutputToken;
let currentOutputMint;
// Global wallet address from the connected Phantom wallet.
let userpublickey;
// Global flags for turboswap mode.
let tokensAlreadySelected = false;
let swapAmountEntered = false;
// State for random pair selection
let currentSelectedPair = null;
let currentRoundCount = 0;
/**
 * connectwallet
 * -------------
 * Initiates connection to the Phantom wallet by triggering a popup and retrieving the wallet's public key.
 *
 * @param page - The Puppeteer page instance.
 * @param browser - The Puppeteer browser instance.
 */
const connectwallet = async (page, browser) => {
    (0, print_1.printMessageLinesBorderBox)(["💼 Starting wallet connection..."], borderboxstyles_1.phantomStyle);
    await (0, helpers_1.d)(1000);
    await (0, pagehandlers_1.wadapt)(page);
    await (0, helpers_1.d)(3000);
    await (0, phantom_1.handlephanpopup)(page, browser, "Connect", "Phantom\nDetected");
    // Get the connected wallet's public key.
    userpublickey = await (0, solana_1.getPhantomPublicKey)(page);
    (0, print_1.printMessageLinesBorderBox)(["👻 Phantom wallet connected", userpublickey], borderboxstyles_1.phantomStyle);
};
exports.connectwallet = connectwallet;
/**
 * flipTokenDirection
 * ------------------
 * Swaps the current input and output token configurations and resets selection flags.
 *
 * @param config - The swap configuration object.
 */
function flipTokenDirection(config) {
    var _a, _b, _c;
    // Swap token symbols and mint addresses.
    [currentFromToken, currentOutputToken] = [
        currentOutputToken,
        currentFromToken,
    ];
    [currentFromMint, currentOutputMint] = [currentOutputMint, currentFromMint];
    // Update threshold based on the new current from-token.
    currentThreshold =
        currentFromToken === ((_a = config.tokenA) !== null && _a !== void 0 ? _a : "")
            ? (_b = config.tokenALowThreshold) !== null && _b !== void 0 ? _b : 0
            : (_c = config.tokenBLowThreshold) !== null && _c !== void 0 ? _c : 0;
    // Reset flags.
    tokensAlreadySelected = false;
    swapAmountEntered = false;
}
/**
 * swappingroutine
 * ---------------
 * Executes a single swap attempt.
 *
 * @param page - The Puppeteer page instance.
 * @param browser - The Puppeteer browser instance.
 * @param fromToken - The token symbol to swap from.
 * @param toToken - The token symbol to swap to.
 * @param amount - The swap amount as a string.
 * @param turboswap - Flag indicating if turboswap mode is active.
 * @returns Swap result details.
 */
const swappingroutine = async (page, browser, fromToken, toToken, amount, turboswap) => {
    await (0, helpers_1.d)(2000);
    // Perform token selection if required.
    if (!(turboswap && tokensAlreadySelected)) {
        if (fromToken !== "SOL") {
            await (0, pagehandlers_1.inputTokenSelect)(page);
            await (0, helpers_1.d)(3000);
            await (0, pagehandlers_1.clickSelectorWtxt)(page, "li", fromToken);
            await (0, helpers_1.d)(2000);
        }
        await (0, pagehandlers_1.outputTokenSelect)(page);
        await (0, helpers_1.d)(3000);
        await (0, pagehandlers_1.clickSelectorWtxt)(page, "li", toToken);
        await (0, helpers_1.d)(2000);
        if (turboswap)
            tokensAlreadySelected = true;
    }
    let txSuccessObj;
    // Enter swap amount.
    if (!turboswap || (turboswap && !swapAmountEntered)) {
        txSuccessObj = (await (0, pagehandlers_1.setSwapAmount)(page, amount))
            ? await (0, exports.signtxloop)(page, browser)
            : { success: false, errorType: "other" };
        if (turboswap)
            swapAmountEntered = true;
    }
    else {
        txSuccessObj = await (0, exports.signtxloop)(page, browser);
    }
    return {
        success: txSuccessObj.success,
        errorType: txSuccessObj.success ? undefined : txSuccessObj.errorType,
        swapDetails: { from: fromToken, to: toToken, amount },
    };
};
/**
 * swappond
 * --------
 * Executes multiple swap rounds using the provided swap configuration.
 *
 * @param page - The Puppeteer page instance.
 * @param browser - The Puppeteer browser instance.
 * @param config - The swap configuration (merged with the selected trading pair).
 * @returns Aggregated swap cycle metrics.
 */
const swappond = async (page, browser, config) => {
    var _a, _b, _c;
    // Reset flags.
    tokensAlreadySelected = false;
    swapAmountEntered = false;
    // Reset pair selection state for new swappond execution
    currentSelectedPair = null;
    currentRoundCount = 0;
    // Initialize token configuration using the selected pair.
    currentFromToken = (_a = config.tokenA) !== null && _a !== void 0 ? _a : "";
    currentFromMint = config.tokenAMint;
    currentThreshold = (_b = config.tokenALowThreshold) !== null && _b !== void 0 ? _b : 0;
    currentOutputToken = (_c = config.tokenB) !== null && _c !== void 0 ? _c : "";
    currentOutputMint = config.tokenBMint;
    tokensAlreadySelected = false;
    swapAmountEntered = false;
    const metrics = {
        totalSwapRounds: 0,
        successfulSwapRounds: 0,
        failedSwapRounds: 0,
        abortedSwapRounds: 0,
        totalSwapAttempts: 0,
        volumeByToken: {},
        swapsByToken: {},
        totalTransactionFeesSOL: 0,
        referralFeesByToken: {},
        preSignFailures: { insufficient: 0, userAbort: 0, other: 0 },
        postSignFailures: {
            slippageTolerance: 0,
            transactionReverted: 0,
            other: 0,
        },
        extraSwapErrors: {},
    };
    try {
        // Rewards check.
        if (config.enableRewardsCheck) {
            const rewardsActive = await (0, solana_1.checkRecentWpondTransfer)();
            config.swapRewardsActive = rewardsActive;
            (0, print_1.printMessageLinesBorderBox)([
                rewardsActive
                    ? "Rewards mode ACTIVE – reward amounts will be used."
                    : "Rewards mode NOT active – normal amounts will be used.",
            ], rewardsActive ? borderboxstyles_1.generalStyle : borderboxstyles_1.warningStyle);
            if (!rewardsActive && config.skipSwapIfNoRewards) {
                (0, print_1.printMessageLinesBorderBox)(["Rewards are not active. Skipping swap round."], borderboxstyles_1.warningStyle);
                return metrics;
            }
        }
        else {
            config.swapRewardsActive = false;
        }
        // Get bounding box for the "You Pay" field.
        const maybeBbox = await (0, pagehandlers_1.getBoundingBox)(page, ".py-5.px-4.flex.flex-col.dark\\:text-white", "You Pay");
        if (!maybeBbox)
            throw new Error('Could not locate bounding box for "You Pay" field.');
        const { bboxX, bboxY } = maybeBbox;
        await (0, pagehandlers_1.setMaxTx)(page, config.maxReferralFee);
        // Execute swap rounds.
        for (let round = 0; round < config.swapRounds; round++) {
            (0, print_1.printMessageLinesBorderBox)([`=== Starting Swap Round ${round + 1} of ${config.swapRounds} ===`], borderboxstyles_1.swappingStyle);
            // Centralized token management: check balance, flip if needed, and choose an amount.
            let chosenAmount = await runTokenManager(page, config);
            (0, print_1.printMessageLinesBorderBox)([
                `Current ${currentFromToken} balance updated as per token manager.`,
                `Final chosen amount: ${chosenAmount}`,
            ], borderboxstyles_1.swappingStyle);
            let attempts = 0;
            let roundSuccess = false;
            let feeSOL = 0;
            let referralFee = 0;
            let pair = "";
            // Try up to 3 attempts.
            while (attempts < 3 && !roundSuccess) {
                attempts++;
                metrics.totalSwapAttempts++;
                (0, print_1.printMessageLinesBorderBox)([`🔁 Attempt ${attempts} for round ${round + 1}`], borderboxstyles_1.generalStyle);
                const swapResult = await swappingroutine(page, browser, currentFromToken, currentOutputToken, chosenAmount.toString(), config.turboswap);
                if (!swapResult.success) {
                    const errorKey = swapResult.errorType || "unknown";
                    metrics.extraSwapErrors[errorKey] =
                        (metrics.extraSwapErrors[errorKey] || 0) + 1;
                    // Re-run token management after failure.
                    chosenAmount = await runTokenManager(page, config);
                    await (0, helpers_1.d)(1500);
                    continue;
                }
                // Get the Solscan URL for a successful swap.
                let solscanUrl = null;
                try {
                    const successSelector = "a[href*='solscan.io/tx/']";
                    const errorSelector = "#jupiter-terminal > form > div > div.w-full.px-2 > div.flex.flex-col.h-full.w-full.mt-2 > div > div > p";
                    const successPromise = page.waitForSelector(successSelector, {
                        timeout: 60000,
                    });
                    const errorPromise = page.waitForSelector(errorSelector, {
                        timeout: 60000,
                    });
                    const element = await Promise.race([successPromise, errorPromise]);
                    if (!element)
                        throw new Error("No element found for either selector.");
                    const isErrorElement = await page.evaluate((el, errorSel) => (el ? el.matches(errorSel) : false), element, errorSelector);
                    if (isErrorElement) {
                        const errorText = await page.evaluate((el) => (el ? el.innerText : ""), element);
                        throw new Error(errorText);
                    }
                    else {
                        solscanUrl = await page.evaluate((el) => el.href, element);
                    }
                }
                catch (error) {
                    const swapButtonText = await page.evaluate(() => {
                        const button = document.querySelector(".swapbtn");
                        return button ? button.innerText : "";
                    });
                    if (swapButtonText.toLowerCase().includes("swapping")) {
                        (0, print_1.printMessageLinesBorderBox)(["⏰ Swap still in progress after 1 minute. Reloading page..."], borderboxstyles_1.warningStyle);
                        await page.reload();
                        continue;
                    }
                    else {
                        (0, print_1.printMessageLinesBorderBox)(["❌ Timeout: Solscan TX could not be found (aggregator fail)."], borderboxstyles_1.warningStyle);
                    }
                }
                if (solscanUrl) {
                    roundSuccess = true;
                    metrics.successfulSwapRounds++;
                    metrics.volumeByToken[currentFromToken] =
                        (metrics.volumeByToken[currentFromToken] || 0) + chosenAmount;
                    pair = `${currentFromToken.toUpperCase()}-${currentOutputToken.toUpperCase()}`;
                    metrics.swapsByToken[pair] = (metrics.swapsByToken[pair] || 0) + 1;
                    const clickableLink = (0, print_1.buildOsc8Hyperlink)(solscanUrl, "View Solscan Transaction");
                    (0, print_1.printMessageLinesBorderBox)([clickableLink], borderboxstyles_1.generalStyle);
                    const parts = solscanUrl.split("/tx/");
                    const txNumber = parts.length > 1 ? parts[1] : solscanUrl;
                    try {
                        const connection = new web3_js_1.Connection("https://api.mainnet-beta.solana.com", "confirmed");
                        const parsedTx = await connection.getParsedTransaction(txNumber, {
                            maxSupportedTransactionVersion: 0,
                        });
                        const { feeSOL: txFeeSOL, referralFee: txReferralFee } = await (0, print_1.printSwapSummary)(parsedTx, {
                            from: currentFromToken,
                            to: currentOutputToken,
                            amount: chosenAmount.toString(),
                        }, currentFromMint, currentOutputMint, userpublickey);
                        feeSOL = txFeeSOL;
                        referralFee = txReferralFee;
                        metrics.totalTransactionFeesSOL += feeSOL;
                        metrics.referralFeesByToken[currentFromToken] =
                            (metrics.referralFeesByToken[currentFromToken] || 0) +
                                referralFee;
                    }
                    catch (txError) {
                        console.log(chalk_1.default.red(`Error fetching TX data: ${txError}`));
                    }
                }
            } // End while attempts loop.
            metrics.totalSwapRounds++;
            if (!roundSuccess) {
                metrics.failedSwapRounds++;
                (0, print_1.printMessageLinesBorderBox)([`❌ Round ${round + 1} failed after 3 attempts.`], borderboxstyles_1.warningStyle);
            }
            // Update persistent metrics.
            (0, swapMetricsDb_1.updateAggregatedSwapMetrics)({
                totalSwapRounds: 1,
                successfulSwapRounds: roundSuccess ? 1 : 0,
                failedSwapRounds: roundSuccess ? 0 : 1,
                abortedSwapRounds: 0,
                totalSwapAttempts: attempts,
                totalTransactionFeesSOL: feeSOL,
                volumeByToken: roundSuccess ? { [currentFromToken]: chosenAmount } : {},
                swapsByToken: roundSuccess ? { [pair]: 1 } : {},
                referralFeesByToken: roundSuccess
                    ? { [currentFromToken]: referralFee }
                    : {},
                preSignFailures: Object.assign({}, metrics.preSignFailures),
                postSignFailures: Object.assign({}, metrics.postSignFailures),
                extraSwapErrors: Object.assign({}, metrics.extraSwapErrors),
            });
            // Reset round-specific counters.
            metrics.preSignFailures = { insufficient: 0, userAbort: 0, other: 0 };
            metrics.postSignFailures = {
                slippageTolerance: 0,
                transactionReverted: 0,
                other: 0,
            };
            metrics.extraSwapErrors = {};
            await (0, helpers_1.d)(...config.swapDelayRange);
        } // End for rounds.
        await (0, helpers_1.d)(...config.swapRoundDelayRange);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        (0, print_1.printMessageLinesBorderBox)(["Error in swappond setup:", errorMessage], borderboxstyles_1.warningStyle);
        metrics.extraSwapErrors[errorMessage] = 1;
    }
    (0, metrics_1.accumulateSwapMetrics)(metrics);
    const summaryReport = {
        "Total Swap Rounds": metrics.totalSwapRounds,
        "Successful Swap Rounds": metrics.successfulSwapRounds,
        "Failed Swap Rounds": metrics.failedSwapRounds,
        "Aborted Swap Rounds": metrics.preSignFailures.insufficient +
            metrics.preSignFailures.userAbort +
            metrics.preSignFailures.other,
        "Total Swap Attempts": metrics.totalSwapAttempts,
        "Volume by Token": metrics.volumeByToken,
        "Swaps by Token": metrics.swapsByToken,
        "Total Transaction Fees (SOL)": metrics.totalTransactionFeesSOL.toFixed(6),
        "Referral Fees by Token": metrics.referralFeesByToken,
        "Pre-Sign Failures": metrics.preSignFailures,
        "Post-Sign Failures": metrics.postSignFailures,
        "Extra Swap Errors": metrics.extraSwapErrors,
    };
    (0, print_1.printSessionEndReport)("Swap Cycle Metrics", summaryReport);
    return metrics;
};
exports.swappond = swappond;
/**
 * getRealBalance
 * --------------
 * Retrieves the on‑chain balance for the specified token.
 *
 * @param page - The Puppeteer page instance.
 * @param tokenSymbol - The token symbol.
 * @param tokenMint - The mint address (if applicable).
 * @returns The current token balance.
 */
async function getRealBalance(page, tokenSymbol, tokenMint) {
    if (tokenSymbol === "SOL") {
        return await (0, solana_1.getSolBalance)(userpublickey);
    }
    else {
        if (!tokenMint)
            throw new Error(`No mint address provided for SPL token: ${tokenSymbol}`);
        return await (0, solana_1.getSplBalance)(userpublickey, tokenMint);
    }
}
/**
 * signtx
 * ------
 * Handles transaction signing in the Phantom popup.
 *
 * @param page - The Puppeteer page instance for the popup.
 * @returns The result message.
 */
const signtx = async (page) => {
    await (0, helpers_1.d)(5000);
    const resultMsg = await page.evaluate(() => {
        var _a;
        const warningContainer = document.querySelector('[data-testid="warning-container"]');
        if (warningContainer) {
            const secondaryButton = document.querySelector('[data-testid="secondary-button"]');
            secondaryButton === null || secondaryButton === void 0 ? void 0 : secondaryButton.click();
            return ((_a = warningContainer.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || "";
        }
        else {
            const primaryButton = document.querySelector('[data-testid="primary-button"]');
            if (primaryButton) {
                primaryButton.click();
                return "Transaction approved";
            }
            return "";
        }
    });
    return resultMsg;
};
/**
 * signtxloop
 * ---------
 * Repeatedly attempts to sign the transaction until success or max attempts.
 *
 * @param page - The Puppeteer page instance.
 * @param browser - The Puppeteer browser instance.
 * @returns Transaction signing result.
 */
const signtxloop = async (page, browser) => {
    const startTime = Date.now();
    let signed = false;
    let attempts = 0;
    const maxAttempts = 5;
    let lastWarning = "";
    (0, print_1.printMessageLinesBorderBox)(["⏳ Waiting for transaction signature..."], borderboxstyles_1.phantomStyle);
    while (!signed && attempts < maxAttempts) {
        if (Date.now() - startTime > 30000) {
            (0, print_1.printMessageLinesBorderBox)(["⏰ Timeout reached. Reloading page..."], borderboxstyles_1.warningStyle);
            await page.reload();
            break;
        }
        attempts++;
        (0, print_1.printMessageLinesBorderBox)([`🔁 Attempt ${attempts} for signature...`], borderboxstyles_1.generalStyle);
        let popup = null;
        try {
            popup = await new Promise(async (resolve, reject) => {
                const timeoutId = setTimeout(() => {
                    browser.off("targetcreated", onTargetCreated);
                    reject(new Error("No popup opened within 10s"));
                }, 10000);
                const onTargetCreated = async (target) => {
                    clearTimeout(timeoutId);
                    browser.off("targetcreated", onTargetCreated);
                    const p = await target.page();
                    if (p)
                        resolve(p);
                    else
                        reject(new Error("Popup page not available"));
                };
                browser.on("targetcreated", onTargetCreated);
                (0, pagehandlers_1.swapBtn)(page).catch((err) => {
                    clearTimeout(timeoutId);
                    browser.off("targetcreated", onTargetCreated);
                    reject(err);
                });
            });
        }
        catch (e) {
            (0, print_1.printMessageLinesBorderBox)([`❌ Error creating popup: ${e.message}`], borderboxstyles_1.warningStyle);
            return { success: false, errorType: "other" };
        }
        let resultMsg = "";
        try {
            resultMsg = await signtx(popup);
            (0, print_1.printMessageLinesBorderBox)([`📝 Sign message: ${resultMsg}`], borderboxstyles_1.phantomStyle);
        }
        catch (e) {
            (0, print_1.printMessageLinesBorderBox)(["❌ Error during signing."], borderboxstyles_1.warningStyle);
            return { success: false, errorType: "other" };
        }
        const lowerMsg = resultMsg.toLowerCase();
        if (lowerMsg.includes("insufficient balance") ||
            lowerMsg.includes("does not have enough sol")) {
            (0, print_1.printMessageLinesBorderBox)(["⚠️ Insufficient balance detected."], borderboxstyles_1.warningStyle);
            lastWarning = lowerMsg;
            return { success: false, errorType: "insufficient" };
        }
        if (lowerMsg.includes("transaction approved")) {
            (0, print_1.printMessageLinesBorderBox)(["✅ Transaction approved."], borderboxstyles_1.phantomStyle);
            signed = true;
            break;
        }
        if (lowerMsg.includes("transaction reverted") ||
            lowerMsg.includes("slippage tolerance exceeded") ||
            lowerMsg.includes("retry")) {
            (0, print_1.printMessageLinesBorderBox)([`⚠️ Transient error: ${lowerMsg}. Retrying...`], borderboxstyles_1.warningStyle);
            try {
                await popup.evaluate(() => {
                    const buttons = Array.from(document.querySelectorAll("button"));
                    const retryButton = buttons.find((btn) => btn.innerText.toLowerCase().includes("retry"));
                    retryButton === null || retryButton === void 0 ? void 0 : retryButton.click();
                });
            }
            catch (e) {
                (0, print_1.printMessageLinesBorderBox)(["❌ Error during retry."], borderboxstyles_1.warningStyle);
                return { success: false, errorType: "other" };
            }
            lastWarning = lowerMsg;
            await (0, helpers_1.d)(1000);
            continue;
        }
        if (lowerMsg === "") {
            await (0, helpers_1.d)(1000);
            continue;
        }
        lastWarning = lowerMsg;
        await (0, helpers_1.d)(1000);
        browser.removeAllListeners("targetcreated");
    }
    if (!signed) {
        const isInsufficient = lastWarning.includes("insufficient") ||
            lastWarning.includes("not enough sol");
        return {
            success: false,
            errorType: isInsufficient ? "insufficient" : "transient",
        };
    }
    const postSignError = await checkForPostSignError(page);
    if (postSignError) {
        (0, print_1.printMessageLinesBorderBox)([`⚠️ Post-sign error detected: ${postSignError}`], borderboxstyles_1.warningStyle);
        const lowerPostError = postSignError.toLowerCase();
        if (lowerPostError.includes("slippage") ||
            lowerPostError.includes("reverted"))
            return { success: false, errorType: "postSignSlippage" };
        else if (lowerPostError.includes("fail") ||
            lowerPostError.includes("error"))
            return { success: false, errorType: "postSignError" };
        else
            return { success: false, errorType: "other" };
    }
    return { success: true };
};
exports.signtxloop = signtxloop;
/**
 * checkForPostSignError
 * -----------------------
 * Checks for error messages on the main page after a Phantom transaction.
 *
 * @param page - The Puppeteer page instance.
 * @returns An error message string if found, or null.
 */
async function checkForPostSignError(page) {
    await (0, helpers_1.d)(2000);
    return page.evaluate(() => {
        var _a;
        const errorElem = document.querySelector(".swap-error-message");
        return errorElem ? ((_a = errorElem.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || null : null;
    });
}
/**
 * runTokenManager
 * ---------------
 * Checks the current balance for the "from" token and determines the swap amount.
 * Selects a random trading pair from config.selectedPairs every config.roundsPerPair rounds.
 *
 * @param page - The Puppeteer page instance.
 * @param config - The swap configuration parameters.
 * @returns The chosen swap amount.
 */
async function runTokenManager(page, config) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    // Select a new random pair if first round or roundsPerPair reached
    if (currentSelectedPair === null ||
        currentRoundCount >= ((_a = config.roundsPerPair) !== null && _a !== void 0 ? _a : 1)) {
        if (!config.selectedPairs || config.selectedPairs.length === 0) {
            (0, print_1.printMessageLinesBorderBox)([
                "No valid trading pairs available in tokenManager. Using default pair.",
            ], borderboxstyles_1.warningStyle);
            // Fallback to config.tokenA/tokenB
            currentFromToken = (_b = config.tokenA) !== null && _b !== void 0 ? _b : "";
            currentFromMint = config.tokenAMint;
            currentThreshold = (_c = config.tokenALowThreshold) !== null && _c !== void 0 ? _c : 0;
            currentOutputToken = (_d = config.tokenB) !== null && _d !== void 0 ? _d : "";
            currentOutputMint = config.tokenBMint;
            currentSelectedPair = null;
            currentRoundCount = 0;
        }
        else {
            // Randomly select a pair
            const randomIndex = Math.floor(Math.random() * config.selectedPairs.length);
            currentSelectedPair = config.selectedPairs[randomIndex];
            currentFromToken = (_e = currentSelectedPair.tokenA) !== null && _e !== void 0 ? _e : "";
            currentFromMint = currentSelectedPair.tokenAMint;
            currentThreshold = (_f = currentSelectedPair.tokenALowThreshold) !== null && _f !== void 0 ? _f : 0;
            currentOutputToken = (_g = currentSelectedPair.tokenB) !== null && _g !== void 0 ? _g : "";
            currentOutputMint = currentSelectedPair.tokenBMint;
            currentRoundCount = 0;
            // Display the selected pair
            (0, printtable_1.printTable)("🤝  Selected pair for this swap", currentSelectedPair);
        }
    }
    else {
        // Reuse the current pair and display it
        (0, printtable_1.printTable)("🤝  Reusing pair for this swap", currentSelectedPair);
    }
    // Increment round count
    currentRoundCount++;
    // Reset flags for new pair or after flip
    tokensAlreadySelected = false;
    swapAmountEntered = false;
    // Check current balance
    const balance = await getRealBalance(page, currentFromToken, currentFromMint);
    (0, print_1.printMessageLinesBorderBox)([
        `Current ${currentFromToken} balance: ${balance}`,
        balance < currentThreshold
            ? `Balance (${balance}) is below threshold (${currentThreshold}).`
            : `Balance is sufficient (threshold: ${currentThreshold}).`,
    ], borderboxstyles_1.generalStyle);
    // If balance is too low, flip token direction
    if (balance < currentThreshold) {
        (0, print_1.printMessageLinesBorderBox)([
            `${currentFromToken} balance (${balance}) is below threshold (${currentThreshold}). Flipping token direction...`,
        ], borderboxstyles_1.warningStyle);
        flipTokenDirection(config);
        (0, print_1.printMessageLinesBorderBox)([
            `After flip: fromToken is now ${currentFromToken}, toToken is ${currentOutputToken}.`,
        ], borderboxstyles_1.swappingStyle);
    }
    // Determine swap amount based on currentFromToken and rewards mode
    let minAmount, maxAmount;
    if (currentFromToken === ((_h = config.tokenA) !== null && _h !== void 0 ? _h : "")) {
        if (config.swapRewardsActive) {
            minAmount = (_j = config.tokenARewardMin) !== null && _j !== void 0 ? _j : 0;
            maxAmount = (_k = config.tokenARewardMax) !== null && _k !== void 0 ? _k : 0;
        }
        else {
            minAmount = (_l = config.tokenAMinAmount) !== null && _l !== void 0 ? _l : 0;
            maxAmount = (_m = config.tokenAMaxAmount) !== null && _m !== void 0 ? _m : 0;
        }
    }
    else {
        if (config.swapRewardsActive) {
            minAmount = (_o = config.tokenBRewardMin) !== null && _o !== void 0 ? _o : 0;
            maxAmount = (_p = config.tokenBRewardMax) !== null && _p !== void 0 ? _p : 0;
        }
        else {
            minAmount = (_q = config.tokenBMinAmount) !== null && _q !== void 0 ? _q : 0;
            maxAmount = (_r = config.tokenBMaxAmount) !== null && _r !== void 0 ? _r : 0;
        }
    }
    const chosenAmount = (0, helpers_1.getRandomAmount)(minAmount, maxAmount);
    (0, print_1.printMessageLinesBorderBox)([
        `Chosen swap amount for ${currentFromToken}: ${chosenAmount} (range: ${minAmount}-${maxAmount})`,
    ], borderboxstyles_1.swappingStyle);
    return chosenAmount;
}
