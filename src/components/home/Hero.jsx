import { ArrowRight, Infinity as InfinityIcon, ShieldCheck, BookOpen } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import VideoEmbed from "../ui/VideoEmbed";
import { MAIN_INTRO_VIDEO_ID } from "../../lib/constants";
import { TOTAL_CLASSES, chapters } from "../../lib/curriculum";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-gold-soft), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute top-40 -left-40 h-[420px] w-[420px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-signal-soft), transparent 70%)" }}
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-4 py-1.5 text-xs font-semibold tracking-wide text-ink-soft">
            <BookOpen size={13} className="text-gold" />
            ICT-Based Trading Mentorship · {chapters.length} Chapter · {TOTAL_CLASSES} Class
          </span>

          <h1 className="mt-6 font-display text-[2.1rem] sm:text-5xl md:text-[3.4rem] font-semibold leading-[1.1] tracking-tight text-ink">
            Smart Money যেভাবে মার্কেট পড়ে,
            <br className="hidden sm:block" /> সেভাবেই পড়তে শিখুন।
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-[16px] sm:text-lg leading-relaxed text-ink-soft">
            Market Structure ও Liquidity বোঝা থেকে শুরু করে নিজের সম্পূর্ণ Trading Plan তৈরি করা পর্যন্ত — {chapters.length}টি Chapter-এ সাজানো একটা সম্পূর্ণ Roadmap। কোনো Sign-up নেই, ঝামেলাবিহীন।
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button to="/checkout" variant="gold" size="lg" icon={ArrowRight}>
              Join Now
            </Button>
            <Button href="#curriculum" variant="outline" size="lg">
              সম্পূর্ণ Curriculum দেখুন
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm font-medium text-ink-soft">
            <span className="inline-flex items-center gap-1.5">
              <InfinityIcon size={16} className="text-gold" /> Lifetime Access
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-gold" /> 7-Day Money-Back (Bundle)
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BookOpen size={16} className="text-gold" /> {TOTAL_CLASSES} Classes, {chapters.length} Chapters
            </span>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <VideoEmbed videoId={MAIN_INTRO_VIDEO_ID} title="NLT Mentorship — Full Intro" />
        </div>
      </Container>
    </section>
  );
}
