/**
 * Environment configuration
 * Centralized access to all environment variables
 */

export const env = {
  // URLs
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001",
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002",
  studioUrl: process.env.NEXT_PUBLIC_STUDIO_URL || "http://localhost:3003",

  // Clerk
  clerk: {
    publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!,
    signInUrl: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "/sign-in",
    signUpUrl: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || "/sign-up",
  },

  // Sanity
  sanity: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "wyfqr24v",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  },

  // Stripe
  stripe: {
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  },

  // Sentry
  sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Flags
  isDev: process.env.NODE_ENV === "development",
  isProd: process.env.NODE_ENV === "production",
} as const;

export default env;
