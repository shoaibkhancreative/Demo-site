import { Layers, Compass, Brain, Route } from "lucide-react";
import Container from "../ui/Container";
import MarketStructureGraphic from "./MarketStructureGraphic";

const STAGES = [
  {
    icon: Compass,
    title: "মার্কেটের ভিত্তি ও ভাষা",
    range: "Chapter 1–2",
    text: "আগে মার্কেট আসলে কীভাবে কাজ করে সেই Foundation, তারপর Liquidity, Order Block, Fair Value Gap — Institutional Trader-দের আসল Vocabulary।",
  },
  {
    icon: Layers,
    title: "Structure, Time ও এর পেছনের কারণ",
    range: "Chapter 3–4",
    text: "Price কীভাবে ও কখন Structure ভাঙে, Session ও Killzone কীভাবে কাজ করে, আর এর পেছনে থাকা Algorithm ও Central Bank-এর আসল ভূমিকা।",
  },
  {
    icon: Brain,
    title: "Professional Mindset ও Strategy",
    range: "Chapter 5–6",
    text: "Risk Management, Psychology ও Journaling দিয়ে একজন Professional-এর মানসিকতা, তারপর সবকিছু মিলিয়ে বাস্তব, Actionable Strategy।",
  },
  {
    icon: Route,
    title: "নিজের Plan ও Prop Firm Roadmap",
    range: "Chapter 7",
    text: "শেখা সব কিছু দিয়ে নিজের একটা লিখিত Trading Plan তৈরি করা, এবং সেই Plan নিয়ে Prop Firm-এ Funded হওয়ার সম্পূর্ণ পথ।",
  },
];

export default function ValueProps() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
          <div>
            <span className="text-xs font-bold tracking-[0.14em] text-gold uppercase">
              যে Structure আপনি শিখবেন
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-[2.3rem] font-semibold leading-tight text-ink">
              প্রতিটা Chart-এর পেছনে একটা Design থাকে।
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft max-w-md">
              Liquidity Sweep, Order Block আর CHoCH — এই Mentorship আপনাকে দেখাবে Smart Money আসলে কোথায় পায়ের ছাপ রেখে যায়, আর কীভাবে সেটা আগে থেকেই ধরতে হয়।
            </p>
          </div>
          <MarketStructureGraphic className="w-full h-auto" />
        </div>

        <div className="mt-20">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink text-center max-w-2xl mx-auto leading-snug">
            ৭টি Chapter, একটাই যুক্তিসঙ্গত ক্রম
          </h3>
          <p className="mt-3 text-center text-ink-soft max-w-lg mx-auto text-[15px]">
            প্রতিটা Concept-এর জন্য ঠিক একটাই Home — কোনো কিছু দুইবার শেখানো হয় না, আর প্রতিটা Chapter আগেরটার উপর ভিত্তি করেই তৈরি।
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STAGES.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-line bg-surface p-6 shadow-card hover:shadow-card-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-soft text-gold-deep">
                  <s.icon size={20} strokeWidth={2} />
                </span>
                <p className="mt-4 text-xs font-bold tracking-wide text-signal">{s.range}</p>
                <p className="mt-1.5 font-display text-[16px] font-semibold text-ink leading-snug">
                  {s.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
