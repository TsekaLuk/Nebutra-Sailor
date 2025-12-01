"use client";

import React from "react";
import { Box, Heading, Text, type BoxProps } from "@primer/react";
import { clsx } from "clsx";

export interface SectionProps extends BoxProps {
  title?: string;
  description?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Section({
  title,
  description,
  actions,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Box
      as="section"
      className={clsx("ds-section", className)}
      mb={6}
      {...props}
    >
      {(title || description || actions) && (
        <Box
          display="flex"
          flexDirection={["column", "row"]}
          justifyContent="space-between"
          alignItems={["flex-start", "center"]}
          mb={4}
          gap={3}
        >
          <Box>
            {title && (
              <Heading as="h2" sx={{ fontSize: 3, fontWeight: "semibold" }}>
                {title}
              </Heading>
            )}
            {description && (
              <Text as="p" color="fg.muted" sx={{ mt: 1 }}>
                {description}
              </Text>
            )}
          </Box>
          {actions && <Box flexShrink={0}>{actions}</Box>}
        </Box>
      )}
      {children}
    </Box>
  );
}
