"use client";

import * as React from "react";
import { cn } from "../utils/cn";
import type { SpacingScale } from "../tokens/spacing";

/**
 * Box - Fundamental layout primitive
 *
 * A polymorphic box component that serves as the foundation for all layouts.
 * Supports spacing props that map to the token system.
 *
 * @see apps/landing-page/DESIGN.md Section 10.1
 */

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  /** Render as a different element */
  as?: React.ElementType;
  /** Padding on all sides */
  p?: SpacingScale;
  /** Padding horizontal (left/right) */
  px?: SpacingScale;
  /** Padding vertical (top/bottom) */
  py?: SpacingScale;
  /** Padding top */
  pt?: SpacingScale;
  /** Padding right */
  pr?: SpacingScale;
  /** Padding bottom */
  pb?: SpacingScale;
  /** Padding left */
  pl?: SpacingScale;
  /** Margin on all sides */
  m?: SpacingScale;
  /** Margin horizontal (left/right) */
  mx?: SpacingScale;
  /** Margin vertical (top/bottom) */
  my?: SpacingScale;
  /** Margin top */
  mt?: SpacingScale;
  /** Margin right */
  mr?: SpacingScale;
  /** Margin bottom */
  mb?: SpacingScale;
  /** Margin left */
  ml?: SpacingScale;
  children?: React.ReactNode;
}

// Maps spacing scale to Tailwind classes
const spacingMap: Record<SpacingScale, string> = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  8: "8",
  10: "10",
  12: "12",
  16: "16",
  20: "20",
  24: "24",
  32: "32",
};

function getSpacingClass(
  prefix: string,
  value: SpacingScale | undefined,
): string {
  if (value === undefined) return "";
  return `${prefix}-${spacingMap[value]}`;
}

export const Box = React.forwardRef<HTMLElement, BoxProps>(
  (
    {
      as: Component = "div",
      className,
      p,
      px,
      py,
      pt,
      pr,
      pb,
      pl,
      m,
      mx,
      my,
      mt,
      mr,
      mb,
      ml,
      children,
      ...props
    },
    ref,
  ) => {
    const spacingClasses = cn(
      // Padding
      getSpacingClass("p", p),
      getSpacingClass("px", px),
      getSpacingClass("py", py),
      getSpacingClass("pt", pt),
      getSpacingClass("pr", pr),
      getSpacingClass("pb", pb),
      getSpacingClass("pl", pl),
      // Margin
      getSpacingClass("m", m),
      getSpacingClass("mx", mx),
      getSpacingClass("my", my),
      getSpacingClass("mt", mt),
      getSpacingClass("mr", mr),
      getSpacingClass("mb", mb),
      getSpacingClass("ml", ml),
    );

    return (
      <Component ref={ref} className={cn(spacingClasses, className)} {...props}>
        {children}
      </Component>
    );
  },
);

Box.displayName = "Box";
