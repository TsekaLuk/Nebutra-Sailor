/**
 * Governance Types and Utilities
 *
 * Types and helpers for component lifecycle management,
 * validation, and design system governance.
 */

// ============================================
// Component Lifecycle Types
// ============================================

/**
 * Source of a component
 */
export type ComponentSource =
  | "design-system" // From @nebutra/design-system (SSOT)
  | "custom" // Built in-house for @nebutra/custom-ui
  | "promoted" // Promoted from external library
  | "experimental"; // Still experimental, from @nebutra/21st or external

/**
 * Component lifecycle status
 */
export type ComponentStatus =
  | "stable" // Production-ready, fully supported
  | "beta" // Testing in limited production contexts
  | "deprecated" // Scheduled for removal
  | "experimental"; // Not for production use

/**
 * WCAG accessibility level
 */
export type AccessibilityLevel = "A" | "AA" | "AAA";

/**
 * Component metadata for registry and documentation
 */
export interface ComponentMeta {
  /** Component name */
  name: string;
  /** Source of the component */
  source: ComponentSource;
  /** Lifecycle status */
  status: ComponentStatus;
  /** Semantic version */
  version: string;
  /** Original library if promoted */
  promotedFrom?: string;
  /** Reason if deprecated */
  deprecatedReason?: string;
  /** Replacement component if deprecated */
  replacedBy?: string;
  /** WCAG conformance level */
  accessibilityLevel?: AccessibilityLevel;
  /** Supports responsive design */
  responsive?: boolean;
  /** Supports theming */
  themeable?: boolean;
  /** Date of last review (ISO string) */
  lastReviewed?: string;
  /** Owner team or person */
  owner?: string;
}

// ============================================
// Validation Utilities
// ============================================

/**
 * Check if a component status allows production use
 */
export function isProductionReady(status: ComponentStatus): boolean {
  return status === "stable" || status === "beta";
}

/**
 * Check if a component should show deprecation warning
 */
export function shouldWarnDeprecation(meta: ComponentMeta): boolean {
  return meta.status === "deprecated";
}

/**
 * Generate deprecation warning message
 */
export function getDeprecationMessage(meta: ComponentMeta): string | null {
  if (meta.status !== "deprecated") return null;

  let message = `${meta.name} is deprecated.`;

  if (meta.deprecatedReason) {
    message += ` Reason: ${meta.deprecatedReason}`;
  }

  if (meta.replacedBy) {
    message += ` Use ${meta.replacedBy} instead.`;
  }

  return message;
}

// ============================================
// Registry Helpers
// ============================================

/**
 * Registry entry with usage tracking
 */
export interface RegistryEntry extends ComponentMeta {
  /** Package containing the component */
  package: string;
  /** List of apps/features using this component */
  usedIn?: string[];
}

/**
 * Component registry type
 */
export type ComponentRegistry = Record<string, RegistryEntry>;

/**
 * Filter registry by status
 */
export function filterByStatus(
  registry: ComponentRegistry,
  status: ComponentStatus
): RegistryEntry[] {
  return Object.values(registry).filter((entry) => entry.status === status);
}

/**
 * Filter registry by source
 */
export function filterBySource(
  registry: ComponentRegistry,
  source: ComponentSource
): RegistryEntry[] {
  return Object.values(registry).filter((entry) => entry.source === source);
}

/**
 * Get all deprecated components
 */
export function getDeprecatedComponents(
  registry: ComponentRegistry
): RegistryEntry[] {
  return filterByStatus(registry, "deprecated");
}

/**
 * Get all experimental components
 */
export function getExperimentalComponents(
  registry: ComponentRegistry
): RegistryEntry[] {
  return filterByStatus(registry, "experimental");
}

// ============================================
// Development Helpers
// ============================================

/**
 * Log deprecation warning in development
 */
export function warnIfDeprecated(
  meta: ComponentMeta,
  componentName?: string
): void {
  if (process.env.NODE_ENV === "development" && meta.status === "deprecated") {
    const message = getDeprecationMessage(meta);
    if (message) {
      console.warn(`[Design System] ${message}`);
    }
  }
}

/**
 * Log experimental warning in development
 */
export function warnIfExperimental(
  meta: ComponentMeta,
  componentName?: string
): void {
  if (
    process.env.NODE_ENV === "development" &&
    meta.status === "experimental"
  ) {
    console.warn(
      `[Design System] ${meta.name || componentName} is experimental and not recommended for production use.`
    );
  }
}

// ============================================
// Exports
// ============================================

export const governance = {
  isProductionReady,
  shouldWarnDeprecation,
  getDeprecationMessage,
  filterByStatus,
  filterBySource,
  getDeprecatedComponents,
  getExperimentalComponents,
  warnIfDeprecated,
  warnIfExperimental,
};
