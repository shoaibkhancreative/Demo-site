import { TERMS_SECTIONS } from "../../data/termsContent";

export default function Step3Terms({ terms, setTerms, forceShowErrors }) {
  const bothChecked = terms.readTerms && terms.riskAware;

  function toggle(field) {
    setTerms((t) => ({ ...t, [field]: !t[field] }));
  }

  return (
    <div>
      <h2 className="font-display text-2xl sm:text-[1.7rem] font-semibold text-ink">Terms &amp; Conditions</h2>
      <p className="mt-2 text-[14.5px] text-ink-soft">এগিয়ে যাওয়ার আগে অনুগ্রহ করে পুরোটা পড়ুন।</p>

      <div className="mt-6 max-h-72 overflow-y-auto scroll-thin rounded-2xl border border-line bg-surface-alt/50 p-5 sm:p-6 space-y-5">
        {TERMS_SECTIONS.map((s) => (
          <div key={s.heading}>
            <p className="font-display text-[13.5px] font-semibold text-ink">{s.heading}</p>
            <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        <label
          className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition-colors duration-150 ${
            terms.readTerms ? "border-gold-deep/40 bg-gold-soft/30" : forceShowErrors && !terms.readTerms ? "border-bear" : "border-line"
          }`}
        >
          <input
            type="checkbox"
            checked={terms.readTerms}
            onChange={() => toggle("readTerms")}
            className="h-4 w-4 mt-0.5 accent-[#B8863D] shrink-0"
          />
          <span className="text-[14px] text-ink">আমি সকল Terms & Conditions সম্পূর্ণ পড়েছি ও সম্মত আছি।</span>
        </label>

        <label
          className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition-colors duration-150 ${
            terms.riskAware ? "border-gold-deep/40 bg-gold-soft/30" : forceShowErrors && !terms.riskAware ? "border-bear" : "border-line"
          }`}
        >
          <input
            type="checkbox"
            checked={terms.riskAware}
            onChange={() => toggle("riskAware")}
            className="h-4 w-4 mt-0.5 accent-[#B8863D] shrink-0"
          />
          <span className="text-[14px] text-ink">Trading risk সম্পর্কে আমি সচেতন</span>
        </label>

        {forceShowErrors && !bothChecked && (
          <p className="text-[12px] font-medium text-bear">এগিয়ে যেতে দুটো Checkbox-ই Check করতে হবে।</p>
        )}
      </div>
    </div>
  );
}
