"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Github } from "lucide-react";
import { Logo, Logomark } from "@nebutra/brand";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { env } from "@/lib/env";

const APP_URL = env.NEXT_PUBLIC_APP_URL;

/**
 * Navbar - Fixed navigation with brand logo
 * Dark-only — no theme toggle, plain auth links to web app
 */
export function Navbar() {
  const t = useTranslations("nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/6"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logomark size={32} variant="inverse" className="md:hidden" />
          <Logo variant="en" size={150} inverted className="hidden md:block" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.icon && <link.icon className="h-4 w-4" />}
              {link.label}
            </a>
          ))}

          <a
            href={`${APP_URL}/sign-in`}
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            {t("signIn")}
          </a>
          <a
            href={`${APP_URL}/sign-up`}
            className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
          >
            {t("getStarted")}
          </a>
        </div>

        {/* Mobile: Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-white/60 transition-colors hover:text-white"
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="border-t border-white/6 bg-black/95 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 text-white/70 transition-colors hover:text-white"
              >
                {link.icon && <link.icon className="h-4 w-4" />}
                {link.label}
              </a>
            ))}

            <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-white/6">
              <a
                href={`${APP_URL}/sign-in`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full rounded-lg border border-white/10 px-4 py-3 text-center text-sm font-medium text-white/70 transition-all hover:border-white/20 hover:text-white"
              >
                {t("signIn")}
              </a>
              <a
                href={`${APP_URL}/sign-up`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full rounded-lg bg-indigo-500 px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-indigo-400"
              >
                {t("getStarted")}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

Navbar.displayName = "Navbar";
