"use client";

import { AnimateIn, AnimateInGroup } from "@nebutra/custom-ui/primitives";

const STEPS = [
  {
    title: "Scaffold",
    description: "Bootstrap an enterprise-ready monorepo in minutes with multi-tenant defaults.",
  },
  {
    title: "Wire Providers",
    description: "Connect auth, billing, and AI providers through stable, typed adapters.",
  },
  {
    title: "Ship",
    description: "Deploy a production baseline with observability and operational guardrails.",
  },
  {
    title: "Scale",
    description: "Grow across tenants and regions using the same architecture without rewrites.",
  },
] as const;

export function WorkflowSection() {
  return (
    <section id="workflow" className="w-full bg-[color:var(--neutral-2)] py-24 md:py-32 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateIn preset="emerge" inView className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-[0.14em] text-[color:var(--blue-11)] uppercase">
            Delivery workflow
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[color:var(--neutral-12)] md:text-5xl dark:text-white">
            Move from template to revenue without a platform rewrite.
          </h2>
        </AnimateIn>

        <AnimateInGroup
          inView
          stagger="normal"
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {STEPS.map((step, index) => (
            <AnimateIn key={step.title} preset="fadeUp" className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-[color:var(--neutral-7)] bg-[color:var(--neutral-1)] p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                <span className="text-xs font-semibold tracking-[0.12em] text-[color:var(--blue-11)] uppercase">
                  Step {index + 1}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-[color:var(--neutral-12)] dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--neutral-11)] dark:text-white/70">
                  {step.description}
                </p>
              </article>
            </AnimateIn>
          ))}
        </AnimateInGroup>
      </div>
    </section>
  );
}

WorkflowSection.displayName = "WorkflowSection";
