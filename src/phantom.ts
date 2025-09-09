import { Browser, Page } from "puppeteer";
import inquirer from "inquirer";
import { printMessageLinesBorderBox } from "./ui/print";
import { phantomStyle, warningStyle } from "./ui/styles/borderboxstyles";
import { clickbyinnertxt, waitforelement } from "./utils/pagehandlers";
import { d } from "./utils/helpers";
import { AppConfig } from "./types/config";

// Make sure these helper functions are imported or defined:
// mm, enterpw, clickcontinuepw

export const evalPhan = async (
  page: Page,
  config: AppConfig,
  methodChoice: "manual" | { env: string; label: string }
) => {
  if (methodChoice === "manual") {
    printMessageLinesBorderBox(
      [
        "Manual account import selected.",
        "Please open the Phantom pop-up and manually create or import your wallet.",
        "Follow all steps until you're finished, then press ENTER.",
      ],
      phantomStyle
    );
    await inquirer.prompt([
      {
        type: "input",
        name: "manualDone",
        message:
          "Press ENTER after finishing manual account creation/import...",
      },
    ]);
    return;
  }

  // Automated flow:
  printMessageLinesBorderBox(
    ["🔮 Initializing Phantom Wallet (Auto-Import from .env)"],
    phantomStyle
  );

  // Retrieve the private key using the chosen method.
  const pkToImport = process.env[methodChoice.env];
  if (!pkToImport) {
    throw new Error(
      `No private key found in .env for "${methodChoice.env}". Make sure it's defined.`
    );
  }

  await waitforelement(page, "button", "I already have a wallet", 5000);
  await waitforelement(page, "button", "Import Private Key", 5000);

  // Call your function (mm) to fill in the fields.
  await mm(page, pkToImport, methodChoice.label);

  await waitforelement(page, "button", "Import", 5000);

  // Then do password and confirmations.
  await enterpw(page);
  await clickcontinuepw(page);
  await d(3000);

  // Close the Phantom onboarding page
  printMessageLinesBorderBox(
    ["Closing Phantom onboarding page..."],
    phantomStyle
  );
  try {
    if (!page.isClosed()) {
      await page.close();
      printMessageLinesBorderBox(
        ["✅ Phantom onboarding page closed"],
        phantomStyle
      );
    } else {
      printMessageLinesBorderBox(
        ["Phantom onboarding page already closed"],
        warningStyle
      );
    }
  } catch (error) {
    printMessageLinesBorderBox(
      ["⚠️ Failed to close Phantom onboarding page: " + error],
      warningStyle
    );
  }
};

/**
 * mm - Moves/clicks on the "Name" input (sets it to `minerLabel`) and "Private key" textarea,
 * then sets the PK field to `privateKey`.
 */
