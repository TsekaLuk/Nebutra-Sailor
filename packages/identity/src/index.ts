export type { IdentityAdapter, IdentityProvider } from "./types.js";
export { IdentityAdapterRegistry } from "./types.js";

export { ClerkIdentityAdapter } from "./adapters/clerk.js";
export { AuthJsIdentityAdapter } from "./adapters/authjs.js";

export { createDefaultIdentityAdapterRegistry } from "./registry.js";
