"use client";

import { Github, Twitter, MessageCircle } from "lucide-react";
import { Logo } from "@nebutra/brand";
import { footerContent } from "@/lib/landing-content";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useMount } from "@/hooks/useMount";

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
  const { resolvedTheme } = useTheme();
  const isMounted = useMount();
  const { social, status } = footerContent;
  const isDark = !isMounted || resolvedTheme !== "light";

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
    <footer className="relative w-full overflow-hidden border-t border-[color:var(--neutral-7)] bg-[color:var(--neutral-1)] py-12 dark:border-white/10 dark:bg-black">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--brand-gradient)" }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Logo variant="en" size={120} inverted={isDark} />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[color:var(--neutral-11)] transition-colors hover:text-[color:var(--blue-10)] dark:text-white/70 dark:hover:text-[color:var(--cyan-9)]"
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
                  className="text-[color:var(--neutral-10)] transition-colors hover:text-[color:var(--blue-10)] dark:text-white/60 dark:hover:text-[color:var(--cyan-9)]"
                  aria-label={item.platform}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[color:var(--neutral-7)] pt-8 md:flex-row dark:border-white/10">
          <p className="text-sm text-[color:var(--neutral-10)] dark:text-white/60">
            {t("copyright")}
          </p>

          {/* Status indicator */}
          <a
            href={status.href}
            className="flex items-center gap-2 text-sm text-[color:var(--neutral-11)] transition-colors hover:text-[color:var(--neutral-12)] dark:text-white/70 dark:hover:text-white"
          >
            <span className="h-2 w-2 rounded-full bg-[color:var(--cyan-9)] shadow-[0_0_0_3px_color-mix(in_srgb,var(--cyan-9)_22%,transparent)]" />
            {t("statusOnline")}
          </a>
        </div>
      </div>
    </footer>
  );
}

FooterMinimal.displayName = "FooterMinimal";
