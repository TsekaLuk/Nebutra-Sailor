import { Link } from "@/i18n/navigation";
import { NowEntry } from "./now-entry";
import { getTranslations } from "next-intl/server";

export async function NowPreview() {
  const t = await getTranslations("now_preview");

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 border-t border-gray-100 dark:border-gray-800">
      <div className="mb-10 flex items-baseline justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {t.rich("headline", {
            em: (chunks) => <span className="font-serif italic">{chunks}</span>,
          })}
        </h2>
        <Link
          href="/now"
          className="text-sm text-gray-400 dark:text-gray-500 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
        >
          {t("view_all")} &rarr;
        </Link>
      </div>

      <NowEntry preview />
    </section>
  );
}
