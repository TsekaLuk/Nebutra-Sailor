"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { motion } from "framer-motion";

const LOCALES = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className="flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-0.5"
    >
      {LOCALES.map((loc) => {
        const isActive = locale === loc.code;
        return (
          <button
            key={loc.code}
            type="button"
            onClick={() => switchLocale(loc.code)}
            aria-pressed={isActive}
            aria-label={`Switch to ${loc.label}`}
            className="relative px-3 py-1 text-xs font-medium rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-9)] focus-visible:ring-offset-1"
          >
            {isActive && (
              <motion.div
                layoutId="lang-pill"
                className="absolute inset-0 bg-white dark:bg-gray-900 rounded-full shadow-sm"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 transition-colors duration-150 ${
                isActive
                  ? "text-gray-900 dark:text-gray-100"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {loc.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
