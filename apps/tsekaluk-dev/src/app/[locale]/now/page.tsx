import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { NowEntry } from "@/components/sections/now-entry";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.now" });
  return {
    title: t("metadata_title"),
    description: t("metadata_desc"),
    alternates: {
      canonical: `https://tsekaluk.dev/${locale}/now`,
      languages: {
        en: "https://tsekaluk.dev/en/now",
        zh: "https://tsekaluk.dev/zh/now",
      },
    },
  };
}

export default async function NowPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.now" });

  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <div className="mb-16">
        <p className="font-serif italic text-lg text-gray-400 dark:text-gray-500">
          {t("label")}
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl">
          {t("headline")}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
          {t("description")}
        </p>
      </div>

      <NowEntry />
    </section>
  );
}
