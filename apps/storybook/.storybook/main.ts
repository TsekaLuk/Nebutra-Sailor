import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: [
    // Stories co-located with custom-ui components
    "../../../packages/custom-ui/src/**/*.stories.@(ts|tsx)",
    // Local stories for docs/layout demos
    "../src/stories/**/*.stories.@(ts|tsx)",
  ],

  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-a11y"),
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite") as "@storybook/react-vite",
    options: {},
  },

  docs: {
    autodocs: "tag",
  },

  viteFinal: async (
    config: Record<string, unknown> & {
      resolve?: { alias?: Record<string, string> };
    },
  ) => {
    config.resolve ??= {};
    config.resolve.alias = {
      ...config.resolve.alias,
      // Allow stories to import from the package source directly
      "@nebutra/custom-ui/src": join(
        __dirname,
        "../../../packages/custom-ui/src",
      ),
    };
    return config;
  },
};

export default config;
