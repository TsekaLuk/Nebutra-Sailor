import { execSync } from "node:child_process";
import * as p from "@clack/prompts";
import pc from "picocolors";

interface AddOptions {
  "21st"?: string;
  v0?: string;
}

export async function addCommand(components: string[], options: AddOptions) {
  p.intro(pc.bgCyan(pc.black(" nebutra add ")));

  if (components.length === 0 && !options["21st"] && !options.v0) {
    p.log.warn("No components specified.");
    p.outro("Operation aborted.");
    process.exit(0);
  }

  if (options["21st"]) {
    p.log.info(
      pc.cyan(`\nInvoking shadcn integration for 21st.dev component: ${options["21st"]}...`),
    );
    try {
      const componentId = options["21st"];
      const resolvedUrl = componentId.startsWith("http")
        ? componentId
        : `https://21st.dev/r/${componentId}`;

      const addCmd = `pnpm dlx shadcn@latest add "${resolvedUrl}"`;
      execSync(addCmd, { stdio: "inherit" });
      process.exit(0);
    } catch (error: unknown) {
      if (error instanceof Error && error.message) {
      }
      process.exit(1);
    }
  }

  if (options.v0) {
    p.log.info(pc.cyan(`\nInvoking shadcn integration for v0 URL: ${options.v0}...`));
    try {
      const addCmd = `pnpm dlx shadcn@latest add "${options.v0}"`;
      execSync(addCmd, { stdio: "inherit" });
      process.exit(0);
    } catch (error: unknown) {
      if (error instanceof Error && error.message) {
      }
      process.exit(1);
    }
  }
  try {
    // Instead of a proprietary registry, Nebutra leverages HeroUI for base components.
    // If they want raw Tailwind/Radix, they use --21st or --v0.
    // Otherwise, standard `add` implies adding to the core design system (HeroUI).
    for (const component of components) {
      const addCmd = `npx heroui-cli@latest add ${component}`;
      execSync(addCmd, { stdio: "inherit" });
    }
    process.exit(0);
  } catch (error: unknown) {
    if (error instanceof Error && error.message) {
    }
    process.exit(1);
  }
}
