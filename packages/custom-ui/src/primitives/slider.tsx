"use client";

import React from "react";
import {
  Slider as HeroUISlider,
  SliderProps as HeroUISliderProps,
} from "@heroui/slider";

// =============================================================================
// Types
// =============================================================================

/**
 * Slider value type - single value or range array
 */
export type SliderValue = number | number[];

/**
 * Slider step mark definition
 */
export interface SliderStepMark {
  value: number;
  label: string;
}

/**
 * Slider color variants
 */
export type SliderColor =
  | "foreground"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

/**
 * Slider size variants
 */
export type SliderSize = "sm" | "md" | "lg";

/**
 * Slider radius variants
 */
export type SliderRadius = "none" | "sm" | "md" | "lg" | "full";

/**
 * Slider orientation
 */
export type SliderOrientation = "horizontal" | "vertical";

/**
 * Props for Slider component
 *
 * @description
 * A slider allows users to select one or more values within a range.
 * Supports single value, range selection, marks, tooltips, and custom rendering.
 *
 * **UX Scenarios:**
 * - Volume/brightness controls
 * - Price range filters
 * - Rating/score input
 * - Timeline/progress scrubbing
 * - Numeric value selection
 * - Temperature/preference settings
 *
 * **Accessibility:**
 * - Keyboard navigation (arrow keys, page up/down, home/end)
 * - Screen reader support via ARIA
 * - Touch and multi-touch support
 * - RTL locale support
 */
export interface SliderProps extends Omit<
  HeroUISliderProps,
  "color" | "size" | "radius"
> {
  /**
   * Label for the slider
   */
  label?: React.ReactNode;
  /**
   * Name attribute for form submission
   */
  name?: string;
  /**
   * Size variant
   * @default "md"
   */
  size?: SliderSize;
  /**
   * Color variant
   * @default "primary"
   */
  color?: SliderColor;
  /**
   * Border radius
   * @default "full"
   */
  radius?: SliderRadius;
  /**
   * Step increment value
   * @default 1
   */
  step?: number;
  /**
   * Current value (controlled)
   */
  value?: SliderValue;
  /**
   * Default value (uncontrolled)
   */
  defaultValue?: SliderValue;
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
   * Slider orientation
   * @default "horizontal"
   */
  orientation?: SliderOrientation;
  /**
   * Fill start offset (for centered fill)
   */
  fillOffset?: number;
  /**
   * Show step dots on the track
   * @default false
   */
  showSteps?: boolean;
  /**
   * Show tooltip on hover/drag
   * @default false
   */
  showTooltip?: boolean;
  /**
   * Step marks with labels
   */
  marks?: SliderStepMark[];
  /**
   * Content at the start of the slider
   */
  startContent?: React.ReactNode;
  /**
   * Content at the end of the slider
   */
  endContent?: React.ReactNode;
  /**
   * Number format options for displayed value
   */
  formatOptions?: Intl.NumberFormatOptions;
  /**
   * Number format options for tooltip value
   */
  tooltipValueFormatOptions?: Intl.NumberFormatOptions;
  /**
   * Props to pass to the tooltip
   */
  tooltipProps?: Record<string, unknown>;
  /**
   * Show outline on thumb
   * @default false
   */
  showOutline?: boolean;
  /**
   * Hide the value display
   * @default false
   */
  hideValue?: boolean;
  /**
   * Hide the thumb
   * @default false
   */
  hideThumb?: boolean;
  /**
   * Disable thumb scale animation
   * @default false
   */
  disableThumbScale?: boolean;
  /**
   * Whether the slider is disabled
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Disable animations
   * @default false
   */
  disableAnimation?: boolean;
  /**
   * Custom value formatter
   */
  getValue?: (value: SliderValue) => string;
  /**
   * Custom tooltip value formatter
   */
  getTooltipValue?: (value: SliderValue, index?: number) => string | number;
  /**
   * Custom label renderer
   */
  renderLabel?: (
    props: React.DOMAttributes<HTMLLabelElement>,
  ) => React.ReactNode;
  /**
   * Custom value renderer
   */
  renderValue?: (
    props: React.DOMAttributes<HTMLOutputElement>,
  ) => React.ReactNode;
  /**
   * Custom thumb renderer
   */
  renderThumb?: (
    props: React.DOMAttributes<HTMLDivElement> & { index?: number },
  ) => React.ReactNode;
  /**
   * Callback when value changes (during drag)
   */
  onChange?: (value: SliderValue) => void;
  /**
   * Callback when value changes (on drag end)
   */
  onChangeEnd?: (value: SliderValue) => void;
  /**
   * Custom class names for slots
   */
  classNames?: Partial<
    Record<
      | "base"
      | "labelWrapper"
      | "label"
      | "value"
      | "step"
      | "mark"
      | "trackWrapper"
      | "track"
      | "filler"
      | "thumb"
      | "startContent"
      | "endContent",
      string
    >
  >;
}

// =============================================================================
// Component
// =============================================================================

/**
 * Slider - Value selection within a range
 *
 * @example
 * ```tsx
 * import { Slider } from "@nebutra/custom-ui";
 *
 * // Basic usage
 * <Slider label="Volume" defaultValue={50} />
 *
 * // Range slider
 * <Slider
 *   label="Price Range"
 *   defaultValue={[100, 500]}
 *   minValue={0}
 *   maxValue={1000}
 *   formatOptions={{ style: "currency", currency: "USD" }}
 * />
 *
 * // With marks and tooltip
 * <Slider
 *   label="Rating"
 *   showTooltip
 *   marks={[
 *     { value: 0, label: "0%" },
 *     { value: 50, label: "50%" },
 *     { value: 100, label: "100%" },
 *   ]}
 * />
 *
 * // Vertical slider
 * <Slider orientation="vertical" minValue={0} maxValue={100} />
 *
 * // With start/end content (icons)
 * <Slider
 *   startContent={<VolumeOffIcon />}
 *   endContent={<VolumeHighIcon />}
 * />
 *
 * // Custom value display
 * <Slider
 *   label="Donuts"
 *   getValue={(v) => `${v} of 60 Donuts`}
 * />
 *
 * // Controlled
 * const [value, setValue] = useState(25);
 * <Slider value={value} onChange={setValue} />
 * ```
 */
export const Slider: React.FC<SliderProps> = (props) => {
  return <HeroUISlider {...props} />;
};

export default Slider;
