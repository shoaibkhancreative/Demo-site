import { chapters } from "./curriculum";
import { BUNDLE_PRICE, ADDONS } from "./constants";

/**
 * selection shape:
 *   {
 *     mode: 'bundle' | 'chapters',
 *     chapterCount: number,        // 1-7, only meaningful when mode === 'chapters'
 *     addons: { p: bool, m: bool, c: bool }
 *   }
 */

export function selectedChapters(selection) {
  if (selection.mode !== "chapters") return [];
  return chapters.filter((c) => c.number <= selection.chapterCount);
}

export function calculateTotal(selection) {
  const isBundle = selection.mode === "bundle";
  const packagePrice = isBundle
    ? BUNDLE_PRICE
    : selectedChapters(selection).reduce((sum, c) => sum + c.price, 0);

  const priorityIncludedFree = isBundle;

  const addonLines = Object.values(ADDONS)
    .filter((addon) => selection.addons?.[addon.key])
    .map((addon) => {
      const free = addon.key === "p" && priorityIncludedFree;
      return { ...addon, free, cost: free ? 0 : addon.price };
    });

  const addonsPrice = addonLines.reduce((sum, a) => sum + a.cost, 0);

  return {
    packagePrice,
    addonLines,
    addonsPrice,
    total: packagePrice + addonsPrice,
    priorityIncludedFree,
  };
}

export function isSelectionValid(selection) {
  if (selection.mode === "bundle") return true;
  if (selection.mode === "chapters") return selection.chapterCount >= 1;
  return false;
}
