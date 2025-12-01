"use client";

import React from "react";
import { Box, Heading, Text, type BoxProps } from "@primer/react";
import { clsx } from "clsx";

export interface EmptyStateProps extends BoxProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export function EmptyState({
  icon,
  title,
  description,
  actions,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <Box
      className={clsx("ds-empty-state", className)}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      py={8}
      px={4}
      {...props}
    >
      {icon && (
        <Box color="fg.muted" mb={3} sx={{ "& svg": { width: 48, height: 48 } }}>
          {icon}
        </Box>
      )}
      <Heading as="h3" sx={{ fontSize: 2, fontWeight: "semibold", mb: 1 }}>
        {title}
      </Heading>
      {description && (
        <Text as="p" color="fg.muted" sx={{ maxWidth: "400px", mb: 3 }}>
          {description}
        </Text>
      )}
      {actions && <Box mt={2}>{actions}</Box>}
    </Box>
  );
}
