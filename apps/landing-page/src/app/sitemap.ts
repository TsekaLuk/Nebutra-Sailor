import { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nebutra.com";

  return locales.map((lang) => ({
    url: `${baseUrl}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  }));
}
