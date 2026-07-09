import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { chapters } from "../../lib/curriculum";

function ChapterRow({ chapter, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl border border-line bg-surface overflow-hidden transition-shadow duration-300 hover:shadow-card">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 sm:gap-5 px-5 sm:px-7 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-2xl sm:text-3xl font-semibold text-line-strong shrink-0 w-10 sm:w-12">
          {String(chapter.number).padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          <p className="font-display text-[16px] sm:text-lg font-semibold text-ink leading-snug">
            {chapter.title}
          </p>
          <p className="mt-0.5 text-xs sm:text-sm text-ink-faint">
            {chapter.levelLabel} · {chapter.classCount} Classes
          </p>
        </div>
        <span className="hidden sm:block text-sm font-bold text-gold shrink-0">${chapter.price}</span>
        <ChevronDown
          size={20}
          className={`text-ink-faint shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="px-5 sm:px-7 pb-6">
          <p className="text-sm text-ink-soft leading-relaxed border-t border-line pt-5 mb-5 max-w-2xl">
            {chapter.intro}
          </p>
          <ul className="space-y-3.5">
            {chapter.classes.map((cl) => (
              <li key={cl.number} className="flex gap-3 text-sm">
                <span className="text-ink-faint font-semibold shrink-0 w-7 font-display">
                  {String(cl.number).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-semibold text-ink leading-snug">{cl.title}</p>
                  <p className="text-ink-soft mt-0.5 leading-relaxed">{cl.tagline}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 border-t border-line pt-6">
            <Button to={`/chapters/${chapter.slug}`} variant="outline" size="sm" icon={ArrowRight}>
              সম্পূর্ণ Chapter দেখুন
            </Button>
            <Button to={`/checkout?package=chapter-${chapter.number}`} variant="primary" size="sm">
              এই Chapter Enroll করুন — ${chapter.price}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CurriculumOverview() {
  const [openSet, setOpenSet] = useState(() => new Set([1]));

  function toggle(num) {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(num)) next.delete(num);
      else next.add(num);
      return next;
    });
  }

  return (
    <section id="curriculum" className="py-20 sm:py-28 bg-surface-alt/60">
      <Container>
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold tracking-[0.14em] text-gold uppercase">Full Curriculum</span>
          <h2 className="mt-3 font-display text-3xl sm:text-[2.3rem] font-semibold text-ink leading-tight">
            ৭ Chapter, ৯৯ Class
          </h2>
          <p className="mt-4 text-[15px] text-ink-soft leading-relaxed">
            প্রতিটা Chapter Expand করে সব Class-এর Title ও Tagline দেখুন। প্রতিটা Chapter-এর সম্পূর্ণ Description ও Intro Video আছে এর নিজস্ব Page-এ।
          </p>
        </div>

        <div className="mt-12 space-y-4 max-w-3xl mx-auto">
          {chapters.map((c) => (
            <ChapterRow key={c.number} chapter={c} isOpen={openSet.has(c.number)} onToggle={() => toggle(c.number)} />
          ))}
        </div>
      </Container>
    </section>
  );
}
