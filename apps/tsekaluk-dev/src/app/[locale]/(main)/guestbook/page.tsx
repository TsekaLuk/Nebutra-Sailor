import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { AnimateIn } from "@nebutra/ui/components"
import { GuestbookClient } from "@/components/guestbook/guestbook-client"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "pages.guestbook" })
  return {
    title: t("metadata_title"),
    description: t("metadata_desc"),
    openGraph: {
      images: [
        `/og?title=${encodeURIComponent(t("metadata_title"))}&subtitle=${encodeURIComponent(t("metadata_desc"))}`,
      ],
    },
    alternates: {
      canonical: `https://tsekaluk.dev/${locale}/guestbook`,
      languages: {
        en: "https://tsekaluk.dev/en/guestbook",
        zh: "https://tsekaluk.dev/zh/guestbook",
      },
    },
  }
}

export default async function GuestbookPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "pages.guestbook" })

  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <div className="mb-16">
        <AnimateIn preset="fade">
          <p className="font-serif italic text-lg text-gray-400 dark:text-gray-500">
            {t("label")}
          </p>
        </AnimateIn>
        <AnimateIn preset="fadeUp" delay={0.1}>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {t("headline")}
          </h1>
        </AnimateIn>
        <AnimateIn preset="fadeUp" delay={0.2}>
          <p className="mt-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {t("description")}
          </p>
        </AnimateIn>
      </div>

      <GuestbookClient />
    </section>
  )
}
