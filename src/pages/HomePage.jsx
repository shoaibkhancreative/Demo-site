import Hero from "../components/home/Hero";
import ValueProps from "../components/home/ValueProps";
import CurriculumOverview from "../components/home/CurriculumOverview";
import PricingSection from "../components/home/PricingSection";
import TrustIndicators from "../components/home/TrustIndicators";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import FinalCTA from "../components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <ValueProps />
      <CurriculumOverview />
      <PricingSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
