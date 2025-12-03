"use client";

import * as React from "react";
import { cn } from "../utils/cn";
import {
  textStyles,
  textColors,
  type TextStyle,
  type TextColor,
} from "../tokens/typography";

/**
 * Text - Typography primitive
 *
 * Renders text with semantic styling based on the typography token system.
 *
 * @see apps/landing-page/DESIGN.md Section 10.7
 */

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /** Render as a different element */
  as?: React.ElementType;
  /** Text style variant */
  variant?: TextStyle;
  /** Text color */
  color?: TextColor;
  /** Truncate with ellipsis */
  truncate?: boolean;
  /** Line clamp (number of lines) */
  lineClamp?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Text alignment */
  align?: "left" | "center" | "right";
  children?: React.ReactNode;
}

const alignMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const lineClampMap = {
  1: "line-clamp-1",
  2: "line-clamp-2",
  3: "line-clamp-3",
  4: "line-clamp-4",
  5: "line-clamp-5",
  6: "line-clamp-6",
};

export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      as: Component = "p",
      variant = "body",
      color = "default",
      truncate = false,
      lineClamp,
      align,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          textStyles[variant],
          textColors[color],
          truncate && "truncate",
          lineClamp && lineClampMap[lineClamp],
          align && alignMap[align],
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Text.displayName = "Text";
