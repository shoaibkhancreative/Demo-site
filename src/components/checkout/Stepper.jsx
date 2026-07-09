import { Check } from "lucide-react";

const STEPS = ["Package", "তথ্য", "Terms", "Payment", "Confirm"];

export default function Stepper({ current }) {
  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 mb-10 sm:mb-14 overflow-x-auto px-2">
      {STEPS.map((label, i) => {
        const num = i + 1;
        const isDone = num < current;
        const isCurrent = num === current;
        return (
          <div key={label} className="flex items-center shrink-0">
            <div className="flex flex-col items-center gap-1.5">
              <span
                className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full text-xs sm:text-sm font-bold transition-colors duration-300 ${
                  isDone
                    ? "bg-gold text-white"
                    : isCurrent
                    ? "bg-ink text-white"
                    : "bg-surface-alt text-ink-faint border border-line-strong"
                }`}
              >
                {isDone ? <Check size={15} strokeWidth={3} /> : num}
              </span>
              <span
                className={`text-[10px] sm:text-xs font-semibold whitespace-nowrap ${
                  isCurrent ? "text-ink" : "text-ink-faint"
                }`}
              >
                {label}
              </span>
            </div>
            {num < STEPS.length && (
              <div className={`h-[2px] w-6 sm:w-12 mx-1 sm:mx-2 mb-4 ${isDone ? "bg-gold" : "bg-line-strong"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
