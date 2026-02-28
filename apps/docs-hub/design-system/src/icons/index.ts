/**
 * Icon Exports
 *
 * Re-export Primer Octicons for consistent iconography.
 */

// Re-export all Octicons
export * from "@primer/octicons-react";

// Common icon aliases
export {
  AlertIcon as IconAlert,
  CheckIcon as IconCheck,
  ChevronDownIcon as IconChevronDown,
  ChevronRightIcon as IconChevronRight,
  GearIcon as IconSettings,
  HomeIcon as IconHome,
  PersonIcon as IconUser,
  PlusIcon as IconPlus,
  SearchIcon as IconSearch,
  XIcon as IconClose,
} from "@primer/octicons-react";

// Icon sizes
export const iconSizes = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
} as const;

export type IconSize = keyof typeof iconSizes;
