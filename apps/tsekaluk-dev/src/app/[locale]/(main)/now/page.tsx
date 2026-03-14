import type { Metadata } from "next";
import { Suspense } from "react";
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
    openGraph: {
      images: [
        `/og?title=${encodeURIComponent(t("metadata_title"))}&subtitle=${encodeURIComponent(t("metadata_desc"))}`,
      ],
    },
    alternates: {
      canonical: `https://tsekaluk.dev/${locale}/now`,
      languages: {
        en: "https://tsekaluk.dev/en/now",
        zh: "https://tsekaluk.dev/zh/now",
        ja: "https://tsekaluk.dev/ja/now",
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
    <section className="mx-auto max-w-4xl px-6 py-32 md:py-48">
      <div className="mb-24">
        <p className="font-mono text-sm uppercase tracking-widest text-gray-400 dark:text-gray-500">
          {t("label")}
        </p>
        <h1 className="mt-4 text-5xl font-bold tracking-tighter text-foreground md:text-7xl lg:text-[5.5rem] leading-[1.1]">
          {t("headline")}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-500 dark:text-gray-400">
          {t("description")}
        </p>
      </div>

      <Suspense fallback={<div className="h-32 animate-pulse rounded-2xl bg-gray-100 dark:bg-gray-800" />}>
        <NowEntry />
      </Suspense>
    </section>
  );
}
