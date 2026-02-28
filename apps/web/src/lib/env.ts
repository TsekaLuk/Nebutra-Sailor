import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  // Public URLs
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3001"),
  NEXT_PUBLIC_API_URL: z.string().url().default("http://localhost:3002"),
  NEXT_PUBLIC_STUDIO_URL: z.string().url().default("http://localhost:3003"),

  // Clerk auth
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().optional(),
  NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().default("/sign-in"),
  NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().default("/sign-up"),

  // Sanity CMS
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().default("wyfqr24v"),
  NEXT_PUBLIC_SANITY_DATASET: z.string().default("production"),
  NEXT_PUBLIC_SANITY_API_VERSION: z.string().default("2024-01-01"),

  // Stripe
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().optional(),

  // Sentry
  NEXT_PUBLIC_SENTRY_DSN: z.string().optional(),
});

export type WebEnv = z.infer<typeof envSchema>;

function validateEnv(): WebEnv {
  const result = envSchema.safeParse(process.env);

  if (!result.success) {
    console.error("Invalid web environment variables:");
    console.error(result.error.format());
    throw new Error("Invalid environment variables");
  }

  return result.data;
}

// Only validate on the server side
const _env =
  typeof window === "undefined"
    ? validateEnv()
    : (process.env as unknown as WebEnv);

export const env = {
  siteUrl: _env.NEXT_PUBLIC_SITE_URL,
  appUrl: _env.NEXT_PUBLIC_APP_URL,
  apiUrl: _env.NEXT_PUBLIC_API_URL,
  studioUrl: _env.NEXT_PUBLIC_STUDIO_URL,
  clerk: {
    publishableKey: _env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    signInUrl: _env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
    signUpUrl: _env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
  },
  sanity: {
    projectId: _env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: _env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: _env.NEXT_PUBLIC_SANITY_API_VERSION,
  },
  stripe: {
    publishableKey: _env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  },
  sentryDsn: _env.NEXT_PUBLIC_SENTRY_DSN,
  isDev: _env.NODE_ENV === "development",
  isProd: _env.NODE_ENV === "production",
} as const;

export default env;
