"use client";

import type { TestimonialsCommonProps, TestimonialsVariant } from "./types";
import { cn } from "@/lib/utils";
import { StaggerTestimonialsAdapter } from "./stagger.adapter";

export type TestimonialsProps = TestimonialsCommonProps & {
  variant?: TestimonialsVariant;
};

export function Testimonials({
  variant = "stagger",
  items,
  className,
  height,
}: TestimonialsProps) {
  switch (variant) {
    case "stagger":
    default:
      return (
        <StaggerTestimonialsAdapter
          items={items}
          className={cn(className)}
          height={height}
        />
      );
  }
}
