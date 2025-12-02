"use client";

import React from "react";
import {
  Switch as HeroUISwitch,
  SwitchProps as HeroUISwitchProps,
} from "@heroui/switch";

// =============================================================================
// Types
// =============================================================================

/**
 * Switch color variants
 */
export type SwitchColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

/**
 * Switch size variants
 */
export type SwitchSize = "sm" | "md" | "lg";

/**
 * Thumb icon props type
 */
export interface ThumbIconProps {
  isSelected: boolean;
  className: string;
}

/**
 * Props for Switch component
 *
 * @description
 * A toggle switch component for binary on/off states.
 * Supports icons, labels, and custom thumb icons.
 *
 * **UX Scenarios:**
 * - Settings toggles (dark mode, notifications)
 * - Feature flags / preferences
 * - Enable/disable options
 * - Boolean form inputs
 * - Quick action toggles
 *
 * **Accessibility:**
 * - Native input element for form autofill
 * - Keyboard navigation (Tab, Space)
 * - ARIA switch role
 * - Focus ring support
 */
export interface SwitchProps extends Omit<HeroUISwitchProps, "color" | "size"> {
  /**
   * Label content
   */
  children?: React.ReactNode;
  /**
   * Value for form submission
   */
  value?: string;
  /**
   * Name attribute for form
   */
  name?: string;
  /**
   * Size variant
   * @default "md"
   */
  size?: SwitchSize;
  /**
   * Color variant
   * @default "primary"
   */
  color?: SwitchColor;
  /**
   * Custom thumb icon (receives isSelected state)
   */
  thumbIcon?: React.ReactNode | ((props: ThumbIconProps) => React.ReactNode);
  /**
   * Content at the start of the switch (before thumb)
   */
  startContent?: React.ReactNode;
  /**
   * Content at the end of the switch (after thumb)
   */
  endContent?: React.ReactNode;
  /**
   * Controlled selected state
   */
  isSelected?: boolean;
  /**
   * Default selected state (uncontrolled)
   */
  defaultSelected?: boolean;
  /**
   * Whether the switch is read-only
   * @default false
   */
  isReadOnly?: boolean;
  /**
   * Whether the switch is disabled
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Disable animations
   * @default false
   */
  disableAnimation?: boolean;
  /**
   * Native onChange handler
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * Callback when selected state changes
   */
  onValueChange?: (isSelected: boolean) => void;
  /**
   * Custom class names for slots
   */
  classNames?: Partial<
    Record<
      | "base"
      | "wrapper"
      | "thumb"
      | "label"
      | "startContent"
      | "endContent"
      | "thumbIcon",
      string
    >
  >;
}

// =============================================================================
// Component
// =============================================================================

/**
 * Switch - Toggle switch for binary states
 *
 * @example
 * ```tsx
 * import { Switch } from "@nebutra/custom-ui";
 *
 * // Basic usage
 * <Switch>Enable notifications</Switch>
 *
 * // Controlled
 * const [isEnabled, setIsEnabled] = useState(false);
 * <Switch isSelected={isEnabled} onValueChange={setIsEnabled}>
 *   Dark mode
 * </Switch>
 *
 * // Different colors and sizes
 * <Switch color="success" size="lg">Active</Switch>
 * <Switch color="danger" size="sm">Delete mode</Switch>
 *
 * // With thumb icon
 * <Switch
 *   thumbIcon={({ isSelected }) =>
 *     isSelected ? <SunIcon /> : <MoonIcon />
 *   }
 * >
 *   Theme
 * </Switch>
 *
 * // With start/end icons
 * <Switch
 *   startContent={<MoonIcon />}
 *   endContent={<SunIcon />}
 * />
 *
 * // Custom styling
 * <Switch
 *   classNames={{
 *     base: "inline-flex flex-row-reverse gap-4",
 *     wrapper: "bg-default-200",
 *     thumb: "bg-primary",
 *   }}
 * >
 *   Custom styled
 * </Switch>
 * ```
 */
export const Switch: React.FC<SwitchProps> = (props) => {
  return <HeroUISwitch {...props} />;
};

export default Switch;
