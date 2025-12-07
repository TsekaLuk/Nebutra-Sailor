/**
 * Pusher Real-time Infrastructure
 *
 * Server-side:
 * ```typescript
 * import { pusherServer, triggerEvent, broadcastToTenant } from "@/lib/pusher";
 * ```
 *
 * Client-side:
 * ```typescript
 * import { getPusherClient, Channels } from "@/lib/pusher/client";
 * ```
 */

// Server exports
export {
  getPusherServer,
  pusherServer,
  triggerEvent,
  triggerBatch,
  broadcastToTenant,
  notifyUser,
  notifyUsers,
  authorizeChannel,
  PusherEvents,
  type PusherEvent,
} from "./server";

// Client exports
export {
  getPusherClient,
  pusherClient,
  subscribeChannel,
  unsubscribeChannel,
  disconnect,
  Channels,
  type Channel,
  type PresenceChannel,
  type Members,
} from "./client";

// Auth utilities
export { validateChannelAccess, type User } from "./auth";

// Event bridge
export {
  initEventBridge,
  addEventMapping,
  removeEventMapping,
  type BroadcastConfig,
} from "./event-bridge";
