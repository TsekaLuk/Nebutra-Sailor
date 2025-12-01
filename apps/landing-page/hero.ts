import { heroui } from "@heroui/react";

/**
 * HeroUI Tailwind CSS v4 configuration
 * @see https://heroui.com/docs/guide/installation
 */
export const heroConfig = heroui({
  // Add HeroUI theme customization here
  themes: {
    light: {
      colors: {
        // Customize light theme colors
        primary: {
          DEFAULT: "#0969da",
          foreground: "#ffffff",
        },
      },
    },
    dark: {
      colors: {
        // Customize dark theme colors
        primary: {
          DEFAULT: "#58a6ff",
          foreground: "#ffffff",
        },
      },
    },
  },
});

export default heroConfig;
