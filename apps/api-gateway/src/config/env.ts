import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.string().default("3002"),

  // Database
  DATABASE_URL: z.string().url(),

  // Redis
  UPSTASH_REDIS_URL: z.string().optional(),
  UPSTASH_REDIS_TOKEN: z.string().optional(),

  // Clerk
  CLERK_SECRET_KEY: z.string().min(1),
  CLERK_WEBHOOK_SECRET: z.string().optional(),

  // Stripe
  STRIPE_SECRET_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional(),

  // Inngest
  INNGEST_EVENT_KEY: z.string().optional(),
  INNGEST_SIGNING_KEY: z.string().optional(),

  // Sentry (optional — disabled when absent)
  SENTRY_DSN: z.string().url().optional(),
  SENTRY_RELEASE: z.string().optional(),

  // Email / Resend
  RESEND_API_KEY: z.string().optional(),
  EMAIL_FROM: z.string().optional(),

  // Admin API (min 32 chars; generate with: openssl rand -hex 32)
  ADMIN_API_KEY: z.string().min(32).optional(),

  // Service URLs
  AI_SERVICE_URL: z.string().optional(),
  CONTENT_SERVICE_URL: z.string().optional(),
  RECSYS_SERVICE_URL: z.string().optional(),
  ECOMMERCE_SERVICE_URL: z.string().optional(),
  WEB3_SERVICE_URL: z.string().optional(),
  BILLING_SERVICE_URL: z.string().optional(),
  EVENT_INGEST_SERVICE_URL: z.string().optional(),
  INTERNAL_API_KEY: z.string().optional(),

  // Frontend URLs
  LANDING_URL: z.string().optional(),
  WEB_URL: z.string().optional(),
  STUDIO_URL: z.string().optional(),
  // Additional allowed CORS origins (comma-separated)
  CORS_ORIGINS: z.string().optional(),

  // Domain overrides
  DOMAIN_LANDING: z.string().url().optional(),
  DOMAIN_APP: z.string().url().optional(),
  DOMAIN_API: z.string().url().optional(),
  DOMAIN_STUDIO: z.string().url().optional(),
});

// Production domain constants (overridable via environment variables)
export const DOMAINS = {
  landing: process.env.DOMAIN_LANDING ?? "https://nebutra.com",
  app: process.env.DOMAIN_APP ?? "https://app.nebutra.com",
  api: process.env.DOMAIN_API ?? "https://api.nebutra.com",
  studio: process.env.DOMAIN_STUDIO ?? "https://studio.nebutra.com",
} as const;

export type Env = z.infer<typeof envSchema>;

export function validateEnv(): Env {
  const result = envSchema.safeParse(process.env);

  if (!result.success) {
    process.stderr.write("❌ Invalid environment variables:\n");
    process.stderr.write(JSON.stringify(result.error.format(), null, 2) + "\n");
    throw new Error("Invalid environment variables");
  }

  return result.data;
}

export const env = validateEnv();
