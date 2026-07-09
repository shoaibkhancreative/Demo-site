/** Turns a chapter title into a URL-friendly slug. English-only titles in this
 *  curriculum, so a simple ASCII slugify is sufficient. */
export function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
