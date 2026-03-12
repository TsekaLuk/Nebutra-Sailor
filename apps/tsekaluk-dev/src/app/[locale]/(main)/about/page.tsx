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
import { CountUp } from "@/components/count-up";

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
    openGraph: {
      images: [
        `/og?title=${encodeURIComponent(t("metadata_title"))}&subtitle=${encodeURIComponent(t("metadata_desc"))}`,
      ],
    },
    alternates: {
      canonical: `https://tsekaluk.dev/${locale}/about`,
      languages: {
        en: "https://tsekaluk.dev/en/about",
        zh: "https://tsekaluk.dev/zh/about",
      },
    },
  };
}

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

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.about" });

  const TIMELINE: { year: string; label: string; icon: React.ReactNode }[] = [
    {
      year: "2020",
      icon: <BookOpen className="h-4 w-4" />,
      label: t("journey_2020"),
    },
    {
      year: "2022",
      icon: <GraduationCap className="h-4 w-4" />,
      label: t("journey_2022"),
    },
    {
      year: "2023",
      icon: <Binary className="h-4 w-4" />,
      label: t("journey_2023"),
    },
    {
      year: "2024",
      icon: <Sparkles className="h-4 w-4" />,
      label: t("journey_2024"),
    },
    {
      year: "2025",
      icon: <Cpu className="h-4 w-4" />,
      label: t("journey_2025"),
    },
    {
      year: "Now",
      icon: (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent-dark)]" />
        </span>
      ),
      label: t("journey_now"),
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
        title: t("award_1_title"),
        level: t("award_1_level"),
        detail: t("award_1_detail"),
        year: "2025",
        icon: <Trophy className="h-4 w-4 text-amber-500" />,
        highlight: true,
      },
      {
        title: t("award_2_title"),
        level: t("award_2_level"),
        detail: t("award_2_detail"),
        year: "2025",
        icon: <Medal className="h-4 w-4 text-amber-500" />,
        highlight: true,
      },
      {
        title: t("award_3_title"),
        level: t("award_3_level"),
        detail: t("award_3_detail"),
        year: "2025",
        icon: <Medal className="h-4 w-4 text-amber-500" />,
        highlight: true,
      },
      {
        title: t("award_4_title"),
        level: t("award_4_level"),
        detail: t("award_4_detail"),
        year: "2024",
        icon: <Medal className="h-4 w-4 text-amber-500" />,
        highlight: true,
      },
      {
        title: t("award_5_title"),
        level: t("award_5_level"),
        detail: t("award_5_detail"),
        year: "2024",
        icon: <Trophy className="h-4 w-4 text-amber-500" />,
        highlight: true,
      },
      {
        title: t("award_6_title"),
        level: t("award_6_level"),
        detail: t("award_6_detail"),
        year: "2025",
        icon: <Award className="h-4 w-4 text-gray-400" />,
      },
      {
        title: t("award_7_title"),
        level: t("award_7_level"),
        detail: t("award_7_detail"),
        year: "2024",
        icon: <Award className="h-4 w-4 text-gray-400" />,
      },
      {
        title: t("award_8_title"),
        level: t("award_8_level"),
        detail: t("award_8_detail"),
        year: "2024",
        icon: <Award className="h-4 w-4 text-gray-400" />,
      },
      {
        title: t("award_9_title"),
        level: t("award_9_level"),
        detail: t("award_9_detail"),
        year: "2024",
        icon: <Award className="h-4 w-4 text-gray-400" />,
      },
      {
        title: t("award_10_title"),
        level: t("award_10_level"),
        detail: t("award_10_detail"),
        year: "2023",
        icon: <Trophy className="h-4 w-4 text-amber-500" />,
        highlight: true,
      },
    ];

  const CERTS: { label: string; icon: React.ReactNode }[] = [
    {
      label: t("cred_1"),
      icon: <GraduationCap className="h-4 w-4 text-[var(--color-accent-dark)]" />,
    },
    {
      label: t("cred_2"),
      icon: <ShieldCheck className="h-4 w-4 text-[var(--color-accent-dark)]" />,
    },
    {
      label: t("cred_3"),
      icon: <Cpu className="h-4 w-4 text-[var(--color-accent-dark)]" />,
    },
    {
      label: t("cred_4"),
      icon: <FileCode2 className="h-4 w-4 text-[var(--color-accent-dark)]" />,
    },
    {
      label: t("cred_5"),
      icon: <FileCode2 className="h-4 w-4 text-[var(--color-accent-dark)]" />,
    },
    {
      label: t("cred_6"),
      icon: <Languages className="h-4 w-4 text-[var(--color-accent-dark)]" />,
    },
    {
      label: t("cred_7"),
      icon: <GraduationCap className="h-4 w-4 text-[var(--color-accent-dark)]" />,
    },
    {
      label: t("cred_8"),
      icon: <Sparkles className="h-4 w-4 text-[var(--color-accent-dark)]" />,
    },
  ];

  const beliefs: { quote: string; credit: string | null }[] = [
    { quote: t("belief_1"), credit: t("belief_1_credit") },
    { quote: t("belief_2"), credit: null },
    { quote: t("belief_3"), credit: null },
    { quote: t("belief_4"), credit: null },
    { quote: t("belief_5"), credit: null },
  ];

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
            {t("label")}
          </p>
        </AnimateIn>

        <AnimateIn preset="fadeUp" delay={0.1}>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {t("headline")}{" "}
            <span className="font-serif italic text-gray-400 dark:text-gray-500">
              {t("headline_muted")}
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
                src="/images/black.jpeg"
                alt="Tseka Luk"
                width={400}
                height={500}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -right-4 -bottom-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-2.5 shadow-sm dark:shadow-gray-900/30 space-y-0.5">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                {t("photo_tag")}
              </p>
              <p className="text-[10px] text-gray-400 dark:text-gray-500">
                {t("photo_location")}
              </p>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn preset="fadeUp" delay={0.2}>
          <div className="space-y-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
            <p>{t("bio_1")}</p>
            <p>{t("bio_2")}</p>
            <p>{t("bio_3")}</p>

            <div className="mt-4 grid grid-cols-4 gap-3 pt-4">
              {[
                { target: 19, label: t("stat_projects") },
                { target: 10, label: t("stat_awards") },
                { target: 6, label: t("stat_first_prizes") },
                { target: 8, label: t("stat_certs") },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 p-3 text-center"
                >
                  <p className="text-2xl font-bold text-foreground">
                    <CountUp target={stat.target} />
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

      {/* Personality */}
      <div className="mb-24">
        <AnimateIn preset="fade" inView>
          <h2 className="mb-8 font-serif italic text-2xl text-gray-400 dark:text-gray-500">
            {t("personality_label")}
          </h2>
        </AnimateIn>

        {/* INTP logician illustration */}
        <AnimateIn preset="fade" inView>
          <div className="overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
            <img
              src="/images/intp-logician.svg"
              alt="INTP The Logician — 16Personalities"
              width={800}
              height={400}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </AnimateIn>

        {/* Badge cards */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <AnimateIn preset="fadeUp" inView delay={0.1}>
            <div className="flex items-center gap-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 transition-colors hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-accent)]/5">
              <img
                src="/images/intp-badge.svg"
                alt="INTP"
                width={80}
                height={80}
                loading="lazy"
                className="h-20 w-20 shrink-0"
              />
              <div>
                <p className="text-lg font-bold tracking-tight text-foreground">
                  {t("personality_intp_name")}
                </p>
                <p className="text-sm font-medium text-[var(--color-accent-dark)]">
                  {t("personality_intp_subtitle")}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                  {t("personality_intp_desc")}
                </p>
                <p className="mt-2.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {t("personality_intp_source")}
                </p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn preset="fadeUp" inView delay={0.2}>
            <div className="flex items-center gap-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 transition-colors hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-accent)]/5">
              <img
                src="/images/4w5-badge.svg"
                alt="4w5"
                width={80}
                height={80}
                loading="lazy"
                className="h-20 w-20 shrink-0"
              />
              <div>
                <p className="text-lg font-bold tracking-tight text-foreground">
                  {t("personality_4w5_name")}
                </p>
                <p className="text-sm font-medium text-[var(--color-accent-dark)]">
                  {t("personality_4w5_subtitle")}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                  {t("personality_4w5_desc")}
                </p>
                <p className="mt-2.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {t("personality_4w5_source")}
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-24">
        <AnimateIn preset="fade" inView>
          <h2 className="mb-8 font-serif italic text-2xl text-gray-400 dark:text-gray-500">
            {t("journey_label")}
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
              {t("awards_label")}
            </h2>
            <span className="rounded-full bg-[var(--color-accent)]/20 px-3 py-0.5 text-xs font-medium text-[var(--color-accent-dark)]">
              {t("awards_count")}
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-400 dark:text-gray-500">
            {t("awards_description")}
          </p>
        </AnimateIn>

        <AnimateInGroup stagger="normal" inView className="space-y-0">
          {AWARDS.map((award) => (
            <AnimateIn key={award.title} preset="fadeUp" inView>
              <div
                className={`flex items-center gap-3 border-t py-3 ${award.highlight
                  ? "border-amber-50 dark:border-amber-800 bg-amber-50/30 dark:bg-amber-900/20"
                  : "border-gray-100 dark:border-gray-800"
                  } rounded-lg px-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800`}
              >
                <span className="shrink-0">{award.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
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
            {t("credentials_label")}
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

      {/* Things I believe */}
      <div className="mb-24">
        <AnimateIn preset="fade" inView>
          <h2 className="mb-8 font-serif italic text-2xl text-gray-400 dark:text-gray-500">
            {t("beliefs_label")}
          </h2>
        </AnimateIn>
        <AnimateInGroup stagger="normal" inView className="space-y-4">
          {beliefs.map((belief, i) => (
            <AnimateIn key={i} preset="fadeUp" inView>
              <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 py-5">
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  &ldquo;{belief.quote}&rdquo;
                </p>
                {belief.credit && (
                  <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">{belief.credit}</p>
                )}
              </div>
            </AnimateIn>
          ))}
        </AnimateInGroup>
      </div>

      {/* Life */}
      <div className="mb-24">
        <AnimateIn preset="fade" inView>
          <h2 className="mb-8 font-serif italic text-2xl text-gray-400 dark:text-gray-500">
            {t("life_label")}
          </h2>
        </AnimateIn>

        <div className="space-y-6">
          {/* Music */}
          <AnimateIn preset="fadeUp" inView>
            <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                {t("life_music")}
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Glass Animals",
                  "NINEONE# 乃万",
                  "Metro Boomin",
                  "Marshmello",
                  "San Holo",
                  "Claude Debussy",
                  "美波",
                  "milet",
                  "法老",
                  "C418",
                  "Troye Sivan",
                  "Juice WRLD",
                  "Rich Brian",
                  "Coi Leray",
                  "Cardi B",
                  "Nicki Minaj",
                  "Lizzo",
                  "Ed Sheeran",
                  "Taylor Swift",
                  "Justin Bieber",
                  "OneOne",
                ].map((artist) => (
                  <span
                    key={artist}
                    className="rounded-full border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400"
                  >
                    {artist}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Philosophy */}
          <AnimateIn preset="fadeUp" inView>
            <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                {t("life_philosophy")}
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Nietzsche",
                  "Sartre",
                  "Schopenhauer",
                  "Kant",
                  "Freud",
                  "Russell",
                  "Maslow",
                  "Thoreau",
                  "周国平",
                ].map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Games */}
          <AnimateIn preset="fadeUp" inView>
            <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                {t("life_games")}
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Minecraft  ·  Deer_Sama",
                  "Detroit: Become Human",
                  "Kingdom Rush",
                  "美丽水世界",
                ].map((g) => (
                  <span
                    key={g}
                    className="rounded-full border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Contact */}
      <div
        id="contact"
        className="border-t border-gray-200 dark:border-gray-700 pt-12 text-center"
      >
        <AnimateIn preset="fadeUp" inView>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t("contact_headline")}
          </h2>
          <div className="mt-8">
            <a
              href="mailto:tseka@nebutra.com"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 dark:bg-white px-7 py-3 text-sm font-medium text-white dark:text-gray-900 transition-colors hover:bg-gray-800 dark:hover:bg-gray-200"
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
