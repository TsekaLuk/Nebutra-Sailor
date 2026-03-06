"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";
import { withHtmlProps } from "../utils/primitive-props";

// =============================================================================
// Types
// =============================================================================

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

// Radix types don't resolve HTML props with React 19 + exactOptionalPropertyTypes.
const RadixLabel = withHtmlProps<"label">(LabelPrimitive.Root);

export interface LabelProps
  extends
    React.ComponentPropsWithoutRef<"label">,
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
const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <RadixLabel
      ref={ref}
      data-slot="label"
      className={cn(labelVariants(), className)}
      {...props}
    />
  ),
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label, labelVariants };
