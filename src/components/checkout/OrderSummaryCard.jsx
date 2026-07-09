import { Sparkles } from "lucide-react";
import { selectedChapters, calculateTotal } from "../../lib/pricing";

export default function OrderSummaryCard({ selection }) {
  const { packagePrice, addonLines, total } = calculateTotal(selection);
  const chaps = selectedChapters(selection);

  return (
    <div className="rounded-2xl border border-line bg-surface p-6 sticky top-24">
      <p className="font-display text-sm font-semibold text-ink mb-4">আপনার Order</p>

      <div className="space-y-3 text-sm">
        {selection.mode === "bundle" ? (
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 text-ink">
              <Sparkles size={14} className="text-gold" />
              Full Bundle (7 Chapters)
            </span>
            <span className="font-semibold text-ink shrink-0">${packagePrice}</span>
          </div>
        ) : chaps.length > 0 ? (
          <div>
            <div className="flex items-center justify-between gap-3">
              <span className="text-ink">
                {chaps.length} Chapter{chaps.length > 1 ? "s" : ""} (1–{selection.chapterCount})
              </span>
              <span className="font-semibold text-ink shrink-0">${packagePrice}</span>
            </div>
            <ul className="mt-1.5 pl-1 space-y-0.5">
              {chaps.map((c) => (
                <li key={c.number} className="text-xs text-ink-faint truncate">
                  Ch.{c.number} — {c.title}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-ink-faint text-xs">কোনো Package এখনো Select করা হয়নি।</p>
        )}

        {addonLines.length > 0 && (
          <div className="border-t border-line pt-3 space-y-2">
            {addonLines.map((a) => (
              <div key={a.key} className="flex items-center justify-between gap-3">
                <span className="text-ink-soft text-[13px]">{a.nameLine}</span>
                <span className={`shrink-0 text-[13px] font-medium ${a.free ? "text-gold" : "text-ink-soft"}`}>
                  {a.free ? "Free" : `$${a.price}`}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 border-t border-line pt-4 flex items-center justify-between">
        <span className="font-display font-semibold text-ink">Total</span>
        <span className="font-display text-xl font-bold text-ink">${total}</span>
      </div>
    </div>
  );
}
