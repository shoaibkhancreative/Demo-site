import { Check, Sparkles, TrendingUp, Headset, GraduationCap } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { chapters } from "../../lib/curriculum";
import { BUNDLE_PRICE, INDIVIDUAL_TOTAL, BUNDLE_SAVINGS, ADDONS } from "../../lib/constants";

const ADDON_ICONS = { p: Headset, m: TrendingUp, c: GraduationCap };

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <Container>
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold tracking-[0.14em] text-gold uppercase">Pricing</span>
          <h2 className="mt-3 font-display text-3xl sm:text-[2.3rem] font-semibold text-ink leading-tight">
            Chapter ধরে ধরে শুরু করুন, বা পুরোটাই নিন
          </h2>
          <p className="mt-4 text-[15px] text-ink-soft leading-relaxed">
            Lifetime Access — সব Chapter-ই একবার কিনলে চিরকালের জন্য আপনার।
          </p>
        </div>

        {/* Bundle - hero pricing card */}
        <div className="mt-14 mx-auto max-w-3xl rounded-3xl border-2 border-gold bg-surface p-7 sm:p-10 shadow-card-lg relative overflow-hidden">
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-60 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--color-gold-soft), transparent 70%)" }}
          />
          <div className="relative flex flex-col sm:flex-row sm:items-start justify-between gap-8">
            <div>
              <Badge tone="gold" icon={Sparkles}>Best Value · Save ${BUNDLE_SAVINGS}</Badge>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink">Full Bundle — All {chapters.length} Chapters</h3>
              <p className="mt-2 text-[15px] text-ink-soft max-w-sm leading-relaxed">
                {chapters.length}টি Chapter-এর সবকটি Class, Lifetime Access সহ। সাথে ফ্রি Priority Support ও একমাত্র এই Package-এই আছে ৭-দিনের Money-Back Guarantee।
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  `${chapters.length}টি Chapter — সবগুলো Class, Lifetime Access`,
                  "Priority Support সম্পূর্ণ ফ্রি (সাধারণত $8)",
                  "৭-Day Money-Back Guarantee",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] text-ink">
                    <Check size={17} className="text-gold shrink-0 mt-0.5" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="shrink-0 sm:text-right w-full sm:w-auto">
              <div className="flex sm:justify-end items-baseline gap-2">
                <span className="text-ink-faint line-through text-lg">${INDIVIDUAL_TOTAL}</span>
                <span className="font-display text-4xl font-bold text-ink">${BUNDLE_PRICE}</span>
              </div>
              <p className="text-xs text-ink-faint mt-1">one-time payment</p>
              <Button to="/checkout?package=bundle" variant="gold" size="lg" className="mt-5 w-full sm:w-auto">
                Get the Bundle
              </Button>
            </div>
          </div>
        </div>

        {/* Individual chapters */}
        <div className="mt-14">
          <p className="text-center text-sm font-semibold text-ink-soft mb-6">অথবা প্রতিটা Chapter আলাদাভাবে নিন</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {chapters.map((c) => (
              <div
                key={c.number}
                className="rounded-2xl border border-line bg-surface p-5 flex flex-col hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="font-display text-xl font-bold text-line-strong">
                  {String(c.number).padStart(2, "0")}
                </span>
                <p className="mt-2 font-display text-[14px] font-semibold text-ink leading-snug flex-1">
                  {c.title}
                </p>
                <p className="mt-2 text-xs text-ink-faint">{c.classCount} Classes</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display font-bold text-ink">${c.price}</span>
                  <Button to={`/checkout?package=chapter-${c.number}`} variant="outline" size="sm" className="!px-3 !py-1.5 text-xs">
                    Enroll
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add-ons */}
        <div className="mt-16">
          <p className="text-center text-sm font-semibold text-ink-soft mb-6">Add-ons — Checkout-এর সময় যোগ করতে পারবেন</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {Object.values(ADDONS).map((a) => {
              const Icon = ADDON_ICONS[a.key];
              return (
                <div key={a.key} className="rounded-2xl border border-line bg-surface p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-signal-soft text-signal-deep">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <p className="mt-4 font-display font-semibold text-ink">{a.name}</p>
                  <p className="mt-1.5 text-[13px] text-ink-soft leading-relaxed">{a.description}</p>
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="font-display text-lg font-bold text-ink">${a.price}</span>
                    <span className="text-xs text-ink-faint">/ {a.durationLabel}</span>
                  </div>
                  {a.key === "p" && (
                    <p className="mt-1 text-[11px] font-semibold text-gold">Bundle-এ সম্পূর্ণ ফ্রি</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
