"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

// ─── Variants ─────────────────────────────────────────────────────────────────
// Sizing: text-xs (12px), font-semibold (600), rounded-full pill — from badgeTokens

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        // ─── Semantic status variants — VI §Color Specifications ────────────────
        // success=#22c55e, warning=#f59e0b, info=brand blue #0033FE
        success:
          "border-transparent bg-success text-success-foreground hover:bg-success/80",
        warning:
          "border-transparent bg-warning text-warning-foreground hover:bg-warning/80",
        info: "border-transparent bg-info text-info-foreground hover:bg-info/80",
        error:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

// Maps variant → dot color class
const dotColorMap: Partial<Record<NonNullable<BadgeProps["variant"]>, string>> =
  {
    success: "bg-success",
    warning: "bg-warning",
    info: "bg-info",
    error: "bg-destructive",
    destructive: "bg-destructive",
    default: "bg-primary-foreground",
    secondary: "bg-secondary-foreground",
    outline: "bg-muted-foreground",
  };

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /** Renders a 6×6px status dot before the badge label */
  dot?: boolean;
}

function Badge({
  className,
  variant = "default",
  dot,
  children,
  ...props
}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot && (
        <span
          aria-hidden="true"
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            dotColorMap[variant ?? "default"] ?? "bg-current",
          )}
        />
      )}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
