"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.launchBrowser = launchBrowser;
const tslib_1 = require("tslib");
// launch.ts
const puppeteer_1 = tslib_1.__importDefault(require("puppeteer"));
const path_1 = tslib_1.__importDefault(require("path"));
const dotenv = tslib_1.__importStar(require("dotenv"));
const phantom_1 = require("./phantom");
const print_1 = require("./ui/print"); // Using our unified print function
const borderboxstyles_1 = require("./ui/styles/borderboxstyles");
const helpers_1 = require("./utils/helpers");
dotenv.config();
const pathToExtension = path_1.default.join(process.cwd(), process.env.EXTNS);
/**
 * Repositions the browser window to the specified bounds.
 */
async function repositionWindow(page, x, y, width, height) {
    const client = await page.target().createCDPSession();
    const { windowId } = await client.send("Browser.getWindowForTarget");
    await client.send("Browser.setWindowBounds", {
        windowId,
        bounds: { left: x, top: y, width, height, windowState: "normal" },
    });
}
/**
 * launchBrowser:
 *  - Launches the browser with the Phantom extension.
 *  - Waits for the onboarding page.
 *  - Retrieves screen dimensions from the page.
 *  - Repositions the window to the right half of the screen (50% width, full height).
 *  - Initializes the Phantom wallet.
 */
async function launchBrowser(config, method) {
    // Print a magenta-themed launch message.
    (0, print_1.printMessageLinesBorderBox)(["🚀 Launching browser with Phantom extension..."], borderboxstyles_1.phantomStyle);
    const options = {
        headless: false,
        defaultViewport: null,
        args: [
            `--disable-extensions-except=${pathToExtension}`,
            `--load-extension=${pathToExtension}`,
            "--start-minimized", // Start minimized so we can reposition later.
        ],
    };
    const browser = await puppeteer_1.default.launch(options);
    // Wait for the extension’s service worker.
    const workerTarget = await browser.waitForTarget((target) => target.type() === "service_worker");
    await workerTarget.worker();
    // Wait for the Phantom onboarding page.
    const popupTarget = await browser.waitForTarget((target) => target.type() === "page" && target.url().endsWith("onboarding.html"));
    const popupPage = await popupTarget.asPage();
    (0, helpers_1.d)(250);
    // Retrieve screen dimensions from within the page.
    const screenSize = await popupPage.evaluate(() => ({
        width: window.screen.width,
        height: window.screen.height,
    }));
    (0, helpers_1.d)(290);
    // Calculate dimensions for the right half (50% width, full height).
    const rightPanelWidth = Math.floor(screenSize.width / 2);
    const xPosition = screenSize.width - rightPanelWidth; // Position on the right side
    (0, helpers_1.d)(200);
    // Reposition the browser window.
    await repositionWindow(popupPage, xPosition, 0, rightPanelWidth, screenSize.height);
    // Initialize Phantom (which may close the onboarding page)
    await (0, phantom_1.evalPhan)(popupPage, config, method);
    // Print a status message for loading extensions.
    (0, print_1.printMessageLinesBorderBox)(["🌎 Browser configured"], borderboxstyles_1.phantomStyle);
    return { browser, popupPage };
}
