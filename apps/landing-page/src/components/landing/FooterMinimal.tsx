"use client";

import { Github, Twitter, MessageCircle } from "lucide-react";
import { Logo } from "@nebutra/brand";
import { footerContent } from "@/lib/landing-content";
import { useTranslations } from "next-intl";

const SOCIAL_ICONS = {
  x: Twitter,
  github: Github,
  discord: MessageCircle,
};

/**
 * FooterMinimal - Minimal footer (dark-only)
 */
export function FooterMinimal() {
  const t = useTranslations("footer");
  const { social, status } = footerContent;

  const links = [
    { label: t("links.product"), href: "/features" },
    { label: t("links.docs"), href: "https://docs.nebutra.com/sailor" },
    {
      label: t("links.github"),
      href: "https://github.com/TsekaLuk/Nebutra-Sailor",
    },
    { label: t("links.discord"), href: "https://discord.gg/nebutra" },
  ];

  return (
    <footer className="relative w-full border-t border-gray-200 bg-white py-12 dark:border-white/5 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Logo variant="en" size={120} className="dark:invert" />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-white/40 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {social.map((item) => {
              const Icon =
                SOCIAL_ICONS[item.platform as keyof typeof SOCIAL_ICONS] ||
                Github;
              return (
                <a
                  key={item.platform}
                  href={item.href}
                  className="text-gray-400 transition-colors hover:text-gray-900 dark:text-white/30 dark:hover:text-white"
                  aria-label={item.platform}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row dark:border-white/5">
          <p className="text-sm text-gray-400 dark:text-white/30">
            {t("copyright")}
          </p>

          {/* Status indicator */}
          <a
            href={status.href}
            className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-white/40 dark:hover:text-white"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {t("statusOnline")}
          </a>
        </div>
      </div>
    </footer>
  );
}

FooterMinimal.displayName = "FooterMinimal";
