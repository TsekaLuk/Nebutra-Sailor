import { resolveConfig, getFeatureEnvVars } from "./index";
import type { NebutraConfig } from "./index";

async function main() {
  const configModule = (await import("../../../nebutra.config")) as {
    default: NebutraConfig;
  };
  const config = configModule.default;
  const resolved = resolveConfig(config);
  const envVars = getFeatureEnvVars(resolved);

  const lines = Object.entries(envVars)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`);

  process.stdout.write(lines.join("\n") + "\n");
}

main().catch((err) => {
  process.stderr.write(
    `Error: ${err instanceof Error ? err.message : String(err)}\n`,
  );
  process.exit(1);
});
