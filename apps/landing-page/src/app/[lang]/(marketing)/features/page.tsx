import { AnimateIn, AnimateInGroup } from "@nebutra/ui/components";
import { BarChart3, Cpu, Database, Globe, Key, Layers, Shield, Workflow, Zap } from "lucide-react";
import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { FooterMinimal, Navbar } from "@/components/landing";
import { type Locale, routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(routing.locales, lang)) return {};
  return {
    title: "Features — Nebutra",
    description: "Everything you need to build, scale, and monetise an AI-native SaaS product.",
    alternates: { canonical: `/${lang}/features` },
  };
}

const FEATURE_SECTIONS = [
  {
    category: "AI & Intelligence",
    icon: Cpu,
    color: "var(--blue-9)",
    features: [
      {
        title: "Multi-model chat completions",
        description:
          "Route requests to GPT-4o, Claude, or your own fine-tuned models. Streaming, vision, and function calling supported out of the box.",
      },
      {
        title: "Semantic embeddings",
        description:
          "Generate and store vector embeddings with pgvector. Power semantic search, RAG pipelines, and recommendation engines.",
      },
      {
        title: "AI usage metering",
        description:
          "Track token consumption per tenant per billing period. Set per-plan quotas and auto-notify on 80% / 100% burn.",
      },
    ],
  },
  {
    category: "Multi-tenant Platform",
    icon: Layers,
    color: "var(--cyan-9)",
    features: [
      {
        title: "Organisation-level isolation",
        description:
          "Row-level security in Postgres ensures tenants can never access each other's data — enforced at the database layer, not just the application.",
      },
      {
        title: "Role-based access control",
        description:
          "OWNER, ADMIN, MEMBER, and VIEWER roles with 17 typed permission scopes. Fine-grained enough for enterprise, simple enough for indie teams.",
      },
      {
        title: "Automatic tenant provisioning",
        description:
          "When a new organisation signs up via Clerk, we auto-generate their first API key and send a branded welcome email — zero manual steps.",
      },
    ],
  },
  {
    category: "Developer Experience",
    icon: Key,
    color: "var(--blue-9)",
    features: [
      {
        title: "Hashed API keys",
        description:
          "SHA-256 hashed keys with prefix display (nbtr_live_…). Shown in plaintext exactly once on creation — security without friction.",
      },
      {
        title: "Idempotency middleware",
        description:
          "Pass an Idempotency-Key header and any POST request becomes safe to retry. Redis-backed, 24-hour cache, IETF draft compliant.",
      },
      {
        title: "OpenAPI + Swagger UI",
        description:
          "Every route defined with @hono/zod-openapi generates a live OpenAPI 3.1 spec. Browse and test directly from /docs.",
      },
    ],
  },
  {
    category: "Billing & Monetisation",
    icon: BarChart3,
    color: "var(--cyan-9)",
    features: [
      {
        title: "Stripe Checkout + Portal",
        description:
          "One-click checkout sessions and self-serve billing portal. Trial periods, annual billing, and proration handled natively.",
      },
      {
        title: "Usage-based quota enforcement",
        description:
          "Real-time Redis counters track API calls and token usage per tenant. Requests are gated at the gateway when limits are hit.",
      },
      {
        title: "Webhook lifecycle sync",
        description:
          "Stripe subscription events automatically update org plans in your database via Inngest — no cron jobs, no polling.",
      },
    ],
  },
  {
    category: "Reliability",
    icon: Zap,
    color: "var(--blue-9)",
    features: [
      {
        title: "Circuit breaker + retry",
        description:
          "Every Python microservice uses a CLOSED/OPEN/HALF_OPEN circuit breaker with exponential backoff and jitter — no cascading failures.",
      },
      {
        title: "Dead letter queue",
        description:
          "Event handlers that exhaust 3 retry attempts land in the DLQ. Replay them individually from the admin API without redeploying.",
      },
      {
        title: "SLO burn-rate alerts",
        description:
          "Multi-window Google SRE-style alerts fire at 14.4×, 6×, and 3× burn rates before your error budget is exhausted.",
      },
    ],
  },
  {
    category: "Security",
    icon: Shield,
    color: "var(--cyan-9)",
    features: [
      {
        title: "CSP nonce-based headers",
        description:
          "Strict-dynamic Content Security Policy with per-request nonces generated in Clerk middleware — no unsafe-inline anywhere.",
      },
      {
        title: "ModSecurity WAF",
        description:
          "OWASP Core Rule Set in DetectionOnly mode on every ingress. Rate limiting at 30 RPS with burst tolerance via nginx annotations.",
      },
      {
        title: "SBOM + SLSA provenance",
        description:
          "Every release generates a CycloneDX software bill of materials and SLSA provenance attestation, uploaded to the GitHub Release.",
      },
    ],
  },
  {
    category: "Observability",
    icon: Globe,
    color: "var(--blue-9)",
    features: [
      {
        title: "OpenTelemetry tracing",
        description:
          "Distributed traces flow from Next.js → Hono → Python microservices via OTLP. Exported to Jaeger (dev) and Grafana Tempo (prod).",
      },
      {
        title: "Grafana dashboards",
        description:
          "32-panel platform overview: SLO availability, error budget remaining, HPA saturation, pod restarts, and CPU throttling.",
      },
      {
        title: "Sentry error tracking",
        description:
          "Server-side and client-side errors captured with tenant context, request ID, and trace ID for cross-system correlation.",
      },
    ],
  },
  {
    category: "Data & Analytics",
    icon: Database,
    color: "var(--cyan-9)",
    features: [
      {
        title: "ClickHouse OLAP warehouse",
        description:
          "Events land in ClickHouse for fast analytical queries. dbt transforms raw events into gold-layer growth metrics visible in the dashboard.",
      },
      {
        title: "Funnel analytics",
        description:
          "Track signups → activations → conversions with cohort-level attribution. Revenue per active user calculated from the gold layer.",
      },
      {
        title: "Kafka / event ingestion",
        description:
          "High-throughput event ingestion service decouples your application from your data warehouse. Schema validation at the edge.",
      },
    ],
  },
  {
    category: "Infrastructure",
    icon: Workflow,
    color: "var(--blue-9)",
    features: [
      {
        title: "GitOps with ArgoCD",
        description:
          "Main branch changes are automatically reconciled to the cluster. Self-heal reverts manual kubectl edits. Sync windows enforce safe deploy hours.",
      },
      {
        title: "PgBouncer connection pooling",
        description:
          "Transaction-mode PgBouncer in front of Supabase handles 1,000 app connections on 20 Postgres connections. HA with 2 replicas.",
      },
      {
        title: "Horizontal + vertical autoscaling",
        description:
          "HPA scales on CPU/memory. VPA runs in Off mode providing right-sizing recommendations. KEDA custom metrics planned for v2.",
      },
    ],
  },
] as const;

