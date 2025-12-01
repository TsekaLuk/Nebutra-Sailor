import { Locale, locales, isValidLocale } from "@/lib/i18n/locales";
import { t } from "@/lib/i18n/translator";
import Link from "next/link";
import {
  ProductHuntSection,
  TestimonialsSection,
  LaunchBannerWrapper,
  sampleTestimonials,
} from "@/components/marketing";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface Props {
  params: Promise<{ lang: string }>;
}

// Product Hunt configuration
const PH_CONFIG = {
  postSlug: "nebutra",
  isLaunching: false, // Set to true during launch
  launchDate: "2025-02-01T00:00:00Z", // Set your launch date
};

export default async function LocalizedHomePage({ params }: Props) {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : "en";

  return (
    <div className="flex min-h-screen flex-col">
      {/* Launch Banner (shown during Product Hunt launch) */}
      <LaunchBannerWrapper
        postSlug={PH_CONFIG.postSlug}
        launchDate={PH_CONFIG.launchDate}
        isLaunching={PH_CONFIG.isLaunching}
      />

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 pt-16 text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {t("hero.title", locale)}
        </h1>
        <p className="mb-8 max-w-2xl text-xl text-gray-600">
          {t("hero.subtitle", locale)}
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/sign-up"
            className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            {t("hero.cta", locale)}
          </Link>
        </div>
      </main>

      {/* Product Hunt & Social Proof Section */}
      <ProductHuntSection
        postSlug={PH_CONFIG.postSlug}
        stats={{
          users: 1000,
          rating: 4.9,
          productHuntUpvotes: 500,
          githubStars: 2500,
        }}
        className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
      />

      {/* Testimonials Section */}
      <TestimonialsSection
        title="Loved by developers worldwide"
        subtitle="See what our users are saying about Nebutra"
        testimonials={sampleTestimonials}
        variant="grid"
        className="bg-white dark:bg-gray-950"
      />
    </div>
  );
}
