"use client";

import React from "react";
import { Heading, Text, Breadcrumbs } from "@primer/react";
import { clsx } from "clsx";

export interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  description,
  actions,
  breadcrumbs,
  className,
  children,
}: PageHeaderProps) {
  return (
    <header
      className={clsx(
        "ds-page-header",
        "pb-4 mb-4 border-b border-gray-200 dark:border-gray-700",
        className
      )}
    >
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumbs className="mb-2">
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

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <Heading as="h1" className="text-2xl font-bold">
            {title}
          </Heading>
          {description && (
            <Text as="p" className="text-gray-500 mt-1">
              {description}
            </Text>
          )}
        </div>
        {actions && <div className="shrink-0">{actions}</div>}
      </div>

      {children}
    </header>
  );
}