export default async function FeaturesPage({ params }: { params: Promise<{ lang: string }> }) {
  "use cache";
  cacheLife("days");

  const { lang } = await params;
  setRequestLocale(lang as Locale);

  return (
    <main id="main-content" className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <AnimateIn preset="emerge" inView>
          <h1
            className="text-4xl font-bold tracking-tight sm:text-5xl"
            style={{
              background: "var(--brand-gradient)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Everything you need to ship a unicorn
          </h1>
          <p className="mt-6 text-lg text-[var(--neutral-11)]">
            Nebutra is a full-stack SaaS platform — AI, billing, multi-tenancy, observability, and
            security baked in from day one.
          </p>
        </AnimateIn>
      </section>

      {/* Feature sections */}
      <section className="mx-auto max-w-6xl px-4 pb-32 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {FEATURE_SECTIONS.map((section) => (
            <div key={section.category}>
              <AnimateIn preset="fadeUp" inView>
                <div className="mb-10 flex items-center gap-3">
                  <div className="rounded-lg p-2" style={{ background: "var(--neutral-2)" }}>
                    <section.icon
                      className="h-5 w-5"
                      style={{ color: section.color }}
                      aria-hidden
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--neutral-12)]">
                    {section.category}
                  </h2>
                </div>
              </AnimateIn>

              <AnimateInGroup stagger="fast" className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {section.features.map((feature) => (
                  <AnimateIn key={feature.title} preset="fadeUp">
                    <div className="rounded-xl border border-[var(--neutral-7)] bg-[var(--neutral-1)] p-6 transition-shadow hover:shadow-md">
                      <h3 className="text-sm font-semibold text-[var(--neutral-12)]">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--neutral-11)]">
                        {feature.description}
                      </p>
                    </div>
                  </AnimateIn>
                ))}
              </AnimateInGroup>
            </div>
          ))}
        </div>
      </section>

      <FooterMinimal />
    </main>
  );
}
