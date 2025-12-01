"use client";

import React from "react";
import { Box, Spinner, Text, type BoxProps } from "@primer/react";
import { clsx } from "clsx";

export interface LoadingStateProps extends BoxProps {
  size?: "small" | "medium" | "large";
  message?: string;
}

export function LoadingState({
  size = "medium",
  message,
  className,
  ...props
}: LoadingStateProps) {
  return (
    <Box
      className={clsx("ds-loading-state", className)}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      py={6}
      {...props}
    >
      <Spinner size={size} />
      {message && (
        <Text as="p" color="fg.muted" sx={{ mt: 2 }}>
          {message}
        </Text>
      )}
    </Box>
  );
}
