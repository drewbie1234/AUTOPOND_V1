import inquirer from "inquirer";
import chalk from "chalk";
import { fork } from "child_process";
import path from "path";
import {
  buildOsc8Hyperlink,
  printMessageLinesBorderBox,
  printSessionEndReport,
  centerText,
} from "../ui/print";
import { connectwallet } from "../swapping";
import { Page, Browser } from "puppeteer";
import { launchBrowser } from "../launch";
import { FullConfig, SwapConfig, SwapPairConfig } from "../types/config";
import { accumulateSwapMetrics, overallMetrics } from "../metrics/metrics";
import {
  miningStyle,
  swappingStyle,
  generalStyle,
  phantomStyle,
  warningStyle,
  magmaStyle,
} from "./styles/borderboxstyles";
import { viewPondStatistics } from "../metrics/metrics";
import { d } from "../utils/helpers";
import { runSwap } from "./modes/runswap";
import { runMining } from "./modes/runmining";
import {
  modifyConfigurations,
  showConfigurationSettings,
} from "./modes/runsettings";
import { promptAccountImportMethod } from "../phantom";
import { printTable } from "./tables/printtable";

/**
 * Formats a SwapPairConfig for streamlined 3-line display in inquirer prompt
 * @param pair - The trading pair configuration
 * @returns A 3-line string with newlines for token pair, amounts, and thresholds
 */
function formatPairForDisplay(pair: SwapPairConfig): string {
  // Override tokenALowThreshold to 5 for USDC/SOL and USDT/SOL in display only
  const tokenALowThreshold =
    pair.tokenA === "USDC" || pair.tokenA === "USDT"
      ? 5
      : pair.tokenALowThreshold || 0;
  return [
    chalk.bold(`Pair: ${pair.tokenA || "Unknown"}/${pair.tokenB || "Unknown"}`),
    chalk.dim(
      `Amounts: ${pair.tokenAMinAmount || 0}-${pair.tokenAMaxAmount || 0} ${
        pair.tokenA || ""
      }, ${pair.tokenBMinAmount || 0}-${pair.tokenBMaxAmount || 0} ${
        pair.tokenB || ""
      }`
    ),
    chalk.dim(
      `Flip swap threshold: ${tokenALowThreshold} ${pair.tokenA || ""}, ${
        pair.tokenBLowThreshold || 0
      } ${pair.tokenB || ""}`
    ),
    chalk.dim(`Token A Mint: ${pair.tokenAMint || "Unknown"}`),
    chalk.dim(`Token B Mint: ${pair.tokenBMint || "Unknown"}`),
  ].join("\n");
}

