import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import dynamic from "next/dynamic";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FeatureCards, FooterMinimal, HeroSection, LogoStrip, Navbar } from "@/components/landing";
import { type Locale, routing } from "@/i18n/routing";

const ProductDemoSection = dynamic(
  () => import("@/components/landing").then((mod) => mod.ProductDemoSection),
  {
    loading: () => <section className="h-72" aria-hidden />,
  },
);

const WorkflowSection = dynamic(
  () => import("@/components/landing").then((mod) => mod.WorkflowSection),
  {
    loading: () => <section className="h-64" aria-hidden />,
  },
);

const TestimonialsSection = dynamic(
  () => import("@/components/landing").then((mod) => mod.TestimonialsSection),
  {
    loading: () => <section className="h-72" aria-hidden />,
  },
);

const PricingHintSection = dynamic(
  () => import("@/components/landing").then((mod) => mod.PricingHintSection),
  {
    loading: () => <section className="h-64" aria-hidden />,
  },
);

const FinalCTA = dynamic(() => import("@/components/landing").then((mod) => mod.FinalCTA), {
  loading: () => <section className="h-72" aria-hidden />,
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(routing.locales, lang)) return {};

  const t = await getTranslations({ locale: lang, namespace: "metadata" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${lang}`,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ lang: locale }));
}

export default async function LocalizedHomePage({ params }: { params: Promise<{ lang: string }> }) {
  "use cache";
  cacheLife("hours");

  const { lang } = await params;
  const locale = lang as Locale;
  setRequestLocale(locale);

  return (
    <main id="main-content" className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <HeroSection />
      <LogoStrip locale={locale} />
      <ProductDemoSection />
      <FeatureCards />
      <WorkflowSection />
      <TestimonialsSection />
      <PricingHintSection />
      <FinalCTA />
      <FooterMinimal />
    </main>
  );
}
