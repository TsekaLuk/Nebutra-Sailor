"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Link } from "@/i18n/navigation";
import { Menu, X, Github } from "lucide-react";
import { Logo, Logomark } from "@nebutra/brand";
import { cn } from "@/lib/utils";
import { useMount } from "@/hooks/useMount";
import { useTranslations } from "next-intl";
import { env } from "@/lib/env";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";

const APP_URL = env.NEXT_PUBLIC_APP_URL;

/**
 * Navbar - Fixed navigation with brand logo and theme toggle
 */
export function Navbar() {
  const t = useTranslations("nav");
  const { resolvedTheme } = useTheme();
  const isMounted = useMount();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isDark = !isMounted || resolvedTheme !== "light";

  const navLinks = [
    { label: t("features"), href: "#features" },
    { label: t("pricing"), href: "#pricing" },
    { label: t("docs"), href: "https://docs.nebutra.com" },
    {
      label: t("github"),
      href: "https://github.com/TsekaLuk/Nebutra-Sailor",
      icon: Github,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-neutral-7 bg-white/85 backdrop-blur-md dark:border-white/10 dark:bg-black/80"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logomark
            size={32}
            variant={isDark ? "inverse" : "color"}
            className="md:hidden"
          />
          <Logo
            variant="en"
            size={150}
            inverted={isDark}
            className="hidden md:block"
          />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-2 text-sm text-neutral-11 transition-colors hover:text-neutral-12 dark:text-white/70 dark:hover:text-white"
            >
              {link.icon && <link.icon className="h-4 w-4" />}
              {link.label}
            </a>
          ))}

          <LocaleSwitcher />
          <ThemeSwitcher />

          <a
            href={`${APP_URL}/sign-in`}
            className="text-sm text-neutral-11 transition-colors hover:text-neutral-12 dark:text-white/70 dark:hover:text-white"
          >
            {t("signIn")}
          </a>
          <a
            href={`${APP_URL}/sign-up`}
            className="rounded-lg bg-[image:var(--brand-gradient)] px-4 py-2 text-sm font-medium text-white"
          >
            {t("getStarted")}
          </a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <LocaleSwitcher />
          <ThemeSwitcher />
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-neutral-11 transition-colors hover:text-neutral-12 dark:text-white/70 dark:hover:text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-neutral-7 bg-white/95 backdrop-blur-md md:hidden dark:border-white/10 dark:bg-black/95">
          <div className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 text-neutral-11 transition-colors hover:text-neutral-12 dark:text-white/70 dark:hover:text-white"
              >
                {link.icon && <link.icon className="h-4 w-4" />}
                {link.label}
              </a>
            ))}

            <div className="mt-2 flex flex-col gap-3 border-t border-neutral-7 pt-4 dark:border-white/10">
              <a
                href={`${APP_URL}/sign-in`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full rounded-lg border border-neutral-7 px-4 py-3 text-center text-sm font-medium text-neutral-12 dark:border-white/15 dark:text-white"
              >
                {t("signIn")}
              </a>
              <a
                href={`${APP_URL}/sign-up`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full rounded-lg bg-[image:var(--brand-gradient)] px-4 py-3 text-center text-sm font-medium text-white"
              >
                {t("getStarted")}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

Navbar.displayName = "Navbar";
