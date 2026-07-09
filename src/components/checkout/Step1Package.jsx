import { Check, Sparkles, Layers } from "lucide-react";
import { chapters } from "../../lib/curriculum";
import { ADDONS, BUNDLE_PRICE, BUNDLE_SAVINGS } from "../../lib/constants";

export default function Step1Package({ selection, setSelection }) {
  const priorityFree = selection.mode === "bundle";

  function setMode(mode) {
    setSelection((s) => ({ ...s, mode, chapterCount: mode === "chapters" ? s.chapterCount || 1 : s.chapterCount }));
  }

  function pickChapter(num) {
    setSelection((s) => ({ ...s, mode: "chapters", chapterCount: num }));
  }

  function toggleAddon(key) {
    setSelection((s) => ({ ...s, addons: { ...s.addons, [key]: !s.addons[key] } }));
  }

  return (
    <div>
      <h2 className="font-display text-2xl sm:text-[1.7rem] font-semibold text-ink">Package বেছে নিন</h2>
      <p className="mt-2 text-[14.5px] text-ink-soft">Full Bundle নিন অথবা Chapter ধরে ধরে শুরু করুন।</p>

      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          onClick={() => setMode("bundle")}
          className={`text-left rounded-2xl border-2 p-6 transition-all duration-200 ${
            selection.mode === "bundle" ? "border-gold bg-gold-soft/40" : "border-line bg-surface hover:border-line-strong"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-white">
              <Sparkles size={16} />
            </span>
            {selection.mode === "bundle" && <Check size={20} className="text-gold" strokeWidth={3} />}
          </div>
          <p className="mt-3 font-display font-semibold text-ink">Full Bundle — Save ${BUNDLE_SAVINGS}</p>
          <p className="text-xs text-ink-faint mt-1">সব {chapters.length}টি Chapter + Free Priority Support + 7-Day Guarantee</p>
          <p className="mt-3 font-display text-2xl font-bold text-ink">${BUNDLE_PRICE}</p>
        </button>

        <button
          onClick={() => setMode("chapters")}
          className={`text-left rounded-2xl border-2 p-6 transition-all duration-200 ${
            selection.mode === "chapters" ? "border-gold bg-gold-soft/40" : "border-line bg-surface hover:border-line-strong"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-signal text-white">
              <Layers size={16} />
            </span>
            {selection.mode === "chapters" && <Check size={20} className="text-gold" strokeWidth={3} />}
          </div>
          <p className="mt-3 font-display font-semibold text-ink">Individual Chapters</p>
          <p className="text-xs text-ink-faint mt-1">যে কয়টা Chapter দরকার শুধু সেটুকুই কিনুন, ক্রমানুসারে।</p>
          <p className="mt-3 font-display text-2xl font-bold text-ink">$8+</p>
        </button>
      </div>

      {selection.mode === "chapters" && (
        <div className="mt-6 rounded-2xl border border-line bg-surface-alt/50 p-5 sm:p-6">
          <p className="text-xs text-ink-soft mb-4">
            📌 Chapter গুলো ক্রমানুসারে Unlock হয়। যে Chapter পর্যন্ত Access চান, সেটাতে ক্লিক করুন — তার আগের সবগুলোও একসাথে পাবেন।
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {chapters.map((c) => {
              const included = c.number <= selection.chapterCount;
              return (
                <button
                  key={c.number}
                  onClick={() => pickChapter(c.number)}
                  className={`rounded-xl border p-3 text-left transition-all duration-150 ${
                    included ? "border-gold bg-gold-soft/40" : "border-line bg-surface hover:border-line-strong"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-bold text-ink-faint">
                      {String(c.number).padStart(2, "0")}
                    </span>
                    {included && <Check size={13} className="text-gold" strokeWidth={3} />}
                  </div>
                  <p className="mt-1 text-[12.5px] font-semibold text-ink leading-snug line-clamp-2">{c.title}</p>
                  <p className="mt-1 text-[11px] text-ink-faint">${c.price}</p>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-8">
        <p className="font-display text-sm font-semibold text-ink mb-3">Add-ons (Optional)</p>
        <div className="space-y-2.5">
          {Object.values(ADDONS).map((a) => {
            const isFree = a.key === "p" && priorityFree;
            const checked = isFree ? true : Boolean(selection.addons[a.key]);
            return (
              <label
                key={a.key}
                className={`flex items-center gap-3.5 rounded-xl border p-4 cursor-pointer transition-colors duration-150 ${
                  checked ? "border-gold-deep/40 bg-gold-soft/30" : "border-line bg-surface hover:border-line-strong"
                } ${isFree ? "cursor-default" : ""}`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  disabled={isFree}
                  onChange={() => toggleAddon(a.key)}
                  className="h-4 w-4 accent-[#B8863D] shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-semibold text-ink">{a.name}</p>
                  <p className="text-xs text-ink-faint">{a.description}</p>
                </div>
                <span className="shrink-0 text-sm font-bold text-ink">
                  {isFree ? <span className="text-gold">Free</span> : `$${a.price}`}
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
