import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Users, TrendingUp, Award, Check, Lock } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import VideoEmbed from '@/components/site/VideoEmbed';
import { chapters, totalClasses } from '@/data/chapters';
import { BUNDLE_PRICE, addons, formatBDT } from '@/data/pricing';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const trustStats = [
  { label: 'Chapters', value: '13' },
  { label: 'On-Demand Classes', value: `${totalClasses}+` },
  { label: 'Lifetime Access', value: '100%' },
  { label: 'Money-Back Guarantee', value: '7 Days' },
];

const faqs = [
  {
    q: 'Do I need any trading experience to start?',
    a: 'None at all. Chapter 1 is built for complete beginners and takes you step by step to an institutional-level vocabulary before anything advanced begins.',
  },
  {
    q: 'Is this lifetime access, or a subscription?',
    a: 'Every chapter — individually or as the Full Bundle — is a one-time payment for lifetime access. Only the optional Market Insight Daily and 1-on-1 Consultation add-ons run for a fixed duration.',
  },
  {
    q: 'Can I buy individual chapters instead of the full bundle?',
    a: "Yes. Every chapter is available individually. The Full Bundle simply combines all 13 at a lower total cost and includes free Priority Support and a 7-day money-back guarantee — a benefit exclusive to the bundle.",
  },
  {
    q: 'Is there a refund policy?',
    a: 'The Full Bundle includes a 7-day money-back guarantee. Individual chapter purchases are final and non-refundable — please review the curriculum carefully before buying a single chapter.',
  },
  {
    q: 'How do I pay, and is it safe?',
    a: 'Payment is handled via Binance UID or USDT (TRC20/BEP20). After payment you send proof directly through our Telegram bot, which our team verifies and confirms manually within hours.',
  },
  {
    q: 'Do I need to sign up or create an account?',
    a: 'No. There is no login or account creation. You simply choose your package, fill in your details, pay, and confirm — everything is handled through Telegram.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary/60 to-background pb-20 pt-16 md:pt-24">
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
        <div className="mx-auto grid max-w-[90rem] gap-14 px-6 lg:grid-cols-[1.05fr,1fr] lg:items-center">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand">
              Institutional Trading Mentorship
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
              Trade like the institutions
              <br />
              <span className="mark-underline">actually</span> hunting your stop-loss.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              13 chapters. {totalClasses}+ classes. One complete system for reading liquidity, market structure,
              psychology, and risk the way professional desks do — built from zero to funded trader.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/checkout"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform active:scale-[0.98] hover:brightness-110"
              >
                Join the Mentorship
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center rounded-full border border-border px-7 py-4 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                See Full Curriculum
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {trustStats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}>
            <VideoEmbed title="Mentorship Introduction" />
            <p className="mt-3 text-center text-sm text-muted-foreground">
              Watch the 2-minute program overview before you enroll.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="border-b border-border bg-background py-14">
        <div className="mx-auto max-w-[90rem] px-6">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, title: '7-Day Guarantee', desc: 'Full Bundle buyers are covered by a no-questions 7-day money-back guarantee.' },
              { icon: Users, title: 'Built for Beginners → Pros', desc: 'Chapter 1 starts from zero. Chapter 13 ends with your own professional trading plan.' },
              { icon: Award, title: 'Institutional Curriculum', desc: '119+ classes covering liquidity, structure, psychology, risk, and prop-firm mastery.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4 rounded-2xl border border-border bg-secondary/40 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon size={20} strokeWidth={2.2} />
                </span>
                <div>
                  <p className="font-display font-semibold text-foreground">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section id="curriculum" className="py-20">
        <div className="mx-auto max-w-[72rem] px-6">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">The Curriculum</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              13 chapters. One complete trading education.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every chapter can be purchased individually, or unlocked together with the Full Bundle. Click a chapter to preview its classes.
            </p>
          </motion.div>

          <div className="mt-14 space-y-4">
            {chapters.map((chapter) => (
              <motion.div key={chapter.id} {...fadeUp}>
                <Accordion type="single" collapsible>
                  <AccordionItem
                    value={`chapter-${chapter.id}`}
                    className="overflow-hidden rounded-2xl border border-border bg-card px-0 shadow-sm"
                  >
                    <AccordionTrigger className="px-6 py-5 hover:no-underline [&>svg]:shrink-0">
                      <div className="flex w-full flex-col gap-1 text-left sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                            Chapter {String(chapter.id).padStart(2, '0')} · {chapter.classes.length} classes
                          </p>
                          <p className="mt-1 font-display text-lg font-semibold text-foreground">{chapter.title}</p>
                          <p className="mt-0.5 text-sm italic text-muted-foreground">{chapter.tagline}</p>
                        </div>
                        <div className="flex items-center gap-3 pr-2 sm:flex-col sm:items-end sm:pr-4">
                          <span className="font-display text-xl font-bold text-foreground">{formatBDT(chapter.price)}</span>
                          <Link
                            to={`/chapter/${chapter.slug}`}
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs font-semibold text-brand underline-offset-2 hover:underline"
                          >
                            View Chapter Page
                          </Link>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <ul className="grid gap-3 border-t border-border pt-5 sm:grid-cols-2">
                        {chapter.classes.map((cls) => (
                          <li key={cls.title} className="flex gap-3 text-sm">
                            <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                            <div>
                              <p className="font-medium text-foreground">{cls.title}</p>
                              <p className="text-muted-foreground">{cls.tagline}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={`/chapter/${chapter.slug}`}
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                      >
                        Read full chapter details <ArrowRight size={14} />
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-y border-border bg-secondary/40 py-20">
        <div className="mx-auto max-w-[72rem] px-6">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">Pricing</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Buy one chapter, or unlock everything.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr,1.1fr]">
            <motion.div {...fadeUp} className="rounded-2xl border border-border bg-card p-8">
              <p className="font-display text-lg font-semibold text-foreground">Individual Chapters</p>
              <p className="mt-1 text-sm text-muted-foreground">Start with what you need most, from ৳300.</p>
              <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
                {chapters.slice(0, 6).map((c) => (
                  <li key={c.id} className="flex justify-between border-b border-dashed border-border pb-2">
                    <span>{String(c.id).padStart(2, '0')}. {c.title}</span>
                    <span className="font-semibold text-foreground">{formatBDT(c.price)}</span>
                  </li>
                ))}
                <li className="pt-1 text-xs text-muted-foreground">+ 7 more chapters, up to ৳1,599 each.</li>
              </ul>
              <Link
                to="/checkout"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-border py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Choose Individual Chapters
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="relative overflow-hidden rounded-2xl border-2 border-brand bg-navy p-8 text-navy-foreground shadow-2xl shadow-brand/20"
            >
              <span className="absolute right-6 top-6 rounded-full bg-brand px-3 py-1 text-xs font-bold text-brand-foreground">
                BEST VALUE
              </span>
              <p className="font-display text-lg font-semibold">Full Bundle — All 13 Chapters</p>
              <p className="mt-1 text-sm text-navy-foreground/60">Lifetime access to the entire mentorship.</p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold">{formatBDT(BUNDLE_PRICE)}</span>
                <span className="text-sm text-navy-foreground/50">one-time</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  'All 13 chapters, 119+ classes, lifetime access',
                  'Priority Support included for FREE',
                  '7-Day Money-Back Guarantee (bundle only)',
                  'Every future chapter update, included',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/checkout?package=bundle"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3.5 text-sm font-bold text-brand-foreground transition-transform active:scale-[0.98] hover:brightness-110"
              >
                Get Lifetime Access <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="mt-10 rounded-2xl border border-border bg-card p-8">
            <p className="font-display text-lg font-semibold text-foreground">Optional Add-ons</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {addons.map((a) => (
                <div key={a.id} className="rounded-xl border border-border p-5">
                  <p className="font-medium text-foreground">{a.name}</p>
                  <p className="text-xs text-muted-foreground">{a.duration}</p>
                  <p className="mt-3 font-display text-lg font-bold text-foreground">{formatBDT(a.price)}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Lock size={14} /> Priority Support is free automatically when you choose the Full Bundle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Questions, answered.
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="mt-10">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`faq-${i}`}
                  className="rounded-xl border border-border bg-card px-5"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-border bg-navy py-20 text-navy-foreground">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <TrendingUp className="mx-auto text-brand" size={36} />
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Your next chart doesn't have to feel like noise.
          </h2>
          <p className="mt-4 text-navy-foreground/65">
            Enroll today, get instant lifetime access, and start reading the market the way institutions do.
          </p>
          <Link
            to="/checkout"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-bold text-brand-foreground transition-transform active:scale-[0.98] hover:brightness-110"
          >
            Join Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
