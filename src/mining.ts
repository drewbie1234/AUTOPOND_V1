import { MiningCycleMetrics } from "./metrics/metrics";
import { Browser, Page } from "puppeteer";
import { d, parseFormattedNumber, parseString } from "./utils/helpers";
import { miningStyle, warningStyle } from "./ui/styles/borderboxstyles";
import { printMessageLinesBorderBox } from "./ui/print";
import { clickbyinnertxt, waitforelement } from "./utils/pagehandlers";
import { loadMiningConfig } from "./utils/configloader";
import { updateAggregatedMiningMetrics } from "./db/mineMetricsDb";
import { handlephanpopup } from "./phantom";
import { signtxloop } from "./swapping";

export interface LCD {
  CONNECTION: string | null;
  STATUS: string | null;
  UNCLAIMED: string | null;
  TIME: string | null;
  HASHRATE: string | null;
  BOOST?: string | null;
}

const miningConfig = loadMiningConfig();

/**
 * updatelcd:
 * Reads elements with the class "lcdbox" on the page,
 * parses their inner text, and returns an LCD object.
 */
const updatelcd = async (page: Page): Promise<LCD> => {
  const lcd: LCD = await page.evaluate(() => {
    const LCD: LCD = {
      CONNECTION: null,
      STATUS: null,
      UNCLAIMED: null,
      TIME: null,
      HASHRATE: null,
      BOOST: null,
    };
    (Array.from(document.querySelectorAll(".lcdbox")) as HTMLElement[]).forEach(
      (v) => {
        const kv = v.innerText.replace(/\n/g, "").split(":");
        if (kv.length > 1 && kv[0] in LCD) {
          LCD[kv[0] as keyof LCD] = kv[1] || null;
        }
      }
    );
    return LCD;
  });
  return lcd;
};

/**
 * MiningSession:
 * Encapsulates the mining session functionality including:
 * - Initialization (delays, popups, and metric setup)
 * - Periodic LCD polling and metric updates
 * - Evaluation of claim conditions and performing stop/claim actions.
 */
export class MiningSession {
  private page: Page;
  private browser: Browser;
  private sessionStartTime: number = 0;
  private previousUpdateTime: number = 0;
  private metrics!: MiningCycleMetrics;
  private iterationCount: number = 0;
  private prevReward: number = 0;
  private boostRegistered: number = 0; // stores the first positive boost after iteration 5
  private hashBoostOn: boolean = miningConfig.boostHash;
  private hashBoosted: boolean = false;

  /**
   * Constructor for MiningSession.
   * @param page - The Puppeteer page instance.
   * @param browser - The Puppeteer browser instance.
   */
  constructor(page: Page, browser: Browser) {
    this.page = page;
    this.browser = browser;
  }

  /**
   * initSession:
   * Initializes the mining session by waiting for an initial delay,
   * triggering the mining popup, reading the initial LCD values,
   * and setting up the initial metrics.
   */
  private async initSession() {
    printMessageLinesBorderBox(["Starting mining loop..."], miningStyle);
    await d(miningConfig.initialDelayMs);

    // Trigger the mining popup.
    await handlephanpopup(
      this.page,
      this.browser,
      miningConfig.confirmButtonText,
      miningConfig.mineButtonTrigger
    );
    await d(miningConfig.popupDelayMs);

    // Read initial LCD values and initialize metrics.
    const initialLCD: LCD = await updatelcd(this.page);
    this.sessionStartTime = Date.now();
    this.previousUpdateTime = this.sessionStartTime;
    const initialUnclaimed = parseFormattedNumber(initialLCD.UNCLAIMED || "0");

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
    this.metrics.incrementalExtraData!.initial = 1;
    updateAggregatedMiningMetrics(this.metrics);
    if (this.metrics.incrementalExtraData) {
      delete this.metrics.incrementalExtraData!.initial;
    }
    this.prevReward = initialUnclaimed;
  }

