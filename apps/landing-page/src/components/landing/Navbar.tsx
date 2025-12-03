"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github } from "lucide-react";
import { Logo, Logomark } from "@nebutra/brand";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "https://docs.nebutra.com" },
  { label: "GitHub", href: "https://github.com/nebutra/sailor", icon: Github },
];

/**
 * Navbar - Fixed navigation with brand logo
 */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if we need inverted (white) logo based on theme
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/10"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo - uses real brand SVG assets */}
        <a href="/" className="flex items-center gap-2">
          {/* Mobile: Show logomark only */}
          <Logomark
            size={32}
            variant={isDark ? "inverse" : "color"}
            className="md:hidden"
          />
          {/* Desktop: Show full logo with wordmark */}
          <Logo
            variant="en"
            size={150}
            inverted={isDark}
            className="hidden md:block"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.icon && <link.icon className="h-4 w-4" />}
              {link.label}
            </a>
          ))}
          <ThemeToggle />

          {/* Auth Buttons */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="rounded-lg bg-[image:var(--brand-gradient)] px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90">
                Get Started
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* Mobile: Theme Toggle + User + Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          {/* Show UserButton if signed in */}
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-foreground/10"
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
          className="border-t border-border/10 bg-background/95 backdrop-blur-lg md:hidden"
        >
          <div className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 text-foreground transition-colors hover:text-muted-foreground"
              >
                {link.icon && <link.icon className="h-4 w-4" />}
                {link.label}
              </a>
            ))}

            {/* Mobile Auth Buttons */}
            <SignedOut>
              <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-border/10">
                <SignInButton mode="modal">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full rounded-lg border border-border px-4 py-3 text-center font-medium text-foreground transition-all hover:bg-muted"
                  >
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full rounded-lg bg-[image:var(--brand-gradient)] px-4 py-3 text-center font-medium text-white transition-all hover:opacity-90"
                  >
                    Get Started
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

Navbar.displayName = "Navbar";
