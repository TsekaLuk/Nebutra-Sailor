/**
 * OpenStatus Types
 */

export type StatusState = "operational" | "degraded" | "partial_outage" | "major_outage" | "unknown";

export interface MonitorStatus {
  id: string;
  name: string;
  status: StatusState;
  latency?: number;
  uptime?: number; // percentage (0-100)
  lastChecked?: string;
  region?: string;
}

export interface IncidentStatus {
  id: string;
  title: string;
  status: "investigating" | "identified" | "monitoring" | "resolved";
  impact: "none" | "minor" | "major" | "critical";
  createdAt: string;
  updatedAt: string;
  resolvedAt?: string;
}

export interface StatusPageData {
  status: StatusState;
  monitors: MonitorStatus[];
  activeIncidents: IncidentStatus[];
  uptime: {
    last24h: number;
    last7d: number;
    last30d: number;
  };
  lastUpdated: string;
}

export interface StatusConfig {
  pageSlug: string;
  apiUrl?: string;
  refreshInterval?: number; // ms
}
