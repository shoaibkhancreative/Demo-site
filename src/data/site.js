export const BRAND = "Exclusive Mentorship";
export const INSTRUCTOR = "NLT";
export const TELEGRAM = "https://t.me/YOUR_TELEGRAM";

export const CHAPTERS = [
  { id: 1, name: "The Architecture of Markets", classes: 5, price: 5, hook: "Markets aren't random. Learn the hidden order behind every move." },
  { id: 2, name: "Smart Money Basics", classes: 9, price: 9, hook: "See what institutions do before price even reacts." },
  { id: 3, name: "Structure & Time Based Concepts", classes: 12, price: 12, hook: "Read structure and time like a professional desk trader." },
  { id: 4, name: "Institutional Framework", classes: 15, price: 15, hook: "The framework that separates retail guesses from institutional logic." },
  { id: 5, name: "Professional Trader Mindset", classes: 17, price: 17, hook: "The mental edge that keeps professionals profitable." },
  { id: 6, name: "High-Probability Strategies", classes: 19, price: 19, hook: "Precise, repeatable setups with defined risk." },
  { id: 7, name: "Our Personal Trading Plan (Inc. Prop)", classes: 22, price: 22, hook: "The exact plan we trade, including prop firm execution." },
];
export const TOTAL_CLASSES = CHAPTERS.reduce((s, c) => s + c.classes, 0);
export const PRICING = { tier1Total: 99, tier2Bundle: 79, save: 20, prioritySupport: 8 };
export const TESTIMONIALS = [
  { name: "Rakib H.", text: "The institutional framework chapter alone changed how I see every chart." },
  { name: "Sadia K.", text: "Finally a mentorship with zero fluff. Every class is pure signal." },
  { name: "Tanvir A.", text: "The trading plan chapter is worth the whole bundle. Prop section is gold." },
];
