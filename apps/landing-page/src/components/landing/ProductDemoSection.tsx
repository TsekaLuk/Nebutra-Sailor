"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimateIn, AnimateInGroup } from "@nebutra/custom-ui/primitives";
import { env } from "@/lib/env";

const LIVE_DEMOS = [
  {
    id: "analytics",
    label: "Analytics",
    path: "/demo/embed?view=analytics",
    image: "/dashboard/demo-analytics.svg",
    alt: "Growth analytics dashboard preview",
  },
  {
    id: "billing",
    label: "Billing",
    path: "/demo/embed?view=billing",
    image: "/dashboard/demo-billing.svg",
    alt: "Billing and plan management preview",
  },
  {
    id: "tenants",
    label: "Tenants",
    path: "/demo/embed?view=tenants",
    image: "/dashboard/demo-tenants.svg",
    alt: "Multi-tenant workspace preview",
  },
] as const;

export function ProductDemoSection() {
  const [activeDemoId, setActiveDemoId] = useState<(typeof LIVE_DEMOS)[number]["id"]>("analytics");
  const [isFrameLoading, setIsFrameLoading] = useState(true);

  const activeDemo =
    LIVE_DEMOS.find((demo) => demo.id === activeDemoId) ?? LIVE_DEMOS[0];

  const liveSrc = useMemo(() => `${env.NEXT_PUBLIC_APP_URL}${activeDemo.path}`, [activeDemo.path]);

  return (
    <section id="product" className="w-full bg-neutral-1 py-24 md:py-32 dark:bg-black">
      <div className="product-demo-cq mx-auto max-w-7xl px-6">
        <AnimateIn inView preset="emerge" className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-[0.14em] text-blue-11 uppercase">
            Product in action
          </p>
          <h2 className="product-demo-title mt-4 text-3xl font-bold tracking-tight text-neutral-12 md:text-5xl dark:text-white">
            See the operator-grade UI your team ships on day one.
          </h2>
          <p className="product-demo-subtitle mt-4 text-lg text-neutral-11 dark:text-white/70">
            Tenant analytics, usage billing, and AI workflows are included in a single cohesive dashboard shell.
          </p>
        </AnimateIn>

        <AnimateIn inView preset="fadeUp" className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-neutral-7 bg-neutral-2 p-3 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="flex flex-wrap gap-2 border-b border-neutral-7 px-1 pb-3 dark:border-white/10">
              {LIVE_DEMOS.map((demo) => (
                <button
                  key={demo.id}
                  type="button"
                  onClick={() => {
                    if (activeDemoId === demo.id) return;
                    setIsFrameLoading(true);
                    setActiveDemoId(demo.id);
                  }}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    activeDemoId === demo.id
                      ? "bg-blue-9 text-white"
                      : "bg-neutral-1 text-neutral-11 hover:text-neutral-12 dark:bg-black/40 dark:text-white/70 dark:hover:text-white"
                  }`}
                >
                  {demo.label}
                </button>
              ))}
            </div>

            <div className="relative mt-3 aspect-16/10 overflow-hidden rounded-xl border border-neutral-6 bg-neutral-1 dark:border-white/10 dark:bg-black">
              {isFrameLoading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-(--neutral-1)/85 text-sm text-neutral-11 dark:bg-black/80 dark:text-white/70">
                  Loading live demo...
                </div>
              )}
              <iframe
                key={activeDemo.id}
                title={`Live ${activeDemo.label} dashboard demo`}
                src={liveSrc}
                loading="lazy"
                onLoad={() => setIsFrameLoading(false)}
                className="h-full w-full"
              />
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1">
              <p className="text-xs text-neutral-10 dark:text-white/60">
                Interactive embed from {env.NEXT_PUBLIC_APP_URL}
              </p>
              <a
                href={liveSrc}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-blue-10 hover:text-blue-11 dark:text-cyan-9 dark:hover:text-cyan-10"
              >
                Open full app
              </a>
            </div>
          </div>
        </AnimateIn>

        <AnimateInGroup
          inView
          stagger="normal"
          className="product-demo-grid mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3"
        >
          {LIVE_DEMOS.map((demo) => (
            <AnimateIn key={demo.id} preset="fadeUp">
              <button
                type="button"
                onClick={() => {
                  if (activeDemoId === demo.id) return;
                  setIsFrameLoading(true);
                  setActiveDemoId(demo.id);
                }}
                className={`product-demo-card w-full overflow-hidden rounded-2xl border p-2 text-left transition-colors ${
                  activeDemoId === demo.id
                    ? "border-blue-7 bg-blue-2 dark:border-cyan-7 dark:bg-(--cyan-1)/30"
                    : "border-neutral-7 bg-neutral-2 dark:border-white/10 dark:bg-white/5"
                }`}
              >
                <div className="relative aspect-4/3 overflow-hidden rounded-xl border border-neutral-6 dark:border-white/10">
                  <Image
                    src={demo.image}
                    alt={demo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="px-1 pt-2 text-xs font-medium text-neutral-11 dark:text-white/70">
                  {demo.label}
                </p>
              </button>
            </AnimateIn>
          ))}
        </AnimateInGroup>
      </div>
    </section>
  );
}

ProductDemoSection.displayName = "ProductDemoSection";
