import { Locale, locales, isValidLocale } from "@/lib/i18n/locales";
import {
  LandingPageWrapper,
  TrackedSection,
  Navbar,
  HeroSection,
  FeatureGrid,
  DarkFeatureSection,
  ToolkitGrid,
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
 * Landing Page - Vercel-style design with grid lines
 *
 * Sections:
 * 1. Hero - Headline + dual CTA buttons
 * 2. Feature Grid - 3-column cards
 * 3. Dark Feature Section - Security features
 * 4. Toolkit Grid - 2x3 feature cards
 * 5. Testimonial - Quote with grid layout
 * 6. CTA - Final call to action
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

        {/* 2. Testimonial (moved up for impact) */}
        <TrackedSection id="testimonials" label="Testimonials">
          <TestimonialsSection />
        </TrackedSection>

        {/* 3. Feature Grid */}
        <TrackedSection id="features" label="Features">
          <FeatureGrid />
        </TrackedSection>

        {/* 4. Dark Feature Section */}
        <DarkFeatureSection />

        {/* 5. Toolkit Grid */}
        <ToolkitGrid />

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
