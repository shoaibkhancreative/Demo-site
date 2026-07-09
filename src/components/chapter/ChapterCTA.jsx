import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { chapters } from "../../lib/curriculum";
import { BUNDLE_PRICE, BUNDLE_SAVINGS } from "../../lib/constants";

export default function ChapterCTA({ chapter }) {
  const prev = chapters.find((c) => c.number === chapter.number - 1);
  const next = chapters.find((c) => c.number === chapter.number + 1);

  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl bg-ink px-7 sm:px-10 py-10 sm:py-12 text-center relative overflow-hidden">
            <div
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-96 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(ellipse, var(--color-gold), transparent 70%)" }}
            />
            <div className="relative">
              <Badge tone="gold" icon={Sparkles}>Save ${BUNDLE_SAVINGS} with the Bundle</Badge>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl font-semibold text-white leading-tight">
                সব {chapters.length}টি Chapter একসাথে নিন মাত্র ${BUNDLE_PRICE}-এ
              </h3>
              <p className="mt-3 text-white/60 text-sm max-w-md mx-auto">
                Priority Support ফ্রি, আর একমাত্র এই Package-এই আছে ৭-Day Money-Back Guarantee।
              </p>
              <Button to="/checkout?package=bundle" variant="gold" size="lg" className="mt-6">
                পুরো Bundle দেখুন
              </Button>
            </div>
          </div>

          <div className="mt-6 flex items-stretch justify-between gap-4">
            {prev ? (
              <Button
                to={`/chapters/${prev.slug}`}
                variant="outline"
                icon={ArrowLeft}
                iconPosition="left"
                className="flex-1 !justify-start text-left"
              >
                <span className="truncate">Chapter {prev.number}: {prev.title}</span>
              </Button>
            ) : (
              <span className="flex-1" />
            )}
            {next && (
              <Button
                to={`/chapters/${next.slug}`}
                variant="outline"
                icon={ArrowRight}
                className="flex-1 !justify-end text-right"
              >
                <span className="truncate">Chapter {next.number}: {next.title}</span>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
