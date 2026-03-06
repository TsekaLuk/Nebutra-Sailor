/**
 * @nebutra/ui/components
 *
 * Re-exported components from @lobehub/ui (v5)
 * Use these for AI-focused features and chat interfaces.
 *
 * Components removed in v5 that we previously re-exported:
 *   - ModelIcon, ModelTag, PluginTag — removed upstream (lobe-chat specific)
 *   - Breadcrumb, TabsNav, Slider, Switch — use Radix/HeroUI primitives instead
 *   - useTheme, useThemeMode — use @nebutra/tokens ThemeProvider instead
 */

// Chat components (moved to @lobehub/ui/chat in v5)
export {
  ChatInputArea,
  ChatItem,
  ChatList,
  MessageInput,
  MessageModal,
} from "@lobehub/ui/chat";

// Chat types (moved to @lobehub/ui/chat in v5)
export type {
  ChatItemProps,
  ChatListProps,
  ChatMessage,
} from "@lobehub/ui/chat";

// AI components
export { Avatar } from "@lobehub/ui";

// Layout
export {
  DraggablePanel,
  DraggablePanelBody,
  DraggablePanelContainer,
  DraggablePanelFooter,
  DraggablePanelHeader,
  Flexbox,
} from "@lobehub/ui";

export type { FlexboxProps } from "@lobehub/ui";

// Data Display
export { Highlighter, Image, List, Markdown, Tag, Tooltip } from "@lobehub/ui";

// Feedback
export { Alert, Modal } from "@lobehub/ui";

// Spotlight (moved to @lobehub/ui/awesome in v5)
export { Spotlight } from "@lobehub/ui/awesome";

// Input
export {
  ActionIcon,
  ActionIconGroup,
  Button,
  Checkbox,
  Input,
  SearchBar,
  Select,
  Segmented,
  TextArea,
} from "@lobehub/ui";

// Navigation
export { Menu, SideNav } from "@lobehub/ui";

// Form
export { Form, FormGroup, FormItem } from "@lobehub/ui";

// Theme
export { ThemeProvider } from "@lobehub/ui";

// Animation
export {
  AnimateIn,
  AnimateInGroup,
  type AnimateInProps,
  type AnimateInGroupProps,
} from "./animate-in";
