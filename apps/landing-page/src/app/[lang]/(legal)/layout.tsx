import { ReactNode } from "react";
import Link from "next/link";

interface LegalLayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LegalLayout({ children, params }: LegalLayoutProps) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Simple Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href={`/${lang}`}
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              Nebutra
            </Link>
            <nav className="flex items-center space-x-6">
              <Link
                href={`/${lang}`}
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Home
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Contact
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
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <Link
                href={`/${lang}/privacy`}
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href={`/${lang}/terms`}
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Terms of Service
              </Link>
              <Link
                href={`/${lang}/cookies`}
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Cookie Policy
              </Link>
              <Link
                href={`/${lang}/refund`}
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Refund Policy
              </Link>
            </nav>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              © {new Date().getFullYear()} Nebutra, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
