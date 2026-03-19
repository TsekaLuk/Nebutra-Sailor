"use client";

import { Calendar as CalendarIcon, ChevronDown, X } from "lucide-react";
import * as React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { cn } from "../utils/cn";
import { Button } from "./button";
import { CalendarDate, type DateValue, RangeCalendar, type RangeValue } from "./calendar";
import { HeroPopover, HeroPopoverContent, HeroPopoverTrigger } from "./hero-popover";

// =============================================================================
// Types
// =============================================================================

/**
 * Preset date range configuration
 */
export interface CalendarPreset {
  /** Display label for the preset */
  text: string;
  /** Range start date */
  start: Date;
  /** Range end date */
  end: Date;
}

/**
 * CalendarPicker size variants
 */
export type CalendarPickerSize = "small" | "default";

/**
 * Props for CalendarPicker component
 */
export interface CalendarPickerProps {
  /** Selected date range (controlled) */
  value?: RangeValue<DateValue>;
  /** Callback when date range changes */
  onChange?: (value: RangeValue<DateValue> | undefined) => void;
  /** Preset date range shortcuts */
  presets?: Record<string, CalendarPreset>;
  /** Index of the initially selected preset (0-based) */
  presetIndex?: number;
  /** Size variant */
  size?: CalendarPickerSize;
  /** Show clear button when value is set */
  allowClear?: boolean;
  /** Compact layout — presets in dropdown */
  compact?: boolean;
  /** Stacked layout — presets below calendar */
  stacked?: boolean;
  /** Horizontal content alignment */
  horizontalLayout?: boolean;
  /** Earliest selectable date */
  minValue?: Date;
  /** Latest selectable date */
  maxValue?: Date;
  /** Additional className for the outer container */
  className?: string;
}

// =============================================================================
// Helpers
// =============================================================================

function dateToCalendarDate(date: Date): CalendarDate {
  return new CalendarDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
}

function formatRange(range: RangeValue<DateValue> | undefined): string {
  if (!range) return "Select period";

  const start = range.start;
  const end = range.end;

  const fmt = (d: DateValue) => {
    const month = String(d.month).padStart(2, "0");
    const day = String(d.day).padStart(2, "0");
    return `${d.year}-${month}-${day}`;
  };

  if (start.year === end.year && start.month === end.month && start.day === end.day) {
    return fmt(start);
  }

  return `${fmt(start)} – ${fmt(end)}`;
}

// =============================================================================
// PresetList (internal)
// =============================================================================

interface PresetListProps {
  presets: Record<string, CalendarPreset>;
  activeKey?: string | undefined;
  onSelect: (key: string, preset: CalendarPreset) => void;
  size: CalendarPickerSize;
  direction: "vertical" | "horizontal";
}

function PresetList({ presets, activeKey, onSelect, size, direction }: PresetListProps) {
  const entries = Object.entries(presets);
  if (entries.length === 0) return null;

  const isSmall = size === "small";

  return (
    <div className={cn("flex gap-1", direction === "vertical" ? "flex-col" : "flex-row flex-wrap")}>
      {entries.map(([key, preset]) => (
        <button
          key={key}
          type="button"
          onClick={() => onSelect(key, preset)}
          className={cn(
            "rounded-[var(--radius-md)] px-3 py-1.5 text-left text-sm font-medium transition-colors",
            "hover:bg-accent hover:text-accent-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            isSmall && "px-2 py-1 text-xs",
            activeKey === key ? "bg-primary text-primary-foreground" : "text-muted-foreground",
          )}
        >
          {preset.text}
        </button>
      ))}
    </div>
  );
}

// =============================================================================
// CalendarPicker
// =============================================================================

/**
 * CalendarPicker — Geist-style date range picker with presets
 *
 * A popover-based date range selector combining RangeCalendar with
 * optional preset shortcuts. Supports multiple layout modes.
 *
 * @example Basic
 * ```tsx
 * <CalendarPicker value={range} onChange={setRange} />
 * ```
 *
 * @example With presets
 * ```tsx
 * <CalendarPicker
 *   value={range}
 *   onChange={setRange}
 *   presets={{
 *     "last-7": { text: "Last 7 Days", start: subWeeks(new Date(), 1), end: new Date() },
 *     "last-30": { text: "Last 30 Days", start: subMonths(new Date(), 1), end: new Date() },
 *   }}
 *   allowClear
 * />
 * ```
 *
 * @example Small + stacked
 * ```tsx
 * <CalendarPicker size="small" stacked presets={presets} />
 * ```
 */
