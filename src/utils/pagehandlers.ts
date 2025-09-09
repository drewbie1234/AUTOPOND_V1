// pageHandlers.ts
import { Page } from "puppeteer";
import { d } from "./helpers"; // If you need the delay function

/**
 * clickSelectorWtxt:
 * Finds an element by a CSS selector that contains specific text, then clicks it.
 *
 * @param page - Puppeteer Page instance.
 * @param selector - The CSS selector to target elements.
 * @param text - The text to match within the element.
 */
export const clickSelectorWtxt = async (
  page: Page,
  selector: string,
  text: string
): Promise<void> => {
  await page.evaluate(
    (sel, txt) => {
      const elements = Array.from(
        document.querySelectorAll(sel)
      ) as HTMLElement[];
      const element = elements.find((e) => e.innerText.includes(txt));
      if (element) element.click();
    },
    selector,
    text
  );
};

/**
 * getBoundingBox:
 * Finds an element matching a selector that contains specified text and returns its center coordinates.
 *
 * @param page - Puppeteer Page instance.
 * @param selector - The CSS selector to search.
 * @param searchText - The text to match within the element.
 * @returns The center coordinates { bboxX, bboxY } or null if not found.
 */
export const getBoundingBox = async (
  page: Page,
  selector: string,
  searchText: string
): Promise<{ bboxX: number; bboxY: number } | null> => {
  // Optionally, wait a moment before evaluating
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const bbox = await page.evaluate(
    (sel, txt) => {
      const elements = Array.from(
        document.querySelectorAll(sel)
      ) as HTMLElement[];
      const element = elements.find((e) => e.innerText.includes(txt));
      if (!element) return null;
      const rect = element.getBoundingClientRect();
      return {
        bboxX: rect.left + rect.width / 2,
        bboxY: rect.top + rect.height / 2,
      };
    },
    selector,
    searchText
  );
  return bbox;
};

/**
 * coinSelect:
 * Opens the output token dropdown by clicking the designated button.
 * Assumes that the 6th button (index 5) triggers this dropdown.
 *
 * @param page - Puppeteer Page instance.
 */
export const outputTokenSelect = async (page: Page): Promise<void> => {
  await page.evaluate(() => {
    const buttons = Array.from(
      document.querySelectorAll("button")
    ) as HTMLElement[];
    buttons[5]?.click();
  });
};

/**
 * inputTokenSelect:
 * Opens the input token dropdown by clicking the designated button.
 * Assumes that the 5th button (index 4) triggers this dropdown.
 *
 * @param page - Puppeteer Page instance.
 */
export const inputTokenSelect = async (page: Page): Promise<void> => {
  await page.evaluate(() => {
    const buttons = Array.from(
      document.querySelectorAll("button")
    ) as HTMLElement[];
    buttons[4]?.click();
  });
};

/**
 * wadapt:
 * Clicks the Phantom wallet adapter button to trigger the connection modal.
 *
 * @param page - Puppeteer Page instance.
 */
export const wadapt = async (page: Page): Promise<void> => {
  await page.evaluate(() => {
    const adapterButton = document.querySelector(
      ".wallet-adapter-button.wallet-adapter-button-trigger"
    ) as HTMLButtonElement;
    adapterButton?.click();
  });
};

/**
 * clickProfileButton:
 * Clicks the user profile button with role="button" containing an image with alt="User profile".
 *
 * @param page - Puppeteer Page instance.
 * @returns A Promise that resolves to true if clicked, false if not found.
 */
export const clickProfileButton = async (page: Page): Promise<boolean> => {
  const selector = 'div[role="button"] img[alt="User profile"]';
  try {
    await page.waitForSelector(selector, { timeout: 5000 });
    await page.click(selector);
    return true;
  } catch (error) {
    console.error(`Failed to click profile button: ${error}`);
    return false;
  }
};

/**
 * setSwapAmount:
 * Sets the swap amount in the "You Pay" input field.
 *
 * @param page - Puppeteer Page instance.
 * @param amount - The amount to set.
 * @returns A Promise that resolves to true if successful, false otherwise.
 */
