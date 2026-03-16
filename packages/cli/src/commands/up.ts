import { Command } from "commander";
import * as p from "@clack/prompts";
import pc from "picocolors";
import { execSync, spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

export const upCommand = new Command("up")
  .description("Bootstraps the local Nebutra Backend-as-a-Service environment (e.g. Supabase)")
  .action(async () => {
    p.intro(pc.bgMagenta(pc.black(" nebutra up ")));
    p.log.info("Checking local backend dependencies...");

    try {
      // Find the absolute path to the skill script shipped within @nebutra/cli
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      // Depending on tsup output, this resolves relative to dist/index.js mapping back to the root package folder
      const skillScript = path.resolve(__dirname, "../scripts/supabase-skill.sh");

      if (!fs.existsSync(skillScript)) {
        p.log.warn(`Supabase Skill missing natively, falling back to basic npx supabase start...`);
        execSync("npx supabase start", { stdio: "inherit" });
      } else {
        p.log.info(`Executing Nebutra Supabase SKILL initialization...`);
        // execute the skill macro via bash
        const child = spawn("bash", [skillScript], { stdio: "inherit" });

        await new Promise<void>((resolve, reject) => {
          child.on("close", (code) => {
            if (code === 0) resolve();
            else reject(new Error(`SKILL exited with code ${code}`));
          });
          child.on("error", reject);
        });
      }

      p.outro(pc.green("Backend cluster initialized. Ready for development."));
    } catch (error: unknown) {
      p.log.error(pc.red("Failed to bootstrap backend environment."));
      if (error instanceof Error && error.message) p.log.error(error.message);
      p.outro("Ensure Docker Desktop is running before launching `nebutra up`.");
      process.exit(1);
    }
  });