const mm = async (page: Page, privateKey: string, minerLabel: string) => {
  const coords = await selecttextareabyplaceholder(
    page,
    privateKey,
    minerLabel
  );

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
export async function promptAccountImportMethod(): Promise<
  "manual" | { env: string; label: string }
> {
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
  const choices: Array<{
    name: string;
    value: "manual" | { env: string; label: string };
  }> = [
    { name: "Manual account import (use Phantom pop-up)", value: "manual" },
    ...automatedMinerChoices,
  ];

  // If no automated choices exist, add a disabled option.
  if (automatedMinerChoices.length === 0) {
    choices.push({
      name: "No miner accounts saved to .env",
      value: "manual",
      disabled: "No keys found",
    } as any);
  }

  // Optional: display a heading.
  printMessageLinesBorderBox(
    ["How do you want to import your account?"],
    phantomStyle
  );

  const { chosenMethod } = await inquirer.prompt([
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
const selecttextareabyplaceholder = async (
  page: Page,
  pk: string,
  minerLabel: string
) => {
  await page.waitForSelector("input");
  await page.waitForSelector("textarea");

  const coords = page.evaluate(
    (thePk, theLabel) => {
      // "Name" input
      const nameInput = Array.from(document.querySelectorAll("input")).find(
        (t) => t.placeholder === "Name"
      );
      if (nameInput) {
        nameInput.click();
        nameInput.value = theLabel; // e.g. "Miner 1"
        nameInput.click();
      }

      // "Private key" textarea
      const pkTextarea = Array.from(document.querySelectorAll("textarea")).find(
        (t) => t.placeholder === "Private key"
      );
      if (pkTextarea) {
        pkTextarea.click();
        pkTextarea.value = thePk; // fill in the private key
        pkTextarea.click();
      }

      // Calculate centers for both elements.
      const nameRect = nameInput?.getBoundingClientRect();
      const centerX = nameRect ? nameRect.left + nameRect.width / 2 : 0;
      const centerY = nameRect ? nameRect.top + nameRect.height / 2 : 0;

      const pkRect = pkTextarea?.getBoundingClientRect();
      const centerX1 = pkRect ? pkRect.left + pkRect.width / 2 : 0;
      const centerY1 = pkRect ? pkRect.top + pkRect.height / 2 : 0;

      return { centerX, centerY, centerX1, centerY1 };
    },
    pk,
    minerLabel
  );

  return coords;
};

/**
 * enterpw - Enters the wallet password ("testphant") in both fields.
 */
const enterpw = async (page: Page) => {
  await d(1000);
  const coords = await handlenewpassword(page);
  await d(1000);

  const pw = "testphant";
  // Click and type "Password"
  await page.mouse.click(coords.centerX, coords.centerY);
  await page.keyboard.type(pw);
  await d(1000);

  // Click and type "Confirm Password"
  await page.mouse.click(coords.centerX1, coords.centerY1);
  await page.keyboard.type(pw);
  await d(1000);
};

/**
 * handlenewpassword - Finds password fields, checks Terms-of-Service, returns bounding box centers.
 */
const handlenewpassword = async (page: Page) => {
  await page.waitForSelector("input");
  await page.waitForSelector(
    '[data-testid="onboarding-form-terms-of-service-checkbox"]'
  );

  const coords = page.evaluate(() => {
    const passInput = Array.from(document.querySelectorAll("input")).find(
      (t) => t.placeholder === "Password"
    );
    const confirmInput = Array.from(document.querySelectorAll("input")).find(
      (t) => t.placeholder === "Confirm Password"
    );

    const tos = document.querySelector(
      '[data-testid="onboarding-form-terms-of-service-checkbox"]'
    ) as HTMLInputElement;
    if (tos) tos.click();

    const passRect = passInput?.getBoundingClientRect();
    const centerX = passRect ? passRect.left + passRect.width / 2 : 0;
    const centerY = passRect ? passRect.top + passRect.height / 2 : 0;

    const confirmRect = confirmInput?.getBoundingClientRect();
    const centerX1 = confirmRect ? confirmRect.left + confirmRect.width / 2 : 0;
    const centerY1 = confirmRect ? confirmRect.top + confirmRect.height / 2 : 0;

    return { centerX, centerY, centerX1, centerY1 };
  });
  return coords;
};

/**
 * clickcontinuepw - Clicks the "Continue" button in the Phantom onboarding flow.
 */
const clickcontinuepw = async (page: Page) => {
  await page.waitForSelector('[data-testid="onboarding-form-submit-button"]');
  page.evaluate(() => {
    const sb = document.querySelector(
      '[data-testid="onboarding-form-submit-button"]'
    ) as HTMLButtonElement;
    if (sb) sb.click();
  });
};

/**
 * handlephanpopup:
 * Waits briefly, listens for a new target (Phantom popup), clicks a trigger button,
 * and confirms in the popup if it’s a Phantom Wallet.
 */
export const handlephanpopup = async (
  ppage: Page,
  browser: Browser,
  btnname: string,
  triggerBtn: string
): Promise<void> => {
  await d(1000);
  const nupage: Page | null = await new Promise(async (res) => {
    browser.once("targetcreated", (target) => res(target.page()));
    const clicked = await clickbyinnertxt(ppage, "button", triggerBtn);
    if (!clicked) {
      browser.removeAllListeners();
      res(null);
    }
  });
  if (nupage === null) throw new Error("button not clicked");
  await d(2000);
  const isphan = await nupage?.evaluate(() => {
    return (
      Array.from(document.getElementsByTagName("title")) as HTMLElement[]
    ).find((v) => v.textContent === "Phantom Wallet")
      ? true
      : false;
  });
  await d(3000);
  if (isphan) {
    await clickbyinnertxt(nupage!, "button", btnname);
  }
};
