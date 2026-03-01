import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxGroup, Checkbox } from "./checkbox-group";

const meta = {
  title: "Primitives/CheckboxGroup",
  component: CheckboxGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "HeroUI CheckboxGroup wrapper for multi-select checkbox lists. Supports vertical/horizontal orientation, validation, colors, and sizes.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <CheckboxGroup label="Select features">
      <Checkbox value="analytics">Analytics</Checkbox>
      <Checkbox value="notifications">Notifications</Checkbox>
      <Checkbox value="integrations">Integrations</Checkbox>
      <Checkbox value="api-access">API Access</Checkbox>
    </CheckboxGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <CheckboxGroup label="Select options" orientation="horizontal">
      <Checkbox value="a">Option A</Checkbox>
      <Checkbox value="b">Option B</Checkbox>
      <Checkbox value="c">Option C</Checkbox>
    </CheckboxGroup>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <CheckboxGroup
      label="Notification preferences"
      description="Choose which notifications you want to receive."
    >
      <Checkbox value="email">Email notifications</Checkbox>
      <Checkbox value="push">Push notifications</Checkbox>
      <Checkbox value="sms">SMS alerts</Checkbox>
    </CheckboxGroup>
  ),
};

export const WithValidation: Story = {
  render: () => (
    <CheckboxGroup
      label="Required selection"
      isRequired
      isInvalid
      errorMessage="Please select at least one option."
    >
      <Checkbox value="terms">Accept terms & conditions</Checkbox>
      <Checkbox value="privacy">Accept privacy policy</Checkbox>
    </CheckboxGroup>
  ),
};

export const Colored: Story = {
  render: () => (
    <CheckboxGroup label="Color variants">
      <Checkbox value="default" color="default">
        Default
      </Checkbox>
      <Checkbox value="primary" color="primary">
        Primary
      </Checkbox>
      <Checkbox value="success" color="success">
        Success
      </Checkbox>
      <Checkbox value="warning" color="warning">
        Warning
      </Checkbox>
      <Checkbox value="danger" color="danger">
        Danger
      </Checkbox>
    </CheckboxGroup>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <CheckboxGroup label="Plan features">
      <Checkbox value="storage">100GB Storage</Checkbox>
      <Checkbox value="users">Unlimited users</Checkbox>
      <Checkbox value="sso" isDisabled>
        SSO (Enterprise only)
      </Checkbox>
      <Checkbox value="sla" isDisabled>
        SLA guarantee (Enterprise only)
      </Checkbox>
    </CheckboxGroup>
  ),
};