  /**
   * updateMetrics:
   * Updates the in-memory metrics based on the latest LCD values.
   * Calculates changes in unclaimed tokens, hash rate, mining time,
   * and updates the maximum boost if applicable.
   * Also registers the first positive boost after iteration 5.
   * @param lcd - The current LCD values.
   */
  private updateMetrics(lcd: LCD) {
    const tnum = parseInt(lcd.TIME!) || 0;
    const hnum = parseFloat(lcd.HASHRATE!) || 0;
    const unum = parseFormattedNumber(lcd.UNCLAIMED || "0");
    const statString = parseString(lcd.STATUS!);
    const connectionString = parseString(lcd.CONNECTION!);
    const bnum = lcd.BOOST ? parseFloat(lcd.BOOST) || 0 : 0;

    printMessageLinesBorderBox(
      [
        `CONNECTION = ${connectionString}`,
        `STATUS = ${statString}`,
        `UNCLAIMED = ${unum}`,
        `TIME = ${tnum}`,
        `HASHRATE = ${hnum}`,
        `BOOST = ${bnum}`,
      ],
      miningStyle
    );

    this.metrics.unclaimedAmount = unum;

    // Update unclaimed metrics.
    if (unum > this.prevReward) {
      const diff = unum - this.prevReward;
      this.metrics.unclaimedIncrement = diff;
      printMessageLinesBorderBox(
        [
          `Unclaimed increased from ${this.prevReward} to ${unum}.`,
          "Updating unclaimed increment and resetting iteration counter.",
        ],
        miningStyle
      );
      this.iterationCount = 0;
      this.prevReward = unum;
    } else {
      this.metrics.unclaimedIncrement = 0;
      this.iterationCount++;
    }

    // Update average hash rate.
    const previousCount = this.metrics.incrementalExtraData!.checkCount;
    const newCount = previousCount + 1;
    this.metrics.avgHashRate =
      (this.metrics.avgHashRate * previousCount + hnum) / newCount;
    this.metrics.incrementalExtraData!.checkCount = newCount;

    // Update mining time.
    const now = Date.now();
    this.metrics.miningTimeMin = parseFloat(
      ((now - this.sessionStartTime) / 60000).toFixed(2)
    );
    this.metrics.miningTimeIncrement = parseFloat(
      ((now - this.previousUpdateTime) / 60000).toFixed(2)
    );
    this.previousUpdateTime = now;

    // Update boost if a new maximum is detected.
    if (bnum > this.metrics.maxBoost) {
      printMessageLinesBorderBox(
        [`New max boost detected: ${bnum}`],
        miningStyle
      );
      this.metrics.maxBoost = bnum;
    }

    // Register the first positive boost after iteration 5.
    if (this.iterationCount >= 5 && bnum > 0 && this.boostRegistered === 0) {
      this.boostRegistered = bnum;
      printMessageLinesBorderBox(
        [`Registered boost value: ${bnum}`],
        miningStyle
      );
    }

    this.metrics.incrementalExtraData!.iterations = this.iterationCount;
    updateAggregatedMiningMetrics(this.metrics);

    // Reset incremental values.
    this.metrics.unclaimedIncrement = 0;
    this.metrics.miningTimeIncrement = 0;
    for (const key in this.metrics.incrementalExtraData!) {
      if (key !== "final" && key !== "initial") {
        this.metrics.incrementalExtraData![key] = 0;
      }
    }
  }

  /**
   * triggerBoostAndSign:
   * Initiates the boost flow by:
   * 1. Clicking the initial Boost button.
   * 2. Entering the boost amount in the input field (using Ctrl+A and Ctrl+V).
   * 3. Checking for "Too Low" message and aborting if present by clicking the SVG close button.
   * 4. Clicking the secondary Boost button.
   * 5. Signing the transaction via the Phantom popup.
   * 6. Closing the popup.
   * If "Too Low" or other errors occur, logs the issue and exits the boost attempt without stopping the mining session.
   * @param boostAmount - The boost amount to enter (e.g., "0.1").
   */
  private async triggerBoostAndSign(boostAmount: string): Promise<void> {
    try {
      printMessageLinesBorderBox(
        ["Waiting for initial Boost button..."],
        miningStyle
      );
      let boostFound = false;
      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
          await waitforelement(this.page, "button", "BOOST", 10000); // Implicitly clicks the button
          boostFound = true;
          break;
        } catch (error) {
          printMessageLinesBorderBox(
            [`Boost button attempt ${attempt} failed, retrying...`],
            miningStyle
          );
          await d(3000);
        }
      }
      if (!boostFound) {
        printMessageLinesBorderBox(
          ["Initial Boost button not found after retries, aborting boost."],
          warningStyle
        );
        return; // Exit boost attempt
      }
      printMessageLinesBorderBox(
        ["Initial Boost button clicked..."],
        miningStyle
      );

