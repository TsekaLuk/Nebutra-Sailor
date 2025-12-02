"use client";

import React, { useMemo, type JSX } from "react";
import { motion } from "motion/react";
import { cn } from "../utils";

// =============================================================================
// Types
// =============================================================================

/**
 * Props for TextShimmer component
 *
 * @description
 * An animated text effect with a shimmer/glint passing through the text.
 * Uses CSS gradients and motion animation for the sweep effect.
 *
 * **UX Scenarios:**
 * - Loading state indicators ("Generating...", "Processing...")
 * - Premium/highlight text treatment
 * - AI typing indicators
 * - Call-to-action emphasis
 * - Brand name highlights
 *
 * **Customization:**
 * - Override colors via CSS variables in className:
 *   - `--base-color`: Default text color
 *   - `--base-gradient-color`: Shimmer highlight color
 */
export interface TextShimmerProps {
  /** Text content to display with shimmer effect */
  children: string;
  /**
   * HTML element to render as
   * @default "p"
   */
  as?: React.ElementType;
  /** Additional CSS classes */
  className?: string;
  /**
   * Animation duration in seconds
   * @default 2
   */
  duration?: number;
  /**
   * Spread of the shimmer gradient (multiplied by text length)
   * @default 2
   */
  spread?: number;
  /**
   * Whether to pause the animation
   * @default false
   */
  paused?: boolean;
}

// =============================================================================
// Component
// =============================================================================

/**
 * TextShimmer - Animated shimmer text effect
 *
 * @example
 * ```tsx
 * // Basic loading text
 * <TextShimmer duration={1}>
 *   Generating code...
 * </TextShimmer>
 *
 * // Custom colors via CSS variables
 * <TextShimmer
 *   duration={1.2}
 *   className="text-xl [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)]"
 * >
 *   Premium Feature
 * </TextShimmer>
 *
 * // As heading
 * <TextShimmer as="h1" className="text-4xl font-bold">
 *   Welcome
 * </TextShimmer>
 * ```
 */
export function TextShimmer({
  children,
  as: Component = "p",
  className,
  duration = 2,
  spread = 2,
  paused = false,
}: TextShimmerProps) {
  const MotionComponent = motion.create(
    Component as keyof JSX.IntrinsicElements,
  );

  const dynamicSpread = useMemo(() => {
    return children.length * spread;
  }, [children, spread]);

  return (
    <MotionComponent
      className={cn(
        "relative inline-block bg-[length:250%_100%,auto] bg-clip-text",
        "text-transparent [--base-color:#a1a1aa] [--base-gradient-color:#000]",
        "[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))] [background-repeat:no-repeat,padding-box]",
        "dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff]",
        className,
      )}
      initial={{ backgroundPosition: "100% center" }}
      animate={paused ? undefined : { backgroundPosition: "0% center" }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "linear",
      }}
      style={
        {
          "--spread": `${dynamicSpread}px`,
          backgroundImage: `var(--bg), linear-gradient(var(--base-color), var(--base-color))`,
        } as React.CSSProperties
      }
    >
      {children}
    </MotionComponent>
  );
}

export default TextShimmer;
