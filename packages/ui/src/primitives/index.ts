/**
 * UI Primitives
 *
 * Low-level layout, spacing, and accessibility primitives,
 * plus Radix-based UI components (Accordion, Avatar, Badge, Button, etc.).
 *
 * Note: For typography, use the dedicated `typography/` module instead.
 */

export * from "./layout";
export * from "./spacing";
export * from "./accessibility";
export * from "./responsive";
export * from "./dropdown-menu";

// Legacy typography (deprecated - use typography/ module)
export { textStyles, type TextStyle } from "./typography";

// ─── Radix-based UI components ───────────────────────────────────────────────
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  type AccordionSize,
} from "./accordion";

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  type AvatarProps,
  type AvatarFallbackProps,
  type AvatarGroupProps,
  type AvatarGroupItem,
} from "./avatar";

export {
  GitHubAvatar,
  GitLabAvatar,
  BitbucketAvatar,
  AvatarWithIcon,
  DiceBearAvatar,
  type GitHubAvatarProps,
  type GitLabAvatarProps,
  type BitbucketAvatarProps,
  type AvatarWithIconProps,
  type DiceBearAvatarProps,
  type DiceBearStyle,
} from "./avatar-extended";

export { Badge, badgeVariants, type BadgeProps } from "./badge";

export {
  Button,
  ButtonLink,
  buttonVariants,
  type ButtonProps,
  type ButtonLinkProps,
} from "./button";

export * from "./animated-gradient-text";

export {
  Checkbox,
  CheckboxGroup,
  type CheckboxProps,
  type CheckboxGroupProps,
} from "./checkbox-group";

export { Combobox, type ComboboxProps, type ComboboxOption } from "./combobox";

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./dialog";

export { Input, type InputProps } from "./input";
export * from "./dithering-shader";
export * from "./magic-card";

export { Label, labelVariants, type LabelProps } from "./label";

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from "./select";

export { Switch, type SwitchProps } from "./switch";

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabsListVariants,
  tabsTriggerVariants,
  tabsContentVariants,
  type TabsProps,
  type TabsListProps,
  type TabsTriggerProps,
  type TabsContentProps,
} from "./tabs";

export { Separator } from "./separator";

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./tooltip";

export * from "./animated-beam";
export * from "./animated-list";
export * from "./flickering-grid";
export * from "./card";
export * from "./carousel";
export * from "./collapsible";
export * from "./command";
export * from "./context-menu";
export * from "./date-picker";
export * from "./drawer";
export * from "./hover-card";
export * from "./menu";
export * from "./navigation-menu";
export * from "./popover";
export * from "./progress";
export * from "./sheet";
export * from "./skeleton";
export * from "./slider";
export * from "./textarea";
export * from "./hex-grid";
export * from "./warp-background";
export * from "./stars-canvas";
export * from "./theme-switcher";
export * from "./apple-liquid-glass-switcher";
export * from "./interactive-frosted-glass-card";
