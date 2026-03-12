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

export * from "./box";
export * from "./flex";
export * from "./grid-system";
export * from "./stack";

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

export * from "./avatar-smart-group";

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

export {
  Combobox,
  ComboboxRoot,
  ComboboxInput,
  ComboboxOptionItem,
  ComboboxEmpty,
  ComboboxGroupSub,
  ComboboxSeparator,
  type ComboboxProps,
  type ComboboxOption
} from "./combobox";

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

export * from "./choicebox";
export * from "./date-input";
export * from "./expanding-textarea";
export * from "./field";
export * from "./form";
export * from "./multiple-selector";
export * from "./radio-group-card";
export * from "./radio-group-stacked";

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

export { RadioGroup, RadioGroupItem } from "./radio-group";

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
export * from "./heading";
export * from "./text";
export * from "./description";

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./tooltip";
export * from "./shugar-tooltip";

export * from "./alert";
export * from "./alert-dialog";
export * from "./empty-state";
export * from "./error-message";
export * from "./status-badge";
export * from "./feedback";
export * from "./snippet-status";
export * from "./snippet";
export * from "./notification-message-list";
export * from "./gauge";
export * from "./loader";
export * from "./spinner";
export * from "./announcement";
export * from "./reaction-chip";

export * from "./interactive-card";
export * from "./feature-card";
export * from "./hero-card";
export * from "./pricing-card";
export * from "./expandable-tabs";
export * from "./context-card";
export * from "./animated-beam";
export * from "./animated-gradient-text";
export * from "./animated-group";
export * from "./animated-list";
export * from "./animated-shiny-text";
export * from "./magic-card";
export * from "./aurora-text";
export * from "./avatar-circles";
export * from "./bento-grid";
export * from "./border-trail";
export * from "./canvas-reveal-effect";
export * from "./card-spotlight";
export * from "./bubble-text";
export * from "./gradient-animated-text";
export * from "./line-shadow-text";
export * from "./text-loop";
export * from "./text-scramble";
export * from "./text-shimmer";
export * from "./word-fade-in";

// Remnant Phase 6: Animated & Magic UI Part 2
export * from "./gauge";
export * from "./globe";
export * from "./glowing-effect";
export * from "./shine-border";
export * from "./dot-pattern";
export * from "./confetti";

// Phase 8: Advanced Media & Mockups
export * from "./iphone-mockup";
export * from "./macbook-pro";
export * from "./safari";
export * from "./terminal";
export * from "./video-player";
export * from "./video-text";
export * from "./browser-mockup";

export * from "./aspect-ratio";
export * from "./calendar";
export * from "./flickering-grid";
export * from "./card";
export * from "./carousel";
export * from "./collapsible";
export * from "./command";
export * from "./command-menu";
export * from "./context-menu";
export * from "./date-picker";
export * from "./drawer";
export * from "./hover-card";
export * from "./input-otp";
export * from "./menubar";

export * from "./navigation-menu";
export * from "./popover";
export * from "./progress";
export * from "./resizable";
export * from "./sheet";
export * from "./skeleton";
export * from "./slider";
export * from "./toggle-group";
export * from "./pagination";
export * from "./slider-number-flow";
export * from "./table";
export * from "./breadcrumb";
export * from "./textarea";
export * from "./hex-grid";
export * from "./warp-background";
export * from "./stars-canvas";
export * from "./animated-circular-progress-bar";
export * from "./theme-switcher";
export * from "./apple-liquid-glass-switcher";
export * from "./interactive-frosted-glass-card";

// Phase 9: Specialty Components
export * from "./agent-plan";
export * from "./awards";
export * from "./dotted-world-map";
export * from "./feature-arrow-card";
export * from "./feature-check-item";
export * from "./feature-icon-item";
export * from "./grain-gradient-background";
export * from "./grid-feature-card";
export * from "./grid-pattern-card";
export * from "./hero-popover";
export * from "./hero-select";
export * from "./hero-skeleton";
export * from "./animated-hike-card";
export * from "./assisted-password-confirmation";
export * from "./book";
export * from "./calendar-picker";
export * from "./code-block";
export * from "./color-badge";
export * from "./display-cards";
export * from "./dithering-background";
export * from "./dotted-map";
export * from "./entity";
export * from "./github-calendar";
export * from "./github-inline-diff";
export * from "./highlighter";
export * from "./infinite-slider";
export * from "./light-rays";
export * from "./material";
export * from "./noise-pattern-card";
export * from "./progressive-blur";
export * from "./scroll-velocity";
export * from "./tree";
export * from "./wave-animation";
export * from "./x-post-card";
export * from "./base-badge";
export * from "./base-button";
export * from "./badge-1";
