"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlephanpopup = exports.evalPhan = void 0;
exports.promptAccountImportMethod = promptAccountImportMethod;
const tslib_1 = require("tslib");
const inquirer_1 = tslib_1.__importDefault(require("inquirer"));
const print_1 = require("./ui/print");
const borderboxstyles_1 = require("./ui/styles/borderboxstyles");
const pagehandlers_1 = require("./utils/pagehandlers");
const helpers_1 = require("./utils/helpers");
// Make sure these helper functions are imported or defined:
// mm, enterpw, clickcontinuepw
const evalPhan = async (page, config, methodChoice) => {
    if (methodChoice === "manual") {
        (0, print_1.printMessageLinesBorderBox)([
            "Manual account import selected.",
            "Please open the Phantom pop-up and manually create or import your wallet.",
            "Follow all steps until you're finished, then press ENTER.",
        ], borderboxstyles_1.phantomStyle);
        await inquirer_1.default.prompt([
            {
                type: "input",
                name: "manualDone",
                message: "Press ENTER after finishing manual account creation/import...",
            },
        ]);
        return;
    }
    // Automated flow:
    (0, print_1.printMessageLinesBorderBox)(["🔮 Initializing Phantom Wallet (Auto-Import from .env)"], borderboxstyles_1.phantomStyle);
    // Retrieve the private key using the chosen method.
    const pkToImport = process.env[methodChoice.env];
    if (!pkToImport) {
        throw new Error(`No private key found in .env for "${methodChoice.env}". Make sure it's defined.`);
    }
    await (0, pagehandlers_1.waitforelement)(page, "button", "I already have a wallet", 5000);
    await (0, pagehandlers_1.waitforelement)(page, "button", "Import Private Key", 5000);
    // Call your function (mm) to fill in the fields.
    await mm(page, pkToImport, methodChoice.label);
    await (0, pagehandlers_1.waitforelement)(page, "button", "Import", 5000);
    // Then do password and confirmations.
    await enterpw(page);
    await clickcontinuepw(page);
    await (0, helpers_1.d)(3000);
    await clickcontinuepw(page);
};
exports.evalPhan = evalPhan;
/**
 * mm - Moves/clicks on the "Name" input (sets it to `minerLabel`) and "Private key" textarea,
 * then sets the PK field to `privateKey`.
 */
const mm = async (page, privateKey, minerLabel) => {
    const coords = await selecttextareabyplaceholder(page, privateKey, minerLabel);
    // Smooth mouse movements
    await page.mouse.move(coords.centerX - 100, coords.centerY - 100);
    await page.mouse.move(coords.centerX - 60, coords.centerY - 60);
    await page.mouse.move(coords.centerX - 40, coords.centerY - 40);
    await page.mouse.move(coords.centerX, coords.centerY);
    await page.mouse.click(coords.centerX, coords.centerY);
    // Move to the PK field
    await page.mouse.move(coords.centerX1 - 100, coords.centerY1 - 100);
    await page.mouse.move(coords.centerX1 - 60, coords.centerY1 - 60);
    await page.mouse.move(coords.centerX1 - 20, coords.centerY1 - 20);
    await page.mouse.move(coords.centerX1, coords.centerY1);
    await page.mouse.click(coords.centerX1, coords.centerY1);
    // Additional clicks if necessary
    await page.mouse.click(coords.centerX, coords.centerY);
    await page.mouse.click(coords.centerX1, coords.centerY1);
};
// ----------------------------------------------------------------------
// promptAccountImportMethod: Prompts the user how to import their Phantom account.
// Returns either "manual" or an object with env and label for an automated miner.
// ----------------------------------------------------------------------
async function promptAccountImportMethod() {
    // Build automated miner choices from .env.
    const automatedMinerChoices = [
        {
            name: "Miner 1 (from .env)",
            value: { env: "MINER1_PK", label: "Miner 1" },
        },
        {
            name: "Miner 2 (from .env)",
            value: { env: "MINER2_PK", label: "Miner 2" },
        },
        {
            name: "Miner 3 (from .env)",
            value: { env: "MINER3_PK", label: "Miner 3" },
        },
        // Add more miners if needed.
    ].filter((choice) => Boolean(process.env[choice.value.env]));
    // Build the list of choices.
    const choices = [
        { name: "Manual account import (use Phantom pop-up)", value: "manual" },
        ...automatedMinerChoices,
    ];
    // If no automated choices exist, add a disabled option.
    if (automatedMinerChoices.length === 0) {
        choices.push({
            name: "No miner accounts saved to .env",
            value: "manual",
            disabled: "No keys found",
        });
    }
    // Optional: display a heading.
    (0, print_1.printMessageLinesBorderBox)(["How do you want to import your account?"], borderboxstyles_1.phantomStyle);
    const { chosenMethod } = await inquirer_1.default.prompt([
        {
            type: "list",
            name: "chosenMethod",
            message: "Select account import method:",
            choices,
        },
    ]);
    return chosenMethod;
}
/**
 * selecttextareabyplaceholder - Finds the "Name" input & "Private key" textarea.
 * Sets "Name" to `minerLabel` and "Private key" to `pk`.
 */
