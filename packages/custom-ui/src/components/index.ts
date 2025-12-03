/**
 * Custom Components
 *
 * Brand-specific components that extend or wrap design-system primitives.
 * Components here are either:
 * - Promoted from external libraries (HeroUI/MagicUI, HeroUI, etc.) after review
 * - Domain-specific implementations (commerce, Web3, multi-tenant)
 * - Complex/composite components built from design-system primitives
 */

// Re-export promoted components
// export { PromotedButton } from "./PromotedButton";

// Domain-specific components
// export { TenantSwitcher } from "./TenantSwitcher";
// export { PricingCard } from "./PricingCard";

// Empty State
export {
  EmptyState,
  type EmptyStateProps,
  type EmptyStateAction,
} from "./empty-state";

// Onboarding Checklist
export {
  OnboardingChecklist,
  type OnboardingChecklistProps,
  type ChecklistItem,
} from "./onboarding-checklist";

// Team Chat
export {
  TeamChat,
  type TeamChatProps,
  type ChatMessage,
  type ChatSender,
  type ChatReaction,
} from "./team-chat";
