"use client";

import React from "react";
import { Box, type BoxProps } from "@primer/react";
import { clsx } from "clsx";

export interface ContainerProps extends Omit<BoxProps, "maxWidth"> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  centered?: boolean;
  children: React.ReactNode;
}

const sizeMap = {
  sm: "544px",
  md: "768px",
  lg: "1012px",
  xl: "1280px",
  full: "100%",
} as const;

export function Container({
  size = "lg",
  centered = true,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Box
      className={clsx("ds-container", `ds-container--${size}`, className)}
      width="100%"
      maxWidth={sizeMap[size]}
      mx={centered ? "auto" : undefined}
      px={[3, 4, 5]}
      {...props}
    >
      {children}
    </Box>
  );
}
