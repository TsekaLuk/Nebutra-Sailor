import { Locale, locales, isValidLocale } from "@/lib/i18n/locales";
import { t } from "@/lib/i18n/translator";
import Link from "next/link";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function LocalizedHomePage({ params }: Props) {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : "en";

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {t("hero.title", locale)}
        </h1>
        <p className="mb-8 max-w-2xl text-xl text-gray-600">
          {t("hero.subtitle", locale)}
        </p>
        <Link
          href="/sign-up"
          className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
        >
          {t("hero.cta", locale)}
        </Link>
      </main>
    </div>
  );
}
