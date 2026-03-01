import { getRequestConfig } from "next-intl/server";
import { routing, type Locale } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const raw = await requestLocale;

  const locale: Locale =
    raw && routing.locales.includes(raw as Locale)
      ? (raw as Locale)
      : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
