// ─────────────────────────────────────────────────────────────────────────
// These values are mirrored 1:1 from telegram-crm-bot.js (CHAPTER_INFO,
// BUNDLE_PRICE, ADDON_PRICES, ADDON_DURATION_DAYS) so the price shown on the
// website always matches what the bot will actually charge/parse.
// If you change a price here, change it in the bot too - and vice versa.
// ─────────────────────────────────────────────────────────────────────────

export const BOT_USERNAME = "exclusive_mentorship_bot";
export const BOT_URL = `https://t.me/${BOT_USERNAME}`;

// TODO: swap in your real unlisted YouTube video IDs before launch.
// (the ID is the part after "v=" or after youtu.be/ in a YouTube URL)
// Left as an obvious placeholder on purpose - the VideoEmbed component never
// auto-loads the iframe, so this never shows a broken player; it only shows
// YouTube's "video not found" if someone actually clicks Play pre-launch.
export const MAIN_INTRO_VIDEO_ID = "YOUR_MAIN_INTRO_VIDEO_ID";
export const CHAPTER_VIDEO_IDS = {
  1: "YOUR_CHAPTER_1_VIDEO_ID",
  2: "YOUR_CHAPTER_2_VIDEO_ID",
  3: "YOUR_CHAPTER_3_VIDEO_ID",
  4: "YOUR_CHAPTER_4_VIDEO_ID",
  5: "YOUR_CHAPTER_5_VIDEO_ID",
  6: "YOUR_CHAPTER_6_VIDEO_ID",
  7: "YOUR_CHAPTER_7_VIDEO_ID",
};

// TODO: replace with your real support handle before launch.
export const SUPPORT_TELEGRAM_URL = "https://t.me/YOUR_SUPPORT_HANDLE";

export const BUNDLE_PRICE = 79;

// Sum of the 7 individual chapter prices - used to show the real, honest
// "you save $X with the bundle" figure (no invented discounts).
export const INDIVIDUAL_TOTAL = 8 + 10 + 12 + 14 + 16 + 18 + 21; // 99
export const BUNDLE_SAVINGS = INDIVIDUAL_TOTAL - BUNDLE_PRICE; // 20

export const ADDONS = {
  p: {
    key: "p",
    name: "Priority Support",
    nameLine: "Priority Support",
    price: 8,
    duration: null, // never expires
    durationLabel: "Lifetime",
    description: "সরাসরি Priority Support Queue-এ থাকুন — দ্রুত উত্তর, দ্রুত সমাধান।",
  },
  m: {
    key: "m",
    name: "Market Insight Daily",
    nameLine: "Market Insight Daily",
    price: 29,
    duration: 30,
    durationLabel: "1 Month",
    description: "প্রতিদিন Daily Market Breakdown ও Bias সরাসরি আমাদের Channel-এ।",
  },
  c: {
    key: "c",
    name: "1-on-1 Consultation",
    nameLine: "1-on-1 Consultation",
    price: 149,
    duration: 90,
    durationLabel: "3 Months",
    description: "সরাসরি ১-এ-১ Session-এ নিজের Trade ও Progress নিয়ে আলোচনা করুন।",
  },
};

export const PAYMENT_METHODS = [
  {
    id: "binance",
    label: "Binance UID",
    subLabel: "Binance Pay",
    // TODO: replace with your real Binance UID before launch.
    address: "000000000",
  },
  {
    id: "usdt_trc20",
    label: "USDT (TRC20)",
    subLabel: "Tron Network",
    // TODO: replace with your real TRC20 wallet address before launch.
    address: "TXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
  {
    id: "usdt_bep20",
    label: "USDT (BEP20)",
    subLabel: "BNB Smart Chain",
    // TODO: replace with your real BEP20 wallet address before launch.
    address: "0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
  {
    id: "btc",
    label: "BTC",
    subLabel: "Bitcoin",
    // TODO: replace with your real BTC wallet address before launch.
    address: "bcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
  {
    id: "eth",
    label: "ETH (ERC20)",
    subLabel: "Ethereum",
    // TODO: replace with your real ERC20 wallet address before launch.
    address: "0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
];

// Chapters must be unlocked in order (this mirrors a real rule enforced by
// the bot itself - see getNextAvailableChapter() in telegram-crm-bot.js,
// which only ever offers the *next* sequential chapter, never an arbitrary
// one). The site intentionally enforces the same rule so a purchase made
// here always matches what the bot is able to grant.
export const SEQUENTIAL_CHAPTERS_ONLY = true;
