"use client";

import { NeuroNoise, type NeuroNoiseProps } from "@paper-design/shaders-react";
import type * as React from "react";
import { cn } from "../utils/cn";

// =============================================================================
// Types
// =============================================================================

export interface NeuroNoiseBgProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Partial<Omit<NeuroNoiseProps, "style">> {}

// =============================================================================
// Component
// =============================================================================

/**
 * NeuroNoiseBg - Brand-matched neuro noise shader background
 *
 * Wraps @paper-design/shaders-react NeuroNoise with Nebutra brand defaults.
 * Absolutely positioned, fills parent, z-index -10.
 *
 * @example
 * ```tsx
 * <div className="relative min-h-screen">
 *   <NeuroNoiseBg />
 *   <Content />
 * </div>
 * ```
 *
 * @example Custom colors
 * ```tsx
 * <NeuroNoiseBg
 *   colorFront="#0BF1C3"
 *   colorMid="#0033FE"
 *   colorBack="#000830"
 *   speed={0.4}
 * />
 * ```
 */
export function NeuroNoiseBg({
  className,
  colorFront = "#0BF1C3", // nebutra-cyan-500
  colorMid = "#0033FE", // nebutra-blue-500
  colorBack = "#000830", // nebutra-blue-950
  speed = 0.3,
  ...props
}: NeuroNoiseBgProps) {
  return (
    <div className={cn("absolute inset-0 -z-10", className)}>
      <NeuroNoise
        style={{ height: "100%", width: "100%" }}
        colorFront={colorFront}
        colorMid={colorMid}
        colorBack={colorBack}
        speed={speed}
        {...props}
      />
    </div>
  );
}

NeuroNoiseBg.displayName = "NeuroNoiseBg";
