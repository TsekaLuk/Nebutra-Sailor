import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  // Clerk auth (optional — app renders without it)
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().optional(),
  NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().default("/sign-in"),
  NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().default("/sign-up"),

  // Content / CMS
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().default("wyfqr24v"),
  NEXT_PUBLIC_SANITY_DATASET: z.string().default("production"),
  NEXT_PUBLIC_SANITY_API_VERSION: z.string().default("2024-01-01"),

  // URLs
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3001"),
  NEXT_PUBLIC_API_URL: z.string().url().default("http://localhost:3002"),
});

export type LandingEnv = z.infer<typeof envSchema>;

function validateEnv(): LandingEnv {
  const result = envSchema.safeParse(process.env);

  if (!result.success) {
    console.error("Invalid landing-page environment variables:");
    console.error(result.error.format());
    throw new Error("Invalid environment variables");
  }

  return result.data;
}

// Only validate on the server side (avoid browser issues with process.env)
export const env =
  typeof window === "undefined"
    ? validateEnv()
    : (process.env as unknown as LandingEnv);
