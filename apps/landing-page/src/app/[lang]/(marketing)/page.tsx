import { routing } from "@/i18n/routing";
import {
  Navbar,
  HeroSection,
  LogoStrip,
  FeatureCards,
  FinalCTA,
  FooterMinimal,
} from "@/components/landing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ lang: locale }));
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
 *
 * Locale context is provided by the parent [lang]/layout.tsx via NextIntlClientProvider.
 * Components call useTranslations() / getTranslations() directly.
 */
export default function LocalizedHomePage() {
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
