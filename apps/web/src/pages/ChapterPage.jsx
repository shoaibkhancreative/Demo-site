import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import VideoEmbed from '@/components/site/VideoEmbed';
import { getChapterBySlug, chapters } from '@/data/chapters';
import { formatBDT } from '@/data/pricing';

export default function ChapterPage() {
  const { slug } = useParams();
  const chapter = getChapterBySlug(slug);

  if (!chapter) return <Navigate to="/" replace />;

  const next = chapters.find((c) => c.id === chapter.id + 1);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />

      <section className="border-b border-border bg-secondary/40 py-14">
        <div className="mx-auto max-w-[72rem] px-6">
          <Link to="/#curriculum" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft size={15} /> Back to full curriculum
          </Link>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                Chapter {String(chapter.id).padStart(2, '0')} · {chapter.classes.length} classes
              </p>
              <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {chapter.title}
              </h1>
              <p className="mt-3 text-lg italic text-muted-foreground">{chapter.tagline}</p>
              <p className="mt-5 max-w-xl text-muted-foreground">{chapter.overview}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span className="font-display text-2xl font-bold text-foreground">{formatBDT(chapter.price)}</span>
                <Link
                  to={`/checkout?chapter=${chapter.id}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform active:scale-[0.98] hover:brightness-110"
                >
                  Enroll in This Chapter <ArrowRight size={16} />
                </Link>
                <Link
                  to="/checkout?package=bundle"
                  className="text-sm font-semibold text-brand hover:underline"
                >
                  Or get the Full Bundle for ৳7,999
                </Link>
              </div>
            </div>
            <VideoEmbed title={`${chapter.title} — Preview`} />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[60rem] px-6">
          <h2 className="font-display text-2xl font-bold text-foreground">Full Class Breakdown</h2>
          <p className="mt-2 text-muted-foreground">Every class in this chapter, with the complete description.</p>

          <ol className="mt-10 space-y-6">
            {chapter.classes.map((cls, idx) => (
              <li key={cls.title} className="flex gap-5 rounded-2xl border border-border bg-card p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-accent-foreground">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">{cls.title}</p>
                  <p className="mt-1 text-sm italic text-brand">{cls.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cls.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-14 rounded-2xl border border-border bg-navy p-8 text-navy-foreground">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="font-display text-lg font-semibold">Ready for {chapter.title}?</p>
                <p className="mt-1 text-sm text-navy-foreground/60">
                  Lifetime access, one-time payment of {formatBDT(chapter.price)}.
                </p>
              </div>
              <Link
                to={`/checkout?chapter=${chapter.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-brand-foreground transition-transform active:scale-[0.98] hover:brightness-110"
              >
                Enroll Now <ArrowRight size={16} />
              </Link>
            </div>
            {next && (
              <Link
                to={`/chapter/${next.slug}`}
                className="mt-6 flex items-center gap-2 border-t border-navy-foreground/10 pt-5 text-sm text-navy-foreground/70 hover:text-navy-foreground"
              >
                <Check size={15} /> Next chapter: {next.title}
                <ArrowRight size={14} className="ml-auto" />
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
