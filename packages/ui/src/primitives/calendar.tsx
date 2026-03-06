"use client";

import React from "react";
import {
  Calendar as HeroUICalendarBase,
  RangeCalendar as HeroUIRangeCalendarBase,
} from "@heroui/calendar";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HeroUICalendar = HeroUICalendarBase as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HeroUIRangeCalendar = HeroUIRangeCalendarBase as any;
import type {
  CalendarProps as HeroUICalendarProps,
  RangeCalendarProps as HeroUIRangeCalendarProps,
} from "@heroui/calendar";
export type { RangeValue } from "@react-types/shared";

// =============================================================================
// Re-export internationalized date utilities
// =============================================================================

export {
  CalendarDate,
  CalendarDateTime,
  ZonedDateTime,
  today,
  getLocalTimeZone,
  parseDate,
  parseDateTime,
  parseZonedDateTime,
  parseAbsolute,
  parseAbsoluteToLocal,
  isWeekend,
  isToday,
  isSameDay,
  isSameMonth,
  isSameYear,
  getDayOfWeek,
  now,
  startOfWeek,
  startOfMonth,
  startOfYear,
  endOfWeek,
  endOfMonth,
  endOfYear,
} from "@internationalized/date";

export type { DateValue } from "@internationalized/date";

// =============================================================================
// Types
// =============================================================================

/**
 * Supported calendar systems for internationalization
 */
export type SupportedCalendars =
  | "buddhist"
  | "ethiopic"
  | "ethioaa"
  | "coptic"
  | "hebrew"
  | "indian"
  | "islamic-civil"
  | "islamic-tbla"
  | "islamic-umalqura"
  | "japanese"
  | "persian"
  | "roc"
  | "gregory";

/**
 * First day of week options
 */
export type FirstDayOfWeek =
  | "sun"
  | "mon"
  | "tue"
  | "wed"
  | "thu"
  | "fri"
  | "sat";

/**
 * Calendar color variants
 */
export type CalendarColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

/**
 * Props for Calendar component
 *
 * @description
 * A fully-featured calendar component with support for:
 * - International calendars (13 systems)
 * - Date range constraints (min/max)
 * - Unavailable dates
 * - Multiple visible months
 * - Month/year picker
 * - Keyboard navigation
 * - Screen reader support
 *
 * **UX Scenarios:**
 * - Date picker inputs
 * - Booking/scheduling interfaces
 * - Event calendars
 * - Date range selection
 * - Availability calendars
 *
 * **Accessibility:**
 * - Full keyboard navigation (arrow keys, page up/down)
 * - ARIA labels and live regions
 * - Focus management
 * - Screen reader announcements
 */
// Re-export HeroUI CalendarProps directly
export type CalendarProps = HeroUICalendarProps;

// =============================================================================
// Component
// =============================================================================

/**
 * Calendar - International date picker with full accessibility
 *
 * @example
 * ```tsx
 * import { Calendar, today, getLocalTimeZone, parseDate } from "@nebutra/ui";
 *
 * // Basic usage
 * <Calendar />
 *
 * // With controlled value
 * const [date, setDate] = useState(today(getLocalTimeZone()));
 * <Calendar value={date} onChange={setDate} />
 *
 * // With min/max constraints
 * <Calendar
 *   minValue={today(getLocalTimeZone())}
 *   maxValue={today(getLocalTimeZone()).add({ months: 3 })}
 * />
 *
 * // With unavailable dates (weekends)
 * <Calendar
 *   isDateUnavailable={(date) => isWeekend(date, "en-US")}
 * />
 *
 * // Multiple months
 * <Calendar visibleMonths={2} />
 *
 * // With month/year picker
 * <Calendar showMonthAndYearPickers />
 *
 * // With presets
 * <Calendar
 *   topContent={
 *     <div className="flex gap-2">
 *       <Button onClick={() => setDate(today(getLocalTimeZone()))}>
 *         Today
 *       </Button>
 *     </div>
 *   }
 * />
 * ```
 */
export const Calendar: React.FC<CalendarProps> = (props) => {
  return <HeroUICalendar {...props} />;
};

// =============================================================================
// RangeCalendar
// =============================================================================

/**
 * Props for RangeCalendar component
 */
export type RangeCalendarProps = HeroUIRangeCalendarProps;

/**
 * RangeCalendar - Date range selection on an inline calendar grid
 *
 * @example
 * ```tsx
 * import { RangeCalendar, today, getLocalTimeZone } from "@nebutra/ui";
 * import type { RangeValue, DateValue } from "@nebutra/ui";
 *
 * const [range, setRange] = useState<RangeValue<DateValue>>();
 * <RangeCalendar value={range} onChange={setRange} />
 * ```
 */
export const RangeCalendar: React.FC<RangeCalendarProps> = (props) => {
  return <HeroUIRangeCalendar {...props} />;
};

export default Calendar;
