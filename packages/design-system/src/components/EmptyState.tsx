"use client";

import React from "react";
import { Heading, Text } from "@primer/react";
import { clsx } from "clsx";

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  actions,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={clsx(
        "ds-empty-state",
        "flex flex-col items-center justify-center text-center py-8 px-4",
        className
      )}
    >
      {icon && (
        <div className="text-gray-500 mb-3 [&_svg]:w-12 [&_svg]:h-12">
          {icon}
        </div>
      )}
      <Heading as="h3" className="text-base font-semibold mb-1">
        {title}
      </Heading>
      {description && (
        <Text as="p" className="text-gray-500 max-w-md mb-3">
          {description}
        </Text>
      )}
      {actions && <div className="mt-2">{actions}</div>}
    </div>
  );
}
