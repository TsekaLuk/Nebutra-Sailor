/**
 * Nebutra Component Registry
 *
 * Single source of truth for component lifecycle status, ownership,
 * and planned usage across the monorepo.
 *
 * Rules:
 * - Every component exposed by @nebutra/design-system MUST have an entry here.
 * - `usedIn: []` is valid — it means "allocated; see entry comments for target feature".
 *   Do NOT delete components just because usedIn is empty.
 * - Update `usedIn` when a feature starts consuming the component.
 * - Update `status` when lifecycle changes (beta → stable, stable → deprecated).
 */

import type { ComponentRegistry } from "./index";

// =============================================================================
// @nebutra/design-system — Primer re-exports (always stable)
// =============================================================================

const primerComponents: ComponentRegistry = {
  // Primitives
  Button: {
    name: "Button",
    package: "@nebutra/design-system",
    source: "design-system",
    status: "stable",
    version: "1.0.0",
    accessibilityLevel: "AA",
    responsive: true,
    themeable: true,
    usedIn: ["apps/web (DesignSystemShell fallback UI)"],
  },
  Header: {
    name: "Header",
    package: "@nebutra/design-system",
    source: "design-system",
    status: "stable",
    version: "1.0.0",
    accessibilityLevel: "AA",
    responsive: true,
    themeable: true,
    usedIn: ["apps/web (DesignSystemShell fallback UI)"],
  },
};

// =============================================================================
// @nebutra/design-system — Custom layout wrappers
// Canonical layout primitives for apps/web dashboard pages
// (settings, billing, team, logs, etc.)
// =============================================================================

const layoutComponents: ComponentRegistry = {
  Card: {
    name: "Card",
    package: "@nebutra/design-system",
    source: "design-system",
    status: "stable",
    version: "1.0.0",
    accessibilityLevel: "AA",
    responsive: true,
    themeable: true,
    owner: "dashboard-team",
    usedIn: [],
    // Planned: apps/web — settings pages, billing cards, team member cards
  },
  Container: {
    name: "Container",
    package: "@nebutra/design-system",
    source: "design-system",
    status: "stable",
    version: "1.0.0",
    accessibilityLevel: "AA",
    responsive: true,
    themeable: false,
    owner: "dashboard-team",
    usedIn: [],
    // Planned: apps/web — all page-level max-width centering
  },
  Section: {
    name: "Section",
    package: "@nebutra/design-system",
    source: "design-system",
    status: "stable",
    version: "1.0.0",
    accessibilityLevel: "AA",
    responsive: true,
    themeable: false,
    owner: "dashboard-team",
    usedIn: [],
    // Planned: apps/web — semantic page section grouping with aria-label
  },
  PageHeader: {
    name: "PageHeader",
    package: "@nebutra/design-system",
    source: "design-system",
    status: "stable",
    version: "1.0.0",
    accessibilityLevel: "AA",
    responsive: true,
    themeable: true,
    owner: "dashboard-team",
    usedIn: [],
    // Planned: apps/web — every dashboard page top: title + description + action CTA
  },
  EmptyState: {
    name: "EmptyState",
    package: "@nebutra/design-system",
    source: "design-system",
    status: "stable",
    version: "1.0.0",
    accessibilityLevel: "AA",
    responsive: true,
    themeable: true,
    owner: "dashboard-team",
    usedIn: [],
    // Planned: apps/web — projects list (0 items), logs view, team invites pending
  },
  LoadingState: {
    name: "LoadingState",
    package: "@nebutra/design-system",
    source: "design-system",
    status: "stable",
    version: "1.0.0",
    accessibilityLevel: "A",
    responsive: true,
    themeable: true,
    owner: "dashboard-team",
    usedIn: [],
    // Planned: apps/web — async data boundaries (React Suspense fallback)
  },
  ErrorState: {
    name: "ErrorState",
    package: "@nebutra/design-system",
    source: "design-system",
    status: "stable",
    version: "1.0.0",
    accessibilityLevel: "AA",
    responsive: true,
    themeable: true,
    owner: "dashboard-team",
    usedIn: [],
    // Planned: apps/web — React Error Boundary fallback, failed fetch states
  },
};

// =============================================================================
// @nebutra/ui — AI Chat feature layer (apps/web /chat route)
//   - @lobehub/ui:    chat bubbles, model selector, chat input, streaming UI
//   - @lobehub/icons: AI provider icons (OpenAI, Anthropic, Gemini, Mistral…)
//   - antd:           back-office admin components
// =============================================================================

const aiChatComponents: ComponentRegistry = {
  "LobeUI/ChatBubble": {
    name: "ChatBubble",
    package: "@nebutra/ui",
    source: "promoted",
    promotedFrom: "@lobehub/ui",
    status: "experimental",
    version: "0.1.0",
    owner: "ai-chat-team",
    usedIn: [],
    // Planned: apps/web /chat — streaming LLM response rendering
  },
  "LobeUI/ModelSelector": {
    name: "ModelSelector",
    package: "@nebutra/ui",
    source: "promoted",
    promotedFrom: "@lobehub/ui",
    status: "experimental",
    version: "0.1.0",
    owner: "ai-chat-team",
    usedIn: [],
    // Planned: apps/web /chat — switch between Claude, GPT-4, Gemini models
  },
  "LobeIcons/AIProvider": {
    name: "AIProviderIcon",
    package: "@nebutra/ui",
    source: "promoted",
    promotedFrom: "@lobehub/icons",
    status: "experimental",
    version: "0.1.0",
    owner: "ai-chat-team",
    usedIn: [],
    // Planned: apps/web /chat, landing-page model showcase section
  },
};

// =============================================================================
// Full registry export
// =============================================================================

export const componentRegistry: ComponentRegistry = {
  ...primerComponents,
  ...layoutComponents,
  ...aiChatComponents,
};

/**
 * Helper: get all components planned for a specific app.
 *
 * @example
 * getPlannedFor("apps/web") // → [Card, Container, PageHeader, ...]
 */
export function getPlannedFor(appPath: string): string[] {
  return Object.entries(componentRegistry)
    .filter(([, entry]) => entry.usedIn?.length === 0)
    .filter(([, entry]) => {
      // Check comments (we store intent as code comments above)
      // For runtime use, check if entry has owner matching the app domain
      const _ = appPath; // future: match against planned metadata
      return entry.status !== "deprecated";
    })
    .map(([name]) => name);
}

/**
 * Helper: get all components with zero current usage (usedIn empty).
 * These are not dead code — check registry comments for planned feature.
 */
export function getAllocatedComponents(): string[] {
  return Object.entries(componentRegistry)
    .filter(([, entry]) => entry.usedIn?.length === 0)
    .map(([name]) => name);
}