export async function runWizard(fullConfig: FullConfig): Promise<void> {
  const { app, mining } = fullConfig;
  let swap: SwapConfig = { ...fullConfig.swap, selectedPairs: undefined }; // Reset selectedPairs each run

  // Outer loop: after a complete run, re‑prompt for mode selection.
  while (true) {
    await d(300);
    if (process.stdin.isPaused()) process.stdin.resume();

    // --- Mode Selection ---
    let mode:
      | "Mine"
      | "Swap"
      | "Mine and Swap"
      | "Ze Bot Stays On"
      | "Magma Engine Viewer" = "Ze Bot Stays On";
    let rounds: number = 0;
    const answer = await inquirer.prompt([
      {
        type: "list",
        name: "mode",
        message: chalk.bold.green("🔥 Choose a mode: "),
        choices: [
          "⛏️  Mine",
          "🤝  Swap",
          "⛏️🤝  Mine and Swap",
          "💻  Ze Bot Stays On",
          "🔍  Magma Engine Viewer",
          "📊  View Pond Statistics",
          "Exit",
        ],
      },
    ]);

    const modeRaw: string = answer.mode;
    if (modeRaw === "Exit") {
      console.log(chalk.bold("Exiting..."));
      process.exit(0);
    }
    if (modeRaw.includes("View Pond Statistics")) {
      await viewPondStatistics();
      continue;
    }
    if (modeRaw.includes("Mine and Swap")) mode = "Mine and Swap";
    else if (modeRaw.includes("Mine") && !modeRaw.includes("Swap"))
      mode = "Mine";
    else if (modeRaw.includes("Swap") && !modeRaw.includes("Mine"))
      mode = "Swap";
    else if (modeRaw.includes("Magma Engine Viewer"))
      mode = "Magma Engine Viewer";
    else mode = "Ze Bot Stays On";

    if (mode !== "Ze Bot Stays On" && mode !== "Magma Engine Viewer") {
      const roundsAnswer = await inquirer.prompt([
        {
          type: "number",
          name: "rounds",
          message: chalk.bold.green(
            mode === "Mine"
              ? "⛏️  How many mining rounds do you want to run?"
              : mode === "Swap"
              ? "🤝  How many swap cycles do you want to run?"
              : "⛏️🤝  How many mine and swap rounds do you want to run?"
          ),
          default: 1,
          validate: (value: any) =>
            value > 0 || "Please enter a number greater than 0",
        },
      ]);
      rounds = Number(roundsAnswer.rounds);
    }

    // --- Special Branch: Magma Engine Viewer ---
    if (mode === "Magma Engine Viewer") {
      const viewerProcess = fork(
        path.join(__dirname, "./modes/runmagmaviewer.js"),
        { stdio: "inherit" }
      );
      await new Promise((resolve) => {
        viewerProcess.on("exit", resolve);
      });
      printMessageLinesBorderBox(["🔍 Viewer Closed"], magmaStyle);
      continue;
    }

    // --- Wallet Prompt & Browser Setup ---
    let browser: Browser | undefined;
    let opPage: Page;
    try {
      if (app.wizardMode) {
        const walletPrompt = await inquirer.prompt([
          {
            type: "confirm",
            name: "walletReady",
            message: (() => {
              printMessageLinesBorderBox(
                [
                  "WARNING: USE A BURNER WALLET!",
                  "PRIVATE KEYS ARE AT YOUR OWN RISK!",
                  "For safety guidelines, visit:",
                  buildOsc8Hyperlink(
                    "https://help.phantom.com/hc/en-us/articles/8071074929043-How-to-Initially-Setup-Your-Phantom-Wallet",
                    "Phantom-The Basics"
                  ),
                ],
                warningStyle
              );
              printMessageLinesBorderBox(
                ["👻 Confirm that you are ready to load Phantom?"],
                phantomStyle
              );
              return "";
            })(),
            default: true,
          },
        ]);
        if (!walletPrompt.walletReady) {
          printMessageLinesBorderBox(
            ["Wallet connection cancelled. Returning to mode selection..."],
            phantomStyle
          );
          continue;
        }

        const methodChoice = await promptAccountImportMethod();
        app.manualaccountcreation = methodChoice === "manual";
        const { browser: launchedBrowser } = await launchBrowser(
          app,
          methodChoice
        );
        browser = launchedBrowser;
        const pages = await browser.pages();
        const nonExtensionPages = pages.filter((page) => {
          try {
            return !page.url().startsWith("chrome-extension://");
          } catch (err) {
            return false;
          }
        });
        if (nonExtensionPages.length === 0) {
          throw new Error("No operational page found after browser launch.");
        }
        opPage = nonExtensionPages[0];

        printMessageLinesBorderBox(
          ["🌐 Navigating to Pond0x..."],
          phantomStyle
        );
        await opPage.goto("https://pond0x.com", {
          waitUntil: "load",
          timeout: 60000,
        });
        await connectwallet(opPage, browser);
      } else {
        printMessageLinesBorderBox(
          ["Default mode: automatically loading Phantom..."],
          phantomStyle
        );
        const defaultMethod = { env: "MINER1_PK", label: "Miner 1" } as {
          env: string;
          label: string;
        };
        const { browser: launchedBrowser } = await launchBrowser(
          app,
          defaultMethod
        );
        browser = launchedBrowser;
        const pages = await browser.pages();
        const nonExtensionPages = pages.filter((page) => {
          try {
            return !page.url().startsWith("chrome-extension://");
          } catch (err) {
            return false;
          }
        });
        if (nonExtensionPages.length === 0) {
          throw new Error("No operational page found after browser launch.");
        }
        opPage = nonExtensionPages[0];
        await opPage.goto("https://pond0x.com", {
          waitUntil: "load",
          timeout: 60000,
        });
        await connectwallet(opPage, browser);
      }
    } catch (err) {
      console.error(
        chalk.red("Error during browser launch or wallet connection:"),
        err
      );
      if (browser) await browser.close();
      continue;
    }

    // --- Determine Effective Mode & Rounds ---
    let effectiveMode: "Mine" | "Swap" | "Mine and Swap";
    let effectiveRounds: number;
    if (app.wizardMode) {
      effectiveMode = mode === "Ze Bot Stays On" ? app.defaultMode : mode;
      effectiveRounds = rounds;
    } else {
      effectiveMode = app.defaultMode;
      effectiveRounds = app.defaultCycleCount || 0;
    }

    if (effectiveMode === "Mine" || effectiveMode === "Mine and Swap") {
      printTable("⛏️  Mining config", mining);
    }

    // --- Trading Pair Selection for Swap ---
    if (effectiveMode === "Swap" || effectiveMode === "Mine and Swap") {
      if (
        !swap.pairs ||
        !Array.isArray(swap.pairs) ||
        swap.pairs.length === 0
      ) {
        console.error(
          chalk.red("No trading pairs defined in configuration. Skipping swap.")
        );
        if (browser) await browser.close();
        continue;
      }

      const validPairs = swap.pairs.filter(
        (pair) =>
          !!pair.tokenA &&
          !!pair.tokenB &&
          pair.tokenALowThreshold !== undefined &&
          pair.tokenBLowThreshold !== undefined &&
          pair.tokenAMinAmount !== undefined &&
          pair.tokenAMaxAmount !== undefined &&
          pair.tokenBMinAmount !== undefined &&
          pair.tokenBMaxAmount !== undefined &&
          pair.tokenARewardMin !== undefined &&
          pair.tokenARewardMax !== undefined &&
          pair.tokenBRewardMin !== undefined &&
          pair.tokenBRewardMax !== undefined
      );
      if (validPairs.length === 0) {
        console.error(
          chalk.red("No valid trading pairs available. Skipping swap.")
        );
        if (browser) await browser.close();
        continue;
      }

      if (app.wizardMode) {
        const pairChoices = validPairs.map((pair, index) => ({
          name: formatPairForDisplay(pair),
          value: index,
        }));

        const { selectedPairIndices } = await inquirer.prompt([
          {
            type: "checkbox",
            name: "selectedPairIndices",
            message: chalk.bold.green(
              "🤝  Select trading pairs for swap cycling:"
            ),
            choices: pairChoices,
            validate: (value) =>
              value.length > 0 ||
              "Select one pair if you do not want swap cycling",
            pageSize: 40, // Accommodates 20 lines for 4 pairs (5 lines each)
          },
        ]);

        swap.selectedPairs = selectedPairIndices.map(
          (index: number) => validPairs[index]
        );

        // Separator for clarity
        console.log(chalk.dim("─".repeat(60)));

        // Prompt for roundsPerPair
        const { roundsPerPair } = await inquirer.prompt([
          {
            type: "number",
            name: "roundsPerPair",
            message: chalk.bold.green("🔄  Rounds per selected pair:"),
            default: swap.roundsPerPair || 3, // Matches swapconfig.json
            validate: (value: number | undefined) =>
              typeof value === "number" && value > 0
                ? true
                : "Please enter a number greater than 0",
          },
        ]);

        swap.roundsPerPair = roundsPerPair;

        // Separator for clarity
        console.log(chalk.dim("─".repeat(60)));

        const { confirm } = await inquirer.prompt([
          {
            type: "confirm",
            name: "confirm",
            message: chalk.bold.green(
              swap.selectedPairs && swap.selectedPairs.length > 0
                ? `Confirm selected pairs:\n${swap.selectedPairs
                    .map((p) => `  ${p.tokenA}/${p.tokenB}`)
                    .join("\n")} \nwith ${swap.roundsPerPair} rounds per pair?`
                : "No pairs selected. Proceed anyway?"
            ),
            default: true,
          },
        ]);

        if (!confirm) {
          printMessageLinesBorderBox(
            ["Pair selection cancelled. Returning to mode selection..."],
            generalStyle
          );
          if (browser) await browser.close();
          continue;
        }
      } else {
        swap.selectedPairs = validPairs; // Non-wizard mode: use all valid pairs
      }

      if (!swap.selectedPairs || swap.selectedPairs.length === 0) {
        console.error(chalk.red("No trading pairs selected. Skipping swap."));
        if (browser) await browser.close();
        continue;
      }

      printTable("🤝  Selected pairs", swap.selectedPairs);
      if (swap.selectedPairs.length > 0) {
        swap = { ...swap, ...swap.selectedPairs[0] }; // Merge first pair for runSwap/swappond compatibility
        printTable("🤝  Swap config (using first pair)", swap);
      }
    }

    // --- Cycle Execution ---
    try {
      if (effectiveRounds > 0) {
        for (let i = 0; i < effectiveRounds; i++) {
          printMessageLinesBorderBox(
            [
              `🚀 --- Autopond cycle ${
                i + 1
              } of ${effectiveRounds} (${effectiveMode}) ---`,
            ],
            generalStyle
          );
          if (effectiveMode === "Mine") {
            printMessageLinesBorderBox(["Mining Process:"], miningStyle);
            await runMining(opPage, browser, mining);
          } else if (effectiveMode === "Swap") {
            printMessageLinesBorderBox(["Swap Process:"], swappingStyle);
            const swapMetrics = await runSwap(opPage, browser, swap);
            accumulateSwapMetrics(swapMetrics);
          } else if (effectiveMode === "Mine and Swap") {
            printMessageLinesBorderBox(["Mining Process:"], miningStyle);
            await runMining(opPage, browser, mining);
            printMessageLinesBorderBox(["Swap Process:"], swappingStyle);
            const swapMetrics = await runSwap(opPage, browser, swap);
            accumulateSwapMetrics(swapMetrics);
          }
          printMessageLinesBorderBox(
            [`✅ Cycle ${i + 1} complete`],
            generalStyle
          );
        }
      } else {
        let cycleCount = 0;
        while (true) {
          cycleCount++;
          printMessageLinesBorderBox(
            [`🚀 --- Starting cycle ${cycleCount} ---`],
            generalStyle
          );
          if (effectiveMode === "Mine") {
            printMessageLinesBorderBox(["Mining Process:"], miningStyle);
            await runMining(opPage, browser, mining);
          } else if (effectiveMode === "Swap") {
            printMessageLinesBorderBox(["Swap Process:"], swappingStyle);
            const swapMetrics = await runSwap(opPage, browser, swap);
            accumulateSwapMetrics(swapMetrics);
          } else if (effectiveMode === "Mine and Swap") {
            printMessageLinesBorderBox(["Mining Process:"], miningStyle);
            await runMining(opPage, browser, mining);
            printMessageLinesBorderBox(["Swap Process:"], swappingStyle);
            const swapMetrics = await runSwap(opPage, browser, swap);
            accumulateSwapMetrics(swapMetrics);
          }
          printMessageLinesBorderBox(
            [`✅ Cycle ${cycleCount} complete`],
            generalStyle
          );
        }
      }

      printMessageLinesBorderBox(["🏁 Operation complete."], generalStyle);

      const endReport = {
        "Total Cycles": effectiveRounds > 0 ? effectiveRounds : "Infinite",
        "Successful Cycles": effectiveRounds > 0 ? effectiveRounds : "N/A",
        "Failed Attempts": 0,
        "Elapsed Time": "10m", // TODO: Calculate actual elapsed time if needed
        "Swap Metrics": overallMetrics.swapMetrics,
      };

      printSessionEndReport("End of Operation Report", endReport);
    } catch (cycleError) {
      console.error(chalk.red("Error during cycle execution:"), cycleError);
    } finally {
      if (browser) {
        await browser.close();
        printMessageLinesBorderBox(["🧹 Browser closed."], generalStyle);
      }
      process.stdin.removeAllListeners("data");
      if (process.stdin.isRaw) process.stdin.setRawMode(false);
      process.stdin.pause();
    }
  }
}

