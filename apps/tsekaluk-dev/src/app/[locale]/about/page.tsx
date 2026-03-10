import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import {
  Mail,
  Trophy,
  Award,
  Medal,
  GraduationCap,
  ShieldCheck,
  FileCode2,
  Cpu,
  Languages,
  Sparkles,
  BookOpen,
  Binary,
} from "lucide-react";
import { AnimateIn, AnimateInGroup } from "@nebutra/ui/components";
import { personJsonLd } from "@/lib/json-ld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.about" });
  return {
    title: t("metadata_title"),
    description: t("metadata_desc"),
    alternates: {
      canonical: `https://tsekaluk.dev/${locale}/about`,
      languages: {
        en: "https://tsekaluk.dev/en/about",
        zh: "https://tsekaluk.dev/zh/about",
      },
    },
  };
}

const TIMELINE: { year: string; label: string; icon: React.ReactNode }[] = [
  {
    year: "2020",
    icon: <BookOpen className="h-4 w-4" />,
    label: "Self-taught web development & digital marketing",
  },
  {
    year: "2022",
    icon: <GraduationCap className="h-4 w-4" />,
    label: "CS undergrad, Jiangsu Ocean University",
  },
  {
    year: "2023",
    icon: <Binary className="h-4 w-4" />,
    label: "AI-native engineering, competitive programming",
  },
  {
    year: "2024",
    icon: <Sparkles className="h-4 w-4" />,
    label: "Founded Wuxi Yunyu Intelligent Technology",
  },
  {
    year: "2025",
    icon: <Cpu className="h-4 w-4" />,
    label: "CEO, Nebutra Intelligence — building for global markets",
  },
  {
    year: "Now",
    icon: (
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent-dark)]" />
      </span>
    ),
    label: "Shipping AI-native products, one commit at a time",
  },
];

const AWARDS: {
  title: string;
  level: string;
  detail: string;
  year: string;
  icon: React.ReactNode;
  highlight?: boolean;
}[] = [
  {
    title: "MCM/ICM Mathematical Modeling",
    level: "Honorable Mention",
    detail:
      "NSGA-III tourism optimizer, 8.3% prediction error vs. 28,000+ teams",
    year: "2025",
    icon: <Trophy className="h-4 w-4 text-amber-500" />,
    highlight: true,
  },
  {
    title: "Lanqiao Cup C/C++ (Jiangsu)",
    level: "First Prize",
    detail: "Top 1% in provincial algorithmic programming",
    year: "2025",
    icon: <Medal className="h-4 w-4 text-amber-500" />,
    highlight: true,
  },
  {
    title: "TAM-SEM Low-Altitude Economy",
    level: "First Prize (Provincial)",
    detail: "2,609 respondents, discovered 'risk paradox' (β=0.262, p<0.001)",
    year: "2025",
    icon: <Medal className="h-4 w-4 text-amber-500" />,
    highlight: true,
  },
  {
    title: "APMCM Mathematical Modeling",
    level: "First Prize",
    detail: "Pet industry forecast: LASSO R²=0.9850, predicted $52B market",
    year: "2024",
    icon: <Medal className="h-4 w-4 text-amber-500" />,
    highlight: true,
  },
  {
    title: "Shuwei Cup Math Modeling",
    level: "First Prize + Grand Innovation",
    detail:
      "Biomass co-pyrolysis: found 28.44% optimal ratio via LightGBM + PSO",
    year: "2024",
    icon: <Trophy className="h-4 w-4 text-amber-500" />,
    highlight: true,
  },
  {
    title: "Brand Strategy Competition",
    level: "Second Prize (National)",
    detail: "1,200+ samples, Claude + Flux + Midjourney AIGC pipeline",
    year: "2025",
    icon: <Award className="h-4 w-4 text-gray-400" />,
  },
  {
    title: "Global AI Algorithm Elite",
    level: "Third Prize (National Final)",
    detail: "Warehouse drone: 95% recognition accuracy, 3-min shelf traversal",
    year: "2024",
    icon: <Award className="h-4 w-4 text-gray-400" />,
  },
  {
    title: "National Math Modeling (Jiangsu)",
    level: "Second Prize",
    detail: "Real estate cost prediction: Random Forest outperformed CNN-LSTM",
    year: "2024",
    icon: <Award className="h-4 w-4 text-gray-400" />,
  },
  {
    title: "Electronic Design (TI Cup)",
    level: "Second Prize",
    detail: "Self-aiming system: adaptive PID + Kalman filter on MSPM0G3507",
    year: "2024",
    icon: <Award className="h-4 w-4 text-gray-400" />,
  },
  {
    title: "Translation Competition",
    level: "Grand Prize (National Final)",
    detail:
      "Non-English major, highest national honor in bilingual translation",
    year: "2023",
    icon: <Trophy className="h-4 w-4 text-amber-500" />,
    highlight: true,
  },
];

