import { useState } from "react";
import { Copy, Check, LifeBuoy } from "lucide-react";
import { PAYMENT_METHODS, SUPPORT_TELEGRAM_URL } from "../../lib/constants";
import { calculateTotal } from "../../lib/pricing";

export default function Step4Payment({ selection, paymentMethodId, setPaymentMethodId, forceShowErrors }) {
  const [copied, setCopied] = useState(false);
  const { total } = calculateTotal(selection);
  const method = PAYMENT_METHODS.find((m) => m.id === paymentMethodId);

  function copyAddress() {
    if (!method) return;
    navigator.clipboard?.writeText(method.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div>
      <h2 className="font-display text-2xl sm:text-[1.7rem] font-semibold text-ink">Payment</h2>
      <p className="mt-2 text-[14.5px] text-ink-soft">Payment Method বেছে নিন এবং সঠিক Amount পাঠান।</p>

      <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        {PAYMENT_METHODS.map((m) => (
          <button
            key={m.id}
            onClick={() => setPaymentMethodId(m.id)}
            className={`rounded-xl border p-3.5 text-left transition-all duration-150 ${
              paymentMethodId === m.id ? "border-gold bg-gold-soft/40" : "border-line bg-surface hover:border-line-strong"
            }`}
          >
            <p className="text-[13px] font-semibold text-ink">{m.label}</p>
            <p className="text-[11px] text-ink-faint">{m.subLabel}</p>
          </button>
        ))}
      </div>

      {forceShowErrors && !paymentMethodId && (
        <p className="mt-2 text-[12px] font-medium text-bear">একটি Payment Method Select করুন।</p>
      )}

      {method && (
        <div className="mt-6 rounded-2xl border border-line bg-surface-alt/50 p-5 sm:p-6">
          <p className="text-xs font-semibold text-ink-soft mb-2">{method.label} ({method.subLabel}) — এই Address-এ পাঠান:</p>
          <div className="flex items-center gap-2">
            <code className="flex-1 min-w-0 truncate rounded-lg bg-surface border border-line px-3.5 py-2.5 text-[13px] text-ink">
              {method.address}
            </code>
            <button
              onClick={copyAddress}
              className="shrink-0 flex items-center gap-1.5 rounded-lg bg-ink text-white px-3.5 py-2.5 text-xs font-semibold hover:bg-[#1c2340] transition-colors"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <div className="mt-5 flex items-center justify-between rounded-xl bg-ink px-5 py-4">
            <span className="text-white/60 text-sm">মোট পাঠাতে হবে</span>
            <span className="font-display text-xl font-bold text-white">${total} USDT</span>
          </div>
        </div>
      )}

      <a
        href={SUPPORT_TELEGRAM_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-signal/30 bg-signal-soft px-5 py-3.5 text-sm font-semibold text-signal-deep hover:bg-signal-soft/70 transition-colors"
      >
        <LifeBuoy size={16} />
        Crypto দিয়ে Payment করতে সমস্যা হচ্ছে? Get Support
      </a>
    </div>
  );
}
