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
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 pt-16 text-center lg:px-8">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-fg-default md:text-5xl lg:text-6xl">
          {t("hero.title", locale)}
        </h1>
        <p className="mb-10 max-w-3xl text-lg text-fg-muted md:text-xl lg:text-2xl">
          {t("hero.subtitle", locale)}
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/sign-up"
            className="rounded-md bg-accent-emphasis px-8 py-3 text-base font-semibold text-fg-onEmphasis transition hover:opacity-90 md:px-10 md:py-4 md:text-lg"
          >
            {t("hero.cta", locale)}
          </Link>
        </div>
      </main>
    </div>
  );
}
