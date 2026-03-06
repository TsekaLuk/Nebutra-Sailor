"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../utils/cn";
import { withHtmlProps } from "../utils/primitive-props";

// =============================================================================
// Types
// =============================================================================

// Radix types don't resolve HTML props with React 19 + exactOptionalPropertyTypes.
const RadixContent = withHtmlProps<
  "div",
  {
    align?: "start" | "center" | "end";
    sideOffset?: number;
    side?: "top" | "right" | "bottom" | "left";
  }
>(PopoverPrimitive.Content);

export type PopoverProps = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Root
>;

export type PopoverTriggerProps = React.ComponentPropsWithoutRef<"button"> & {
  asChild?: boolean;
};

export type PopoverContentProps = React.ComponentPropsWithoutRef<"div"> & {
  align?: "start" | "center" | "end";
  sideOffset?: number;
  side?: "top" | "right" | "bottom" | "left";
};

export type PopoverAnchorProps = React.ComponentPropsWithoutRef<"div">;

// =============================================================================
// Root / Trigger / Anchor
// =============================================================================

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = withHtmlProps<"button", { asChild?: boolean }>(
  PopoverPrimitive.Trigger,
);

const PopoverAnchor = withHtmlProps<"div">(PopoverPrimitive.Anchor);

// =============================================================================
// Content
// =============================================================================

const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ className, align = "start", sideOffset = 4, ...props }, ref) => (
    <PopoverPrimitive.Portal>
      <RadixContent
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[8rem] overflow-hidden rounded-[var(--radius-lg)] border bg-popover p-0 text-popover-foreground shadow-md outline-none",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  ),
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// =============================================================================
// Exports
// =============================================================================

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
