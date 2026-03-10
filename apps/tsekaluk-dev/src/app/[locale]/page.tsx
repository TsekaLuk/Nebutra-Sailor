import { Hero } from "@/components/sections/hero";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { FocusSection } from "@/components/sections/focus-section";
import { ProcessSection } from "@/components/sections/process-section";
import { SelectedWorks } from "@/components/sections/selected-works";
import { NowPreview } from "@/components/sections/now-preview";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <FocusSection />
      <ProcessSection />
      <SelectedWorks />
      <NowPreview />
      <CtaSection />
    </>
  );
}
