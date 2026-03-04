/**
 * @nebutra/status
 *
 * Multi-provider status page integration.
 * Supports OpenStatus, Atlassian Statuspage, and internal /health endpoints.
 *
 * @example OpenStatus
 *   import { StatusBadge } from "@nebutra/status"
 *   <StatusBadge pageSlug="nebutra" showLabel />
 *
 * @example Atlassian Statuspage
 *   <StatusBadge provider="statuspage" pageId="kctbh9vrtdwd" showLabel />
 *   <StatusWidget provider="statuspage" pageId="kctbh9vrtdwd" />
 *
 * @example Programmatic
 *   import { createStatusProvider } from "@nebutra/status"
 *   const provider = createStatusProvider({ provider: "statuspage", pageId: "abc" })
 *   const data = await provider.fetchSummary()
 */

// Components
export * from "./components/status-badge";
export * from "./components/status-widget";

// Public API
export { fetchStatusPage, createStatusProvider } from "./api";

// Provider interface (for custom providers)
export type { StatusProvider } from "./provider";

// All types
export type {
  StatusState,
  StatusProviderType,
  StatusConfig,
  OpenStatusConfig,
  StatuspageConfig,
  InternalStatusConfig,
  StatusPageData,
  MonitorStatus,
  IncidentStatus,
  ScheduledMaintenance,
} from "./types";
