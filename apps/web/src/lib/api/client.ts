/**
 * Typed API client for the Nebutra API gateway.
 *
 * Types are auto-generated from the OpenAPI spec via:
 *   pnpm --filter @nebutra/api-gateway generate:spec
 *   pnpm --filter @nebutra/web generate:api-types
 *
 * The generated file `types.generated.ts` is gitignored and regenerated in CI.
 * If it does not exist locally, run the two commands above first.
 *
 * Usage in Server Components (with Clerk JWT):
 *   import { getTypedApi } from "@/lib/api/client";
 *   const api = await getTypedApi();
 *   const { data } = await api.GET("/api/v1/ai/models");
 *
 * Usage in Client Components:
 *   import { browserApiClient } from "@/lib/api/client";
 *   const { data } = await browserApiClient.GET("/api/v1/ai/models");
 */

import createClient, { type Middleware } from "openapi-fetch";

// `types.generated.ts` is produced by `pnpm generate:api-types`.
// The `// @ts-ignore` allows the repo to typecheck cleanly before the first
// generation run — the file will be present in CI after the spec export step.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore – generated file may not exist yet locally
import type { paths } from "./types.generated";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_GATEWAY_URL ?? "http://localhost:3002";

// ── Auth middleware ───────────────────────────────────────────────────────────

/**
 * Creates an openapi-fetch Middleware that injects a Bearer token.
 * Pass the Clerk JWT obtained from `auth().getToken()`.
 */
function createAuthMiddleware(token: string): Middleware {
  return {
    async onRequest({ request }) {
      request.headers.set("Authorization", `Bearer ${token}`);
      return request;
    },
  };
}

// ── Browser (client-side) client — no auth token ─────────────────────────────
// For authenticated browser requests, use the React Query hooks which inject
// the Clerk session token via SWR/TanStack Query auth adapters.

export const browserApiClient = createClient<paths>({
  baseUrl: API_BASE_URL,
});

// ── Server-side factory — auto-injects Clerk JWT ─────────────────────────────

/**
 * Returns a typed API client with the current user's Clerk JWT pre-injected.
 * Call this in Server Components, Route Handlers, and Server Actions.
 *
 * @example
 * const api = await getTypedApi();
 * const { data, error } = await api.GET("/api/v1/ai/models");
 */
export async function getTypedApi() {
  const { auth } = await import("@clerk/nextjs/server");
  const { getToken } = await auth();
  const token = await getToken();

  const client = createClient<paths>({ baseUrl: API_BASE_URL });

  if (token) {
    client.use(createAuthMiddleware(token));
  }

  return client;
}
