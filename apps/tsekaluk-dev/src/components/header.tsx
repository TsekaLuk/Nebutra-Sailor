"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@nebutra/ui/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_ITEMS = [
  { label: "Work", href: "/work" },
  { label: "Thinking", href: "/thinking" },
  { label: "Now", href: "/now" },
  { label: "About", href: "/about" },
  { label: "Links", href: "/links" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="relative z-40">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif italic text-2xl tracking-tight text-gray-900 dark:text-gray-100"
          >
            Tseka
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link
              href="/about#contact"
              className="rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
            >
              Let&apos;s talk
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="rounded-md p-2 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--blue-9)] focus:ring-offset-1 md:hidden"
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
        <div
          className={cn(
            "overflow-hidden transition-[max-height] duration-300 ease-in-out md:hidden",
            mobileOpen ? "max-h-96" : "max-h-0",
          )}
        >
          <div className="flex flex-col gap-4 pt-6 pb-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 mt-2">
              <ThemeToggle />
              <Link
                href="/about#contact"
                className="w-fit rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                onClick={() => setMobileOpen(false)}
              >
                Let&apos;s talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
