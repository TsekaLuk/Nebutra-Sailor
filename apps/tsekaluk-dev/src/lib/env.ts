/**
 * Environment helpers — all variables are **optional**.
 * Missing vars are logged once as warnings; the app
 * continues running with graceful degradation.
 */
const OPTIONAL = [
  "DATABASE_URL",
  "AUTH_SECRET",
  "ANTHROPIC_API_KEY",
  "ADMIN_EMAIL",
] as const;

const missing = OPTIONAL.filter((key) => !process.env[key]);

if (missing.length > 0) {
  console.warn(
    `[env] Optional environment variables not set: ${missing.join(", ")}`,
  );
}

export const env = OPTIONAL.reduce(
  (acc, key) => ({ ...acc, [key]: process.env[key] }),
  {} as Record<(typeof OPTIONAL)[number], string | undefined>,
);

