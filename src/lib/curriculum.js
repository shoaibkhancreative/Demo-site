import raw from "../data/curriculum.json";
import { slugify } from "./slugify";

export const chapters = raw.map((ch) => ({
  ...ch,
  slug: slugify(ch.title),
}));

export function getChapterBySlug(slug) {
  return chapters.find((c) => c.slug === slug) || null;
}

export function getChapterByNumber(num) {
  return chapters.find((c) => c.number === Number(num)) || null;
}

export const TOTAL_CLASSES = chapters.reduce((sum, c) => sum + c.classCount, 0);
