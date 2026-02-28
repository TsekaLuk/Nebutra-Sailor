"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

// ─── Variants ─────────────────────────────────────────────────────────────────
// Heights match buttonTokens: sm=32px md=40px lg=48px (Geist-matching)
// Focus ring uses CSS variable from globals.css — brand-blue, 2px ring, 2px offset

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-md text-sm font-medium",
    "transition-colors duration-150 ease-out",
    // Focus ring via box-shadow (GPU-composited, consistent with globals.css)
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-busy:cursor-wait",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 rounded-sm px-3 text-xs", // 32px — buttonTokens.size.sm
        default: "h-10 px-4 py-2", // 40px — buttonTokens.size.md
        lg: "h-12 rounded-lg px-5 text-base", // 48px — buttonTokens.size.lg
        icon: "h-10 w-10", // 40×40px
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

// ─── Spinner ──────────────────────────────────────────────────────────────────
// Uses @keyframes spinner from globals.css

function Spinner({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "block rounded-full border-2 border-current border-t-transparent animate-[spinner_0.6s_linear_infinite]",
        className,
      )}
    />
  );
}

// ─── Button ───────────────────────────────────────────────────────────────────

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as a child element (Radix Slot — polymorphic) */
  asChild?: boolean;
  /** Show loading spinner and disable interaction */
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled ?? loading;

    // Spinner size: 14px for sm, 16px for md/default, 18px for lg
    const spinnerSize =
      size === "sm" ? "h-3.5 w-3.5" : size === "lg" ? "h-4.5 w-4.5" : "h-4 w-4";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading && <Spinner className={spinnerSize} />}
        {children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
