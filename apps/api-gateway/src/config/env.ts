import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.string().default("3002"),

  // Database
  DATABASE_URL: z.string().optional(),

  // Redis
  UPSTASH_REDIS_URL: z.string().optional(),
  UPSTASH_REDIS_TOKEN: z.string().optional(),

  // Clerk
  CLERK_SECRET_KEY: z.string().optional(),

  // Service URLs
  AI_SERVICE_URL: z.string().optional(),
  CONTENT_SERVICE_URL: z.string().optional(),
  RECSYS_SERVICE_URL: z.string().optional(),
  ECOMMERCE_SERVICE_URL: z.string().optional(),
  WEB3_SERVICE_URL: z.string().optional(),

  // Frontend URLs
  LANDING_URL: z.string().optional(),
  WEB_URL: z.string().optional(),
  STUDIO_URL: z.string().optional(),
});

// Production domain constants
export const DOMAINS = {
  landing: "https://nebutra.com",
  app: "https://app.nebutra.com",
  api: "https://api.nebutra.com",
  studio: "https://studio.nebutra.com",
} as const;

export type Env = z.infer<typeof envSchema>;

export function validateEnv(): Env {
  const result = envSchema.safeParse(process.env);

  if (!result.success) {
    console.error("❌ Invalid environment variables:");
    console.error(result.error.format());
    throw new Error("Invalid environment variables");
  }

  return result.data;
}

export const env = validateEnv();
