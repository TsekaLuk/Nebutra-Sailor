import type { Meta, StoryObj } from "@storybook/react";
import {
  Calendar,
  RangeCalendar,
  today,
  getLocalTimeZone,
  isWeekend,
} from "./calendar";

const meta = {
  title: "Primitives/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Fully-featured calendar with international calendar support, date constraints, and keyboard navigation.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Calendar />,
};

export const WithMonthYearPickers: Story = {
  name: "Month & Year Pickers",
  render: () => <Calendar showMonthAndYearPickers />,
};

export const MultipleMonths: Story = {
  name: "Multiple Months",
  render: () => <Calendar visibleMonths={2} />,
};

export const WithConstraints: Story = {
  name: "With Min/Max Constraints",
  render: () => {
    const tz = getLocalTimeZone();
    const min = today(tz).subtract({ months: 1 });
    const max = today(tz).add({ months: 1 });
    return <Calendar minValue={min} maxValue={max} />;
  },
};

export const WeekendsDisabled: Story = {
  name: "Weekends Unavailable",
  render: () => (
    <Calendar isDateUnavailable={(date) => isWeekend(date, "en-US")} />
  ),
};

// ─── RangeCalendar ────────────────────────────────────────────────────────────

export const RangeSelection: Story = {
  name: "Range Calendar",
  render: () => <RangeCalendar />,
};

export const RangeTwoMonths: Story = {
  name: "Range Calendar — Two Months",
  render: () => <RangeCalendar visibleMonths={2} />,
};
