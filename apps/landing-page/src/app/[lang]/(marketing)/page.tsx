import { locales } from "@/lib/i18n/locales";
import {
  Navbar,
  HeroSection,
  LogoStrip,
  FeatureCards,
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
 * Landing Page — minimal dark design
 *
 * Sections:
 * 1. Navbar   – fixed, transparent → frosted on scroll
 * 2. Hero     – full-viewport, black bg, indigo glow, grid overlay
 * 3. LogoStrip – static 8 tech logos
 * 4. Features – 3 glass cards with code snippets
 * 5. FinalCTA – closing command box + CTA
 * 6. Footer
 */
export default async function LocalizedHomePage({ params }: Props) {
  await params;

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <LogoStrip />
      <FeatureCards />
      <FinalCTA />
      <FooterMinimal />
    </main>
  );
}
