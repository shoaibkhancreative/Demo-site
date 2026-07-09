import { useState } from "react";
import { CheckCircle2, Send, ShieldCheck } from "lucide-react";
import OrderSummaryCard from "./OrderSummaryCard";
import { PAYMENT_METHODS } from "../../lib/constants";
import { buildTelegramRedirectUrl } from "../../lib/telegram";

export default function Step5Confirm({ selection, userInfo, paymentMethodId }) {
  const [confirmed, setConfirmed] = useState(false);
  const method = PAYMENT_METHODS.find((m) => m.id === paymentMethodId);

  function handleClick() {
    if (!confirmed) {
      setConfirmed(true);
      return;
    }
    const url = buildTelegramRedirectUrl({ selection, userInfo, paymentMethodId });
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div>
      <h2 className="font-display text-2xl sm:text-[1.7rem] font-semibold text-ink">সব ঠিক আছে?</h2>
      <p className="mt-2 text-[14.5px] text-ink-soft">শেষবারের মতো দেখে নিন, তারপর Confirm করুন।</p>

      <div className="mt-7">
        <OrderSummaryCard selection={selection} />
      </div>

      <div className="mt-5 rounded-2xl border border-line bg-surface-alt/50 p-5 space-y-2">
        <div className="flex justify-between text-[13.5px]">
          <span className="text-ink-faint">নাম</span>
          <span className="text-ink font-medium">{userInfo.name}</span>
        </div>
        <div className="flex justify-between text-[13.5px]">
          <span className="text-ink-faint">যোগাযোগ</span>
          <span className="text-ink font-medium truncate max-w-[60%] text-right">
            {[userInfo.phone, userInfo.email, userInfo.telegram].filter(Boolean).join(" · ") || "—"}
          </span>
        </div>
        <div className="flex justify-between text-[13.5px]">
          <span className="text-ink-faint">Payment Method</span>
          <span className="text-ink font-medium">{method?.label || "—"}</span>
        </div>
      </div>

      {confirmed && (
        <div className="mt-5 flex items-start gap-3 rounded-xl bg-signal-soft border border-signal/20 p-4">
          <Send size={17} className="text-signal-deep shrink-0 mt-0.5" />
          <p className="text-[13px] text-signal-deep leading-relaxed">
            নিচের বাটনে ক্লিক করলে Telegram Open হবে এবং আপনার Order Details সহ একটা Message লেখা থাকবে — শুধু Send করুন, তারপর সেখানেই Payment Screenshot পাঠিয়ে দিন।
          </p>
        </div>
      )}

      <button
        onClick={handleClick}
        className="mt-6 w-full flex items-center justify-center gap-2.5 rounded-full bg-gold text-white py-4 text-[15px] font-semibold shadow-[0_4px_14px_-4px_rgba(184,134,61,0.55)] hover:bg-gold-deep transition-all duration-200"
      >
        {confirmed ? (
          <>
            <Send size={18} /> Send Proof of Payment
          </>
        ) : (
          <>
            <CheckCircle2 size={18} /> Confirm &amp; Join
          </>
        )}
      </button>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-[11.5px] text-ink-faint">
        <ShieldCheck size={13} /> আপনার তথ্য শুধু Order Process করতে ব্যবহৃত হবে।
      </p>
    </div>
  );
}
