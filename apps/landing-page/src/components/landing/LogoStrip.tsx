import { techStackLogos, getLogoUrl } from "@/lib/landing-content";

/**
 * LogoStrip - Static tech stack credibility strip (dark-only, server component)
 *
 * No marquee animation — static grid gives a more premium feel (à la Neon, Linear)
 */
export function LogoStrip() {
  const logos = techStackLogos.slice(0, 8).map((logo) => ({
    name: logo.name,
    url: getLogoUrl(logo, "dark"),
  }));

  return (
    <section className="w-full border-y border-white/[0.05] bg-black py-10">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-8 text-center text-xs uppercase tracking-widest text-white/30">
          Built on the stack you already trust
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.url}
              alt={logo.name}
              className="h-7 w-auto opacity-30 grayscale transition-all duration-300 hover:opacity-60 hover:grayscale-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

LogoStrip.displayName = "LogoStrip";
