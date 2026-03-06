"use client";

import * as React from "react";
import {
  MeshGradient,
  type MeshGradientProps,
} from "@paper-design/shaders-react";
import { cn } from "../utils/cn";

// =============================================================================
// Brand Defaults
// =============================================================================

/** Nebutra brand palette for mesh gradient: blue → cyan with supporting tones */
const BRAND_COLORS = [
  "#0033FE", // nebutra-blue-500
  "#0BF1C3", // nebutra-cyan-500
  "#5c7cfa", // nebutra-blue-400
  "#002ad4", // nebutra-blue-600
] as const;

// =============================================================================
// Types
// =============================================================================

export interface MeshGradientBgProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    Partial<Omit<MeshGradientProps, "style">> {}

// =============================================================================
// Component
// =============================================================================

/**
 * MeshGradientBg - Brand-matched mesh gradient shader background
 *
 * Wraps @paper-design/shaders-react MeshGradient with Nebutra brand defaults.
 * Absolutely positioned, fills parent, z-index -10.
 *
 * @example
 * ```tsx
 * <div className="relative min-h-screen">
 *   <MeshGradientBg />
 *   <Content />
 * </div>
 * ```
 *
 * @example Custom colors and speed
 * ```tsx
 * <MeshGradientBg
 *   colors={["#0BF1C3", "#0033FE", "#000830"]}
 *   speed={0.5}
 *   distortion={0.4}
 * />
 * ```
 */
export function MeshGradientBg({
  className,
  colors = [...BRAND_COLORS],
  speed = 0.3,
  ...props
}: MeshGradientBgProps) {
  return (
    <div className={cn("absolute inset-0 -z-10", className)}>
      <MeshGradient
        style={{ height: "100%", width: "100%" }}
        colors={colors}
        speed={speed}
        {...props}
      />
    </div>
  );
}

MeshGradientBg.displayName = "MeshGradientBg";
