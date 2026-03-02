"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "../utils/cn";

// =============================================================================
// Types
// =============================================================================

type AccordionSize = "default" | "small";

// =============================================================================
// Root
// =============================================================================

const Accordion = AccordionPrimitive.Root;

// =============================================================================
// Item
// =============================================================================

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-border", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

// =============================================================================
// Trigger
// =============================================================================

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    /** Size variant matching Geist Collapse */
    size?: AccordionSize;
  }
>(({ className, children, size = "default", ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between font-medium transition-all hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&[data-state=open]>svg]:rotate-180",
        size === "small" ? "py-2.5 text-sm" : "py-4",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "shrink-0 transition-transform duration-200",
          size === "small" ? "h-3.5 w-3.5" : "h-4 w-4",
        )}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

// =============================================================================
// Content
// =============================================================================

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
    /** Size variant matching Geist Collapse */
    size?: AccordionSize;
  }
>(({ className, children, size = "default", ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div
      className={cn(size === "small" ? "pb-2.5 pt-0" : "pb-4 pt-0", className)}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// =============================================================================
// Exports
// =============================================================================

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  type AccordionSize,
};
