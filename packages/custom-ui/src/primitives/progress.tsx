"use client";

import React from "react";
import {
  Progress as HeroUIProgress,
  ProgressProps as HeroUIProgressProps,
} from "@heroui/progress";

// =============================================================================
// Types
// =============================================================================

/**
 * Progress color variants
 */
export type ProgressColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

/**
 * Progress size variants
 */
export type ProgressSize = "sm" | "md" | "lg";

/**
 * Progress radius variants
 */
export type ProgressRadius = "none" | "sm" | "md" | "lg" | "full";

/**
 * Props for Progress component
 *
 * @description
 * A linear progress bar component for displaying completion status.
 * Supports determinate and indeterminate states, labels, and value formatting.
 *
 * **UX Scenarios:**
 * - File upload progress
 * - Form completion status
 * - Loading indicators
 * - Task/goal progress
 * - Storage/quota usage
 * - Multi-step process tracking
 *
 * **Accessibility:**
 * - ARIA progressbar role
 * - aria-valuenow, aria-valuemin, aria-valuemax
 * - Internationalized number formatting
 * - Screen reader announcements
 */
export interface ProgressProps extends Omit<
  HeroUIProgressProps,
  "color" | "size" | "radius"
> {
  /**
   * Label displayed above the progress bar
   */
  label?: React.ReactNode;
  /**
   * Size variant
   * @default "md"
   */
  size?: ProgressSize;
  /**
   * Color variant
   * @default "primary"
   */
  color?: ProgressColor;
  /**
   * Border radius
   * @default "full"
   */
  radius?: ProgressRadius;
  /**
   * Current progress value (0-100 by default)
   */
  value?: number;
  /**
   * Custom value label (overrides formatted value)
   */
  valueLabel?: React.ReactNode;
  /**
   * Minimum value
   * @default 0
   */
  minValue?: number;
  /**
   * Maximum value
   * @default 100
   */
  maxValue?: number;
  /**
   * Number format options for value display
   * @default { style: 'percent' }
   */
  formatOptions?: Intl.NumberFormatOptions;
  /**
   * Show indeterminate loading animation
   * @default false
   */
  isIndeterminate?: boolean;
  /**
   * Show striped pattern on the indicator
   * @default false
   */
  isStriped?: boolean;
  /**
   * Show the value label
   * @default true
   */
  showValueLabel?: boolean;
  /**
   * Whether the progress is disabled
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Disable animations
   * @default false
   */
  disableAnimation?: boolean;
  /**
   * Custom class names for slots
   */
  classNames?: Partial<
    Record<
      "base" | "labelWrapper" | "label" | "track" | "value" | "indicator",
      string
    >
  >;
}

// =============================================================================
// Component
// =============================================================================

/**
 * Progress - Linear progress bar
 *
 * @example
 * ```tsx
 * import { Progress } from "@nebutra/custom-ui";
 *
 * // Basic usage
 * <Progress value={60} aria-label="Loading" />
 *
 * // With label
 * <Progress label="Loading..." value={45} />
 *
 * // Indeterminate (unknown duration)
 * <Progress isIndeterminate label="Processing..." />
 *
 * // Striped style
 * <Progress value={70} isStriped color="success" />
 *
 * // Custom value formatting (currency)
 * <Progress
 *   label="Monthly expenses"
 *   value={4000}
 *   maxValue={10000}
 *   formatOptions={{ style: "currency", currency: "USD" }}
 * />
 *
 * // Different sizes
 * <Progress size="sm" value={30} />
 * <Progress size="md" value={50} />
 * <Progress size="lg" value={70} />
 *
 * // Different colors
 * <Progress color="primary" value={20} />
 * <Progress color="success" value={100} />
 * <Progress color="warning" value={60} />
 * <Progress color="danger" value={80} />
 *
 * // Custom styling
 * <Progress
 *   label="Lose weight"
 *   value={65}
 *   classNames={{
 *     base: "max-w-md",
 *     track: "drop-shadow-md border border-default",
 *     indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
 *     label: "font-medium",
 *     value: "text-foreground/60",
 *   }}
 * />
 * ```
 */
export const Progress: React.FC<ProgressProps> = (props) => {
  return <HeroUIProgress {...props} />;
};

export default Progress;