const CERTS: { label: string; icon: React.ReactNode }[] = [
  {
    label: "Columbia University — Numerical Models (Grade A)",
    icon: <GraduationCap className="h-4 w-4 text-[var(--color-accent-dark)]" />,
  },
  {
    label: "Huawei HCIA-Datacom Network Engineer",
    icon: <ShieldCheck className="h-4 w-4 text-[var(--color-accent-dark)]" />,
  },
  {
    label: "HarmonyOS Advanced Developer",
    icon: <Cpu className="h-4 w-4 text-[var(--color-accent-dark)]" />,
  },
  {
    label: "Utility Patent — Cable Distribution Equipment",
    icon: <FileCode2 className="h-4 w-4 text-[var(--color-accent-dark)]" />,
  },
  {
    label: "3 Software Copyrights (Power Opt, OD Classify, Graph Solver)",
    icon: <FileCode2 className="h-4 w-4 text-[var(--color-accent-dark)]" />,
  },
  {
    label: "CET-6: 543 · CET-4: 575",
    icon: <Languages className="h-4 w-4 text-[var(--color-accent-dark)]" />,
  },
  {
    label: "Macau UST — Innovation & Entrepreneurship",
    icon: <GraduationCap className="h-4 w-4 text-[var(--color-accent-dark)]" />,
  },
  {
    label: "Prompt Engineer (Datawhale × iFLYTEK)",
    icon: <Sparkles className="h-4 w-4 text-[var(--color-accent-dark)]" />,
  },
];

function TimelineItem({
  year,
  label,
  icon,
}: {
  year: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <AnimateIn preset="fadeUp" inView>
      <div className="flex items-center gap-4 border-t border-gray-100 dark:border-gray-800 py-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-500">
          {icon}
        </span>
        <div className="flex flex-1 items-start justify-between gap-4">
          <span className="text-base text-gray-700 dark:text-gray-300">
            {label}
          </span>
          <span className="shrink-0 font-mono text-sm text-gray-400 dark:text-gray-500">
            {year}
          </span>
        </div>
      </div>
    </AnimateIn>
  );
}

