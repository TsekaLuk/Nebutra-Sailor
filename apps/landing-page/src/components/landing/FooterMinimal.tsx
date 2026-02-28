"use client";

import { Github, Twitter, MessageCircle } from "lucide-react";
import { Logo } from "@nebutra/brand";
import { footerContent } from "@/lib/landing-content";

const SOCIAL_ICONS = {
  x: Twitter,
  github: Github,
  discord: MessageCircle,
};

/**
 * FooterMinimal - Minimal footer (dark-only)
 */
export function FooterMinimal() {
  const { links, social, copyright, status } = footerContent;

  return (
    <footer className="relative w-full border-t border-white/[0.05] bg-black py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Logo variant="en" size={120} inverted />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/40 transition-colors hover:text-white"
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
                  className="text-white/30 transition-colors hover:text-white"
                  aria-label={item.platform}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/[0.05] pt-8 md:flex-row">
          <p className="text-sm text-white/30">{copyright}</p>

          {/* Status indicator */}
          <a
            href={status.href}
            className="flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {status.label}
          </a>
        </div>
      </div>
    </footer>
  );
}

FooterMinimal.displayName = "FooterMinimal";
