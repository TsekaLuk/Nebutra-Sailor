import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox-group";

const meta = {
  title: "Primitives/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A control that toggles between checked and unchecked, with optional indeterminate state. Geist Design System implementation via 21st.dev.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Default ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox checked={checked} onChange={(v) => setChecked(v)}>
        Option 1
      </Checkbox>
    );
  },
};

// ─── Disabled ─────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox disabled>Disabled</Checkbox>
      <Checkbox checked disabled>
        Disabled Checked
      </Checkbox>
      <Checkbox disabled indeterminate>
        Disabled Indeterminate
      </Checkbox>
    </div>
  ),
};

// ─── Indeterminate ────────────────────────────────────────────────────────────

export const Indeterminate: Story = {
  render: () => <Checkbox indeterminate>Option 1</Checkbox>,
};

// ─── In Form ──────────────────────────────────────────────────────────────────

export const InForm: Story = {
  name: "In form",
  render: () => {
    const [terms, setTerms] = useState(false);
    const [newsletter, setNewsletter] = useState(true);
    return (
      <div className="flex flex-col gap-4 rounded-lg border p-4">
        <h3 className="text-sm font-medium">Settings</h3>
        <Checkbox checked={terms} onChange={setTerms}>
          Accept terms and conditions
        </Checkbox>
        <Checkbox checked={newsletter} onChange={setNewsletter}>
          Subscribe to newsletter
        </Checkbox>
        <Checkbox disabled>SMS alerts (coming soon)</Checkbox>
      </div>
    );
  },
};
