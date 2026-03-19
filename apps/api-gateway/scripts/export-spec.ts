/**
 * export-spec.ts — exports the Hono OpenAPI spec to openapi.json
 *
 * Run: tsx scripts/export-spec.ts
 * Output: apps/api-gateway/openapi.json
 *
 * Used in CI to validate the spec and generate typed clients for the web app.
 * Imports only the Hono app (not the HTTP server) so no live DB is required.
 */

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

// Stub environment variables so the app module loads without crashing.
// The spec export only calls app.request() — no DB queries are executed.
process.env.DATABASE_URL ??= "postgresql://stub:stub@localhost:5432/stub";
process.env.REDIS_URL ??= "redis://localhost:6379";
process.env.CLERK_SECRET_KEY ??= "sk_test_stub";
process.env.NODE_ENV ??= "production";

const { default: app } = await import("../src/index.js");

const response = await app.request("/openapi.json");

if (!response.ok) {
  process.exit(1);
}

const spec = await response.json();
const outPath = resolve(import.meta.dirname, "../openapi.json");

writeFileSync(outPath, JSON.stringify(spec, null, 2), "utf-8");
