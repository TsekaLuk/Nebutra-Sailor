"use client";

/**
 * StatusBadge - Compact status indicator
 *
 * Usage:
 * <StatusBadge status="operational" />
 * <StatusBadge status="operational" showLabel />
 * <StatusBadge pageSlug="nebutra" />  // Auto-fetch
 */

import { useEffect, useState } from "react";
import type { StatusState, StatusConfig } from "../types";
import { fetchStatusPage } from "../api";

interface StatusBadgeProps {
  status?: StatusState;
  pageSlug?: string;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const STATUS_CONFIG: Record<
  StatusState,
  { color: string; bgColor: string; label: string }
> = {
  operational: {
    color: "text-green-600",
    bgColor: "bg-green-500",
    label: "All Systems Operational",
  },
  degraded: {
    color: "text-yellow-600",
    bgColor: "bg-yellow-500",
    label: "Degraded Performance",
  },
  partial_outage: {
    color: "text-orange-600",
    bgColor: "bg-orange-500",
    label: "Partial Outage",
  },
  major_outage: {
    color: "text-red-600",
    bgColor: "bg-red-500",
    label: "Major Outage",
  },
  unknown: {
    color: "text-gray-500",
    bgColor: "bg-gray-400",
    label: "Status Unknown",
  },
};

const SIZE_CONFIG = {
  sm: { dot: "h-2 w-2", text: "text-xs" },
  md: { dot: "h-2.5 w-2.5", text: "text-sm" },
  lg: { dot: "h-3 w-3", text: "text-base" },
};

export function StatusBadge({
  status: propStatus,
  pageSlug,
  showLabel = false,
  size = "md",
  className = "",
  onClick,
}: StatusBadgeProps) {
  const [status, setStatus] = useState<StatusState>(propStatus || "unknown");
  const [loading, setLoading] = useState(!propStatus && !!pageSlug);

  useEffect(() => {
    if (propStatus) {
      setStatus(propStatus);
      return;
    }

    if (!pageSlug) return;

    const fetchStatus = async () => {
      setLoading(true);
      try {
        const data = await fetchStatusPage({ pageSlug });
        setStatus(data.status);
      } catch {
        setStatus("unknown");
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 60000); // Refresh every minute

    return () => clearInterval(interval);
  }, [propStatus, pageSlug]);

  const config = STATUS_CONFIG[status];
  const sizeConfig = SIZE_CONFIG[size];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 transition-opacity hover:opacity-80 ${className}`}
      disabled={!onClick}
      aria-label={config.label}
    >
      <span className="relative flex">
        <span
          className={`${sizeConfig.dot} ${config.bgColor} rounded-full ${
            status === "operational" ? "animate-pulse" : ""
          }`}
        />
        {loading && (
          <span
            className={`absolute inset-0 ${sizeConfig.dot} animate-ping rounded-full bg-gray-400 opacity-75`}
          />
        )}
      </span>
      {showLabel && (
        <span className={`${sizeConfig.text} ${config.color} font-medium`}>
          {config.label}
        </span>
      )}
    </button>
  );
}

export default StatusBadge;
