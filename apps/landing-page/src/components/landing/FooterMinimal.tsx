"use client";

import { useState, useEffect } from "react";
import { Github, Twitter, MessageCircle } from "lucide-react";
import { Logo } from "@nebutra/brand";
import { useTheme } from "next-themes";
import { footerContent } from "@/lib/landing-content";

const SOCIAL_ICONS = {
  x: Twitter,
  github: Github,
  discord: MessageCircle,
};

/**
 * FooterMinimal - Minimal footer with links and status
 *
 * @see DESIGN.md Section 13
 */
export function FooterMinimal() {
  const { brand, links, social, copyright, status } = footerContent;
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <footer className="relative w-full border-t border-border/5 bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand - Using @nebutra/brand Logo */}
          <div className="flex items-center gap-3">
            <Logo variant="en" size={120} inverted={isDark} />
            <span className="text-sm text-muted-foreground/60">
              {brand.byline}
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground/80 transition-colors hover:text-foreground"
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
                  className="text-muted-foreground/60 transition-colors hover:text-foreground"
                  aria-label={item.platform}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/5 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground/50">{copyright}</p>

          {/* Status */}
          <a
            href={status.href}
            className="flex items-center gap-2 text-sm text-muted-foreground/80 transition-colors hover:text-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--brand-accent)]" />
            {status.label}
          </a>
        </div>
      </div>
    </footer>
  );
}

FooterMinimal.displayName = "FooterMinimal";
