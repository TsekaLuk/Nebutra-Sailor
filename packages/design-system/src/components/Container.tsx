"use client";

import React from "react";
import { clsx } from "clsx";

export interface ContainerProps {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  centered?: boolean;
  className?: string;
  children: React.ReactNode;
}

const sizeClassMap = {
  sm: "max-w-xl",
  md: "max-w-3xl",
  lg: "max-w-5xl",
  xl: "max-w-7xl",
  full: "max-w-full",
} as const;

export function Container({
  size = "lg",
  centered = true,
  className,
  children,
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "ds-container",
        `ds-container--${size}`,
        "w-full px-4 sm:px-6 lg:px-8",
        sizeClassMap[size],
        centered && "mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
