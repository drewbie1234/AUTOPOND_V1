"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runMining = runMining;
const tslib_1 = require("tslib");
const print_1 = require("../print");
const borderboxstyles_1 = require("../styles/borderboxstyles");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const mining_1 = require("../../mining");
const websocket_1 = require("../../ws/websocket");
async function runMining(page, browser, mining) {
    let attemptCount = 0;
    try {
        (0, print_1.printMessageLinesBorderBox)(["🔄 Navigating to mining page..."], borderboxstyles_1.miningStyle);
        await page.goto("https://pond0x.com/mining", {
            waitUntil: "networkidle0",
            timeout: 60000,
        });
        while (true) {
            (0, print_1.printMessageLinesBorderBox)(["🔍 Checking active mining status via websocket (15s)..."], borderboxstyles_1.miningStyle);
            //const active = await checkActiveMining(30000);
            const active = await (0, websocket_1.seeMiningActivity)("Check Active Mining", { timeoutMs: 15000 });
            (0, print_1.printMessageLinesBorderBox)([`Status: ${active ? "Active" : "Inactive"}`], borderboxstyles_1.miningStyle);
            // If not active, you might want to wait and try again.
            // (The original code did nothing if active was false.)
            if (!active) {
                await new Promise((res) => setTimeout(res, 30000));
                continue;
            }
            (0, print_1.printMessageLinesBorderBox)(["✅ Active mining detected; proceeding with mining process..."], borderboxstyles_1.miningStyle);
            attemptCount++;
            (0, print_1.printMessageLinesBorderBox)([`⛏️  Mining attempt #${attemptCount}...`], borderboxstyles_1.miningStyle);
            // Create and run a new mining session using the refactored class.
            const session = new mining_1.MiningSession(page, browser);
            const mineComplete = await session.start();
            if (mineComplete) {
                (0, print_1.printMessageLinesBorderBox)(["🎉 Mining process completed successfully."], borderboxstyles_1.miningStyle);
                await new Promise((res) => setTimeout(res, mining.miningSuccessDelayMs));
                return true;
            }
            else {
                (0, print_1.printMessageLinesBorderBox)(["❌ Mining attempt failed."], borderboxstyles_1.miningStyle);
                if (mining.skipMiningOnFailure) {
                    (0, print_1.printMessageLinesBorderBox)(["🛑 skipMiningOnFailure enabled; skipping mining."], borderboxstyles_1.miningStyle);
                    await new Promise((res) => setTimeout(res, 1000));
                    return true;
                }
                else {
                    (0, print_1.printMessageLinesBorderBox)([
                        `⏳ Waiting for ${mining.miningLoopFailRetryDelayMs} ms before retrying...`,
                    ], borderboxstyles_1.miningStyle);
                    await new Promise((res) => setTimeout(res, mining.miningLoopFailRetryDelayMs));
                    continue;
                }
            }
        }
    }
    catch (error) {
        console.error(chalk_1.default.red("Error in runMining:"), error);
        return false;
    }
}
