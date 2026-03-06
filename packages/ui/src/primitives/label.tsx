"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

// =============================================================================
// Types
// =============================================================================

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

export interface LabelProps
  extends
    React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {}

// =============================================================================
// Components
// =============================================================================

/**
 * Label - Accessible form label component
 *
 * @description
 * A label component built on Radix UI Label primitive.
 * Automatically handles accessibility attributes and peer styling.
 *
 * @example Basic usage
 * ```tsx
 * <Label htmlFor="email">Email</Label>
 * <Input id="email" type="email" />
 * ```
 *
 * @example With peer styling (disabled state)
 * ```tsx
 * <div className="flex items-center gap-2">
 *   <Checkbox id="terms" disabled />
 *   <Label htmlFor="terms">Accept terms</Label>
 * </div>
 * ```
 *
 * @example Required field indicator
 * ```tsx
 * <Label htmlFor="name">
 *   Name <span className="text-destructive">*</span>
 * </Label>
 * ```
 */
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    data-slot="label"
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label, labelVariants };