const selecttextareabyplaceholder = async (page, pk, minerLabel) => {
    await page.waitForSelector("input");
    await page.waitForSelector("textarea");
    const coords = page.evaluate((thePk, theLabel) => {
        // "Name" input
        const nameInput = Array.from(document.querySelectorAll("input")).find((t) => t.placeholder === "Name");
        if (nameInput) {
            nameInput.click();
            nameInput.value = theLabel; // e.g. "Miner 1"
            nameInput.click();
        }
        // "Private key" textarea
        const pkTextarea = Array.from(document.querySelectorAll("textarea")).find((t) => t.placeholder === "Private key");
        if (pkTextarea) {
            pkTextarea.click();
            pkTextarea.value = thePk; // fill in the private key
            pkTextarea.click();
        }
        // Calculate centers for both elements.
        const nameRect = nameInput === null || nameInput === void 0 ? void 0 : nameInput.getBoundingClientRect();
        const centerX = nameRect ? nameRect.left + nameRect.width / 2 : 0;
        const centerY = nameRect ? nameRect.top + nameRect.height / 2 : 0;
        const pkRect = pkTextarea === null || pkTextarea === void 0 ? void 0 : pkTextarea.getBoundingClientRect();
        const centerX1 = pkRect ? pkRect.left + pkRect.width / 2 : 0;
        const centerY1 = pkRect ? pkRect.top + pkRect.height / 2 : 0;
        return { centerX, centerY, centerX1, centerY1 };
    }, pk, minerLabel);
    return coords;
};
/**
 * enterpw - Enters the wallet password ("testphant") in both fields.
 */
const enterpw = async (page) => {
    await (0, helpers_1.d)(1000);
    const coords = await handlenewpassword(page);
    await (0, helpers_1.d)(1000);
    const pw = "testphant";
    // Click and type "Password"
    await page.mouse.click(coords.centerX, coords.centerY);
    await page.keyboard.type(pw);
    await (0, helpers_1.d)(1000);
    // Click and type "Confirm Password"
    await page.mouse.click(coords.centerX1, coords.centerY1);
    await page.keyboard.type(pw);
    await (0, helpers_1.d)(1000);
};
/**
 * handlenewpassword - Finds password fields, checks Terms-of-Service, returns bounding box centers.
 */
const handlenewpassword = async (page) => {
    await page.waitForSelector("input");
    await page.waitForSelector('[data-testid="onboarding-form-terms-of-service-checkbox"]');
    const coords = page.evaluate(() => {
        const passInput = Array.from(document.querySelectorAll("input")).find((t) => t.placeholder === "Password");
        const confirmInput = Array.from(document.querySelectorAll("input")).find((t) => t.placeholder === "Confirm Password");
        const tos = document.querySelector('[data-testid="onboarding-form-terms-of-service-checkbox"]');
        if (tos)
            tos.click();
        const passRect = passInput === null || passInput === void 0 ? void 0 : passInput.getBoundingClientRect();
        const centerX = passRect ? passRect.left + passRect.width / 2 : 0;
        const centerY = passRect ? passRect.top + passRect.height / 2 : 0;
        const confirmRect = confirmInput === null || confirmInput === void 0 ? void 0 : confirmInput.getBoundingClientRect();
        const centerX1 = confirmRect ? confirmRect.left + confirmRect.width / 2 : 0;
        const centerY1 = confirmRect ? confirmRect.top + confirmRect.height / 2 : 0;
        return { centerX, centerY, centerX1, centerY1 };
    });
    return coords;
};
/**
 * clickcontinuepw - Clicks the "Continue" button in the Phantom onboarding flow.
 */
const clickcontinuepw = async (page) => {
    await page.waitForSelector('[data-testid="onboarding-form-submit-button"]');
    page.evaluate(() => {
        const sb = document.querySelector('[data-testid="onboarding-form-submit-button"]');
        if (sb)
            sb.click();
    });
};
/**
 * handlephanpopup:
 * Waits briefly, listens for a new target (Phantom popup), clicks a trigger button,
 * and confirms in the popup if it’s a Phantom Wallet.
 */
const handlephanpopup = async (ppage, browser, btnname, triggerBtn) => {
    await (0, helpers_1.d)(1000);
    const nupage = await new Promise(async (res) => {
        browser.once("targetcreated", (target) => res(target.page()));
        const clicked = await (0, pagehandlers_1.clickbyinnertxt)(ppage, "button", triggerBtn);
        if (!clicked) {
            browser.removeAllListeners();
            res(null);
        }
    });
    if (nupage === null)
        throw new Error("button not clicked");
    await (0, helpers_1.d)(2000);
    const isphan = await (nupage === null || nupage === void 0 ? void 0 : nupage.evaluate(() => {
        return Array.from(document.getElementsByTagName("title")).find((v) => v.textContent === "Phantom Wallet")
            ? true
            : false;
    }));
    await (0, helpers_1.d)(3000);
    if (isphan) {
        await (0, pagehandlers_1.clickbyinnertxt)(nupage, "button", btnname);
    }
};
exports.handlephanpopup = handlephanpopup;
