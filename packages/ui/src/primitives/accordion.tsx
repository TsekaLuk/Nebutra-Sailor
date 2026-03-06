"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "../utils/cn";
import { withHtmlProps } from "../utils/primitive-props";

// =============================================================================
// Types
// =============================================================================

type AccordionSize = "default" | "small";

// Radix types don't resolve HTML props (className, children) with React 19 +
// exactOptionalPropertyTypes. Create properly-typed aliases for JSX usage.
const RadixItem = withHtmlProps<"div">(AccordionPrimitive.Item);
const RadixHeader = withHtmlProps<"h3">(AccordionPrimitive.Header);
const RadixTrigger = withHtmlProps<"button">(AccordionPrimitive.Trigger);
const RadixContent = withHtmlProps<"div">(AccordionPrimitive.Content);

// =============================================================================
// Root
// =============================================================================

const Accordion = AccordionPrimitive.Root;

// =============================================================================
// Item
// =============================================================================

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & { value: string; disabled?: boolean }
>(({ className, ...props }, ref) => (
  <RadixItem
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
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button"> & {
    /** Size variant matching Geist Collapse */
    size?: AccordionSize;
  }
>(({ className, children, size = "default", ...props }, ref) => (
  <RadixHeader className="flex">
    <RadixTrigger
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
    </RadixTrigger>
  </RadixHeader>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

// =============================================================================
// Content
// =============================================================================

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & {
    /** Size variant matching Geist Collapse */
    size?: AccordionSize;
  }
>(({ className, children, size = "default", ...props }, ref) => (
  <RadixContent
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div
      className={cn(size === "small" ? "pb-2.5 pt-0" : "pb-4 pt-0", className)}
    >
      {children}
    </div>
  </RadixContent>
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
