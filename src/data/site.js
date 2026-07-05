export const BRAND = "Exclusive Mentorship";
export const INSTRUCTOR = "NLT";
export const TELEGRAM = "https://t.me/YOUR_TELEGRAM";
export const YOUTUBE_ID = "dQw4w9WgXcQ"; // <-- replace with your intro video ID

// Your Telegram BOT's username (no @, no https://) — the bot the payment page deep-links into.
// Create it with @BotFather first, then put its username here.
export const TELEGRAM_BOT = "exclusive_mentorship_bot";

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
    title: `ক্লাস ${i + 1}`,
    tagline: "এখানে একটি সংক্ষিপ্ত লেসন ট্যাগলাইন বসবে — src/data/site.js ফাইলে গিয়ে এটি পরিবর্তন করুন।",
  }));
}

export const CHAPTERS = [
  { id: 1, name: "মার্কেটের আর্কিটেকচার", classes: 5, price: 5, thumb: "/thumbnails/chapter-1.jpg", hook: "মার্কেট কখনো র‍্যান্ডম নয়। প্রতিটি মুভের পেছনে থাকা লুকানো নিয়মটা শিখে নিন।", lessons: makeClasses(5) },
  { id: 2, name: "Smart Money বেসিকস", classes: 9, price: 9, thumb: "/thumbnails/chapter-2.jpg", hook: "প্রাইস রিঅ্যাক্ট করার আগেই institutions কী করে, তা দেখে নিন।", lessons: makeClasses(9) },
  { id: 3, name: "Structure ও Time-ভিত্তিক ধারণা", classes: 12, price: 12, thumb: "/thumbnails/chapter-3.jpg", hook: "একজন প্রফেশনাল desk ট্রেডারের মতো structure আর সময় পড়তে শিখুন।", lessons: makeClasses(12) },
  { id: 4, name: "Institutional ফ্রেমওয়ার্ক", classes: 15, price: 15, thumb: "/thumbnails/chapter-4.jpg", hook: "যে framework retail ট্রেডারদের আন্দাজ-নির্ভর সিদ্ধান্ত থেকে institutional যুক্তিকে আলাদা করে।", lessons: makeClasses(15) },
  { id: 5, name: "প্রফেশনাল ট্রেডার Mindset", classes: 17, price: 17, thumb: "/thumbnails/chapter-5.jpg", hook: "যে mental edge প্রফেশনালদের লাভজনক রাখে।", lessons: makeClasses(17) },
  { id: 6, name: "High-Probability স্ট্র্যাটেজি", classes: 19, price: 19, thumb: "/thumbnails/chapter-6.jpg", hook: "একদম নির্ভুল আর repeatable setup, সুনির্দিষ্ট risk সহ।", lessons: makeClasses(19) },
  { id: 7, name: "আমাদের ব্যক্তিগত Trading Plan (Prop সহ)", classes: 22, price: 22, thumb: "/thumbnails/chapter-7.jpg", hook: "আমরা নিজেরা এই plan অনুসরণ করেই ট্রেড করি — prop firm execution-সহ।", lessons: makeClasses(22) },
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
    name: "Priority সাপোর্ট",
    price: 8,
    freeWithBundle: true,
    badge: null,
    desc: "আপনার সব প্রশ্নের জন্য দ্রুত, সবার আগে সাপোর্ট।",
  },
  {
    id: "market_review",
    name: "সাপ্তাহিক Market Review",
    price: 29,
    freeWithBundle: false,
    badge: "জনপ্রিয়",
    desc: "প্রধান সব market নিয়ে সাপ্তাহিক forecast, শেয়ার করা হয় একটি প্রাইভেট গ্রুপে।",
  },
  {
    id: "consultation",
    name: "সাপ্তাহিক 1-on-1 Consultation",
    price: 149,
    freeWithBundle: false,
    badge: "প্রিমিয়াম",
    desc: "NLT-এর সাথে সাপ্তাহিক একটি প্রাইভেট কল, যেখানে আপনার trade, plan আর progress রিভিউ করা হবে। সিট সীমিত।",
  },
];
export const TESTIMONIALS = [
  { name: "রাকিব হাসান", role: "ফুল-টাইম ট্রেডার", result: "অবশেষে ধারাবাহিক", text: "শুধু institutional framework চ্যাপ্টারটাই আমার চার্ট দেখার পুরো ধরন বদলে দিয়েছে। জীবনে প্রথমবার আমার রেজাল্ট এখন ধারাবাহিক।" },
  { name: "সাদিয়া করিম", role: "সুইং ট্রেডার", result: "কোনো ফালতু কথা নেই", text: "অবশেষে এমন একটা মেন্টরশিপ পেলাম যেখানে কোনো ফালতু কথা নেই। প্রতিটা ক্লাসই খাঁটি signal, একটুও সময় নষ্ট হয় না।" },
  { name: "তানভীর আহমেদ", role: "Prop Firm ফান্ডেড", result: "চ্যালেঞ্জ পাস করেছি", text: "Trading Plan চ্যাপ্টারটাই পুরো বান্ডেলের দাম উশুল করে দেয়। আমি Prop সেকশনটা ফলো করেই আমার ফান্ডেড চ্যালেঞ্জ পাস করেছি।" },
  { name: "নাবিল রহমান", role: "নতুন ট্রেডার", result: "এখন সংগঠিত", text: "কিছুই না জেনে শুরু করেছিলাম। ধাপে ধাপে সাজানো এই পথ আমাকে এমন structure আর discipline দিয়েছে, যা আগে কখনো ছিল না।" },
  { name: "ফারহান ইকবাল", role: "পার্ট-টাইম ট্রেডার", result: "Overtrading বন্ধ হয়েছে", text: "Mindset চ্যাপ্টারটা আমার সবচেয়ে বড় সমস্যা — overtrading — ঠিক করে দিয়েছে। আমার অ্যাকাউন্ট থেকে টাকা ক্ষয় হওয়া অবশেষে থেমেছে।" },
  { name: "মাহিরা চৌধুরী", role: "ফরেক্স ট্রেডার", result: "পরিষ্কার Entry", text: "Structure ও Time-ভিত্তিক concept গুলো আমার entry অনেক পরিষ্কার করে দিয়েছে। আর আন্দাজে ট্রেড করতে হয় না।" },
  { name: "আশিক উদ্দিন", role: "ক্রিপ্টো ট্রেডার", result: "আসল Edge", text: "Smart Money বেসিকস আমাকে একটা আসল edge দিয়েছে। এখন বুঝি আসলে price কেন move করে।" },
  { name: "রিফাত জাহান", role: "স্টুডেন্ট ট্রেডার", result: "এখন আত্মবিশ্বাসী", text: "Scripted ক্লাস মানেই বারবার দেখে সত্যিই শেখা যায়। এখন আত্মবিশ্বাসের সাথে ট্রেড করি।" },
  { name: "সাব্বির আলম", role: "ডে ট্রেডার", result: "Discipline পেয়েছি", text: "এই discipline-টাই আমার মধ্যে ছিল না। এই plan টা এমন, যা আমি সত্যিই প্রতিদিন ফলো করতে পারি।" },
  { name: "তাসনিম হক", role: "সুইং ট্রেডার", result: "কম, কিন্তু ভালো Trade", text: "High-Probability স্ট্র্যাটেজি আমাকে অপেক্ষা করতে শিখিয়েছে। কম ট্রেড, কিন্তু রেজাল্ট অনেক ভালো।" },
  { name: "ইমরান কবির", role: "Prop ট্রেডার", result: "নিয়মিত পেআউট", text: "Personal Trading Plan সেকশনটা একদম gold। এটা apply করার পর থেকে নিয়মিত পেআউট পাচ্ছি।" },
  { name: "নুসরাত আমিন", role: "নতুন ট্রেডার", result: "মার্কেট বুঝি এখন", text: "মার্কেটের আর্কিটেকচার চ্যাপ্টারটা পড়ার পর সব একদম মাথায় ক্লিক করে গেছে। কেন এমন হয়, সেটা এখন বুঝি।" },
];
