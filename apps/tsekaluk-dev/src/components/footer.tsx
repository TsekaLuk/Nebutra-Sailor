"use client";

import { useTranslations } from "next-intl";
import { Rss } from "lucide-react";
import { AsciiText } from "@nebutra/ui";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-gray-100 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-16 flex flex-col items-center justify-center opacity-80 mt-8 hidden sm:flex">
          <div className="text-[var(--color-accent)] overflow-hidden scale-75 md:scale-100 origin-center">
            <AsciiText text="TSEKA  LUK" className="text-[6px] md:text-[8px] lg:text-[10px]" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-400 dark:text-gray-500">
              {t("built_with")}{" "}
              <a
                href="https://github.com/Nebutra/Nebutra-Sailor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 underline underline-offset-2 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Nebutra Sailor
              </a>
            </p>
            <p className="mt-1 text-xs text-gray-300 dark:text-gray-600">
              &copy; {new Date().getFullYear()} Tseka Luk
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/rss.xml"
              aria-label={t("rss_label")}
              className="group text-gray-400 transition-colors transition-transform duration-200 hover:-translate-y-0.5 hover:scale-110 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <Rss className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
            </a>
            <a
              href="https://github.com/TsekaLuk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("github_label")}
              className="group text-gray-400 transition-colors transition-transform duration-200 hover:-translate-y-0.5 hover:scale-110 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <GitHubIcon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
            </a>
            <a
              href="https://x.com/tseka_luk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("x_label")}
              className="group text-gray-400 transition-colors transition-transform duration-200 hover:-translate-y-0.5 hover:scale-110 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <XIcon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
            </a>
            <a
              href="https://linkedin.com/in/tsekaluk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("linkedin_label")}
              className="group text-gray-400 transition-colors transition-transform duration-200 hover:-translate-y-0.5 hover:scale-110 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <LinkedInIcon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
