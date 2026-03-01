"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

// ─── Variants ─────────────────────────────────────────────────────────────────

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        // ─── Semantic / brand variants ────────────────────────────────────────
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "border-border text-foreground",
        success:
          "border-transparent bg-success text-success-foreground hover:bg-success/80",
        warning:
          "border-transparent bg-warning text-warning-foreground hover:bg-warning/80",
        info: "border-transparent bg-info text-info-foreground hover:bg-info/80",
        error:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        // ─── Geist-style color palette ────────────────────────────────────────
        gray: "border-transparent bg-neutral-200 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200",
        "gray-subtle":
          "border-neutral-300 bg-transparent text-neutral-700 dark:border-neutral-600 dark:text-neutral-300",
        blue: "border-transparent bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200",
        "blue-subtle":
          "border-blue-300 bg-transparent text-blue-700 dark:border-blue-700 dark:text-blue-300",
        purple:
          "border-transparent bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200",
        "purple-subtle":
          "border-purple-300 bg-transparent text-purple-700 dark:border-purple-700 dark:text-purple-300",
        amber:
          "border-transparent bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200",
        "amber-subtle":
          "border-amber-300 bg-transparent text-amber-700 dark:border-amber-700 dark:text-amber-300",
        red: "border-transparent bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200",
        "red-subtle":
          "border-red-300 bg-transparent text-red-700 dark:border-red-700 dark:text-red-300",
        pink: "border-transparent bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-200",
        "pink-subtle":
          "border-pink-300 bg-transparent text-pink-700 dark:border-pink-700 dark:text-pink-300",
        green:
          "border-transparent bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200",
        "green-subtle":
          "border-green-300 bg-transparent text-green-700 dark:border-green-700 dark:text-green-300",
        teal: "border-transparent bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-200",
        "teal-subtle":
          "border-teal-300 bg-transparent text-teal-700 dark:border-teal-700 dark:text-teal-300",
        inverted:
          "border-transparent bg-neutral-900 text-white dark:bg-white dark:text-neutral-900",
      },
      size: {
        sm: "px-1.5 py-px text-[10px] leading-[18px]",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

// Maps semantic variants → dot color class
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
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof badgeVariants> {
  /** Renders a 6×6px status dot before the badge label */
  dot?: boolean;
  /** Icon element rendered before the label (auto-sized to 12×12px) */
  icon?: React.ReactNode;
  /** Render as child element — use with `<a>` for link badges */
  asChild?: boolean;
}

function Badge({
  className,
  variant = "default",
  size = "md",
  dot,
  icon,
  asChild,
  children,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {dot && (
        <span
          aria-hidden="true"
          className={cn(
            "h-1.5 w-1.5 shrink-0 rounded-full",
            dotColorMap[variant ?? "default"] ?? "bg-current",
          )}
        />
      )}
      {icon && (
        <span aria-hidden="true" className="shrink-0 [&>svg]:h-3 [&>svg]:w-3">
          {icon}
        </span>
      )}
      {children}
    </Comp>
  );
}

export { Badge, badgeVariants };