      // Wait for the input field
      printMessageLinesBorderBox(
        ["Waiting for boost amount input field..."],
        miningStyle
      );
      const inputSelector = 'input[placeholder="Custom Amount"]';
      let inputFound = false;
      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
          await this.page.waitForSelector(inputSelector, { timeout: 10000 });
          inputFound = true;
          break;
        } catch (error) {
          printMessageLinesBorderBox(
            [`Input field attempt ${attempt} failed, retrying...`],
            miningStyle
          );
          await d(3000);
        }
      }
      if (!inputFound) {
        // Log available inputs for debugging
        const inputs = await this.page.$$eval("input", (els) =>
          els.map((el) => ({
            placeholder: el.getAttribute("placeholder") || "",
            id: el.id,
            class: el.className,
            value: el.value,
          }))
        );
        printMessageLinesBorderBox(
          ["Available inputs:", JSON.stringify(inputs, null, 2)],
          warningStyle
        );
        return; // Exit boost attempt
      }

      // Select and paste the boost amount with Ctrl+A and Ctrl+V
      printMessageLinesBorderBox(
        [`Pasting boost amount: ${boostAmount}`],
        miningStyle
      );
      await this.page.waitForSelector(inputSelector, { timeout: 5000 });
      // Focus the input
      await this.page.evaluate((selector) => {
        const input = document.querySelector(selector);
        if (!input || input.tagName !== "INPUT") {
          throw new Error(
            `Valid input element not found for selector: ${selector}`
          );
        }
        const inputElement = input as HTMLInputElement;
        inputElement.focus();
      }, inputSelector);
      await d(2000); // Wait after focus
      // Simulate Ctrl+A to select all
      await this.page.keyboard.down("Control");
      await this.page.keyboard.press("a", { delay: 100 });
      await this.page.keyboard.up("Control");
      await d(2000); // Wait after select
      // Set clipboard and simulate Ctrl+V to paste
      try {
        await this.page.evaluate((value) => {
          navigator.clipboard.writeText(value);
        }, boostAmount);
      } catch (error) {
        printMessageLinesBorderBox(
          ["Failed to set clipboard for boost amount:", String(error)],
          warningStyle
        );
        // Fallback: Set value directly
        await this.page.evaluate(
          (selector, value) => {
            const input = document.querySelector(selector) as HTMLInputElement;
            if (input) input.value = value;
          },
          inputSelector,
          boostAmount
        );
      }
      await this.page.keyboard.down("Control");
      await this.page.keyboard.press("v", { delay: 100 });
      await this.page.keyboard.up("Control");
      await d(2000); // Wait after paste
      // Dispatch events without bubbling for framework compatibility
      await this.page.evaluate((selector) => {
        const input = document.querySelector(selector) as HTMLInputElement;
        if (input) {
          input.dispatchEvent(new Event("input", { bubbles: false }));
          input.dispatchEvent(new Event("change", { bubbles: false }));
        }
      }, inputSelector);

      // Check for "Too Low" div before secondary Boost button
      printMessageLinesBorderBox(
        ["Checking for 'Too Low' message..."],
        miningStyle
      );
      await d(2000); // Wait for potential DOM updates
      const tooLowSelector =
        "div.p-5.text-lg.font-semibold.leading-none.arial-font";
      const tooLowPresent = await this.page
        .$eval(tooLowSelector, (el) => el.textContent?.trim() === "Too Low", {
          timeout: 5000,
        })
        .catch(() => false); // Return false if not found
      if (tooLowPresent) {
        printMessageLinesBorderBox(
          ["'Too Low' message detected, aborting boost..."],
          warningStyle
        );
        // Try clicking the SVG close button, then fallback to parent div
        let closeSuccessful = false;
        try {
          await this.page.waitForSelector(
            'svg[xmlns="http://www.w3.org/2000/svg"][viewBox="0 0 50 50"]',
            { timeout: 5000 }
          );
          await this.page.$eval(
            'svg[xmlns="http://www.w3.org/2000/svg"][viewBox="0 0 50 50"]',
            (el) => (el as unknown as HTMLElement).click()
          );
          closeSuccessful = true;
          printMessageLinesBorderBox(
            ["Close SVG button clicked..."],
            miningStyle
          );
        } catch (svgError) {
          printMessageLinesBorderBox(
            ["Failed to click SVG directly, trying parent div..."],
            warningStyle
          );
          // Fallback: Try clicking the parent div
          try {
            await this.page.waitForSelector(
              'div > svg[xmlns="http://www.w3.org/2000/svg"][viewBox="0 0 50 50"]',
              { timeout: 5000 }
            );
            await this.page.$eval(
              'div > svg[xmlns="http://www.w3.org/2000/svg"][viewBox="0 0 50 50"]',
              (el) => (el.parentElement as HTMLElement).click()
            );
            closeSuccessful = true;
            printMessageLinesBorderBox(
              ["Close SVG parent div clicked..."],
              miningStyle
            );
          } catch (parentError) {
            // Log available SVG and parent divs for debugging
            const svgs = await this.page.$$eval(
              'svg[xmlns="http://www.w3.org/2000/svg"]',
              (els) =>
                els.map((el) => ({
                  parentClass: el.parentElement?.className || "",
                  parentId: el.parentElement?.id || "",
                  svgViewBox: el.getAttribute("viewBox") || "",
                  svgClass: el.className.baseVal || "",
                }))
            );
            printMessageLinesBorderBox(
              ["Available SVG elements:", JSON.stringify(svgs, null, 2)],
              warningStyle
            );
            printMessageLinesBorderBox(
              ["Failed to click close SVG or parent div, continuing mining..."],
              warningStyle
            );
          }
        }
        if (!closeSuccessful) {
          printMessageLinesBorderBox(
            ["Close button not clicked, continuing mining..."],
            warningStyle
          );
        }
        return; // Exit boost attempt
      }

      // Click the secondary Boost button
      printMessageLinesBorderBox(
        ["Clicking secondary Boost button..."],
        miningStyle
      );
      const secondaryClicked = await clickbyinnertxt(
        this.page,
        "button",
        "Boost"
      );
      if (!secondaryClicked) {
        printMessageLinesBorderBox(
          [
            "Secondary Boost button not found or not clickable, aborting boost.",
          ],
          warningStyle
        );
        return; // Exit boost attempt
      }

      // Handle transaction signing
      printMessageLinesBorderBox(["Awaiting signature popup..."], miningStyle);
      const result = await signtxloop(this.page, this.browser);
      if (result.success) {
        printMessageLinesBorderBox(
          ["✅ Boost transaction approved."],
          miningStyle
        );
      } else {
        printMessageLinesBorderBox(
          [
            `❌ Boost signature failed: ${result.errorType}, continuing mining.`,
          ],
          warningStyle
        );
        return; // Exit boost attempt
      }

      // Close the popup
      printMessageLinesBorderBox(["Closing boost popup..."], miningStyle);
      let boostWindowClosed = false;
      try {
        await this.page.$eval(
          "div.text-xl.btntxt.uppercase.text-center",
          (el) => {
            if (el.textContent?.trim() === "Close") {
              (el as HTMLElement).click();
            } else {
              throw new Error(
                "Close element text does not match expected value."
              );
            }
          }
        );
        boostWindowClosed = true;
      } catch (error) {
        // Log available divs for debugging
        const divs = await this.page.$$eval("div", (els) =>
          els
            .filter((el) => el.textContent?.trim() === "Close")
            .map((el) => ({
              text: el.textContent?.trim(),
              class: el.className,
              id: el.id,
            }))
        );
        printMessageLinesBorderBox(
          ["Available divs with 'Close' text:", JSON.stringify(divs, null, 2)],
          warningStyle
        );
        printMessageLinesBorderBox(
          ["Failed to close boost popup, continuing mining..."],
          warningStyle
        );
        return; // Exit boost attempt
      }
      if (!boostWindowClosed) {
        printMessageLinesBorderBox(
          ["Boost popup not closed, continuing mining..."],
          warningStyle
        );
        return; // Exit boost attempt
      }

      printMessageLinesBorderBox(["Hash boost pop-up closed..."], miningStyle);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      printMessageLinesBorderBox(
        [
          "⚠️ Error during boost and sign flow:",
          errorMessage,
          "Continuing mining...",
        ],
        warningStyle
      );
      return; // Exit boost attempt
    }
  }

  /**
   * stopAndClaim:
   * Helper function to stop the mining session and claim tokens.
   * Updates the metrics with the claimed token amount, logs an optional
   * success message, and simulates the click on the stop/claim button.
   * @param tokens - The amount of tokens to claim.
   * @param successMessage - Optional message to log on successful claim.
   * @returns Promise<boolean> - Resolves to true upon completion.
   */
  private async stopAndClaim(
    tokens: number,
    successMessage?: string
  ): Promise<boolean> {
    this.metrics.claimedAmount = tokens;
    this.metrics.claimed = true;
    if (successMessage) {
      printMessageLinesBorderBox([successMessage], miningStyle);
    }
    await clickbyinnertxt(this.page, "button", [
      miningConfig.stopClaimButtonText,
      miningConfig.stopAnywayButtonText,
    ]);
    d(miningConfig.miningSuccessDelayMs);
    return true;
  }

  /**
   * checkMaxIterations:
   * Checks if the maximum number of iterations has been reached.
   * If so, attempts to claim tokens if the unclaimed amount exceeds the minimum threshold,
   * logs appropriate messages, and returns true to indicate the session should end.
   * @returns Promise<boolean>
   */
  private async checkMaxIterations(): Promise<boolean> {
    if (this.iterationCount > miningConfig.maxIterations) {
      printMessageLinesBorderBox(
        [
          "Max iterations reached.",
          `Unclaimed tokens: ${this.metrics.unclaimedAmount}.`,
          "Attempting to claim if tokens available...",
        ],
        miningStyle
      );
      if (
        this.metrics.unclaimedAmount >
        miningConfig.miningCompleteUnclaimedThreshold
      ) {
        try {
          return await this.stopAndClaim(
            this.metrics.unclaimedAmount,
            `Successfully claimed ${this.metrics.unclaimedAmount} tokens.`
          );
        } catch (error: unknown) {
          printMessageLinesBorderBox(
            ["Claim attempt failed:", "Ending session anyway."],
            warningStyle
          );
          this.metrics.claimed = false;
          return true;
        }
      } else {
        printMessageLinesBorderBox(
          ["Not enough tokens to claim.", "Ending session without claiming."],
          miningStyle
        );
        this.metrics.claimed = false;
        return true;
      }
    }
    return false;
  }

  /**
   * checkClaimMaxThreshold:
   * Checks if the unclaimed token amount exceeds the maximum claim threshold.
   * Logs final metrics using printMessageLinesBorderBox and attempts to claim tokens.
   * @param unum - The current unclaimed token amount.
   * @returns Promise<boolean>
   */
  private async checkClaimMaxThreshold(unum: number): Promise<boolean> {
    if (unum >= miningConfig.claimMaxThreshold) {
      printMessageLinesBorderBox(["Max claim condition met:"], miningStyle);
      printMessageLinesBorderBox(
        [
          "Final Metrics before Claim:",
          ` - Unclaimed Amount: ${unum}`,
          ` - Claimed Amount set to: ${unum}`,
          ` - Average Hash Rate: ${this.metrics.avgHashRate}`,
          ` - Mining Time (min): ${this.metrics.miningTimeMin}`,
          ` - Max Boost: ${this.metrics.maxBoost}`,
        ],
        miningStyle
      );
      return await this.stopAndClaim(unum);
    }
    return false;
  }

  /**
   * checkZeroHashRateStart:
   * Checks if the hash rate remains zero for several iterations.
   * If true, stops the session.
   * @param hnum - The current hash rate.
   * @returns Promise<boolean>
   */
  private async checkZeroHashRateStart(hnum: number): Promise<boolean> {
    if (this.iterationCount > 5 && hnum === 0) {
      printMessageLinesBorderBox(
        ["Hash rate is 0.", "Stopping mining session"],
        miningStyle
      );
      this.metrics.claimed = false;
      return true;
    }
    return false;
  }

  /**
   * checkTimeThreshold:
   * Checks if the time threshold for claiming tokens has been reached.
   * If the unclaimed tokens are below the minimum threshold, stops the session;
   * otherwise, attempts to claim tokens.
   * @param tnum - The current time value.
   * @param unum - The current unclaimed token amount.
   * @returns Promise<boolean>
   */
  private async checkTimeThreshold(
    tnum: number,
    unum: number
  ): Promise<boolean> {
    if (tnum >= miningConfig.claimTimeThreshold) {
      if (unum < miningConfig.miningCompleteUnclaimedThreshold) {
        printMessageLinesBorderBox(
          ["Time limit reached but unclaimed is below the minimum threshold."],
          miningStyle
        );
        this.metrics.claimed = false;
        return true;
      } else {
        printMessageLinesBorderBox(
          ["Time limit reached and unclaimed meets the minimum threshold."],
          miningStyle
        );
        return await this.stopAndClaim(unum);
      }
    }
    return false;
  }

  /**
   * checkZeroHashRateEnd:
   * Checks the primary claim condition based on hash rate and unclaimed token thresholds.
   * If met, attempts to claim tokens.
   * @param hnum - The current hash rate.
   * @param unum - The current unclaimed token amount.
   * @returns Promise<boolean>
   */
  private async checkZeroHashRateEnd(
    hnum: number,
    unum: number
  ): Promise<boolean> {
    if (
      hnum === miningConfig.miningCompleteHashRate &&
      unum > miningConfig.miningCompleteUnclaimedThreshold
    ) {
      printMessageLinesBorderBox(["Primary claim condition met."], miningStyle);
      return await this.stopAndClaim(unum);
    }
    return false;
  }

  /**
   * checkBoost:
   * Checks if a positive boost was previously registered (via maxBoost) and if,
   * after at least 5 iterations, the current boost value drops below that registered value.
   * If so, triggers a claim action.
   * @param lcd - The current LCD values.
   * @returns Promise<boolean>
   */
  private async checkBoost(lcd: LCD): Promise<boolean> {
    const bnum = lcd.BOOST ? parseFloat(lcd.BOOST) || 0 : 0;
    // Only trigger boost claim if a positive boost was registered and we're past iteration 5.
    if (
      this.iterationCount >= 5 &&
      this.metrics.maxBoost > 0 &&
      bnum < this.metrics.maxBoost
    ) {
      printMessageLinesBorderBox(
        [
          `Boost dropped from recorded maximum ${this.metrics.maxBoost} to ${bnum}.`,
          "Claiming tokens because boost has dropped below its maximum.",
        ],
        miningStyle
      );
      const unum = parseFormattedNumber(lcd.UNCLAIMED || "0");
      return await this.stopAndClaim(unum);
    }
    return false;
  }

  /**
   * checkClaimConditions:
   * Evaluates all claim conditions sequentially using helper methods.
   * Returns true if any condition is met and a claim or stop action is executed.
   * @param lcd - The current LCD values.
   * @returns Promise<boolean>
   */
  private async checkClaimConditions(lcd: LCD): Promise<boolean> {
    const tnum = parseInt(lcd.TIME!) || 0;
    const hnum = parseFloat(lcd.HASHRATE!) || 0;
    const unum = parseFormattedNumber(lcd.UNCLAIMED || "0");

    if (await this.checkMaxIterations()) return true;
    if (await this.checkClaimMaxThreshold(unum)) return true;
    if (await this.checkZeroHashRateStart(hnum)) return true;
    if (await this.checkTimeThreshold(tnum, unum)) return true;
    if (await this.checkZeroHashRateEnd(hnum, unum)) return true;
    if (await this.checkBoost(lcd)) return true;

    return false;
  }

  /**
   * start:
   * Starts the mining session by initializing the session, entering the loop to
   * periodically poll LCD values, update metrics, and evaluate claim conditions.
   * Finalizes metrics once a claim or stop condition is met.
   * @returns Promise<boolean> - Resolves to true when the session completes.
   */
  public async start(): Promise<boolean> {
    await this.initSession();
    let mineComplete = false;
    try {
      while (!mineComplete) {
        // Ensure incrementalExtraData exists.
        if (!this.metrics.incrementalExtraData) {
          this.metrics.incrementalExtraData = { checkCount: 0 };
        }

        // Read the latest LCD values.
        const lcd: LCD = await updatelcd(this.page);
        this.updateMetrics(lcd);

        // --- NEW: Trigger boost & sign action once after 5 iterations ---
        if (!this.hashBoosted && this.iterationCount >= 1 && this.hashBoostOn) {
          await this.triggerBoostAndSign(
            miningConfig.boostHashAmountPerSession
          );
          this.hashBoosted = true;
        }
        // ----------------------------------------------------------

        // Evaluate claim conditions.
        mineComplete = await this.checkClaimConditions(lcd);

        if (!mineComplete) {
          await d(miningConfig.loopIterationDelayMs);
        }
      }
    } finally {
      if (!this.metrics.incrementalExtraData) {
        this.metrics.incrementalExtraData = {};
      }
      this.metrics.incrementalExtraData!.final = 1;
      updateAggregatedMiningMetrics(this.metrics);
      await d(500);
    }
    return true;
  }
}
