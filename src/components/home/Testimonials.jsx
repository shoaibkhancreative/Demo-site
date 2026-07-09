import { Quote } from "lucide-react";
import Container from "../ui/Container";

// Placeholder slots only - no fabricated names, quotes, or stats. Swap each
// one for a real student's words (with their permission) before launch.
const PLACEHOLDER_SLOTS = [
  { initials: "AH", name: "[Student Name]", role: "[Chapter completed]" },
  { initials: "MR", name: "[Student Name]", role: "[Chapter completed]" },
  { initials: "SK", name: "[Student Name]", role: "[Chapter completed]" },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold tracking-[0.14em] text-gold uppercase">Student Voices</span>
          <h2 className="mt-3 font-display text-3xl sm:text-[2.3rem] font-semibold text-ink leading-tight">
            যারা ইতিমধ্যে শিখছেন
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {PLACEHOLDER_SLOTS.map((t, i) => (
            <div key={i} className="rounded-2xl border border-dashed border-line-strong bg-surface-alt/50 p-6">
              <Quote size={22} className="text-line-strong" />
              <p className="mt-3 text-[14px] text-ink-faint italic leading-relaxed">
                [এখানে একটা সত্যিকারের Student Review/Quote যোগ করুন — Launch-এর আগে এই Placeholder পরিবর্তন করে নিন।]
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-alt text-ink-faint text-xs font-bold border border-line">
                  {t.initials}
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-ink-faint">{t.name}</p>
                  <p className="text-[11px] text-ink-faint">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
