// swapping.ts
// This module handles the swapping logic for the Pond0x platform.
// It automates UI interactions with Puppeteer and performs on‑chain actions with Solana.
// Console output is styled using chalk via our unified print functions.

import { Browser, Page, Target } from "puppeteer";
import { d, getRandomAmount } from "./utils/helpers";
import chalk from "chalk";
import { Connection } from "@solana/web3.js";
import { SwapCycleMetrics, accumulateSwapMetrics } from "./metrics/metrics";
import { SwapConfig, SwapPairConfig } from "./types/config";
import {
  printMessageLinesBorderBox,
  printSessionEndReport,
  buildOsc8Hyperlink,
  printSwapSummary,
} from "./ui/print";

import {
  getPhantomPublicKey,
  getSolBalance,
  getSplBalance,
  checkRecentWpondTransfer,
} from "./solana";
import { updateAggregatedSwapMetrics } from "./db/swapMetricsDb";
import {
  generalStyle,
  phantomStyle,
  swappingStyle,
  warningStyle,
} from "./ui/styles/borderboxstyles";
import {
  clickSelectorWtxt,
  getBoundingBox,
  outputTokenSelect,
  inputTokenSelect,
  wadapt,
  setSwapAmount,
  setMaxTx,
  swapBtn,
} from "./utils/pagehandlers";
import { handlephanpopup } from "./phantom";
import { printTable } from "./ui/tables/printtable";

// Global state for tracking current token configuration.
let currentFromToken: string;
let currentFromMint: string | undefined;
let currentThreshold: number;
let currentOutputToken: string;
let currentOutputMint: string | undefined;

// Global wallet address from the connected Phantom wallet.
let userpublickey: string;

// Global flags for turboswap mode.
let tokensAlreadySelected = false;
let swapAmountEntered = false;

// State for random pair selection
let currentSelectedPair: SwapPairConfig | null = null;
let currentRoundCount: number = 0;

/**
 * connectwallet
 * -------------
 * Initiates connection to the Phantom wallet by triggering a popup and retrieving the wallet's public key.
 *
 * @param page - The Puppeteer page instance.
 * @param browser - The Puppeteer browser instance.
 */
export const connectwallet = async (
  page: Page,
  browser: Browser
): Promise<void> => {
  printMessageLinesBorderBox(
    ["💼 Starting wallet connection..."],
    phantomStyle
  );
  await d(1000);
  await wadapt(page);
  await d(3000);
  await handlephanpopup(page, browser, "Connect", "Phantom\nDetected");

  // Get the connected wallet's public key.
  userpublickey = await getPhantomPublicKey(page);
  printMessageLinesBorderBox(
    ["👻 Phantom wallet connected", userpublickey],
    phantomStyle
  );
};

/**
 * flipTokenDirection
 * ------------------
 * Swaps the current input and output token configurations and resets selection flags.
 *
 * @param config - The swap configuration object.
 */
