import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker, DateRangePicker } from "./date-picker";

const meta = {
  title: "Primitives/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Popover-based date selection combining DateInput + Calendar. Supports single date and date range modes.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── DatePicker ───────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <div className="w-[260px]">
      <DatePicker label="Date" />
    </div>
  ),
};

export const WithDescription: Story = {
  name: "With Description",
  render: () => (
    <div className="w-[260px]">
      <DatePicker label="Event date" description="Select the event date" />
    </div>
  ),
};

export const Bordered: Story = {
  render: () => (
    <div className="w-[260px]">
      <DatePicker label="Date" variant="bordered" />
    </div>
  ),
};

export const SelectorStart: Story = {
  name: "Selector Button Start",
  render: () => (
    <div className="w-[260px]">
      <DatePicker label="Date" selectorButtonPlacement="start" />
    </div>
  ),
};

// ─── DateRangePicker ──────────────────────────────────────────────────────────

export const DateRange: Story = {
  name: "Date Range Picker",
  render: () => (
    <div className="w-[360px]">
      <DateRangePicker label="Trip dates" />
    </div>
  ),
};

export const DateRangeBordered: Story = {
  name: "Date Range — Bordered",
  render: () => (
    <div className="w-[360px]">
      <DateRangePicker label="Period" variant="bordered" />
    </div>
  ),
};

export const DateRangeWithVisibleMonths: Story = {
  name: "Date Range — Two Months",
  render: () => (
    <div className="w-[360px]">
      <DateRangePicker label="Stay" visibleMonths={2} />
    </div>
  ),
};
