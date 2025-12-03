import { Locale, locales, isValidLocale } from "@/lib/i18n/locales";
import {
  LandingPageWrapper,
  TrackedSection,
  Navbar,
  HeroSection,
  TrustRibbon,
  FeatureStack,
  TerminalDemo,
  TestimonialsSection,
  FinalCTA,
  FooterMinimal,
} from "@/components/landing";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface Props {
  params: Promise<{ lang: string }>;
}

/**
 * Landing Page - Vercel-style minimal design
 *
 * Sections:
 * 1. Hero - Large headline + command box + glow
 * 2. Trust Ribbon - Logo marquee
 * 3. Features - Vertical stack with alternating layout
 * 4. Terminal Demo - Interactive demo
 * 5. Testimonial - Single large quote
 * 6. CTA - Final call to action with stats
 * 7. Footer
 */
export default async function LocalizedHomePage({ params }: Props) {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : "en";

  return (
    <LandingPageWrapper>
      <main className="min-h-screen bg-background">
        {/* Navigation */}
        <Navbar />

        {/* 1. Hero */}
        <TrackedSection id="hero" label="Home">
          <HeroSection />
        </TrackedSection>

        {/* 2. Trust Ribbon */}
        <TrustRibbon />

        {/* 3. Features - Vertical stack */}
        <TrackedSection id="features" label="Features">
          <FeatureStack />
        </TrackedSection>

        {/* 4. Terminal Demo */}
        <TrackedSection id="demo" label="Demo">
          <TerminalDemo />
        </TrackedSection>

        {/* 5. Testimonial */}
        <TrackedSection id="testimonials" label="Testimonials">
          <TestimonialsSection />
        </TrackedSection>

        {/* 6. CTA */}
        <TrackedSection id="get-started" label="Get Started">
          <FinalCTA />
        </TrackedSection>

        {/* 7. Footer */}
        <FooterMinimal />
      </main>
    </LandingPageWrapper>
  );
}
