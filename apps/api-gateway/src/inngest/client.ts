import { Inngest } from "inngest";

/**
 * Shared Inngest client for the API Gateway.
 *
 * The SDK automatically reads the following environment variables:
 *   INNGEST_EVENT_KEY   – used when sending events to Inngest Cloud
 *   INNGEST_SIGNING_KEY – used to verify webhook signatures from Inngest Cloud
 *
 * Both values are available from https://app.inngest.com once you have created
 * an Inngest account and application.
 */
export const inngest = new Inngest({
  id: "nebutra-api-gateway",
});
