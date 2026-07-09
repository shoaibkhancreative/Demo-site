import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import VideoEmbed from "../ui/VideoEmbed";
import { CHAPTER_VIDEO_IDS } from "../../lib/constants";

export default function ChapterHero({ chapter }) {
  const isFirst = chapter.number === 1;

  return (
    <section className="pt-10 pb-16 sm:pt-14 sm:pb-20">
      <Container>
        <Button to="/#curriculum" variant="ghost" size="sm" icon={ArrowLeft} iconPosition="left" className="!px-0">
          সব Chapter দেখুন
        </Button>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-4 py-1.5 text-xs font-semibold tracking-wide text-ink-soft">
              <BookOpen size={13} className="text-gold" />
              Chapter {chapter.number} · {chapter.levelLabel}
            </span>

            <h1 className="mt-5 font-display text-[1.9rem] sm:text-4xl md:text-[2.6rem] font-semibold leading-[1.12] tracking-tight text-ink">
              {chapter.title}
            </h1>

            <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-ink-soft max-w-lg">
              {chapter.intro}
            </p>

            <div className="mt-7 flex items-center gap-2 flex-wrap">
              <div className="flex items-baseline gap-1.5 rounded-full bg-surface-alt px-4 py-2">
                <span className="font-display text-xl font-bold text-ink">${chapter.price}</span>
                <span className="text-xs text-ink-faint">· {chapter.classCount} Classes</span>
              </div>
            </div>

            {!isFirst && (
              <p className="mt-4 text-xs text-ink-faint max-w-sm leading-relaxed">
                📌 Chapter গুলো ক্রমানুসারে Unlock হয় — এই Chapter Enroll করলে Chapter 1–{chapter.number} সবগুলোই একসাথে পাবেন।
              </p>
            )}

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button to={`/checkout?package=chapter-${chapter.number}`} variant="gold" size="lg" icon={ArrowRight}>
                এই Chapter Enroll করুন
              </Button>
              <Button to="/checkout?package=bundle" variant="outline" size="lg">
                পুরো Bundle দেখুন
              </Button>
            </div>
          </div>

          <VideoEmbed videoId={CHAPTER_VIDEO_IDS[chapter.number]} title={`Chapter ${chapter.number} Intro — ${chapter.title}`} />
        </div>
      </Container>
    </section>
  );
}
