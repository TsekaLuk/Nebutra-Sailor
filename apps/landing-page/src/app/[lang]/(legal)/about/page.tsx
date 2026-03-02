import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(routing.locales, lang)) return {};
  const t = await getTranslations({ locale: lang, namespace: "legalPages" });
  return {
    title: t("about.title"),
    description: t("about.description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ lang: locale }));
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  setRequestLocale(lang as Locale);
  const t = await getTranslations("legalPages");

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          {t("about.heading")}
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          {t("about.subheading")}
        </p>
      </section>

      {/* Mission Section */}
      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2>{t("about.missionTitle")}</h2>
        <p>{t("about.missionP1")}</p>
        <p>{t("about.missionP2")}</p>
      </section>

      {/* Values Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {t("about.valuesTitle")}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {([0, 1, 2, 3, 4, 5] as const).map((i) => (
            <div
              key={i}
              className="rounded-lg border border-gray-200 dark:border-gray-700 p-6"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {t(`about.values.${i}.title`)}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {t(`about.values.${i}.description`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Info Section */}
      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2>{t("about.companyInfoTitle")}</h2>
        <dl className="grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="font-semibold">
              {t("about.companyInfo.legalName")}
            </dt>
            <dd className="text-gray-600 dark:text-gray-400">Nebutra, Inc.</dd>
          </div>
          <div>
            <dt className="font-semibold">{t("about.companyInfo.founded")}</dt>
            <dd className="text-gray-600 dark:text-gray-400">2024</dd>
          </div>
          <div>
            <dt className="font-semibold">
              {t("about.companyInfo.headquarters")}
            </dt>
            <dd className="text-gray-600 dark:text-gray-400">
              San Francisco, California
            </dd>
          </div>
          <div>
            <dt className="font-semibold">
              {t("about.companyInfo.jurisdiction")}
            </dt>
            <dd className="text-gray-600 dark:text-gray-400">
              Delaware, United States
            </dd>
          </div>
        </dl>
      </section>

      {/* Contact CTA */}
      <section className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t("about.ctaHeading")}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {t("about.ctaDescription")}
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            {t("about.ctaButton")}
          </Link>
          <a
            href="mailto:hello@nebutra.com"
            className="rounded-lg border border-gray-300 dark:border-gray-600 px-6 py-3 font-semibold text-gray-700 dark:text-gray-200 transition hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            hello@nebutra.com
          </a>
        </div>
      </section>
    </div>
  );
}
