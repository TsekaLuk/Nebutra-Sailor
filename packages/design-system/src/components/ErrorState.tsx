"use client";

import React from "react";
import { Box, Heading, Text, Button, type BoxProps } from "@primer/react";
import { AlertIcon } from "@primer/octicons-react";
import { clsx } from "clsx";

export interface ErrorStateProps extends BoxProps {
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
  ...props
}: ErrorStateProps) {
  const displayMessage = message || error?.message || "An unexpected error occurred.";
  const AlertGlyph = AlertIcon as unknown as React.ComponentType<{ size?: number }>;

  return (
    <Box
      className={clsx("ds-error-state", className)}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      py={8}
      px={4}
      {...props}
    >
      <Box color="danger.fg" mb={3}>
        <AlertGlyph size={48} />
      </Box>
      <Heading as="h3" sx={{ fontSize: 2, fontWeight: "semibold", mb: 1 }}>
        {title}
      </Heading>
      <Text as="p" color="fg.muted" sx={{ maxWidth: "400px", mb: 3 }}>
        {displayMessage}
      </Text>
      {onRetry && (
        <Button variant="primary" onClick={onRetry}>
          {retryLabel}
        </Button>
      )}
    </Box>
  );
}
