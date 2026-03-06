import type { Meta, StoryObj } from "@storybook/react";
import { DateInput } from "./date-input";
import { CalendarDate, parseZonedDateTime, now } from "@internationalized/date";

const meta = {
  title: "Primitives/DateInput",
  component: DateInput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Keyboard-editable date and time input with individually editable segments. Re-exported from @heroui/date-input with full timezone and calendar system support.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Birth date",
  },
};

export const Bordered: Story = {
  args: {
    label: "Event date",
    variant: "bordered",
  },
};

export const Underlined: Story = {
  args: {
    label: "Appointment",
    variant: "underlined",
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: "Event date",
    defaultValue: new CalendarDate(2024, 4, 4),
  },
};

export const WithGranularitySecond: Story = {
  args: {
    label: "Meeting time",
    granularity: "second",
  },
};

export const WithTimezone: Story = {
  args: {
    label: "Event (LA time)",
    defaultValue: parseZonedDateTime("2024-11-07T00:45[America/Los_Angeles]"),
  },
};

export const WithCurrentTime: Story = {
  render: () => (
    <DateInput
      label="Current time"
      granularity="minute"
      defaultValue={now("UTC")}
    />
  ),
};

export const LabelOutside: Story = {
  args: {
    label: "Birth date",
    labelPlacement: "outside",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled date",
    isDisabled: true,
    defaultValue: new CalendarDate(2024, 1, 1),
  },
};

export const ReadOnly: Story = {
  args: {
    label: "Read-only date",
    isReadOnly: true,
    defaultValue: new CalendarDate(2024, 6, 15),
  },
};

export const WithDescription: Story = {
  args: {
    label: "Event date",
    description: "Select the date of your event",
  },
};

export const WithErrorMessage: Story = {
  args: {
    label: "Event date",
    isInvalid: true,
    errorMessage: "Please select a valid date",
  },
};
