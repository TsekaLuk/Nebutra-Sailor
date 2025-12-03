"use client";

import { Marquee } from "@nebutra/custom-ui/marketing";
import { techStackLogos, getLogoUrl } from "@/lib/landing-content";

/**
 * TrustRibbon - Infinite scrolling tech stack logos
 *
 * @see DESIGN.md Section 2
 */
export function TrustRibbon() {
  const logos = techStackLogos.map((logo) => ({
    name: logo.name,
    url: getLogoUrl(logo, "dark"),
  }));

  return (
    <section className="relative w-full overflow-hidden border-y border-white/5 bg-black/50 py-8 backdrop-blur-sm">
      {/* Gradient overlays for fade effect */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent" />

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
