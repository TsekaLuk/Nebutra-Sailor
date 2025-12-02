"use client";

import React from "react";
import {
  CheckboxGroup as HeroUICheckboxGroup,
  Checkbox as HeroUICheckbox,
  CheckboxGroupProps as HeroUICheckboxGroupProps,
  CheckboxProps as HeroUICheckboxProps,
} from "@heroui/checkbox";

// =============================================================================
// Types
// =============================================================================

/**
 * Checkbox color variants
 */
export type CheckboxColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

/**
 * Checkbox size variants
 */
export type CheckboxSize = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Checkbox radius variants
 */
export type CheckboxRadius =
  | "none"
  | "base"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "full";

/**
 * Checkbox group orientation
 */
export type CheckboxGroupOrientation = "vertical" | "horizontal";

/**
 * Validation result type
 */
export interface ValidationResult {
  isInvalid: boolean;
  validationErrors: string[];
  validationDetails: Record<string, boolean>;
}

/**
 * Props for CheckboxGroup component
 *
 * @description
 * A group of checkboxes allowing multiple selections from a list.
 * Supports validation, custom styling, and accessibility features.
 *
 * **UX Scenarios:**
 * - Multi-select forms (interests, preferences)
 * - Filter panels with multiple options
 * - Settings pages with toggleable options
 * - Survey/quiz multi-answer questions
 * - Permission/role selection
 *
 * **Accessibility:**
 * - Proper ARIA role and attributes
 * - Keyboard navigation (Tab, Space)
 * - Focus management
 * - Screen reader support
 */
// Re-export HeroUI CheckboxGroupProps directly
export type CheckboxGroupProps = HeroUICheckboxGroupProps;

/**
 * Props for individual Checkbox component
 */
// Re-export HeroUI CheckboxProps directly
export type CheckboxProps = HeroUICheckboxProps;

// =============================================================================
// Components
// =============================================================================

/**
 * CheckboxGroup - Multi-select checkbox group
 *
 * @example
 * ```tsx
 * import { CheckboxGroup, Checkbox } from "@nebutra/custom-ui";
 *
 * // Basic usage
 * <CheckboxGroup label="Select cities">
 *   <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
 *   <Checkbox value="sydney">Sydney</Checkbox>
 *   <Checkbox value="london">London</Checkbox>
 * </CheckboxGroup>
 *
 * // Controlled
 * const [selected, setSelected] = useState(["buenos-aires"]);
 * <CheckboxGroup
 *   label="Select cities"
 *   value={selected}
 *   onValueChange={setSelected}
 * >
 *   <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
 *   <Checkbox value="sydney">Sydney</Checkbox>
 * </CheckboxGroup>
 *
 * // Horizontal layout
 * <CheckboxGroup orientation="horizontal" label="Options">
 *   <Checkbox value="a">Option A</Checkbox>
 *   <Checkbox value="b">Option B</Checkbox>
 * </CheckboxGroup>
 *
 * // With validation
 * <CheckboxGroup
 *   label="Required selection"
 *   isRequired
 *   isInvalid={selected.length === 0}
 *   errorMessage="Please select at least one option"
 * >
 *   ...
 * </CheckboxGroup>
 * ```
 */
export const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
  return <HeroUICheckboxGroup {...props} />;
};

/**
 * Checkbox - Individual checkbox item
 *
 * @example
 * ```tsx
 * // Standalone usage
 * <Checkbox>Accept terms</Checkbox>
 *
 * // Within a group
 * <CheckboxGroup>
 *   <Checkbox value="option1">Option 1</Checkbox>
 *   <Checkbox value="option2" isDisabled>Option 2 (disabled)</Checkbox>
 * </CheckboxGroup>
 *
 * // Custom styling
 * <Checkbox
 *   color="success"
 *   size="lg"
 *   radius="full"
 * >
 *   Large success checkbox
 * </Checkbox>
 * ```
 */
export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return <HeroUICheckbox {...props} />;
};

export default CheckboxGroup;
