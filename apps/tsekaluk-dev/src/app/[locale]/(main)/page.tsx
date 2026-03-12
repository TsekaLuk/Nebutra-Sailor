import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { FocusSection } from "@/components/sections/focus-section";
import { ProcessSection } from "@/components/sections/process-section";
import { SelectedWorks } from "@/components/sections/selected-works";
import { ConstellationSection } from "@/components/sections/constellation-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { NowPreview } from "@/components/sections/now-preview";
import { CtaSection } from "@/components/sections/cta-section";
import { getLocalizedProjects } from "@/lib/projects";

const BASE_URL = "https://tsekaluk.dev";

const meta: Record<string, { title: string; description: string }> = {
  en: {
    title: "Tseka Luk — AI-Native Builder",
    description:
      "CEO & AI-Native Builder at Nebutra Intelligence. Building intelligent systems, not just products.",
  },
  zh: {
    title: "Tseka Luk — AI 原生构建者",
    description:
      "斗星集团 CEO，AI 原生构建者。构建智能系统，而非仅仅是产品。",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { title, description } = meta[locale] ?? meta.en;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}`,
      siteName: "Tseka Luk",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "website",
      images: [
        `/og?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(description)}`,
      ],
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: { en: `${BASE_URL}/en`, zh: `${BASE_URL}/zh` },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localizedProjects = await getLocalizedProjects(locale);

  return (
    <>
      <Hero />
      <TechMarquee />
      <FocusSection />
      <ProcessSection />
      <SelectedWorks projects={localizedProjects} />
      <ConstellationSection />
      <PricingSection />
      <NowPreview />
      <CtaSection />
    </>
  );
}
