import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Github, Linkedin, Mail, Rss, ExternalLink } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.links" });
  return {
    title: t("metadata_title"),
    description: t("metadata_desc"),
    openGraph: {
      images: [
        `/og?title=${encodeURIComponent(t("metadata_title"))}&subtitle=${encodeURIComponent(t("metadata_desc"))}`,
      ],
    },
    alternates: {
      canonical: `https://tsekaluk.dev/${locale}/links`,
      languages: {
        en: "https://tsekaluk.dev/en/links",
        zh: "https://tsekaluk.dev/zh/links",
      },
    },
  };
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const INTERNATIONAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/TsekaLuk",
    icon: <Github className="h-5 w-5" />,
    description: "Open source projects & contributions",
  },
  {
    name: "X / Twitter",
    url: "https://x.com/tseka_luk",
    icon: <XIcon className="h-5 w-5" />,
    description: "Building in public, daily updates",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/tsekaluk",
    icon: <Linkedin className="h-5 w-5" />,
    description: "Professional network & career",
  },
  {
    name: "Product Hunt",
    url: "https://producthunt.com/@tsekaluk",
    icon: <ExternalLink className="h-5 w-5" />,
    description: "Product launches",
  },
  {
    name: "RSS Feed",
    url: "/rss.xml",
    icon: <Rss className="h-5 w-5" />,
    description: "Subscribe to updates",
  },
];

const CHINA_LINKS = [
  { name: "微信公众号", description: "Nebutra 星云智航", hasQr: true },
  { name: "微信个人 / 企业微信", description: "直接添加好友", hasQr: true },
  { name: "小红书", description: "产品洞察 & 教程", comingSoon: true },
  { name: "即刻", description: "技术思考 & 日常", comingSoon: true },
  { name: "知识星球", description: "深度内容 & 社区", hasQr: true },
];

export default async function LinksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.links" });

  return (
    <section className="mx-auto max-w-2xl px-6 py-24 md:py-32">
      {/* Profile header */}
      <div className="mb-12 text-center">
        <div className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-full border-2 border-white shadow-lg dark:border-gray-800">
          <Image
            src="/images/black.jpeg"
            alt="Tseka Luk"
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-foreground">
          Tseka Luk
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          AI-Native Builder &middot; CEO @ Nebutra Intelligence
        </p>
      </div>

      {/* International links */}
      <div className="mb-12 space-y-3">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
          {t("international")}
        </h2>
        {INTERNATIONAL_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target={link.url.startsWith("/") ? undefined : "_blank"}
            rel={link.url.startsWith("/") ? undefined : "noopener noreferrer"}
            className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-5 py-4 transition-all hover:border-[var(--color-accent)]/40 hover:shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:hover:border-[var(--color-accent)]/40"
          >
            <span className="text-gray-600 dark:text-gray-400">
              {link.icon}
            </span>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">
                {link.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {link.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* China links */}
      <div className="space-y-3">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
          {t("china")}
        </h2>
        {CHINA_LINKS.map((link) => (
          <div
            key={link.name}
            className={`flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-5 py-4 dark:border-gray-800 dark:bg-gray-900${"comingSoon" in link && link.comingSoon ? " pointer-events-none opacity-50" : ""}`}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-foreground">
                  {link.name}
                </p>
                {"comingSoon" in link && link.comingSoon ? (
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-400 dark:bg-gray-800 dark:text-gray-500">
                    Coming soon
                  </span>
                ) : null}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {link.description}
              </p>
            </div>
            {"url" in link && (link as { url: string }).url ? (
              <a
                href={(link as { url: string }).url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--color-accent-dark)] hover:underline"
              >
                Visit
              </a>
            ) : null}
            {"hasQr" in link && link.hasQr ? (
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {t("wechat_click")}
              </span>
            ) : null}
          </div>
        ))}
      </div>

      {/* Email CTA */}
      <div className="mt-12 text-center">
        <a
          href="mailto:tseka@nebutra.com"
          className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          <Mail className="h-4 w-4" />
          tseka@nebutra.com
        </a>
      </div>
    </section>
  );
}
