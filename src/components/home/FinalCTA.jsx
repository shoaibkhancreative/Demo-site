import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 sm:py-20 text-center">
          <div
            className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[560px] rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(ellipse, var(--color-gold), transparent 70%)" }}
          />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight max-w-xl mx-auto">
              আজই শুরু করুন আপনার Trading Journey
            </h2>
            <p className="mt-4 text-white/60 max-w-md mx-auto text-[15px]">
              Chapter 1 দিয়ে শুরু করুন, অথবা সরাসরি পুরো Bundle নিয়ে নিন — Lifetime Access, কোনো Sign-up ছাড়াই।
            </p>
            <div className="mt-8">
              <Button to="/checkout" variant="gold" size="lg" icon={ArrowRight}>
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