export default async function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />
      {/* Header */}
      <div className="mb-16">
        <AnimateIn preset="fade">
          <p className="font-serif italic text-lg text-gray-400 dark:text-gray-500">
            / About
          </p>
        </AnimateIn>

        <AnimateIn preset="fadeUp" delay={0.1}>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl">
            Building intelligent systems,{" "}
            <span className="font-serif italic text-gray-400 dark:text-gray-500">
              not just products.
            </span>
          </h1>
        </AnimateIn>
      </div>

      {/* Photo + Bio */}
      <div className="mb-24 grid gap-12 md:grid-cols-[280px_1fr]">
        <AnimateIn preset="fade" delay={0.15}>
          <div className="relative mx-auto w-56 md:mx-0 md:w-full">
            <div className="overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm dark:shadow-gray-900/30">
              <Image
                src="/images/portrait.jpg"
                alt="Tseka Luk"
                width={400}
                height={500}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -right-4 -bottom-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-2 shadow-sm dark:shadow-gray-900/30">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                INTP · Wuxi, China
              </p>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn preset="fadeUp" delay={0.2}>
          <div className="space-y-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
            <p>
              I&apos;m Tseka Luk, CEO of Nebutra Intelligence, based in Wuxi,
              China. I build AI-native products designed for global
              markets—tools that are not just technically sophisticated but
              genuinely useful and beautifully simple.
            </p>
            <p>
              My philosophy is what I call <em>Vibe Business</em>: build with
              taste, ship with speed, and let the product speak louder than any
              pitch deck. Every project starts from a real itch, and every
              feature earns its place.
            </p>
            <p>
              I think in systems, obsess over details, and believe the best way
              to predict the future is to build it—one commit at a time.
            </p>

            <div className="mt-4 grid grid-cols-4 gap-3 pt-4">
              {[
                { value: "19", label: "Projects" },
                { value: "10", label: "Awards" },
                { value: "6", label: "First Prizes" },
                { value: "8", label: "Certs" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 p-3 text-center"
                >
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Timeline */}
      <div className="mb-24">
        <AnimateIn preset="fade" inView>
          <h2 className="mb-8 font-serif italic text-2xl text-gray-400 dark:text-gray-500">
            / Journey
          </h2>
        </AnimateIn>
        <div>
          {TIMELINE.map((entry) => (
            <TimelineItem
              key={entry.year}
              year={entry.year}
              label={entry.label}
              icon={entry.icon}
            />
          ))}
        </div>
      </div>

      {/* Awards */}
      <div className="mb-24">
        <AnimateIn preset="fade" inView>
          <div className="mb-8 flex items-center gap-3">
            <h2 className="font-serif italic text-2xl text-gray-400">
              / Awards
            </h2>
            <span className="rounded-full bg-[var(--color-accent)]/20 px-3 py-0.5 text-xs font-medium text-[var(--color-accent-dark)]">
              10 competitions
            </span>
          </div>
        </AnimateIn>

        <AnimateInGroup stagger="normal" inView className="space-y-0">
          {AWARDS.map((award) => (
            <AnimateIn key={award.title} preset="fadeUp" inView>
              <div
                className={`flex items-center gap-3 border-t py-3 ${
                  award.highlight
                    ? "border-amber-50 dark:border-amber-800 bg-amber-50/30 dark:bg-amber-900/20"
                    : "border-gray-100 dark:border-gray-800"
                } rounded-lg px-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800`}
              >
                <span className="shrink-0">{award.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {award.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {award.level}
                  </p>
                  <p className="mt-0.5 text-[11px] leading-snug text-gray-400 dark:text-gray-500">
                    {award.detail}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-xs text-gray-400 dark:text-gray-500">
                  {award.year}
                </span>
              </div>
            </AnimateIn>
          ))}
        </AnimateInGroup>
      </div>

      {/* Credentials */}
      <div className="mb-24">
        <AnimateIn preset="fade" inView>
          <h2 className="mb-8 font-serif italic text-2xl text-gray-400 dark:text-gray-500">
            / Credentials
          </h2>
        </AnimateIn>

        <AnimateInGroup
          stagger="normal"
          inView
          className="grid gap-3 sm:grid-cols-2"
        >
          {CERTS.map((cert) => (
            <AnimateIn key={cert.label} preset="fadeUp" inView>
              <div className="flex items-start gap-3 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3 transition-colors hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)]/5">
                <span className="mt-0.5 shrink-0">{cert.icon}</span>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {cert.label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </AnimateInGroup>
      </div>

      {/* Contact */}
      <div
        id="contact"
        className="border-t border-gray-200 dark:border-gray-700 pt-12 text-center"
      >
        <AnimateIn preset="fadeUp" inView>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl">
            Let&apos;s build something
          </h2>
          <div className="mt-8">
            <a
              href="mailto:tseka@nebutra.com"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 dark:bg-gray-100 px-7 py-3 text-sm font-medium text-white dark:text-gray-900 transition-colors hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              <Mail className="h-4 w-4" />
              tseka@nebutra.com
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
