"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../../utils/cn";

export interface OrbCoreProps extends Omit<
  HTMLMotionProps<"div">,
  "animate" | "transition"
> {
  /** Size of the core in pixels (default: 200) */
  size?: number;
  /**
   * Primary color for the gradient.
   * Use CSS custom properties for theme compatibility:
   * - "hsl(var(--primary))" for primary brand color
   * - "hsl(var(--accent))" for accent color
   */
  primaryColor?: string;
  /**
   * Secondary color for the gradient.
   * Use CSS custom properties for theme compatibility.
   */
  secondaryColor?: string;
  /** Duration of the breathing animation in seconds (default: 4) */
  breathDuration?: number;
}

/**
 * OrbCore - The inner pulsing gradient of the particle orb system.
 *
 * Features:
 * - Radial gradient with customizable colors
 * - Breathing scale animation
 * - Soft blur for ethereal effect
 *
 * @example
 * // Using semantic CSS variables (recommended)
 * <OrbCore
 *   size={200}
 *   primaryColor="hsl(var(--primary))"
 *   secondaryColor="hsl(var(--accent))"
 * />
 *
 * @example
 * // Using custom hex colors (for decorative/artistic purposes)
 * <OrbCore
 *   primaryColor="#0033FE"
 *   secondaryColor="#0BF1C3"
 * />
 */
export const OrbCore = React.forwardRef<HTMLDivElement, OrbCoreProps>(
  (
    {
      size = 200,
      primaryColor = "hsl(var(--primary))",
      secondaryColor = "hsl(var(--accent))",
      breathDuration = 4,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <motion.div
        ref={ref}
        className={cn("absolute rounded-full", className)}
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle at 30% 30%, ${secondaryColor} / 0.25, ${primaryColor} / 0.4 50%, ${primaryColor} / 0.12 100%)`,
          filter: "blur(1px)",
          boxShadow: `
            inset 0 0 ${size * 0.3}px ${primaryColor} / 0.25,
            0 0 ${size * 0.4}px ${primaryColor} / 0.2,
            0 0 ${size * 0.6}px ${secondaryColor} / 0.12
          `,
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: breathDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
        {...props}
      />
    );
  },
);

OrbCore.displayName = "OrbCore";
