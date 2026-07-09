import Container from "../ui/Container";

export default function ClassList({ chapter }) {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl sm:text-[1.7rem] font-semibold text-ink mb-8">
            এই Chapter-এ যা যা থাকছে
          </h2>

          <div className="space-y-3">
            {chapter.classes.map((cl) => (
              <div
                key={cl.number}
                className="rounded-2xl border border-line bg-surface p-6 sm:p-7 hover:shadow-card transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <span className="font-display text-2xl sm:text-3xl font-semibold text-line-strong shrink-0 w-10 sm:w-12 pt-0.5">
                    {String(cl.number).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-[16px] sm:text-[17px] font-semibold text-ink leading-snug">
                      {cl.title}
                    </p>
                    <p className="mt-1.5 text-[13.5px] italic text-gold-deep leading-snug">
                      {cl.tagline}
                    </p>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                      <span className="font-semibold text-ink-soft">কী থাকছে: </span>
                      {cl.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
