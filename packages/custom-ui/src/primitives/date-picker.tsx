"use client";

/**
 * DatePicker & DateRangePicker - Popover-based date selection
 *
 * Re-exported from @heroui/date-picker with typed props.
 * Combines DateInput + Calendar + Popover into a single component.
 *
 * @description
 * - DatePicker: single date selection with popover calendar
 * - DateRangePicker: date range selection with popover range calendar
 *
 * Features:
 * - Keyboard-editable date segments
 * - Popover calendar for visual selection
 * - Multiple variants: flat, bordered, faded, underlined
 * - i18n and international calendar support
 * - Min/max date validation
 * - Full ARIA accessibility
 *
 * @example Single date
 * ```tsx
 * import { DatePicker } from "@nebutra/custom-ui/primitives";
 *
 * <DatePicker label="Event date" />
 * ```
 *
 * @example Date range
 * ```tsx
 * import { DateRangePicker } from "@nebutra/custom-ui/primitives";
 *
 * <DateRangePicker label="Trip dates" />
 * ```
 *
 * @example Controlled
 * ```tsx
 * import { DatePicker, parseDate } from "@nebutra/custom-ui/primitives";
 *
 * const [date, setDate] = useState(parseDate("2024-04-04"));
 * <DatePicker label="Date" value={date} onChange={setDate} />
 * ```
 *
 * @example With min/max
 * ```tsx
 * import { DateRangePicker, today, getLocalTimeZone } from "@nebutra/custom-ui/primitives";
 *
 * <DateRangePicker
 *   label="Period"
 *   minValue={today(getLocalTimeZone())}
 *   maxValue={today(getLocalTimeZone()).add({ months: 3 })}
 * />
 * ```
 *
 * @see https://www.heroui.com/docs/components/date-picker
 * @see https://www.heroui.com/docs/components/date-range-picker
 */
import {
  DatePicker as DatePickerBase,
  DateRangePicker as DateRangePickerBase,
} from "@heroui/date-picker";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DatePicker = DatePickerBase as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DateRangePicker = DateRangePickerBase as any;

export { DatePicker, DateRangePicker };

export type {
  DatePickerProps,
  DateRangePickerProps,
} from "@heroui/date-picker";