export async function promptContinueOrConfig(configs: any): Promise<boolean> {
  const width = 62;
  const line1 = centerText(
    "Press 's' to view or modify configuration settings",
    width
  );
  const line2 = centerText("Press any other key to continue", width);
  process.stdout.write(line1 + "\n" + line2 + "\n");
  return new Promise<boolean>((resolve) => {
    process.stdin.removeAllListeners("data");
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.once("data", async (data: Buffer) => {
      const char = data.toString().trim().toLowerCase();
      process.stdin.setRawMode(false);
      process.stdin.pause();
      console.log();
      if (char === "s") {
        const { view } = await inquirer.prompt({
          type: "list",
          name: "view",
          message: chalk.bold.blue(
            "👀  Do you want to view configuration settings? (y/n)"
          ),
          choices: ["y", "n"],
          filter: (val: string) => val.toLowerCase(),
        });
        if (view === "y") {
          showConfigurationSettings(configs);
        }
        const { modify } = await inquirer.prompt({
          type: "list",
          name: "modify",
          message: chalk.bold.blue(
            "✏️  Do you want to modify any configuration settings? (y/n)"
          ),
          choices: ["y", "n"],
          filter: (val: string) => val.toLowerCase(),
        });
        if (modify === "y") {
          await modifyConfigurations(configs);
          showConfigurationSettings(configs);
        }
        await inquirer.prompt({
          type: "input",
          name: "continue",
          message: chalk.bold(
            "🚀  Press Enter to continue to mode selection..."
          ),
        });
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

export async function waitForAnyKey(
  message: string = chalk.bold("Press any key to continue...")
): Promise<void> {
  process.stdout.write(message);
  return new Promise<void>((resolve) => {
    process.stdin.removeAllListeners("data");
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.once("data", () => {
      process.stdin.setRawMode(false);
      process.stdin.pause();
      console.log("\n");
      resolve();
    });
  });
}
