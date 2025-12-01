"use client";

import React from "react";
import { Box, type BoxProps } from "@primer/react";
import { clsx } from "clsx";

export interface CardProps extends Omit<BoxProps, "as"> {
  variant?: "default" | "outline" | "elevated" | "subtle";
  padding?: "none" | "sm" | "md" | "lg";
  interactive?: boolean;
  as?: React.ElementType;
  children: React.ReactNode;
}

const paddingMap = {
  none: 0,
  sm: 2,
  md: 3,
  lg: 4,
} as const;

export function Card({
  variant = "default",
  padding = "md",
  interactive = false,
  className,
  children,
  as: Component = "div",
  ...props
}: CardProps) {
  const baseStyles: BoxProps = {
    borderRadius: 2,
    overflow: "hidden",
  };

  const variantStyles: Record<string, BoxProps> = {
    default: {
      bg: "canvas.default",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "border.default",
    },
    outline: {
      bg: "transparent",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "border.default",
    },
    elevated: {
      bg: "canvas.default",
      boxShadow: "shadow.medium",
    },
    subtle: {
      bg: "canvas.subtle",
    },
  };

  const interactiveStyles: BoxProps = interactive
    ? {
        cursor: "pointer",
        sx: {
          transition: "all 150ms ease",
          "&:hover": {
            borderColor: "accent.emphasis",
            boxShadow: "shadow.medium",
          },
          "&:focus-visible": {
            outline: "2px solid",
            outlineColor: "accent.emphasis",
            outlineOffset: "2px",
          },
        },
      }
    : {};

  return (
    <Box
      as={Component}
      className={clsx("ds-card", `ds-card--${variant}`, className)}
      p={paddingMap[padding]}
      {...baseStyles}
      {...variantStyles[variant]}
      {...interactiveStyles}
      {...props}
    >
      {children}
    </Box>
  );
}

// Sub-components for structured cards
Card.Header = function CardHeader({
  children,
  ...props
}: BoxProps & { children: React.ReactNode }) {
  return (
    <Box
      pb={3}
      mb={3}
      borderBottomWidth={1}
      borderBottomStyle="solid"
      borderBottomColor="border.muted"
      {...props}
    >
      {children}
    </Box>
  );
};

Card.Body = function CardBody({
  children,
  ...props
}: BoxProps & { children: React.ReactNode }) {
  return <Box {...props}>{children}</Box>;
};

Card.Footer = function CardFooter({
  children,
  ...props
}: BoxProps & { children: React.ReactNode }) {
  return (
    <Box
      pt={3}
      mt={3}
      borderTopWidth={1}
      borderTopStyle="solid"
      borderTopColor="border.muted"
      {...props}
    >
      {children}
    </Box>
  );
};
