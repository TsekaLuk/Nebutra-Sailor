import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

const ogLocaleMap: Record<string, string> = {
  en: "en_US",
  zh: "zh_CN",
  ja: "ja_JP",
  ko: "ko_KR",
  es: "es_ES",
  fr: "fr_FR",
  de: "de_DE",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!routing.locales.includes(lang as (typeof routing.locales)[number])) {
    return {};
  }

  const t = await getTranslations({
    locale: lang as Locale,
    namespace: "metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      locale: ogLocaleMap[lang] ?? "en_US",
      title: t("title"),
      description: t("description"),
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ lang: locale }));
}

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const { lang } = await params;

  if (!routing.locales.includes(lang as (typeof routing.locales)[number])) {
    notFound();
  }

  // Load all messages for this locale — passed to NextIntlClientProvider
  // so every "use client" component in this subtree can call useTranslations()
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={lang as Locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
