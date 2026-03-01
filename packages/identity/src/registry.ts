import { AuthJsIdentityAdapter } from "./adapters/authjs.js";
import { ClerkIdentityAdapter } from "./adapters/clerk.js";
import { IdentityAdapterRegistry } from "./types.js";

export function createDefaultIdentityAdapterRegistry(): IdentityAdapterRegistry {
  const registry = new IdentityAdapterRegistry();
  registry.register(new ClerkIdentityAdapter());
  registry.register(new AuthJsIdentityAdapter());
  return registry;
}
