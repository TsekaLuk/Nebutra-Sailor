"use client";

import React from "react";
import { Spinner, Text } from "@primer/react";
import { clsx } from "clsx";

export interface LoadingStateProps {
  size?: "small" | "medium" | "large";
  message?: string;
  className?: string;
}

export function LoadingState({
  size = "medium",
  message,
  className,
}: LoadingStateProps) {
  return (
    <div
      className={clsx(
        "ds-loading-state",
        "flex flex-col items-center justify-center py-6",
        className
      )}
    >
      <Spinner size={size} />
      {message && (
        <Text as="p" className="text-gray-500 mt-2">
          {message}
        </Text>
      )}
    </div>
  );
}