export const setSwapAmount = async (
  page: Page,
  amount: string
): Promise<boolean> => {
  const SWAP_AMOUNT_SELECTOR =
    "#jupiter-terminal > form > div > div.w-full.mt-2.rounded-\\[16px\\].flex.flex-col.px-0 > div.flex-col > div.mt-2.border-b.border-transparent.bg-\\[\\#05050580\\].rounded-xl.transition-all > div > div > div > div:nth-child(2) > div > input";
  try {
    await page.waitForSelector(SWAP_AMOUNT_SELECTOR, { timeout: 5000 });
    await page.focus(SWAP_AMOUNT_SELECTOR);
    await page.evaluate(
      (sel, value) => {
        const input = document.querySelector(sel) as HTMLInputElement | null;
        if (input) {
          const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            "value"
          )?.set;
          if (nativeInputValueSetter) {
            nativeInputValueSetter.call(input, value);
          } else {
            input.value = value;
          }
          input.dispatchEvent(new Event("input", { bubbles: true }));
          input.dispatchEvent(new Event("change", { bubbles: true }));
        }
      },
      SWAP_AMOUNT_SELECTOR,
      amount
    );
    await d(1000);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * setMaxTx:
 * Sets transaction settings (slippage, etc.) in the UI.
 *
 * @param page - Puppeteer Page instance.
 */
export const setMaxTx = async (page: Page, maxFee: string): Promise<void> => {
  await d(2000);
  const selector =
    "#jupiter-terminal > div.mt-2.h-7 > div > div > button:nth-child(3) > svg";
  await page.waitForSelector(selector, { timeout: 5000 });
  await page.click(selector);
  await d(2000);

  const maybeMaxBbox = await getBoundingBox(
    page,
    '[class="relative mt-1"]',
    "SOL"
  );
  if (!maybeMaxBbox)
    throw new Error(
      'Could not locate bounding box for "SOL" in the settings area.'
    );
  const { bboxX, bboxY } = maybeMaxBbox;

  await page.mouse.click(bboxX, bboxY);
  await page.keyboard.press("Backspace");
  await page.keyboard.press("Backspace");
  await page.keyboard.type(maxFee);
  await d(1000);
  await clickSelectorWtxt(page, "button", "Save Settings");
};

/**
 * swapBtn:
 *  1) Waits up to 5 seconds for the .swapbtn to appear.
 *  2) Checks the button text in a loop (maxTries = 20, i.e. 20 seconds total).
 *  3) If text is "Retry" or "Swap Again", clicks and re-checks.
 *  4) If text is "Insufficient balance", throws immediately.
 *  5) If text is "Swap", clicks once and resolves.
 *  6) If never becomes "Swap", throws an error.
 */
export const swapBtn = async (page: Page): Promise<void> => {
  // Step 1) Wait up to 5s for the button to appear
  try {
    await page.waitForSelector(".swapbtn", { timeout: 5000 });
  } catch (e) {
    throw new Error("Swap button not found on the page within 5s");
  }

  let foundSwap = false;
  let tries = 0;
  const maxTries = 20;

  while (!foundSwap && tries < maxTries) {
    const text = await page.evaluate(() => {
      const button = document.querySelector(
        ".swapbtn"
      ) as HTMLButtonElement | null;
      return button?.innerText.trim() || "";
    });

    if (text.includes("Insufficient balance")) {
      throw new Error(`Swap button is stuck on "Insufficient balance"`);
    }
    if (text.includes("Retry") || text.includes("Swap Again")) {
      await page.click(".swapbtn");
    } else if (text === "Swap") {
      await page.click(".swapbtn");
      foundSwap = true;
    }

    tries++;
    if (!foundSwap) {
      await d(1000); // wait 1s, try again
    }
  }

  if (!foundSwap) {
    throw new Error(
      "Never encountered a valid 'Swap' state within 20 seconds."
    );
  }
};

/**
 * clickbyinnertxt:
 * Finds an element by the specified selector with an innerText exactly matching the provided text,
 * clicks the element, and returns true if successful.
 *
 * @param page - The Puppeteer Page object.
 * @param selector - The CSS selector to locate elements.
 * @param innertxt - The exact innerText to match (or array of possible matches).
 * @returns A Promise that resolves to true if the element is found and clicked.
 */
export const clickbyinnertxt = async (
  page: Page,
  selector: string,
  innertxt: string | string[]
): Promise<boolean> => {
  // Ensure candidates is an array.
  const candidates = Array.isArray(innertxt) ? innertxt : [innertxt];
  const didClick = await page.evaluate(
    (sel, texts) => {
      const elements = Array.from(document.querySelectorAll(sel));
      // Cast each element to HTMLElement so we can access innerText.
      const target = elements.find((ele) =>
        texts.some(
          (txt: string) => (ele as HTMLElement).innerText.trim() === txt
        )
      );
      if (!target) return false;
      (target as HTMLElement).click();
      return true;
    },
    selector,
    candidates
  );
  return didClick;
};

/**
 * waitforelement - Waits for a matching element + innerText, then clicks it.
 */
export const waitforelement = async (
  page: Page,
  selector: string,
  innertxt: string,
  timeout: number
) => {
  await page.waitForFunction(
    (sel, txt) => {
      const elements = Array.from(
        document.querySelectorAll(sel)
      ) as HTMLElement[];
      for (const el of elements) {
        if (el.innerText.includes(txt)) {
          el.click();
          return true;
        }
      }
      return false;
    },
    { timeout },
    selector,
    innertxt
  );
};
