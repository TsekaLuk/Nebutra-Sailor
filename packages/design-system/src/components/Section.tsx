"use client";

import React from "react";
import { Heading, Text } from "@primer/react";
import { clsx } from "clsx";

export interface SectionProps {
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
}: SectionProps) {
  return (
    <section
      className={clsx("ds-section", "mb-6", className)}
    >
      {(title || description || actions) && (
        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3"
        >
          <div>
            {title && (
              <Heading as="h2" className="text-lg font-semibold">
                {title}
              </Heading>
            )}
            {description && (
              <Text as="p" className="text-fg-muted mt-1">
                {description}
              </Text>
            )}
          </div>
          {actions && <div className="shrink-0">{actions}</div>}
        </div>
      )}
      {children}
    </section>
  );
}