export function CalendarPicker({
  value,
  onChange,
  presets,
  presetIndex,
  size = "default",
  allowClear = false,
  compact = false,
  stacked = false,
  horizontalLayout = false,
  minValue,
  maxValue,
  className,
}: CalendarPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activePresetKey, setActivePresetKey] = useState<string | undefined>();

  const isSmall = size === "small";

  // Apply default preset once on mount (when no controlled value exists)
  const didInitRef = React.useRef(false);
  useEffect(() => {
    if (didInitRef.current) return;
    if (presetIndex != null && presets && !value) {
      const keys = Object.keys(presets);
      const key = keys[presetIndex];
      if (key) {
        didInitRef.current = true;
        const preset = presets[key];
        if (preset) {
          setActivePresetKey(key);
          onChange?.({
            start: dateToCalendarDate(preset.start),
            end: dateToCalendarDate(preset.end),
          });
        }
      }
    }
  }, [presetIndex, presets, value, onChange]);

  const handlePresetSelect = useCallback(
    (key: string, preset: CalendarPreset) => {
      setActivePresetKey(key);
      const rangeVal: RangeValue<DateValue> = {
        start: dateToCalendarDate(preset.start),
        end: dateToCalendarDate(preset.end),
      };
      onChange?.(rangeVal);
    },
    [onChange],
  );

  const handleCalendarChange = useCallback(
    (rangeVal: RangeValue<DateValue> | null) => {
      setActivePresetKey(undefined);
      onChange?.(rangeVal ?? undefined);
    },
    [onChange],
  );

  const handleClear = useCallback(() => {
    setActivePresetKey(undefined);
    onChange?.(undefined);
  }, [onChange]);

  const calendarMinValue = useMemo(
    () => (minValue ? dateToCalendarDate(minValue) : undefined),
    [minValue],
  );
  const calendarMaxValue = useMemo(
    () => (maxValue ? dateToCalendarDate(maxValue) : undefined),
    [maxValue],
  );

  const hasPresets = presets && Object.keys(presets).length > 0;

  // Guard: compact, stacked, horizontalLayout are mutually exclusive
  if (process.env.NODE_ENV !== "production") {
    const exclusiveCount = [compact, stacked, horizontalLayout].filter(Boolean).length;
    if (exclusiveCount > 1) {
    }
  }

  // --- Layout classes for content ---
  const contentLayoutClass = cn(
    "flex gap-4 p-3",
    stacked && "flex-col",
    horizontalLayout && "flex-row items-start",
    !stacked && !horizontalLayout && hasPresets && "flex-row",
  );

  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <HeroPopover
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        placement="bottom-start"
        offset={4}
        shouldCloseOnScroll={false}
      >
        <HeroPopoverTrigger>
          <Button
            variant="outline"
            size={isSmall ? "sm" : "default"}
            prefix={<CalendarIcon />}
            suffix={<ChevronDown />}
            className="min-w-[200px] justify-between font-normal"
          >
            <span className={cn("flex-1 truncate text-left", !value && "text-muted-foreground")}>
              {formatRange(value)}
            </span>
          </Button>
        </HeroPopoverTrigger>

        <HeroPopoverContent className="w-auto p-0">
          <div className={contentLayoutClass}>
            {/* Calendar grid */}
            <RangeCalendar
              value={
                (value as unknown as React.ComponentProps<typeof RangeCalendar>["value"]) ?? null
              }
              onChange={handleCalendarChange}
              minValue={calendarMinValue ?? null}
              maxValue={calendarMaxValue ?? null}
              visibleMonths={horizontalLayout ? 2 : 1}
              classNames={{
                base: cn(isSmall && "scale-[0.85] origin-top-left"),
              }}
            />

            {/* Presets panel */}
            {hasPresets && !compact && (
              <div
                className={cn(
                  stacked ? "border-t border-border pt-3" : "border-l border-border pl-4",
                  "min-w-[140px]",
                )}
              >
                <p className="mb-2 text-xs font-medium text-muted-foreground">Select Period</p>
                <PresetList
                  presets={presets}
                  activeKey={activePresetKey}
                  onSelect={handlePresetSelect}
                  size={size}
                  direction="vertical"
                />
              </div>
            )}
          </div>

          {/* Compact: presets as horizontal row at bottom */}
          {hasPresets && compact && (
            <div className="border-t border-border px-3 py-2">
              <PresetList
                presets={presets}
                activeKey={activePresetKey}
                onSelect={handlePresetSelect}
                size={size}
                direction="horizontal"
              />
            </div>
          )}
        </HeroPopoverContent>
      </HeroPopover>

      {/* Clear button */}
      {allowClear && value && (
        <Button
          variant="ghost"
          size={isSmall ? "tiny" : "sm"}
          shape="circle"
          onClick={handleClear}
          aria-label="Clear date selection"
        >
          <X />
        </Button>
      )}
    </div>
  );
}

CalendarPicker.displayName = "CalendarPicker";
