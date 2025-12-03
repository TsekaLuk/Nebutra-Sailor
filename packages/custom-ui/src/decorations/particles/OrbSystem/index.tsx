"use client";

import * as React from "react";
import { cn } from "../../../utils/cn";
import { OrbCore, type OrbCoreProps } from "./OrbCore";
import { OrbShell, type OrbShellProps } from "./OrbShell";
import { OrbNoiseLayer, type OrbNoiseLayerProps } from "./OrbNoiseLayer";
import { OrbParticles, type OrbParticlesProps } from "./OrbParticles";

export interface OrbSystemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Total size of the orb system in pixels (default: 320) */
  size?: number;
  /**
   * Primary color for gradients.
   * Use CSS custom properties for theme compatibility:
   * - "hsl(var(--primary))" for primary brand color
   */
  primaryColor?: string;
  /**
   * Secondary/accent color.
   * Use CSS custom properties for theme compatibility:
   * - "hsl(var(--accent))" for accent color
   */
  secondaryColor?: string;
  /** Enable/disable noise layer (default: true) */
  showNoise?: boolean;
  /** Enable/disable orbit shells (default: true) */
  showShell?: boolean;
  /** Enable/disable orbiting particles (default: true) */
  showParticles?: boolean;
  /** Override props for OrbCore */
  coreProps?: Partial<OrbCoreProps>;
  /** Override props for OrbShell */
  shellProps?: Partial<OrbShellProps>;
  /** Override props for OrbNoiseLayer */
  noiseProps?: Partial<OrbNoiseLayerProps>;
  /** Override props for OrbParticles */
  particlesProps?: Partial<OrbParticlesProps>;
}

/**
 * OrbSystem - A complete particle-based orb visual system.
 *
 * Combines OrbCore, OrbShell, OrbNoiseLayer, and OrbParticles into a cohesive
 * animated visual element suitable for hero sections and key visual moments.
 *
 * Architecture:
 * - OrbCore: Inner pulsing gradient (breathing animation)
 * - OrbShell: Rotating dashed orbit rings (SVG)
 * - OrbNoiseLayer: Subtle grain texture overlay (canvas)
 * - OrbParticles: Floating micro-dots on orbital paths
 *
 * @example
 * // Using semantic CSS variables (recommended)
 * <OrbSystem
 *   primaryColor="hsl(var(--primary))"
 *   secondaryColor="hsl(var(--accent))"
 * />
 *
 * @example
 * // With customization
 * <OrbSystem
 *   size={400}
 *   showNoise={false}
 *   coreProps={{ breathDuration: 3 }}
 *   particlesProps={{ particleCount: 15 }}
 * />
 */
export const OrbSystem = React.forwardRef<HTMLDivElement, OrbSystemProps>(
  (
    {
      size = 320,
      primaryColor = "hsl(var(--primary))",
      secondaryColor = "hsl(var(--accent))",
      showNoise = true,
      showShell = true,
      showParticles = true,
      className,
      coreProps,
      shellProps,
      noiseProps,
      particlesProps,
      ...props
    },
    ref,
  ) => {
    // Calculate layer sizes based on total size
    const coreSize = size * 0.625; // 200/320
    const shellSize = size * 0.875; // 280/320
    const noiseSize = size * 0.75; // 240/320
    const particleFieldSize = size;

    return (
      <div
        ref={ref}
        className={cn("relative flex items-center justify-center", className)}
        style={{ width: size, height: size }}
        aria-hidden="true"
        {...props}
      >
        {/* Layer 1: Core gradient with breathing animation */}
        <OrbCore
          size={coreSize}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          {...coreProps}
        />

        {/* Layer 2: Noise texture overlay */}
        {showNoise && (
          <OrbNoiseLayer size={noiseSize} opacity={0.12} {...noiseProps} />
        )}

        {/* Layer 3: Rotating orbit rings */}
        {showShell && (
          <OrbShell
            size={shellSize}
            ringColor={secondaryColor}
            ringCount={3}
            {...shellProps}
          />
        )}

        {/* Layer 4: Orbiting particles */}
        {showParticles && (
          <OrbParticles
            size={particleFieldSize}
            particleCount={10}
            particleColor={secondaryColor}
            {...particlesProps}
          />
        )}
      </div>
    );
  },
);

OrbSystem.displayName = "OrbSystem";

// Re-export individual components for granular usage
export { OrbCore, OrbShell, OrbNoiseLayer, OrbParticles };
export type {
  OrbCoreProps,
  OrbShellProps,
  OrbNoiseLayerProps,
  OrbParticlesProps,
};

export default OrbSystem;