function flipTokenDirection(config: SwapConfig): void {
  // Swap token symbols and mint addresses.
  [currentFromToken, currentOutputToken] = [
    currentOutputToken,
    currentFromToken,
  ];
  [currentFromMint, currentOutputMint] = [currentOutputMint, currentFromMint];
  // Update threshold based on the new current from-token.
  currentThreshold =
    currentFromToken === (config.tokenA ?? "")
      ? config.tokenALowThreshold ?? 0
      : config.tokenBLowThreshold ?? 0;
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
const swappingroutine = async (
  page: Page,
  browser: Browser,
  fromToken: string,
  toToken: string,
  amount: string,
  turboswap: boolean
): Promise<{ success: boolean; errorType?: string; swapDetails?: any }> => {
  await d(2000);

  // Perform token selection if required.
  if (!(turboswap && tokensAlreadySelected)) {
    if (fromToken !== "SOL") {
      await inputTokenSelect(page);
      await d(3000);
      await clickSelectorWtxt(page, "li", fromToken);
      await d(2000);
    }
    await outputTokenSelect(page);
    await d(3000);
    await clickSelectorWtxt(page, "li", toToken);
    await d(2000);
    if (turboswap) tokensAlreadySelected = true;
  }

  let txSuccessObj: { success: boolean; errorType?: string };

  // Enter swap amount.
  if (!turboswap || (turboswap && !swapAmountEntered)) {
    txSuccessObj = (await setSwapAmount(page, amount))
      ? await signtxloop(page, browser)
      : { success: false, errorType: "other" };
    if (turboswap) swapAmountEntered = true;
  } else {
    txSuccessObj = await signtxloop(page, browser);
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
export const swappond = async (
  page: Page,
  browser: Browser,
  config: SwapConfig
): Promise<SwapCycleMetrics> => {
  // Reset flags.
  tokensAlreadySelected = false;
  swapAmountEntered = false;
  // Reset pair selection state for new swappond execution
  currentSelectedPair = null;
  currentRoundCount = 0;

  // Initialize token configuration using the selected pair.
  currentFromToken = config.tokenA ?? "";
  currentFromMint = config.tokenAMint;
  currentThreshold = config.tokenALowThreshold ?? 0;
  currentOutputToken = config.tokenB ?? "";
  currentOutputMint = config.tokenBMint;
  tokensAlreadySelected = false;
  swapAmountEntered = false;

  const metrics: SwapCycleMetrics = {
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
      const rewardsActive = await checkRecentWpondTransfer();
      config.swapRewardsActive = rewardsActive;
      printMessageLinesBorderBox(
        [
          rewardsActive
            ? "Rewards mode ACTIVE – reward amounts will be used."
            : "Rewards mode NOT active – normal amounts will be used.",
        ],
        rewardsActive ? generalStyle : warningStyle
      );
      if (!rewardsActive && config.skipSwapIfNoRewards) {
        printMessageLinesBorderBox(
          ["Rewards are not active. Skipping swap round."],
          warningStyle
        );
        return metrics;
      }
    } else {
      config.swapRewardsActive = false;
    }

    // Get bounding box for the "You Pay" field.
    const maybeBbox = await getBoundingBox(
      page,
      ".py-5.px-4.flex.flex-col.dark\\:text-white",
      "You Pay"
    );
    if (!maybeBbox)
      throw new Error('Could not locate bounding box for "You Pay" field.');
    const { bboxX, bboxY } = maybeBbox;

    await setMaxTx(page, config.maxReferralFee);

    // Execute swap rounds.
    for (let round = 0; round < config.swapRounds; round++) {
      printMessageLinesBorderBox(
        [`=== Starting Swap Round ${round + 1} of ${config.swapRounds} ===`],
        swappingStyle
      );

      // Centralized token management: check balance, flip if needed, and choose an amount.
      let chosenAmount: number = await runTokenManager(page, config);
      printMessageLinesBorderBox(
        [
          `Current ${currentFromToken} balance updated as per token manager.`,
          `Final chosen amount: ${chosenAmount}`,
        ],
        swappingStyle
      );

      let attempts = 0;
      let roundSuccess = false;
      let feeSOL = 0;
      let referralFee = 0;
      let pair = "";

      // Try up to 3 attempts.
      while (attempts < 3 && !roundSuccess) {
        attempts++;
        metrics.totalSwapAttempts++;
        printMessageLinesBorderBox(
          [`🔁 Attempt ${attempts} for round ${round + 1}`],
          generalStyle
        );

        const swapResult = await swappingroutine(
          page,
          browser,
          currentFromToken,
          currentOutputToken,
          chosenAmount.toString(),
          config.turboswap
        );

        if (!swapResult.success) {
          const errorKey = swapResult.errorType || "unknown";
          metrics.extraSwapErrors[errorKey] =
            (metrics.extraSwapErrors[errorKey] || 0) + 1;
          // Re-run token management after failure.
          chosenAmount = await runTokenManager(page, config);
          await d(1500);
          continue;
        }

        // Get the Solscan URL for a successful swap.
        let solscanUrl: string | null = null;
        try {
          const successSelector = "a[href*='solscan.io/tx/']";
          const errorSelector =
            "#jupiter-terminal > form > div > div.w-full.px-2 > div.flex.flex-col.h-full.w-full.mt-2 > div > div > p";
          const successPromise = page.waitForSelector(successSelector, {
            timeout: 60000,
          });
          const errorPromise = page.waitForSelector(errorSelector, {
            timeout: 60000,
          });
          const element = await Promise.race([successPromise, errorPromise]);
          if (!element)
            throw new Error("No element found for either selector.");
          const isErrorElement: boolean = await page.evaluate(
            (el, errorSel) => (el ? el.matches(errorSel) : false),
            element,
            errorSelector
          );
          if (isErrorElement) {
            const errorText = await page.evaluate(
              (el) => (el ? el.innerText : ""),
              element
            );
            throw new Error(errorText);
          } else {
            solscanUrl = await page.evaluate(
              (el) => (el as HTMLAnchorElement).href,
              element
            );
          }
        } catch (error) {
          const swapButtonText = await page.evaluate(() => {
            const button = document.querySelector(
              ".swapbtn"
            ) as HTMLButtonElement;
            return button ? button.innerText : "";
          });
          if (swapButtonText.toLowerCase().includes("swapping")) {
            printMessageLinesBorderBox(
              ["⏰ Swap still in progress after 1 minute. Reloading page..."],
              warningStyle
            );
            await page.reload();
            continue;
          } else {
            printMessageLinesBorderBox(
              ["❌ Timeout: Solscan TX could not be found (aggregator fail)."],
              warningStyle
            );
          }
        }

        if (solscanUrl) {
          roundSuccess = true;
          metrics.successfulSwapRounds++;
          metrics.volumeByToken[currentFromToken] =
            (metrics.volumeByToken[currentFromToken] || 0) + chosenAmount;
          pair = `${currentFromToken.toUpperCase()}-${currentOutputToken.toUpperCase()}`;
          metrics.swapsByToken[pair] = (metrics.swapsByToken[pair] || 0) + 1;

          const clickableLink = buildOsc8Hyperlink(
            solscanUrl,
            "View Solscan Transaction"
          );
          printMessageLinesBorderBox([clickableLink], generalStyle);

          const parts = solscanUrl.split("/tx/");
          const txNumber = parts.length > 1 ? parts[1] : solscanUrl;
          try {
            const connection = new Connection(
              "https://api.mainnet-beta.solana.com",
              "confirmed"
            );
            const parsedTx = await connection.getParsedTransaction(txNumber, {
              maxSupportedTransactionVersion: 0,
            });
            const { feeSOL: txFeeSOL, referralFee: txReferralFee } =
              await printSwapSummary(
                parsedTx,
                {
                  from: currentFromToken,
                  to: currentOutputToken,
                  amount: chosenAmount.toString(),
                },
                currentFromMint,
                currentOutputMint,
                userpublickey
              );
            feeSOL = txFeeSOL;
            referralFee = txReferralFee;
            metrics.totalTransactionFeesSOL += feeSOL;
            metrics.referralFeesByToken[currentFromToken] =
              (metrics.referralFeesByToken[currentFromToken] || 0) +
              referralFee;
          } catch (txError) {
            console.log(chalk.red(`Error fetching TX data: ${txError}`));
          }
        }
      } // End while attempts loop.

      metrics.totalSwapRounds++;
      if (!roundSuccess) {
        metrics.failedSwapRounds++;
        printMessageLinesBorderBox(
          [`❌ Round ${round + 1} failed after 3 attempts.`],
          warningStyle
        );
      }

      // Update persistent metrics.
      updateAggregatedSwapMetrics({
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
        preSignFailures: { ...metrics.preSignFailures },
        postSignFailures: { ...metrics.postSignFailures },
        extraSwapErrors: { ...metrics.extraSwapErrors },
      });

      // Reset round-specific counters.
      metrics.preSignFailures = { insufficient: 0, userAbort: 0, other: 0 };
      metrics.postSignFailures = {
        slippageTolerance: 0,
        transactionReverted: 0,
        other: 0,
      };
      metrics.extraSwapErrors = {};

      await d(...config.swapDelayRange);
    } // End for rounds.
    await d(...config.swapRoundDelayRange);
  } catch (error) {
    const errorMessage: string =
      error instanceof Error ? error.message : String(error);
    printMessageLinesBorderBox(
      ["Error in swappond setup:", errorMessage],
      warningStyle
    );
    metrics.extraSwapErrors[errorMessage] = 1;
  }

  accumulateSwapMetrics(metrics);

  const summaryReport = {
    "Total Swap Rounds": metrics.totalSwapRounds,
    "Successful Swap Rounds": metrics.successfulSwapRounds,
    "Failed Swap Rounds": metrics.failedSwapRounds,
    "Aborted Swap Rounds":
      metrics.preSignFailures.insufficient +
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

  printSessionEndReport("Swap Cycle Metrics", summaryReport);
  return metrics;
};

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
async function getRealBalance(
  page: Page,
  tokenSymbol: string,
  tokenMint?: string
): Promise<number> {
  if (tokenSymbol === "SOL") {
    return await getSolBalance(userpublickey);
  } else {
    if (!tokenMint)
      throw new Error(`No mint address provided for SPL token: ${tokenSymbol}`);
    return await getSplBalance(userpublickey, tokenMint);
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
const signtx = async (page: Page): Promise<string> => {
  await d(5000);
  const resultMsg: string = await page.evaluate(() => {
    const warningContainer = document.querySelector(
      '[data-testid="warning-container"]'
    );
    if (warningContainer) {
      const secondaryButton = document.querySelector(
        '[data-testid="secondary-button"]'
      ) as HTMLButtonElement;
      secondaryButton?.click();
      return warningContainer.textContent?.trim() || "";
    } else {
      const primaryButton = document.querySelector(
        '[data-testid="primary-button"]'
      ) as HTMLButtonElement;
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
export const signtxloop = async (
  page: Page,
  browser: Browser
): Promise<{ success: boolean; errorType?: string }> => {
  const startTime = Date.now();
  let signed = false;
  let attempts = 0;
  const maxAttempts = 5;
  let lastWarning = "";

  printMessageLinesBorderBox(
    ["⏳ Waiting for transaction signature..."],
    phantomStyle
  );

  while (!signed && attempts < maxAttempts) {
    if (Date.now() - startTime > 30000) {
      printMessageLinesBorderBox(
        ["⏰ Timeout reached. Reloading page..."],
        warningStyle
      );
      await page.reload();
      break;
    }
    attempts++;
    printMessageLinesBorderBox(
      [`🔁 Attempt ${attempts} for signature...`],
      generalStyle
    );

    let popup: Page | null = null;
    try {
      popup = await new Promise<Page>(async (resolve, reject) => {
        const timeoutId = setTimeout(() => {
          browser.off("targetcreated", onTargetCreated);
          reject(new Error("No popup opened within 10s"));
        }, 10000);

        const onTargetCreated = async (target: Target) => {
          clearTimeout(timeoutId);
          browser.off("targetcreated", onTargetCreated);
          const p = await target.page();
          if (p) resolve(p);
          else reject(new Error("Popup page not available"));
        };

        browser.on("targetcreated", onTargetCreated);
        swapBtn(page).catch((err: Error) => {
          clearTimeout(timeoutId);
          browser.off("targetcreated", onTargetCreated);
          reject(err);
        });
      });
    } catch (e: any) {
      printMessageLinesBorderBox(
        [`❌ Error creating popup: ${e.message}`],
        warningStyle
      );
      return { success: false, errorType: "other" };
    }

    let resultMsg = "";
    try {
      resultMsg = await signtx(popup);
      printMessageLinesBorderBox(
        [`📝 Sign message: ${resultMsg}`],
        phantomStyle
      );
    } catch (e) {
      printMessageLinesBorderBox(["❌ Error during signing."], warningStyle);
      return { success: false, errorType: "other" };
    }

    const lowerMsg = resultMsg.toLowerCase();
    if (
      lowerMsg.includes("insufficient balance") ||
      lowerMsg.includes("does not have enough sol")
    ) {
      printMessageLinesBorderBox(
        ["⚠️ Insufficient balance detected."],
        warningStyle
      );
      lastWarning = lowerMsg;
      return { success: false, errorType: "insufficient" };
    }

    if (lowerMsg.includes("transaction approved")) {
      printMessageLinesBorderBox(["✅ Transaction approved."], phantomStyle);
      signed = true;
      break;
    }

    if (
      lowerMsg.includes("transaction reverted") ||
      lowerMsg.includes("slippage tolerance exceeded") ||
      lowerMsg.includes("retry")
    ) {
      printMessageLinesBorderBox(
        [`⚠️ Transient error: ${lowerMsg}. Retrying...`],
        warningStyle
      );
      try {
        await popup.evaluate(() => {
          const buttons = Array.from(document.querySelectorAll("button"));
          const retryButton = buttons.find((btn) =>
            btn.innerText.toLowerCase().includes("retry")
          );
          retryButton?.click();
        });
      } catch (e) {
        printMessageLinesBorderBox(["❌ Error during retry."], warningStyle);
        return { success: false, errorType: "other" };
      }
      lastWarning = lowerMsg;
      await d(1000);
      continue;
    }

    if (lowerMsg === "") {
      await d(1000);
      continue;
    }

    lastWarning = lowerMsg;
    await d(1000);
    browser.removeAllListeners("targetcreated");
  }

  if (!signed) {
    const isInsufficient =
      lastWarning.includes("insufficient") ||
      lastWarning.includes("not enough sol");
    return {
      success: false,
      errorType: isInsufficient ? "insufficient" : "transient",
    };
  }

  const postSignError = await checkForPostSignError(page);
  if (postSignError) {
    printMessageLinesBorderBox(
      [`⚠️ Post-sign error detected: ${postSignError}`],
      warningStyle
    );
    const lowerPostError = postSignError.toLowerCase();
    if (
      lowerPostError.includes("slippage") ||
      lowerPostError.includes("reverted")
    )
      return { success: false, errorType: "postSignSlippage" };
    else if (
      lowerPostError.includes("fail") ||
      lowerPostError.includes("error")
    )
      return { success: false, errorType: "postSignError" };
    else return { success: false, errorType: "other" };
  }

  return { success: true };
};

/**
 * checkForPostSignError
 * -----------------------
 * Checks for error messages on the main page after a Phantom transaction.
 *
 * @param page - The Puppeteer page instance.
 * @returns An error message string if found, or null.
 */
async function checkForPostSignError(page: Page): Promise<string | null> {
  await d(2000);
  return page.evaluate(() => {
    const errorElem = document.querySelector(".swap-error-message");
    return errorElem ? errorElem.textContent?.trim() || null : null;
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
async function runTokenManager(
  page: Page,
  config: SwapConfig
): Promise<number> {
  // Select a new random pair if first round or roundsPerPair reached
  if (
    currentSelectedPair === null ||
    currentRoundCount >= (config.roundsPerPair ?? 1)
  ) {
    if (!config.selectedPairs || config.selectedPairs.length === 0) {
      printMessageLinesBorderBox(
        [
          "No valid trading pairs available in tokenManager. Using default pair.",
        ],
        warningStyle
      );
      // Fallback to config.tokenA/tokenB
      currentFromToken = config.tokenA ?? "";
      currentFromMint = config.tokenAMint;
      currentThreshold = config.tokenALowThreshold ?? 0;
      currentOutputToken = config.tokenB ?? "";
      currentOutputMint = config.tokenBMint;
      currentSelectedPair = null;
      currentRoundCount = 0;
    } else {
      // Randomly select a pair
      const randomIndex = Math.floor(
        Math.random() * config.selectedPairs.length
      );
      currentSelectedPair = config.selectedPairs[randomIndex];
      currentFromToken = currentSelectedPair.tokenA ?? "";
      currentFromMint = currentSelectedPair.tokenAMint;
      currentThreshold = currentSelectedPair.tokenALowThreshold ?? 0;
      currentOutputToken = currentSelectedPair.tokenB ?? "";
      currentOutputMint = currentSelectedPair.tokenBMint;
      currentRoundCount = 0;
      // Display the selected pair
      printTable("🤝  Selected pair for this swap", currentSelectedPair);
    }
  } else {
    // Reuse the current pair and display it
    printTable("🤝  Reusing pair for this swap", currentSelectedPair);
  }
  // Increment round count
  currentRoundCount++;

  // Reset flags for new pair or after flip
  tokensAlreadySelected = false;
  swapAmountEntered = false;

  // Check current balance
  const balance = await getRealBalance(page, currentFromToken, currentFromMint);
  printMessageLinesBorderBox(
    [
      `Current ${currentFromToken} balance: ${balance}`,
      balance < currentThreshold
        ? `Balance (${balance}) is below threshold (${currentThreshold}).`
        : `Balance is sufficient (threshold: ${currentThreshold}).`,
    ],
    generalStyle
  );

  // If balance is too low, flip token direction
  if (balance < currentThreshold) {
    printMessageLinesBorderBox(
      [
        `${currentFromToken} balance (${balance}) is below threshold (${currentThreshold}). Flipping token direction...`,
      ],
      warningStyle
    );
    flipTokenDirection(config);
    printMessageLinesBorderBox(
      [
        `After flip: fromToken is now ${currentFromToken}, toToken is ${currentOutputToken}.`,
      ],
      swappingStyle
    );
  }

  // Determine swap amount based on currentFromToken and rewards mode
  let minAmount: number, maxAmount: number;
  if (currentFromToken === (config.tokenA ?? "")) {
    if (config.swapRewardsActive) {
      minAmount = config.tokenARewardMin ?? 0;
      maxAmount = config.tokenARewardMax ?? 0;
    } else {
      minAmount = config.tokenAMinAmount ?? 0;
      maxAmount = config.tokenAMaxAmount ?? 0;
    }
  } else {
    if (config.swapRewardsActive) {
      minAmount = config.tokenBRewardMin ?? 0;
      maxAmount = config.tokenBRewardMax ?? 0;
    } else {
      minAmount = config.tokenBMinAmount ?? 0;
      maxAmount = config.tokenBMaxAmount ?? 0;
    }
  }

  const chosenAmount = getRandomAmount(minAmount, maxAmount);
  printMessageLinesBorderBox(
    [
      `Chosen swap amount for ${currentFromToken}: ${chosenAmount} (range: ${minAmount}-${maxAmount})`,
    ],
    swappingStyle
  );
  return chosenAmount;
}
