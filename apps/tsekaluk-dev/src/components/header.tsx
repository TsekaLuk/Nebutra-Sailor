"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { useSession, signIn, signOut } from "next-auth/react";
import { Link } from "@/i18n/navigation";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useCommandPalette } from "@/components/providers/command-palette-provider";

function AuthIndicator() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null;
  }

  if (session?.user) {
    const initial = session.user.name?.charAt(0).toUpperCase() ?? "?";
    return (
      <button
        type="button"
        onClick={() => signOut()}
        className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Sign out"
        title={`Signed in as ${session.user.name ?? session.user.email}`}
      >
        {session.user.image ? (
          <Image
            src={session.user.image}
            alt=""
            width={24}
            height={24}
            className="rounded-full"
            unoptimized
          />
        ) : (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-200">
            {initial}
          </span>
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => signIn()}
      className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:hover:text-white"
    >
      Sign in
    </button>
  );
}

export function Header() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { setOpen: openCommandPalette } = useCommandPalette();

  const NAV_ITEMS = [
    { label: t("work"), href: "/work" },
    { label: t("thinking"), href: "/thinking" },
    { label: t("now"), href: "/now" },
    { label: t("about"), href: "/about" },
    { label: t("links"), href: "/links" },
    { label: t("soul"), href: "/soul" },
    { label: t("uses"), href: "/uses" },
    { label: t("guestbook"), href: "/guestbook" },
  ] as const;

  return (
    <header className="relative z-40">
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 -translate-y-20 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-transform focus:translate-y-0 dark:bg-white dark:text-gray-900"
      >
        Skip to content
      </a>
      <div className="mx-auto max-w-7xl px-6 py-8">
        <nav aria-label="Main navigation" className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-serif italic text-2xl tracking-tight text-foreground"
          >
            <Image
              src="/images/logo-mono.svg"
              alt=""
              width={24}
              height={24}
              className="dark:invert"
            />
            Tseka Luk
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <div className="flex items-center gap-2 ml-2">
              <button
                type="button"
                aria-label="Open command palette"
                onClick={() => openCommandPalette(true)}
                className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Search className="h-[18px] w-[18px] stroke-[1.5]" />
                <span className="text-[11px] font-medium opacity-60">⌘K</span>
              </button>
              <LanguageSwitcher />
              <ThemeToggle />
              <AuthIndicator />
            </div>
            <Link
              href="/about#contact"
              className="rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-800 hover:scale-[1.03] active:scale-[0.97] dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              {t("contact")}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--blue-9)] focus:ring-offset-1 md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="overflow-hidden md:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col gap-4 pt-6 pb-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex items-center gap-3 mt-2">
                  <LanguageSwitcher />
                  <ThemeToggle />
                  <AuthIndicator />
                  <Link
                    href="/about#contact"
                    className="w-fit rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t("contact")}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
