#!/usr/bin/env tsx
/**
 * Generates TypeScript types from the API gateway's OpenAPI spec.
 *
 * Usage:
 *   pnpm generate:api-types          (assumes gateway running on :8080)
 *   API_GATEWAY_URL=http://... pnpm generate:api-types
 *
 * Output: apps/web/src/lib/api/types.generated.ts
 */
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const gatewayUrl =
  process.env.API_GATEWAY_URL ?? "http://localhost:8080";
const specUrl = `${gatewayUrl}/openapi.json`;
const outFile = path.join(ROOT, "apps/web/src/lib/api/types.generated.ts");

process.stdout.write(`Fetching OpenAPI spec from ${specUrl}...\n`);

try {
  execSync(
    `pnpm dlx openapi-typescript ${specUrl} --output ${outFile} --immutable-types --alphabetize`,
    { stdio: "inherit", cwd: ROOT }
  );
  process.stdout.write(`Types written to ${outFile}\n`);
} catch (err) {
  process.stderr.write(`Failed to generate types: ${err}\n`);
  process.exit(1);
}
