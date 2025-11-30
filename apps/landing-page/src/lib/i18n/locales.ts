export const locales = ["en", "zh", "ja", "ko", "es", "fr", "de"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  ja: "日本語",
  ko: "한국어",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
