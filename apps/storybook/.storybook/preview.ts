import type { Preview, StoryFn, StoryContext } from "@storybook/react";
import "@nebutra/custom-ui/styles/globals.css";

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
      theme: undefined, // use storybook default; we style via globals.css
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
      // Apply dark class to the root html element so CSS variables switch correctly
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("dark", theme === "dark");
      }
      return Story();
    },
  ],
};

export default preview;
