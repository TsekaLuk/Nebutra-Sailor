import { AnimateIn, AnimateInGroup } from "@nebutra/ui/components";
import { Check } from "lucide-react";
import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FooterMinimal, Navbar } from "@/components/landing";
import { Link } from "@/i18n/navigation";
import { type Locale, routing } from "@/i18n/routing";

const PLANS = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for individuals and small projects.",
    cta: "Get started",
    ctaHref: "/sign-up",
    highlighted: false,
    features: [
      "Up to 3 projects",
      "1,000 API calls / month",
      "Community support",
      "Basic analytics",
      "1 team member",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For growing teams that need more power and collaboration.",
    cta: "Start free trial",
    ctaHref: "/sign-up?plan=pro",
    highlighted: true,
    badge: "Most popular",
    features: [
      "Unlimited projects",
      "100,000 API calls / month",
      "Priority email support",
      "Advanced analytics & exports",
      "Up to 25 team members",
      "Custom domains",
      "API key management",
      "SSO (SAML)",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Dedicated infrastructure, SLAs, and enterprise-grade security.",
    cta: "Contact sales",
    ctaHref: "/contact",
    highlighted: false,
    features: [
      "Everything in Pro",
      "Unlimited API calls",
      "99.99% uptime SLA",
      "Dedicated account manager",
      "Unlimited team members",
      "On-premise / VPC deployment",
      "Custom data retention",
      "SOC 2 Type II reports",
      "HIPAA BAA available",
    ],
  },
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(routing.locales, lang)) return {};

  const t = await getTranslations({ locale: lang, namespace: "metadata" });
  return {
    title: `Pricing — ${t("title")}`,
    description: "Simple, transparent pricing. Start free, scale as you grow.",
    alternates: { canonical: `/${lang}/pricing` },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ lang: locale }));
}

export default async function PricingPage({ params }: { params: Promise<{ lang: string }> }) {
  "use cache";
  cacheLife("hours");

  const { lang } = await params;
  setRequestLocale(lang as Locale);

  return (
    <main id="main-content" className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn preset="emerge" inView>
          <div className="text-center">
            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl"
              style={{
                background: "var(--brand-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Simple, transparent pricing
            </h1>
            <p className="mt-4 text-lg text-[var(--neutral-11)]">
              Start free, no credit card required. Upgrade when you need more.
            </p>
          </div>
        </AnimateIn>

        {/* Pricing cards */}
        <AnimateInGroup stagger="normal" className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {PLANS.map((plan) => (
            <AnimateIn key={plan.id} preset="fadeUp">
              <div
                className={[
                  "relative flex flex-col rounded-2xl border p-8 shadow-sm transition-shadow hover:shadow-md",
                  plan.highlighted
                    ? "border-transparent bg-[var(--neutral-1)]"
                    : "border-[var(--neutral-7)] bg-[var(--neutral-1)]",
                ].join(" ")}
              >
                {/* Gradient border for highlighted plan */}
                {plan.highlighted && (
                  <div
                    className="absolute inset-0 -z-10 rounded-2xl p-[1px]"
                    style={{ background: "var(--brand-gradient)" }}
                    aria-hidden
                  />
                )}

                {/* Badge */}
                {"badge" in plan && plan.badge ? (
                  <span
                    className="mb-4 inline-block self-start rounded-full px-3 py-1 text-xs font-semibold text-white"
                    style={{ background: "var(--brand-gradient)" }}
                  >
                    {plan.badge}
                  </span>
                ) : (
                  <div className="mb-4 h-6" aria-hidden />
                )}

                <h2 className="text-xl font-semibold text-[var(--neutral-12)]">{plan.name}</h2>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[var(--neutral-12)]">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-[var(--neutral-11)]">{plan.period}</span>
                  )}
                </div>
                <p className="mt-3 text-sm text-[var(--neutral-11)]">{plan.description}</p>

                <a
                  href={plan.ctaHref}
                  className={[
                    "mt-8 block rounded-lg px-6 py-3 text-center text-sm font-semibold transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--blue-9)] focus:ring-offset-2",
                    plan.highlighted
                      ? "text-white"
                      : "border border-[var(--neutral-7)] text-[var(--neutral-12)] hover:bg-[var(--neutral-2)]",
                  ].join(" ")}
                  style={plan.highlighted ? { background: "var(--brand-gradient)" } : {}}
                >
                  {plan.cta}
                </a>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-[var(--neutral-11)]"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--blue-9)]" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </AnimateInGroup>

        {/* FAQ nudge */}
        <AnimateIn preset="fade" inView>
          <p className="mt-16 text-center text-sm text-[var(--neutral-11)]">
            Questions?{" "}
            <Link
              href="/faq"
              className="font-medium text-[var(--blue-9)] underline-offset-4 hover:underline"
            >
              Check our FAQ
            </Link>{" "}
            or{" "}
            <Link
              href="/contact"
              className="font-medium text-[var(--blue-9)] underline-offset-4 hover:underline"
            >
              contact us
            </Link>
            .
          </p>
        </AnimateIn>
      </section>

      <FooterMinimal />
    </main>
  );
}
