import { serve } from "inngest/hono";
import { inngest } from "./client.js";
import { syncUserToDB, deleteUserFromDB } from "./functions/userSync.js";
import { processBillingEvent } from "./functions/billingSync.js";

export const inngestFunctions = [
  syncUserToDB,
  deleteUserFromDB,
  processBillingEvent,
];
export { inngest };

/**
 * Hono-compatible request handler for the Inngest serve endpoint.
 *
 * Register it in apps/api-gateway/src/index.ts:
 *
 *   import { inngestHandler } from "./inngest/index.js";
 *   app.on(["GET", "POST", "PUT"], "/api/inngest", (c) => inngestHandler(c));
 */
export const inngestHandler = serve({
  client: inngest,
  functions: inngestFunctions,
});
