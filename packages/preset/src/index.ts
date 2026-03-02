// @nebutra/preset — public API

// Config schema and types
export {
  NebutraConfigSchema,
  PresetId,
  AppId,
  FeatureId,
  ThemeId,
  defineConfig,
  resolveConfig,
  type NebutraConfig,
  type ResolvedConfig,
  type PresetDefinition,
} from "./config";

// Presets
export { presets, getPreset } from "./presets";

// Feature map
export {
  getFeatureEnvVars,
  getActiveApps,
  getActivePackages,
} from "./feature-map";
