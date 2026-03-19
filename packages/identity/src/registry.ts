import { AuthJsIdentityAdapter } from "./adapters/authjs.js"
import { ClerkIdentityAdapter } from "./adapters/clerk.js"
import { NebutraIdentityAdapter } from "./adapters/nebutra.js"
import { IdentityAdapterRegistry } from "./types.js"

export function createDefaultIdentityAdapterRegistry(): IdentityAdapterRegistry {
  const registry = new IdentityAdapterRegistry()
  registry.register(new ClerkIdentityAdapter())
  registry.register(new AuthJsIdentityAdapter())
  registry.register(new NebutraIdentityAdapter())
  return registry
}
