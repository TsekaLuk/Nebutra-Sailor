import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { getArticles } from "@/lib/articles";

const BASE_URL = "https://tsekaluk.dev";
const LOCALES = ["en", "zh", "ja"] as const;

type StaticRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const STATIC_ROUTES: StaticRoute[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/work", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/soul", changeFrequency: "monthly", priority: 0.8 },
  { path: "/now", changeFrequency: "daily", priority: 0.7 },
  { path: "/thinking", changeFrequency: "weekly", priority: 0.7 },
  { path: "/uses", changeFrequency: "monthly", priority: 0.6 },
  { path: "/links", changeFrequency: "monthly", priority: 0.5 },
  { path: "/guestbook", changeFrequency: "daily", priority: 0.6 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
];

function withLocales(
  path: string,
  opts: {
    lastModified: Date;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  },
): MetadataRoute.Sitemap {
  const base = {
    url: `${BASE_URL}${path}`,
    lastModified: opts.lastModified,
    changeFrequency: opts.changeFrequency,
    priority: opts.priority,
  };

  const localeEntries: MetadataRoute.Sitemap = LOCALES.map((locale) => ({
    url: `${BASE_URL}/${locale}${path}`,
    lastModified: opts.lastModified,
    changeFrequency: opts.changeFrequency,
    priority: opts.priority,
  }));

  return [base, ...localeEntries];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticLastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = STATIC_ROUTES.flatMap((route) =>
    withLocales(route.path, {
      lastModified: staticLastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }),
  );

  const projectRoutes: MetadataRoute.Sitemap = projects.flatMap((p) =>
    withLocales(`/work/${p.slug}`, {
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    }),
  );

  const articleRoutes: MetadataRoute.Sitemap = getArticles().flatMap((a) =>
    withLocales(`/thinking/${a.slug}`, {
      lastModified: new Date(a.date),
      changeFrequency: "yearly",
      priority: 0.6,
    }),
  );

  return [...staticRoutes, ...projectRoutes, ...articleRoutes];
}
