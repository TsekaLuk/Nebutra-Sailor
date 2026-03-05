import { AnimateIn, AnimateInGroup } from "@nebutra/custom-ui/primitives";

const TESTIMONIALS = [
  {
    quote:
      "Nebutra cut our delivery time in half. We shipped multi-tenant billing and analytics without platform rewrites.",
    author: "Sarah Chen",
    role: "CTO, TechStart AI",
  },
  {
    quote:
      "The architecture scales from first customer to enterprise procurement. It feels like a product, not a starter toy.",
    author: "Marcus Johnson",
    role: "Lead Engineer, DataFlow",
  },
  {
    quote:
      "Operational defaults are excellent. Observability, auth, and growth metrics are all integrated from day one.",
    author: "Emma Wilson",
    role: "Founder, CloudSync",
  },
] as const;

export function TestimonialsSection() {
  return (
    <section className="w-full bg-[color:var(--neutral-2)] py-24 md:py-32 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateIn inView preset="emerge" className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-[0.14em] text-[color:var(--blue-11)] uppercase">
            Trusted by operators
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[color:var(--neutral-12)] md:text-5xl dark:text-white">
            Teams use Sailor to move from prototype to production fast.
          </h2>
        </AnimateIn>

        <AnimateInGroup
          inView
          stagger="normal"
          className="mt-12 grid gap-5 md:grid-cols-3"
        >
          {TESTIMONIALS.map((item) => (
            <AnimateIn key={item.author} preset="fadeUp">
              <article className="rounded-[var(--radius-2xl)] border border-[color:var(--neutral-7)] bg-[color:var(--neutral-1)] p-6 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm leading-relaxed text-[color:var(--neutral-11)] dark:text-white/75">
                  “{item.quote}”
                </p>
                <p className="mt-6 text-sm font-semibold text-[color:var(--neutral-12)] dark:text-white">
                  {item.author}
                </p>
                <p className="text-xs text-[color:var(--neutral-10)] dark:text-white/60">{item.role}</p>
              </article>
            </AnimateIn>
          ))}
        </AnimateInGroup>
      </div>
    </section>
  );
}

TestimonialsSection.displayName = "TestimonialsSection";
