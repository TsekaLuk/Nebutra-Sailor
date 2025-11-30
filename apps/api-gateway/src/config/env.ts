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
});

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
