import { Locale, locales, isValidLocale } from "@/lib/i18n/locales";
import {
  LandingPageWrapper,
  TrackedSection,
  Navbar,
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
    <LandingPageWrapper>
      <main className="min-h-screen bg-background">
        {/* Navigation */}
        <Navbar />

        {/* 1. Immersive Hero */}
        <TrackedSection id="hero" label="Home">
          <HeroSection />
        </TrackedSection>

        {/* 2. Trust Ribbon - Tech Logos */}
        <TrustRibbon />

        {/* 3. Split Narrative - Problem/Solution */}
        <TrackedSection id="solution" label="Solution">
          <SplitNarrative />
        </TrackedSection>

        {/* 4. Architecture Showcase - File Tree */}
        <TrackedSection id="architecture" label="Architecture">
          <ArchitectureShowcase />
        </TrackedSection>

        {/* 5. Feature Bento Grid */}
        <TrackedSection id="features" label="Features">
          <FeatureBento />
        </TrackedSection>

        {/* 6. Stats Break */}
        <StatsBreak />

        {/* 7. Terminal Demo */}
        <TrackedSection id="demo" label="Demo">
          <TerminalDemo />
        </TrackedSection>

        {/* 8. Testimonials */}
        <TrackedSection id="testimonials" label="Testimonials">
          <TestimonialsSection />
        </TrackedSection>

        {/* 9. Company Vision */}
        <TrackedSection id="vision" label="Vision">
          <VisionSection />
        </TrackedSection>

        {/* 10. Pricing */}
        <TrackedSection id="pricing" label="Pricing">
          <PricingSection />
        </TrackedSection>

        {/* 11. FAQ */}
        <TrackedSection id="faq" label="FAQ">
          <FAQSection />
        </TrackedSection>

        {/* 12. Final CTA */}
        <TrackedSection id="get-started" label="Get Started">
          <FinalCTA />
        </TrackedSection>

        {/* 13. Footer */}
        <FooterMinimal />
      </main>
    </LandingPageWrapper>
  );
}
