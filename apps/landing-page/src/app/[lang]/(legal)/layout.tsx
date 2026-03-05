import { ReactNode } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

interface LegalLayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LegalLayout({
  children,
  params,
}: LegalLayoutProps) {
  const { lang } = await params;
  setRequestLocale(lang as Locale);
  const t = await getTranslations("legal");

  return (
    <div className="min-h-screen bg-neutral-1">
      {/* Simple Header */}
      <header className="border-b border-neutral-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold text-neutral-12 dark:text-white"
            >
              Nebutra
            </Link>
            <nav className="flex items-center space-x-6">
              <Link
                href="/"
                className="text-sm text-neutral-10 hover:text-neutral-12 dark:hover:text-white"
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/contact"
                className="text-sm text-neutral-10 hover:text-neutral-12 dark:hover:text-white"
              >
                {t("nav.contact")}
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {children}
      </main>

      {/* Legal Footer */}
      <footer className="border-t border-neutral-6">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <Link
                href="/privacy"
                className="text-neutral-9 hover:text-neutral-12 dark:hover:text-white"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                href="/terms"
                className="text-neutral-9 hover:text-neutral-12 dark:hover:text-white"
              >
                {t("footer.terms")}
              </Link>
              <Link
                href="/cookies"
                className="text-neutral-9 hover:text-neutral-12 dark:hover:text-white"
              >
                {t("footer.cookies")}
              </Link>
              <Link
                href="/refund"
                className="text-neutral-9 hover:text-neutral-12 dark:hover:text-white"
              >
                {t("footer.refund")}
              </Link>
            </nav>
            <p className="text-sm text-neutral-9">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
