"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { AnimateIn } from "@nebutra/ui/components";
import { EndorsementDialog } from "@/components/guestbook/endorsement-dialog";

import Image from "next/image";

const FRAGMENT_KEYS = [
  "maya",
  "lina",
  "david",
  "sam",
  "alex",
  "wei",
  "yuki",
  "chen",
] as const;

const AVATARS: Record<(typeof FRAGMENT_KEYS)[number], string> = {
  maya: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
  lina: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
  david:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
  sam: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
  alex: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150&h=150",
  wei: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
  yuki: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
  chen: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
};

export function ConstellationSection() {
  const t = useTranslations("constellation");

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 border-t border-gray-100 dark:border-gray-800">
      {/* Header */}
      <div className="text-center mb-16">
        <AnimateIn preset="fade" inView>
          <p className="font-serif italic text-2xl text-gray-400 dark:text-gray-500 mb-4 tracking-tight">
            {t("label")}
          </p>
        </AnimateIn>

        <AnimateIn preset="fadeUp" delay={0.1} inView>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            {t("headline")}
          </h2>
        </AnimateIn>

        <AnimateIn preset="fade" delay={0.2} inView>
          <p className="text-base text-gray-500 dark:text-gray-400">
            {t("description")}
          </p>
        </AnimateIn>
      </div>

      {/* Fragment wall — CSS columns for natural masonry */}
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {FRAGMENT_KEYS.map((key, i) => (
          <AnimateIn key={key} preset="fadeUp" delay={i * 0.06} inView>
            <div
              className={`mb-5 break-inside-avoid rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5 ${i === 0 ? "border-[var(--color-accent)] dark:border-[var(--color-accent-dark)] shadow-[0_8px_30px_var(--color-accent-shadow)] bg-white dark:bg-gray-900" : "border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 opacity-80 hover:opacity-100 hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_4px_24px_rgba(0,0,0,0.2)]"}`}
            >
              <p className="font-serif italic text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                &ldquo;{t(`fragments.${key}.quote`)}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={AVATARS[key]}
                    alt={t(`fragments.${key}.author`)}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {t(`fragments.${key}.author`)}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {t(`fragments.${key}.role`)}
                  </span>
                </div>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>

      {/* CTA */}
      <AnimateIn preset="fade" delay={0.5} inView>
        <div className="mt-16 text-center">
          <EndorsementDialog />
          <p className="mt-3 text-xs text-gray-300 dark:text-gray-600">
            {t("cta_hint")}
          </p>
        </div>
      </AnimateIn>
    </section>
  );
}
