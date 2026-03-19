import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { type Locale, routing } from "@/i18n/routing";

const VALUE_ITEM_KEYS = ["0", "1", "2", "3", "4", "5"] as const;

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

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = lang as Locale;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legalPages" });

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--neutral-12)] dark:text-white sm:text-5xl">
          {t("about.heading")}
        </h1>
        <p className="mt-4 text-xl text-[var(--neutral-10)]">{t("about.subheading")}</p>
      </section>

      {/* Mission Section */}
      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2>{t("about.missionTitle")}</h2>
        <p>{t("about.missionP1")}</p>
        <p>{t("about.missionP2")}</p>
      </section>

      {/* Values Section */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--neutral-12)] dark:text-white mb-6">
          {t("about.valuesTitle")}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {VALUE_ITEM_KEYS.map((valueKey) => (
            <div
              key={`about.values.${valueKey}`}
              className="rounded-[var(--radius-lg)] border border-[var(--neutral-6)] p-6"
            >
              <h3 className="font-semibold text-[var(--neutral-12)] dark:text-white">
                {t(`about.values.${valueKey}.title`)}
              </h3>
              <p className="mt-2 text-sm text-[var(--neutral-10)]">
                {t(`about.values.${valueKey}.description`)}
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
            <dt className="font-semibold">{t("about.companyInfo.legalName")}</dt>
            <dd className="text-[var(--neutral-10)]">
              无锡云毓智能科技有限公司
              <span className="ml-2 text-sm text-[var(--neutral-9)]">
                (Wuxi Nebutra Intelligent Technology Co., Ltd.)
              </span>
            </dd>
          </div>
          <div>
            <dt className="font-semibold">{t("about.companyInfo.founded")}</dt>
            <dd className="text-[var(--neutral-10)]">2024</dd>
          </div>
          <div>
            <dt className="font-semibold">{t("about.companyInfo.headquarters")}</dt>
            <dd className="text-[var(--neutral-10)]">
              无锡市，江苏省，中国
              <span className="ml-2 text-sm text-[var(--neutral-9)]">(Wuxi, Jiangsu, China)</span>
            </dd>
          </div>
          <div>
            <dt className="font-semibold">{t("about.companyInfo.jurisdiction")}</dt>
            <dd className="text-[var(--neutral-10)]">
              中华人民共和国
              <span className="ml-2 text-sm text-[var(--neutral-9)]">
                (People's Republic of China)
              </span>
            </dd>
          </div>
        </dl>
      </section>

      {/* Contact CTA */}
      <section className="rounded-[var(--radius-2xl)] bg-[var(--neutral-2)] p-8 text-center">
        <h2 className="text-2xl font-bold text-[var(--neutral-12)] dark:text-white">
          {t("about.ctaHeading")}
        </h2>
        <p className="mt-2 text-[var(--neutral-10)]">{t("about.ctaDescription")}</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-[var(--radius-lg)] bg-[color:var(--blue-9)] px-6 py-3 font-semibold text-white transition hover:bg-[color:var(--blue-10)]"
          >
            {t("about.ctaButton")}
          </Link>
          <a
            href="mailto:contact@nebutra.com"
            className="rounded-[var(--radius-lg)] border border-[var(--neutral-7)] px-6 py-3 font-semibold text-[var(--neutral-11)] transition hover:bg-[var(--neutral-3)]"
          >
            contact@nebutra.com
          </a>
        </div>
      </section>
    </div>
  );
}
