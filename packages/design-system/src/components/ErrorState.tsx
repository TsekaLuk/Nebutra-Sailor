"use client";

import React from "react";
import {
  Heading as PrimerHeading,
  Text,
  Button as PrimerButton,
} from "@primer/react";
import { AlertIcon } from "@primer/octicons-react";
import { clsx } from "clsx";

// Type assertions for React 19 compatibility with @primer/react
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Heading = PrimerHeading as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button = PrimerButton as any;

export interface ErrorStateProps {
  title?: string;
  message?: string;
  error?: Error | null;
  onRetry?: () => void;
  retryLabel?: string;
  className?: string;
}

export function ErrorState({
  title = "Something went wrong",
  message,
  error,
  onRetry,
  retryLabel = "Try again",
  className,
}: ErrorStateProps): React.JSX.Element {
  const displayMessage = message || error?.message || "An unexpected error occurred.";
  const AlertGlyph = AlertIcon as unknown as React.ComponentType<{ size?: number }>;

  return (
    <div
      className={clsx(
        "ds-error-state",
        "flex flex-col items-center justify-center text-center py-8 px-4",
        className
      )}
    >
      <div className="text-red-500 mb-3">
        <AlertGlyph size={48} />
      </div>
      <Heading as="h2" className="text-base font-semibold mb-1">
        {title}
      </Heading>
      <Text as="p" className="text-gray-500 max-w-md mb-3">
        {displayMessage}
      </Text>
      {onRetry && (
        <Button variant="primary" onClick={onRetry}>
          {retryLabel}
        </Button>
      )}
    </div>
  );
}
