import { BOT_URL, PAYMENT_METHODS } from "./constants";
import { selectedChapters, calculateTotal } from "./pricing";

/**
 * WHY ?text= AND NOT ?start=
 * ---------------------------------------------------------------------
 * Telegram's bot deep-link `?start=` parameter is capped at 64 characters
 * and only allows A-Z a-z 0-9 _ - (see core.telegram.org/bots/features).
 * Your bot's own parseOrderPayload() reflects that exact constraint - it's
 * a terse "Plan-ChapterCount-Addons-Total" code with no room for a name,
 * DOB, phone, email, or address.
 *
 * `?text=` has no such limit. It opens the chat with a full draft message
 * that the user reviews and taps Send on (Telegram requires that manual
 * tap - it can't be auto-sent, which is a deliberate anti-spam measure,
 * not a bug). Once sent, it lands as a normal private text message, which
 * your bot already routes straight into the right admin support thread
 * via handleUserTextMessage() / routeMessageToSupportThread() - so this
 * works with your existing bot as-is, no bot-side changes required.
 */

function formatDate(value) {
  if (!value) return null;
  const d = new Date(value + "T00:00:00");
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

export function buildPlanLines(selection) {
  if (selection.mode === "bundle") {
    return ["📦 Plan: Full Bundle (All 7 Chapters)"];
  }
  const lines = [`📦 Plan: ${selection.chapterCount} Chapter${selection.chapterCount > 1 ? "s" : ""}`];
  for (const c of selectedChapters(selection)) {
    lines.push(`   📖 Chapter ${c.number}: ${c.title} — $${c.price}`);
  }
  return lines;
}

export function buildOrderMessage({ selection, userInfo, paymentMethodId }) {
  const { addonLines, total } = calculateTotal(selection);
  const paymentMethod = PAYMENT_METHODS.find((m) => m.id === paymentMethodId);

  const lines = [];
  lines.push("🎓 New Enrollment — NLT Mentorship");
  lines.push("");
  lines.push(...buildPlanLines(selection));

  if (addonLines.length > 0) {
    lines.push("");
    lines.push("➕ Add-ons:");
    for (const a of addonLines) {
      lines.push(`   ${a.free ? "🎁" : "➕"} ${a.nameLine}${a.free ? " — Free (Bundle)" : ` — $${a.price} (${a.durationLabel})`}`);
    }
  }

  lines.push("");
  lines.push(`💰 Total: $${total} USDT`);
  lines.push("");
  lines.push("──────────────");
  lines.push(`👤 Name: ${userInfo.name || "—"}`);
  if (userInfo.dob) lines.push(`🎂 DOB: ${formatDate(userInfo.dob)}`);
  if (userInfo.phone) lines.push(`📞 Phone: ${userInfo.phone}`);
  if (userInfo.email) lines.push(`📧 Email: ${userInfo.email}`);
  if (userInfo.telegram) lines.push(`💬 Telegram: ${userInfo.telegram.startsWith("@") ? userInfo.telegram : "@" + userInfo.telegram}`);
  if (userInfo.address) lines.push(`🏠 Address: ${userInfo.address}`);

  lines.push("");
  lines.push("──────────────");
  lines.push(`💳 Payment Method: ${paymentMethod ? paymentMethod.label : "—"}`);
  lines.push("✅ Terms & Trading Risk: Acknowledged");

  return lines.join("\n");
}

export function buildTelegramRedirectUrl(orderContext) {
  const message = buildOrderMessage(orderContext);
  return `${BOT_URL}?text=${encodeURIComponent(message)}`;
}
