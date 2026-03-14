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
    ja: "ツール — Tseka Luk",
  };
  const descs: Record<string, string> = {
    en: "Hardware, software, and AI tools I use to build products.",
    zh: "我日常使用的硬件、软件和 AI 工具。",
    ja: "プロダクト開発に使うハードウェア・ソフトウェア・AI ツール。",
  };

  const title = titles[locale] ?? titles.en;
  const description = descs[locale] ?? descs.en;

  return {
    title,
    description,
    openGraph: {
      images: [
        `/og?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(description)}`,
      ],
    },
    alternates: {
      canonical: `https://tsekaluk.dev/${locale}/uses`,
      languages: {
        en: "https://tsekaluk.dev/en/uses",
        zh: "https://tsekaluk.dev/zh/uses",
        ja: "https://tsekaluk.dev/ja/uses",
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
