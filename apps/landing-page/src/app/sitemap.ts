import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const staticPaths = [
  { path: "", changeFreq: "weekly" as const, priority: 1.0 },
  { path: "/privacy", changeFreq: "monthly" as const, priority: 0.3 },
  { path: "/terms", changeFreq: "monthly" as const, priority: 0.3 },
  { path: "/cookies", changeFreq: "monthly" as const, priority: 0.3 },
  { path: "/refund", changeFreq: "monthly" as const, priority: 0.3 },
  { path: "/faq", changeFreq: "monthly" as const, priority: 0.4 },
  { path: "/about", changeFreq: "monthly" as const, priority: 0.5 },
  { path: "/contact", changeFreq: "monthly" as const, priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nebutra.com";

  return routing.locales.flatMap((locale) =>
    staticPaths.map((page) => ({
      url: `${baseUrl}/${locale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFreq,
      priority: page.priority,
    })),
  );
}
