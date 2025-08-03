import { Browser, Page } from "puppeteer";
import { printMessageLinesBorderBox } from "../print";
import { MiningConfig } from "../../types/config";
import { miningStyle } from "../styles/borderboxstyles";
import chalk from "chalk";
import { MiningSession } from "../../mining";
import { seeMiningActivity } from "../../ws/websocket";

export async function runMining(
  page: Page,
  browser: Browser,
  mining: MiningConfig
): Promise<boolean> {
  let attemptCount = 0;
  try {
    printMessageLinesBorderBox(
      ["🔄 Navigating to mining page..."],
      miningStyle
    );
    await page.goto("https://pond0x.com/mining", {
      waitUntil: "networkidle0",
      timeout: 60000,
    });

    while (true) {
      printMessageLinesBorderBox(
        ["🔍 Checking active mining status via websocket (15s)..."],
        miningStyle
      );
      //const active = await checkActiveMining(30000);
      const active = await seeMiningActivity("Check Active Mining", {timeoutMs: 15000})
      printMessageLinesBorderBox(
        [`Status: ${active ? "Active" : "Inactive"}`],
        miningStyle
      );

      // If not active, you might want to wait and try again.
      // (The original code did nothing if active was false.)
      if (!active) {
        await new Promise((res) => setTimeout(res, 30000));
        continue;
      }

      printMessageLinesBorderBox(
        ["✅ Active mining detected; proceeding with mining process..."],
        miningStyle
      );
      attemptCount++;
      printMessageLinesBorderBox(
        [`⛏️  Mining attempt #${attemptCount}...`],
        miningStyle
      );

      // Create and run a new mining session using the refactored class.
      const session = new MiningSession(page, browser);
      const mineComplete = await session.start();

      if (mineComplete) {
        printMessageLinesBorderBox(
          ["🎉 Mining process completed successfully."],
          miningStyle
        );
        await new Promise((res) =>
          setTimeout(res, mining.miningSuccessDelayMs)
        );
        return true;
      } else {
        printMessageLinesBorderBox(["❌ Mining attempt failed."], miningStyle);
        if (mining.skipMiningOnFailure) {
          printMessageLinesBorderBox(
            ["🛑 skipMiningOnFailure enabled; skipping mining."],
            miningStyle
          );
          await new Promise((res) => setTimeout(res, 1000));
          return true;
        } else {
          printMessageLinesBorderBox(
            [
              `⏳ Waiting for ${mining.miningLoopFailRetryDelayMs} ms before retrying...`,
            ],
            miningStyle
          );
          await new Promise((res) =>
            setTimeout(res, mining.miningLoopFailRetryDelayMs)
          );
          continue;
        }
      }
    }
  } catch (error) {
    console.error(chalk.red("Error in runMining:"), error);
    return false;
  }
}
