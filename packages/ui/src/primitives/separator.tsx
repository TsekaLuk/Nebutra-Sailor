"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "../utils/cn";
import { withHtmlProps } from "../utils/primitive-props";

const RadixRoot = withHtmlProps<
  "div",
  { decorative?: boolean; orientation?: "horizontal" | "vertical" }
>(SeparatorPrimitive.Root);

const Separator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & {
    decorative?: boolean;
    orientation?: "horizontal" | "vertical";
  }
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => (
    <RadixRoot
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className,
      )}
      {...props}
    />
  ),
);
Separator.displayName = "Separator";

export { Separator };
