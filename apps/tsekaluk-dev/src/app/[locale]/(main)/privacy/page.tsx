import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AnimateIn } from "@nebutra/ui/components";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.privacy" });
  return {
    title: t("metadata_title"),
    description: t("metadata_desc"),
  };
}

const SECTIONS = [
  "analytics",
  "auth",
  "chat",
  "cookies",
  "third_party",
  "contact",
] as const;

export default async function PrivacyPage() {
  const t = await getTranslations("pages.privacy");

  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <AnimateIn preset="fade">
        <header className="mb-16">
          <h1 className="font-serif italic text-5xl tracking-tight text-gray-900 dark:text-white">
            {t("headline")}
          </h1>
          <p className="mt-4 text-sm text-gray-400">{t("last_updated")}</p>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {t("intro")}
          </p>
        </header>
      </AnimateIn>

      <div className="space-y-12">
        {SECTIONS.map((section) => (
          <AnimateIn key={section} preset="fadeUp" inView>
            <section>
              <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                {t(`${section}_title`)}
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {t(`${section}_body`)}
                {section === "contact" && (
                  <>
                    {" "}
                    <a
                      href="mailto:tsekaluk@nebutra.com"
                      className="text-gray-900 dark:text-white underline underline-offset-4"
                    >
                      tsekaluk@nebutra.com
                    </a>
                  </>
                )}
              </p>
            </section>
          </AnimateIn>
        ))}
      </div>
    </main>
  );
}
