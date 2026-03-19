import { AnimateIn } from "@nebutra/ui/components";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { NowEntry } from "./now-entry";

export async function NowPreview() {
  const t = await getTranslations("now_preview");

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 border-t border-gray-100 dark:border-gray-800">
      <div className="mb-10 flex items-baseline justify-between">
        <AnimateIn preset="fade" inView>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t.rich("headline", {
              em: (chunks) => <span className="font-serif italic">{chunks}</span>,
            })}
          </h2>
        </AnimateIn>

        <AnimateIn preset="fade" inView>
          <Link
            href="/now"
            className="text-sm text-gray-400 dark:text-gray-500 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
          >
            {t("view_all")} &rarr;
          </Link>
        </AnimateIn>
      </div>

      <NowEntry preview />
    </section>
  );
}
