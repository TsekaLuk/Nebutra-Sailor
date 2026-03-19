import type { Preview, StoryContext, StoryFn } from "@storybook/react";
import "@nebutra/tokens/styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#020617" },
        { name: "neutral", value: "#f8fafc" },
      ],
    },
    docs: {
      theme: undefined,
    },
    a11y: {
      // Axe accessibility rules configuration
      config: {
        rules: [
          {
            // Allow color-contrast issues to be warnings, not failures
            id: "color-contrast",
            enabled: true,
          },
        ],
      },
    },
  },

  globalTypes: {
    theme: {
      description: "Light / Dark theme",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story: StoryFn, context: StoryContext) => {
      const theme = context.globals["theme"] as string;
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("dark", theme === "dark");
      }
      return Story(context.args, context);
    },
  ],
};

export default preview;
