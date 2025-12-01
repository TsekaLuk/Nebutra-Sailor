/**
 * Component Exports
 *
 * Re-export Primer React components and custom wrappers.
 * Use these instead of importing directly from @primer/react
 * to ensure consistent theming and customization.
 */

// ============================================
// Primer React - Core Components
// ============================================

// Layout
export {
  PageLayout,
  SplitPageLayout,
  Stack,
} from "@primer/react";

// Typography
export {
  Text,
  Heading,
  Label,
  LabelGroup,
  Truncate,
} from "@primer/react";

// Buttons
export {
  Button,
  IconButton,
  ButtonGroup,
  LinkButton,
} from "@primer/react";

// Form Controls
export {
  TextInput,
  TextInputWithTokens,
  Textarea,
  Select,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  FormControl,
  ToggleSwitch,
} from "@primer/react";

// Navigation
export {
  ActionMenu,
  ActionList,
  NavList,
  TreeView,
  UnderlineNav,
  Breadcrumbs,
  Pagination,
  Header,
} from "@primer/react";

// Data Display
export {
  Avatar,
  AvatarStack,
  CounterLabel,
  Token,
  StateLabel,
  Timeline,
  RelativeTime,
} from "@primer/react";

// Feedback
export {
  Flash,
  Spinner,
  ProgressBar,
  Tooltip,
  Popover,
} from "@primer/react";

// Overlays
export {
  Dialog,
  AnchoredOverlay,
  Overlay,
} from "@primer/react";

// Data
export {
  DataTable,
  Table,
} from "@primer/react/experimental";

// ============================================
// Primer React - Provider Components
// ============================================

export {
  ThemeProvider,
  BaseStyles,
  useTheme,
} from "@primer/react";

// ============================================
// Custom Component Wrappers
// ============================================

export { DesignSystemProvider } from "./DesignSystemProvider";
export { Card, type CardProps } from "./Card";
export { Container, type ContainerProps } from "./Container";
export { Section, type SectionProps } from "./Section";
export { PageHeader, type PageHeaderProps } from "./PageHeader";
export { EmptyState, type EmptyStateProps } from "./EmptyState";
export { LoadingState, type LoadingStateProps } from "./LoadingState";
export { ErrorState, type ErrorStateProps } from "./ErrorState";
