"use client";

import React from "react";
import { clsx } from "clsx";

export interface CardProps {
  variant?: "default" | "outline" | "elevated" | "subtle";
  padding?: "none" | "sm" | "md" | "lg";
  interactive?: boolean;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const paddingClassMap = {
  none: "",
  sm: "p-2",
  md: "p-3",
  lg: "p-4",
} as const;

const variantClassMap = {
  default: "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700",
  outline: "bg-transparent border border-gray-200 dark:border-gray-700",
  elevated: "bg-white dark:bg-gray-900 shadow-md",
  subtle: "bg-gray-50 dark:bg-gray-800",
} as const;

export function Card({
  variant = "default",
  padding = "md",
  interactive = false,
  className,
  children,
  as: Component = "div",
}: CardProps) {
  return (
    <Component
      className={clsx(
        "ds-card",
        `ds-card--${variant}`,
        "rounded-lg overflow-hidden",
        paddingClassMap[padding],
        variantClassMap[variant],
        interactive && "cursor-pointer transition-all duration-150 hover:border-blue-500 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2",
        className
      )}
    >
      {children}
    </Component>
  );
}

interface CardSubComponentProps {
  children: React.ReactNode;
  className?: string;
}

Card.Header = function CardHeader({ children, className }: CardSubComponentProps) {
  return (
    <div className={clsx("pb-3 mb-3 border-b border-gray-200 dark:border-gray-700", className)}>
      {children}
    </div>
  );
};

Card.Body = function CardBody({ children, className }: CardSubComponentProps) {
  return <div className={className}>{children}</div>;
};

Card.Footer = function CardFooter({ children, className }: CardSubComponentProps) {
  return (
    <div className={clsx("pt-3 mt-3 border-t border-gray-200 dark:border-gray-700", className)}>
      {children}
    </div>
  );
};
