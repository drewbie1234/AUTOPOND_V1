"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runSwap = runSwap;
const print_1 = require("../print");
const borderboxstyles_1 = require("../styles/borderboxstyles");
const swapping_1 = require("../../swapping");
const helpers_1 = require("../../utils/helpers");
/**
 * runSwap
 * -------
 * Navigates to the swap page, initiates the swap process using the provided configuration,
 * and returns the swap cycle metrics. It selects the referral URL either from a random referral list
 * (if enabled in the config) or uses a default referral URL.
 *
 * @param {Page} page - The Puppeteer Page object used for browser interactions.
 * @param {Browser} browser - The Puppeteer Browser instance.
 * @param {SwapConfig} config - Configuration parameters for the swap operation. Expect a boolean flag
 *                              `useReferralList` that determines whether the referral URL should be randomized.
 * @returns {Promise<SwapCycleMetrics>} A promise that resolves to the metrics for the current swap cycle.
 */
async function runSwap(page, browser, config) {
    // Determine the referral URL based on the configuration flag.
    let referralUrl;
    if (config.useReferralList) {
        try {
            referralUrl = await (0, helpers_1.getRandomReferralUrl)();
            (0, print_1.printMessageLinesBorderBox)([`Using random referral URL: ${referralUrl}`], borderboxstyles_1.swappingStyle);
        }
        catch (error) {
            console.error("Failed to get a random referral URL from CSV. Falling back to the default URL.", error);
            referralUrl =
                "https://pond0x.com/swap/solana?ref=JNp6Qzei1n1MpLKAoQcE6LQaWVnkYDoPo9buoocCQU1SaYVYLsL79V9gu79Z";
        }
    }
    else {
        referralUrl =
            "https://pond0x.com/swap/solana?ref=JNp6Qzei1n1MpLKAoQcE6LQaWVnkYDoPo9buoocCQU1SaYVYLsL79V9gu79Z";
    }
    // Navigate to the swap page using the selected referral URL.
    (0, print_1.printMessageLinesBorderBox)(["🔄 Navigating to swap page..."], borderboxstyles_1.swappingStyle);
    try {
        await page.goto(referralUrl, { waitUntil: "networkidle0", timeout: 60000 });
        // Indicate that the swap process is about to begin.
        (0, print_1.printMessageLinesBorderBox)(["🤝 Initiating swap process..."], borderboxstyles_1.swappingStyle);
        // Call the swappond function to perform the swap process and return the resulting metrics.
        return await (0, swapping_1.swappond)(page, browser, config);
    }
    catch (error) {
        // Log a critical error if navigation or swap setup fails.
        (0, print_1.printMessageLinesBorderBox)(["Critical error in runSwap (navigation or setup failed):"], borderboxstyles_1.warningStyle);
        // Return an empty metrics object with an error recorded in extraSwapErrors.
        return {
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
            postSignFailures: { slippageTolerance: 0, transactionReverted: 0, other: 0 },
            extraSwapErrors: {
                [error instanceof Error ? error.message : "navigation/setup failure"]: 1,
            },
        };
    }
}
