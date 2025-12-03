"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Marquee } from "@nebutra/custom-ui/marketing";
import { techStackLogos, getLogoUrl } from "@/lib/landing-content";

/**
 * TrustRibbon - Infinite scrolling tech stack logos
 *
 * Logos automatically switch between light/dark variants based on theme.
 *
 * @see DESIGN.md Section 2
 */
export function TrustRibbon() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use appropriate logo variant based on theme
  // Dark theme = use logos designed for dark backgrounds (light colored logos)
  // Light theme = use logos designed for light backgrounds (dark colored logos)
  const logoTheme = mounted && resolvedTheme === "light" ? "light" : "dark";

  const logos = techStackLogos.map((logo) => ({
    name: logo.name,
    url: getLogoUrl(logo, logoTheme),
  }));

  return (
    <section className="relative w-full overflow-hidden border-y border-border/5 bg-background/50 py-8 backdrop-blur-sm">
      {/* Gradient overlays for fade effect */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

      <Marquee pauseOnHover className="[--duration:40s]">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="mx-8 flex items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
          >
            <img
              src={logo.url}
              alt={logo.name}
              className="h-8 w-auto opacity-60 transition-opacity hover:opacity-100"
              loading="lazy"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}

TrustRibbon.displayName = "TrustRibbon";
