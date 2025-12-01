/**
 * GradientText - Gradient Text Effect Component
 *
 * Apply gradient color effect to text.
 *
 * @see docs/MARKETING-INFRASTRUCTURE.md
 *
 * ## Features (TODO)
 * - [ ] Multiple gradient presets (primary, secondary, custom)
 * - [ ] Animated gradient option
 * - [ ] CSS clip-path text effect
 */

"use client";

import * as React from "react";

export interface GradientTextProps {
  children: React.ReactNode;
  /** Gradient preset or custom gradient CSS */
  gradient?: "primary" | "secondary" | string;
  /** Animate the gradient */
  animate?: boolean;
  /** HTML element to render */
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4";
  className?: string;
}

export function GradientText({
  children,
  gradient = "primary",
  animate = false,
  as: Component = "span",
  className,
}: GradientTextProps) {
  // TODO: Implement gradient text with:
  // - background: linear-gradient(...)
  // - background-clip: text
  // - -webkit-background-clip: text
  // - color: transparent

  return (
    <Component className={className} data-gradient={gradient} data-animate={animate}>
      {children}
    </Component>
  );
}

GradientText.displayName = "GradientText";
