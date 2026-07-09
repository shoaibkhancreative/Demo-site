import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

export default function NotFoundPage() {
  return (
    <section className="py-28 min-h-[60vh] flex items-center">
      <Container className="text-center">
        <p className="font-display text-6xl font-bold text-line-strong">404</p>
        <h1 className="mt-3 font-display text-2xl font-semibold text-ink">এই Page-টা খুঁজে পাওয়া যায়নি</h1>
        <p className="mt-2 text-ink-soft">লিংকটা হয়তো ভুল অথবা সরিয়ে ফেলা হয়েছে।</p>
        <Button to="/" variant="gold" className="mt-7">
          Homepage-এ ফিরে যান
        </Button>
      </Container>
    </section>
  );
}
