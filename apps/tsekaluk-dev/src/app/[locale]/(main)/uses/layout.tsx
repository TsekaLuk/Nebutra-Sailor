import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: "Uses — Tseka Luk",
    zh: "工具 — Tseka Luk",
  };
  const descs: Record<string, string> = {
    en: "Hardware, software, and AI tools I use to build products.",
    zh: "我日常使用的硬件、软件和 AI 工具。",
  };

  return {
    title: titles[locale] ?? titles.en,
    description: descs[locale] ?? descs.en,
    alternates: {
      canonical: `https://tsekaluk.dev/${locale}/uses`,
      languages: {
        en: "https://tsekaluk.dev/en/uses",
        zh: "https://tsekaluk.dev/zh/uses",
      },
    },
  };
}

export default function UsesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
