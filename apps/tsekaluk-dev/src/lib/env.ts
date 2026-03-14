/**
 * Validates required environment variables at module load time.
 * Import this file early (e.g. src/app/layout.tsx) so missing vars
 * surface immediately rather than at the callsite that needs them.
 */
const REQUIRED = [
  "DATABASE_URL",
  "AUTH_SECRET",
  "ANTHROPIC_API_KEY",
  "ADMIN_EMAIL",
] as const;

const missing = REQUIRED.filter((key) => !process.env[key]);

if (missing.length > 0) {
  throw new Error(
    `Missing required environment variables: ${missing.join(", ")}`,
  );
}

export const env = REQUIRED.reduce(
  (acc, key) => ({ ...acc, [key]: process.env[key] as string }),
  {} as Record<(typeof REQUIRED)[number], string>,
);
