import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
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

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  setRequestLocale(lang as Locale);

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <HeroSection />
      <LogoStrip />
      <FeatureCards />
      <FinalCTA />
      <FooterMinimal />
    </main>
  );
}
