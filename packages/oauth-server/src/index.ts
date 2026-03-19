/**
 * @nebutra/oauth-server
 *
 * Core OIDC Identity Provider engine for the Nebutra platform.
 * Enables third-party applications to implement "Sign in with Nebutra".
 *
 * @example
 * ```ts
 * import { createNebutraOIDCProvider, SCOPE_DESCRIPTIONS } from "@nebutra/oauth-server";
 *
 * const provider = createNebutraOIDCProvider({
 *   issuer: "https://id.nebutra.com",
 *   prisma,
 *   redis,
 * });
 * ```
 */

export { createNebutraOIDCProvider } from "./provider.js"
export type { NebutraOIDCConfig } from "./provider.js"

export {
  createPrismaAdapter,
  EPHEMERAL_MODELS,
} from "./adapters/prisma-adapter.js"

export {
  NEBUTRA_CLAIMS,
  SUPPORTED_SCOPES,
  SCOPE_DESCRIPTIONS,
} from "./claims.js"
