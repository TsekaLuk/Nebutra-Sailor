"use client";

/**
 * DateInput - Date and time input with keyboard-editable segments
 *
 * Re-exported from @heroui/date-input for consistent usage across the monorepo.
 *
 * @description
 * A component that allows users to enter and edit date and time values using a keyboard.
 * Each part of a date value is displayed in an individually editable segment.
 *
 * Features:
 * - Keyboard-editable date segments (year, month, day, hour, minute, second)
 * - Multiple variants: flat, bordered, faded, underlined
 * - Label placements: inside, outside, outside-left
 * - Time zone support with ZonedDateTime
 * - International calendar support (Gregorian, Hebrew, Indian, Islamic, Buddhist, etc.)
 * - Min/max date validation
 * - Granularity control (day, hour, minute, second)
 *
 * @example Basic usage
 * ```tsx
 * import { DateInput } from "@nebutra/custom-ui/primitives";
 * import { CalendarDate } from "@internationalized/date";
 *
 * <DateInput label="Birth date" />
 * ```
 *
 * @example Controlled with CalendarDate
 * ```tsx
 * import { CalendarDate } from "@internationalized/date";
 *
 * const [date, setDate] = useState(new CalendarDate(2024, 4, 4));
 *
 * <DateInput
 *   label="Event date"
 *   value={date}
 *   onChange={setDate}
 * />
 * ```
 *
 * @example With time zone
 * ```tsx
 * import { parseZonedDateTime } from "@internationalized/date";
 *
 * <DateInput
 *   label="Event date"
 *   defaultValue={parseZonedDateTime("2022-11-07T00:45[America/Los_Angeles]")}
 * />
 * ```
 *
 * @example With granularity
 * ```tsx
 * <DateInput
 *   label="Appointment"
 *   granularity="second"
 *   defaultValue={now("Asia/Shanghai")}
 * />
 * ```
 *
 * @see https://www.heroui.com/docs/components/date-input
 */
export { DateInput, type DateInputProps } from "@heroui/date-input";
