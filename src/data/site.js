export const BRAND = "Exclusive Mentorship";
export const INSTRUCTOR = "NLT";
export const TELEGRAM = "https://t.me/YOUR_TELEGRAM";

// Helper: generate placeholder classes. Replace title/tagline anytime — site updates automatically.
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
export const PRICING = { tier1Total: 99, tier2Bundle: 79, save: 20, prioritySupport: 8 };
export const TESTIMONIALS = [
  { name: "Rakib H.", text: "The institutional framework chapter alone changed how I see every chart." },
  { name: "Sadia K.", text: "Finally a mentorship with zero fluff. Every class is pure signal." },
  { name: "Tanvir A.", text: "The trading plan chapter is worth the whole bundle. Prop section is gold." },
];
