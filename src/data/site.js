export const BRAND = "Exclusive Mentorship";
export const INSTRUCTOR = "NLT";
export const TELEGRAM = "https://t.me/YOUR_TELEGRAM";
export const YOUTUBE_ID = "dQw4w9WgXcQ"; // <-- replace with your intro video ID

// Your Telegram BOT's username (no @, no https://) — the bot the payment page deep-links into.
// Create it with @BotFather first, then put its username here.
export const TELEGRAM_BOT = "YOUR_BOT_USERNAME";

// Manual crypto payment details shown on /payment. Replace every placeholder below.
export const PAYMENT_METHODS = {
  binanceUID: "YOUR_BINANCE_UID",
  bybitUID: "YOUR_BYBIT_UID",
  crypto: [
    { label: "USDT", network: "TRC20 (Tron)", address: "YOUR_USDT_TRC20_ADDRESS" },
    { label: "USDT", network: "BEP20 (BSC)", address: "YOUR_USDT_BEP20_ADDRESS" },
    { label: "BTC", network: "Bitcoin", address: "YOUR_BTC_ADDRESS" },
    { label: "ETH", network: "ERC20", address: "YOUR_ETH_ADDRESS" },
  ],
};

// Short codes used to keep the Telegram deep-link payload inside Telegram's 64-character,
// letters/digits/underscore/hyphen-only limit. Add a one-letter code here for every new addon
// you add to ADDONS below, using a letter that isn't already taken.
export const ADDON_CODES = { priority: "p", market_review: "m", consultation: "c" };

function makeClasses(count) {
  return Array.from({ length: count }, (_, i) => ({
    n: i + 1,
    title: `Class ${i + 1}`,
    tagline: "A short lesson tagline goes here — replace me in src/data/site.js",
  }));
}

export const CHAPTERS = [
  { id: 1, name: "The Architecture of Markets", classes: 5, price: 5, thumb: "/thumbnails/chapter-1.jpg", hook: "Markets aren't random. Learn the hidden order behind every move.", lessons: makeClasses(5) },
  { id: 2, name: "Smart Money Basics", classes: 9, price: 9, thumb: "/thumbnails/chapter-2.jpg", hook: "See what institutions do before price even reacts.", lessons: makeClasses(9) },
  { id: 3, name: "Structure & Time Based Concepts", classes: 12, price: 12, thumb: "/thumbnails/chapter-3.jpg", hook: "Read structure and time like a professional desk trader.", lessons: makeClasses(12) },
  { id: 4, name: "Institutional Framework", classes: 15, price: 15, thumb: "/thumbnails/chapter-4.jpg", hook: "The framework that separates retail guesses from institutional logic.", lessons: makeClasses(15) },
  { id: 5, name: "Professional Trader Mindset", classes: 17, price: 17, thumb: "/thumbnails/chapter-5.jpg", hook: "The mental edge that keeps professionals profitable.", lessons: makeClasses(17) },
  { id: 6, name: "High-Probability Strategies", classes: 19, price: 19, thumb: "/thumbnails/chapter-6.jpg", hook: "Precise, repeatable setups with defined risk.", lessons: makeClasses(19) },
  { id: 7, name: "Our Personal Trading Plan (Inc. Prop)", classes: 22, price: 22, thumb: "/thumbnails/chapter-7.jpg", hook: "The exact plan we trade, including prop firm execution.", lessons: makeClasses(22) },
];
export const TOTAL_CLASSES = CHAPTERS.reduce((s, c) => s + c.classes, 0);
export const PRICING = { tier1Total: 99, tier2Bundle: 79, save: 20, prioritySupport: 8, consultation: 149 };

// Progressive discount for buying chapters chapter-by-chapter, always as chapters 1..N in order
// (see the sequential-unlock rule in checkout.astro). Buying all 7 lands exactly on the bundle
// price, $79. Edit these seven numbers directly to change the discount curve.
export const CHAPTER_BUNDLE_PRICING = { 1: 5, 2: 13, 3: 23, 4: 35, 5: 48, 6: 62, 7: 79 };

// From this many chapters onward (bought together in chapter-by-chapter mode), Priority Support
// is included free — the same treatment it already gets with the full bundle.
export const PRIORITY_FREE_AT = 5;

export const ADDONS = [
  {
    id: "priority",
    name: "Priority Support",
    price: 8,
    freeWithBundle: true,
    badge: null,
    desc: "Faster, front-of-line support for all your questions.",
  },
  {
    id: "market_review",
    name: "Weekly Market Review",
    price: 29,
    freeWithBundle: false,
    badge: "Popular",
    desc: "Weekly forecasts across major markets, shared in a private group.",
  },
  {
    id: "consultation",
    name: "Weekly 1-on-1 Consultation",
    price: 149,
    freeWithBundle: false,
    badge: "Premium",
    desc: "A private weekly call with NLT to review your trades, plan, and progress. Limited seats.",
  },
];
export const TESTIMONIALS = [
  { name: "Rakib Hasan", role: "Full-time trader", result: "Finally consistent", text: "The institutional framework chapter alone rewired how I see every chart. For the first time, my results are consistent." },
  { name: "Sadia Karim", role: "Swing trader", result: "Zero fluff", text: "Finally a mentorship with zero fluff. Every class is pure signal, nothing wasted." },
  { name: "Tanvir Ahmed", role: "Prop firm funded", result: "Passed my challenge", text: "The trading plan chapter is worth the whole bundle. I followed the prop section and passed my funded challenge." },
  { name: "Nabil Rahman", role: "New trader", result: "Lost to structured", text: "I started knowing nothing. The step-by-step path gave me structure and discipline I never had." },
  { name: "Farhan Iqbal", role: "Part-time trader", result: "Stopped overtrading", text: "The mindset chapter fixed my biggest problem, overtrading. My account finally stopped bleeding." },
  { name: "Mahira Chowdhury", role: "Forex trader", result: "Clear entries", text: "Structure and time based concepts made my entries so much cleaner. No more guessing." },
  { name: "Ashiq Uddin", role: "Crypto trader", result: "Real edge", text: "Smart money basics gave me a real edge. I finally understand what moves price." },
  { name: "Rifat Jahan", role: "Student trader", result: "Confident now", text: "Scripted classes mean I can rewatch and actually learn. I trade with confidence now." },
  { name: "Sabbir Alam", role: "Day trader", result: "Disciplined", text: "This is the discipline I was missing. The plan is something I can actually follow every day." },
  { name: "Tasnim Hoque", role: "Swing trader", result: "Fewer, better trades", text: "High-probability strategies taught me to wait. Fewer trades, far better results." },
  { name: "Imran Kabir", role: "Prop trader", result: "Consistent payouts", text: "The personal trading plan section is gold. Consistent payouts since I applied it." },
  { name: "Nusrat Amin", role: "New trader", result: "Finally understand markets", text: "The architecture of markets chapter made everything click. I finally understand the why." },
];
