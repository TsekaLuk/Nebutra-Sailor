"use client";

import React from "react";
import { Box, Heading, Text, Breadcrumbs, type BoxProps } from "@primer/react";
import { clsx } from "clsx";

export interface PageHeaderProps extends BoxProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  description,
  actions,
  breadcrumbs,
  className,
  children,
  ...props
}: PageHeaderProps) {
  return (
    <Box
      as="header"
      className={clsx("ds-page-header", className)}
      pb={4}
      mb={4}
      borderBottomWidth={1}
      borderBottomStyle="solid"
      borderBottomColor="border.default"
      {...props}
    >
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumbs sx={{ mb: 2 }}>
          {breadcrumbs.map((item, index) => (
            <Breadcrumbs.Item
              key={index}
              href={item.href}
              selected={index === breadcrumbs.length - 1}
            >
              {item.label}
            </Breadcrumbs.Item>
          ))}
        </Breadcrumbs>
      )}

      <Box
        display="flex"
        flexDirection={["column", "row"]}
        justifyContent="space-between"
        alignItems={["flex-start", "center"]}
        gap={3}
      >
        <Box>
          <Heading as="h1" sx={{ fontSize: 4, fontWeight: "bold" }}>
            {title}
          </Heading>
          {description && (
            <Text as="p" color="fg.muted" sx={{ mt: 1 }}>
              {description}
            </Text>
          )}
        </Box>
        {actions && <Box flexShrink={0}>{actions}</Box>}
      </Box>

      {children}
    </Box>
  );
}
