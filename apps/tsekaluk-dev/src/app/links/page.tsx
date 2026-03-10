import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, Rss, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Links — Tseka Luk",
  description: "Find me across the internet.",
  alternates: { canonical: "https://tsekaluk.dev/links" },
};

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
  { name: "小红书", url: "#", description: "产品洞察 & 教程" },
  { name: "即刻", url: "#", description: "技术思考 & 日常" },
  { name: "知识星球", description: "深度内容 & 社区", hasQr: true },
];

export default function LinksPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 md:py-32">
      {/* Profile header */}
      <div className="mb-12 text-center">
        <div className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-full border-2 border-white shadow-lg dark:border-gray-800">
          <Image src="/images/headshot.jpg" alt="Tseka Luk" width={80} height={80} className="h-full w-full object-cover" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Tseka Luk</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">AI-Native Builder &middot; CEO @ Nebutra Intelligence</p>
      </div>

      {/* International links */}
      <div className="mb-12 space-y-3">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">International</h2>
        {INTERNATIONAL_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target={link.url.startsWith("/") ? undefined : "_blank"}
            rel={link.url.startsWith("/") ? undefined : "noopener noreferrer"}
            className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-5 py-4 transition-all hover:border-[var(--color-accent)]/40 hover:shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:hover:border-[var(--color-accent)]/40"
          >
            <span className="text-gray-600 dark:text-gray-400">{link.icon}</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{link.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{link.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* China links */}
      <div className="space-y-3">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">China / 国内</h2>
        {CHINA_LINKS.map((link) => (
          <div
            key={link.name}
            className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-5 py-4 dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{link.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{link.description}</p>
            </div>
            {"url" in link && link.url ? (
              <Link href={link.url} target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--color-accent-dark)] hover:underline">
                Visit
              </Link>
            ) : null}
            {"hasQr" in link && link.hasQr ? (
              <span className="text-xs text-gray-400 dark:text-gray-500">QR coming soon</span>
            ) : null}
          </div>
        ))}
      </div>

      {/* Email CTA */}
      <div className="mt-12 text-center">
        <Link
          href="mailto:tseka@nebutra.com"
          className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
        >
          <Mail className="h-4 w-4" />
          tseka@nebutra.com
        </Link>
      </div>
    </section>
  );
}
