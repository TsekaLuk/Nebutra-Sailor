"use client";

import { Waves, type WavesProps } from "@paper-design/shaders-react";
import type * as React from "react";
import { cn } from "../utils/cn";

// =============================================================================
// Types
// =============================================================================

export interface WavesBgProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Partial<Omit<WavesProps, "style">> {}

// =============================================================================
// Component
// =============================================================================

/**
 * WavesBg - Brand-matched waves shader background
 *
 * Wraps @paper-design/shaders-react Waves with Nebutra brand defaults.
 * Absolutely positioned, fills parent, z-index -10.
 *
 * @example
 * ```tsx
 * <div className="relative min-h-screen">
 *   <WavesBg />
 *   <Content />
 * </div>
 * ```
 *
 * @example Custom wave settings
 * ```tsx
 * <WavesBg
 *   colorFront="#0BF1C3"
 *   colorBack="#0033FE"
 *   frequency={3}
 *   amplitude={0.5}
 * />
 * ```
 */
export function WavesBg({
  className,
  colorFront = "#0033FE", // nebutra-blue-500
  colorBack = "#000830", // nebutra-blue-950
  ...props
}: WavesBgProps) {
  return (
    <div className={cn("absolute inset-0 -z-10", className)}>
      <Waves
        style={{ height: "100%", width: "100%" }}
        colorFront={colorFront}
        colorBack={colorBack}
        {...props}
      />
    </div>
  );
}

WavesBg.displayName = "WavesBg";
