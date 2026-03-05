import Image from "next/image";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { techStackLogos, getLogoUrl } from "@/lib/landing-content";

/**
 * LogoStrip - Static tech stack credibility strip (dark-only, server component)
 *
 * No marquee animation — static grid gives a more premium feel (à la Neon, Linear)
 */
export async function LogoStrip({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "logoStrip" });

  const logos = techStackLogos.slice(0, 8).map((logo) => ({
    name: logo.name,
    url: getLogoUrl(logo, "dark"),
  }));

  return (
    <section className="w-full border-y border-[var(--neutral-6)] bg-white py-10 dark:border-white/5 dark:bg-black">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-8 text-center text-xs uppercase tracking-widest text-[var(--neutral-9)] dark:text-white/30">
          {t("tagline")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {logos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.url}
              alt={logo.name}
              width={0}
              height={28}
              className="h-7 w-auto opacity-50 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0 invert dark:invert-0"
              style={{ width: "auto" }}
              unoptimized={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

LogoStrip.displayName = "LogoStrip";
