import type { Project } from "./projects";

const BASE_URL = "https://tsekaluk.dev";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tseka Luk",
    url: BASE_URL,
    jobTitle: "CEO & AI-Native Builder",
    worksFor: {
      "@type": "Organization",
      name: "Nebutra Intelligence",
    },
    sameAs: [
      "https://github.com/TsekaLuk",
      "https://x.com/tseka_luk",
      "https://linkedin.com/in/tsekaluk",
    ],
    image: `${BASE_URL}/images/black.jpeg`,
    description: "I design and build AI-powered products from zero to one. Shipping fast and iterating in public.",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TsekaLuk.dev",
    url: BASE_URL,
    author: personJsonLd(),
  };
}

export function projectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.tagline,
    url: `${BASE_URL}/work/${project.slug}`,
    author: { "@type": "Person", name: "Tseka Luk" },
    ...(project.github ? { codeRepository: project.github } : {}),
    keywords: project.tags.join(", "),
  };
}

export function articleJsonLd(article: { title: string; slug: string; date: string; excerpt: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    url: `${BASE_URL}/thinking/${article.slug}`,
    datePublished: article.date,
    description: article.excerpt,
    author: { "@type": "Person", name: "Tseka Luk" },
  };
}
