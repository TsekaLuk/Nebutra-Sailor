import { Inngest, EventSchemas } from "inngest";
import { inngestSchemas } from "@nebutra/event-bus/schemas";

/**
 * Type-safe Inngest client for the API Gateway.
 *
 * All events are validated against Zod schemas defined in
 * @nebutra/event-bus/schemas — event.data is fully typed in function handlers,
 * eliminating the need for manual type assertions.
 *
 * The SDK automatically reads:
 *   INNGEST_EVENT_KEY   – used when sending events to Inngest Cloud
 *   INNGEST_SIGNING_KEY – used to verify webhook signatures from Inngest Cloud
 */
export const inngest = new Inngest({
  id: "nebutra-api-gateway",
  schemas: new EventSchemas().fromZod(inngestSchemas),
});
