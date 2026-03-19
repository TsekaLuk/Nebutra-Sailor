import type { RangeValue } from "@heroui/calendar";
import type { DateValue } from "@internationalized/date";
import type { Meta, StoryObj } from "@storybook/react";
import { startOfDay, subDays, subMonths, subWeeks } from "date-fns";
import { useState } from "react";
import { CalendarPicker } from "./calendar-picker";

const meta = {
  title: "Primitives/CalendarPicker",
  component: CalendarPicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Geist-style date range picker with preset shortcuts, multiple layout modes, and popover calendar.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CalendarPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Shared presets ───────────────────────────────────────────────────────────

const presets = {
  "last-3-days": {
    text: "Last 3 Days",
    start: startOfDay(subDays(new Date(), 3)),
    end: new Date(),
  },
  "last-7-days": {
    text: "Last 7 Days",
    start: startOfDay(subWeeks(new Date(), 1)),
    end: new Date(),
  },
  "last-14-days": {
    text: "Last 14 Days",
    start: startOfDay(subWeeks(new Date(), 2)),
    end: new Date(),
  },
  "last-month": {
    text: "Last Month",
    start: startOfDay(subMonths(new Date(), 1)),
    end: new Date(),
  },
};

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => {
    const [range, setRange] = useState<RangeValue<DateValue>>();
    return <CalendarPicker value={range} onChange={setRange} />;
  },
};

export const WithPresets: Story = {
  name: "With Presets",
  render: () => {
    const [range, setRange] = useState<RangeValue<DateValue>>();
    return <CalendarPicker value={range} onChange={setRange} presets={presets} />;
  },
};

export const WithPresetsAndClear: Story = {
  name: "With Presets + Clear",
  render: () => {
    const [range, setRange] = useState<RangeValue<DateValue>>();
    return <CalendarPicker value={range} onChange={setRange} presets={presets} allowClear />;
  },
};

export const Compact: Story = {
  name: "Compact Layout",
  render: () => {
    const [range, setRange] = useState<RangeValue<DateValue>>();
    return <CalendarPicker value={range} onChange={setRange} presets={presets} compact />;
  },
};

export const Stacked: Story = {
  name: "Stacked Layout",
  render: () => {
    const [range, setRange] = useState<RangeValue<DateValue>>();
    return <CalendarPicker value={range} onChange={setRange} presets={presets} stacked />;
  },
};

export const HorizontalLayout: Story = {
  name: "Horizontal Layout",
  render: () => {
    const [range, setRange] = useState<RangeValue<DateValue>>();
    return <CalendarPicker value={range} onChange={setRange} horizontalLayout />;
  },
};

export const SmallSize: Story = {
  name: "Small Size",
  render: () => {
    const [range, setRange] = useState<RangeValue<DateValue>>();
    return (
      <CalendarPicker value={range} onChange={setRange} presets={presets} size="small" allowClear />
    );
  },
};

export const WithDefaultPreset: Story = {
  name: "Default Preset Selected",
  render: () => {
    const [range, setRange] = useState<RangeValue<DateValue>>();
    return (
      <CalendarPicker value={range} onChange={setRange} presets={presets} presetIndex={2} stacked />
    );
  },
};

export const WithMinMax: Story = {
  name: "With Min/Max Dates",
  render: () => {
    const [range, setRange] = useState<RangeValue<DateValue>>();
    const now = new Date();
    const minDate = new Date(now.getFullYear(), now.getMonth() - 2, now.getDate());
    const maxDate = new Date(now.getFullYear(), now.getMonth() + 2, now.getDate());

    return (
      <CalendarPicker
        value={range}
        onChange={setRange}
        minValue={minDate}
        maxValue={maxDate}
        allowClear
      />
    );
  },
};
