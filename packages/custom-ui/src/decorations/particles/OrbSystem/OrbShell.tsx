"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";

export interface OrbShellProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size of the shell container in pixels (default: 280) */
  size?: number;
  /**
   * Color of the orbit rings.
   * Use CSS custom properties for theme compatibility:
   * - "hsl(var(--accent))" for accent color
   * - "hsl(var(--primary))" for primary brand color
   */
  ringColor?: string;
  /** Number of orbit rings (default: 3) */
  ringCount?: number;
  /** Duration of one full rotation in seconds (default: 20) */
  rotationDuration?: number;
}

/**
 * OrbShell - Rotating dashed SVG orbit rings around the orb core.
 *
 * Features:
 * - Multiple concentric dashed circles
 * - Continuous rotation animation
 * - Alternating rotation directions for depth
 *
 * @example
 * // Using semantic CSS variables (recommended)
 * <OrbShell ringColor="hsl(var(--accent))" />
 *
 * @example
 * // Using custom hex colors (for decorative/artistic purposes)
 * <OrbShell ringColor="#0BF1C3" />
 */
export const OrbShell = React.forwardRef<HTMLDivElement, OrbShellProps>(
  (
    {
      size = 280,
      ringColor = "hsl(var(--accent))",
      ringCount = 3,
      rotationDuration = 20,
      className,
      ...props
    },
    ref,
  ) => {
    const rings = Array.from({ length: ringCount }, (_, i) => ({
      radius: (size / 2) * (0.7 + i * 0.15),
      strokeWidth: 1 - i * 0.2,
      dashArray: `${4 + i * 2} ${8 + i * 4}`,
      duration: rotationDuration * (1 + i * 0.3),
      direction: i % 2 === 0 ? 1 : -1,
      opacity: 0.3 - i * 0.08,
    }));

    return (
      <div
        ref={ref}
        className={cn("absolute pointer-events-none", className)}
        style={{ width: size, height: size }}
        aria-hidden="true"
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="absolute inset-0"
        >
          {rings.map((ring, index) => (
            <motion.circle
              key={index}
              cx={size / 2}
              cy={size / 2}
              r={ring.radius}
              fill="none"
              stroke={ringColor}
              strokeWidth={ring.strokeWidth}
              strokeDasharray={ring.dashArray}
              opacity={ring.opacity}
              style={{ transformOrigin: "center" }}
              animate={{
                rotate: [0, 360 * ring.direction],
              }}
              transition={{
                duration: ring.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </svg>
      </div>
    );
  },
);

OrbShell.displayName = "OrbShell";
