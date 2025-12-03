import { Locale, locales, isValidLocale } from "@/lib/i18n/locales";
import {
  HeroSection,
  TrustRibbon,
  SplitNarrative,
  ArchitectureShowcase,
  FeatureBento,
  StatsBreak,
  TerminalDemo,
  TestimonialsSection,
  VisionSection,
  PricingSection,
  FAQSection,
  FinalCTA,
  FooterMinimal,
} from "@/components/landing";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function LocalizedHomePage({ params }: Props) {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : "en";

  return (
    <main className="min-h-screen bg-black">
      {/* 1. Immersive Hero */}
      <HeroSection />

      {/* 2. Trust Ribbon - Tech Logos */}
      <TrustRibbon />

      {/* 3. Split Narrative - Problem/Solution */}
      <SplitNarrative />

      {/* 4. Architecture Showcase - File Tree */}
      <ArchitectureShowcase />

      {/* 5. Feature Bento Grid */}
      <FeatureBento />

      {/* 6. Stats Break */}
      <StatsBreak />

      {/* 7. Terminal Demo */}
      <TerminalDemo />

      {/* 8. Testimonials */}
      <TestimonialsSection />

      {/* 9. Company Vision */}
      <VisionSection />

      {/* 10. Pricing */}
      <PricingSection />

      {/* 11. FAQ */}
      <FAQSection />

      {/* 12. Final CTA */}
      <FinalCTA />

      {/* 13. Footer */}
      <FooterMinimal />
    </main>
  );
}
