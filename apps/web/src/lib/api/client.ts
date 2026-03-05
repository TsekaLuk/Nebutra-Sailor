/**
 * Typed API client for the Nebutra API gateway.
 *
 * Types are auto-generated from the OpenAPI spec.
 * Run `pnpm generate:api-types` against a running gateway to refresh.
 *
 * Usage (after generating types):
 *   import createClient from "openapi-fetch";
 *   import type { paths } from "@/lib/api/types.generated";
 *   export const apiClient = createClient<paths>({ baseUrl: process.env.NEXT_PUBLIC_API_GATEWAY_URL });
 */

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_GATEWAY_URL ?? "http://localhost:8080";

/**
 * Minimal fetch wrapper with base URL and auth header injection.
 * Replace with openapi-fetch once types are generated.
 */
export async function apiFetch<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(error.error ?? `API error ${res.status}`);
  }

  return res.json() as Promise<T>;
}
