/**
 * UI Primitives
 *
 * Low-level layout, spacing, and accessibility primitives,
 * plus Radix-based UI components (Accordion, Avatar, Badge, Button, etc.).
 *
 * Note: For typography, use the dedicated `typography/` module instead.
 */

export * from "./accessibility";
// ─── Radix-based UI components ───────────────────────────────────────────────
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  type AccordionSize,
  AccordionTrigger,
} from "./accordion";
export * from "./animated-gradient-text";
export {
  Avatar,
  AvatarFallback,
  type AvatarFallbackProps,
  AvatarGroup,
  type AvatarGroupItem,
  type AvatarGroupProps,
  AvatarImage,
  type AvatarProps,
} from "./avatar";
export {
  AvatarWithIcon,
  type AvatarWithIconProps,
  BitbucketAvatar,
  type BitbucketAvatarProps,
  DiceBearAvatar,
  type DiceBearAvatarProps,
  type DiceBearStyle,
  GitHubAvatar,
  type GitHubAvatarProps,
  GitLabAvatar,
  type GitLabAvatarProps,
} from "./avatar-extended";
export * from "./avatar-smart-group";
export { Badge, type BadgeProps, badgeVariants } from "./badge";
export * from "./box";
export {
  Button,
  ButtonLink,
  type ButtonLinkProps,
  type ButtonProps,
  buttonVariants,
} from "./button";
export {
  Checkbox,
  CheckboxGroup,
  type CheckboxGroupProps,
  type CheckboxProps,
} from "./checkbox-group";
export * from "./choicebox";
export {
  Combobox,
  ComboboxEmpty,
  ComboboxGroupSub,
  ComboboxInput,
  type ComboboxOption,
  ComboboxOptionItem,
  type ComboboxProps,
  ComboboxRoot,
  ComboboxSeparator,
} from "./combobox";
export * from "./date-input";
export * from "./description";
export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
export * from "./dithering-shader";
export * from "./dropdown-menu";
export * from "./expanding-textarea";
export * from "./field";
export * from "./flex";
export * from "./form";
export * from "./geist-tooltip";
export * from "./grid-system";
export * from "./heading";
export { Input, type InputProps } from "./input";
export { Label, type LabelProps, labelVariants } from "./label";
export * from "./layout";
export * from "./magic-card";
export * from "./multiple-selector";
export { RadioGroup, RadioGroupItem } from "./radio-group";
export * from "./radio-group-card";
export * from "./radio-group-stacked";
export * from "./responsive";

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./select";
export { Separator } from "./separator";
export * from "./spacing";
export * from "./stack";
export { Switch, type SwitchProps } from "./switch";
export {
  Tabs,
  TabsContent,
  type TabsContentProps,
  TabsList,
  type TabsListProps,
  type TabsProps,
  TabsTrigger,
  type TabsTriggerProps,
  tabsContentVariants,
  tabsListVariants,
  tabsTriggerVariants,
} from "./tabs";
export * from "./text";
export * from "./toggle";
export {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
// Legacy typography (deprecated - use typography/ module)
export { type TextStyle, textStyles } from "./typography";

// Removed: export * from "./geist-tooltip";

// Phase 9: Specialty Components
export * from "./agent-plan";
export * from "./alert";
export * from "./alert-dialog";
// Phase 10: Missing root exports
export * from "./animate-in";
export * from "./animated-beam";
export * from "./animated-circular-progress-bar";
export * from "./animated-gradient-text";
export * from "./animated-group";
export * from "./animated-hike-card";
export * from "./animated-list";
export * from "./animated-shiny-text";
export * from "./announcement";
export * from "./apple-liquid-glass-switcher";
export * from "./aspect-ratio";
export * from "./assisted-password-confirmation";
export * from "./aurora-text";
export * from "./avatar-circles";
export * from "./awards";
export * from "./badge-1";
export * from "./base-badge";
export * from "./base-button";
export * from "./bento-grid";
export * from "./book";
export * from "./border-trail";
export * from "./breadcrumb";
export * from "./browser-mockup";
export * from "./bubble-text";
export * from "./calendar";
export * from "./calendar-picker";
export * from "./canvas-reveal-effect";
export * from "./card";
export * from "./card-spotlight";
export * from "./carousel";
export * from "./chart";
export * from "./code-block";
export * from "./collapsible";
export * from "./color-badge";
export * from "./command";
export * from "./command-menu";
export * from "./confetti";
export * from "./context-card";
export * from "./context-menu";
export * from "./date-picker";
export * from "./display-cards";
export * from "./dithering-background";
export * from "./dot-pattern";
export * from "./dotted-map";
export * from "./dotted-world-map";
export * from "./drawer";
export * from "./empty-state";
export * from "./enable-2fa-card";
export * from "./entity";
export * from "./error-message";
export * from "./expandable-tabs";
export * from "./fallback-card";
export * from "./feature-arrow-card";
export * from "./feature-card";
export * from "./feature-check-item";
export * from "./feature-icon-item";
export * from "./feedback";
export * from "./flickering-grid";
export * from "./gauge";
// Remnant Phase 6: Animated & Magic UI Part 2
export * from "./gauge";
export * from "./github-calendar";
export * from "./github-inline-diff";
export * from "./globe";
export * from "./glowing-effect";
export * from "./gradient-animated-text";
export * from "./grain-gradient-background";
export * from "./grid-feature-card";
export * from "./grid-pattern-card";
export * from "./hero-card";
export * from "./hero-popover";
export * from "./hero-select";
export * from "./hero-skeleton";
export * from "./hex-grid";
export * from "./highlighter";
export * from "./hover-card";
export * from "./infinite-slider";
export * from "./input-otp";
export * from "./interactive-card";
export * from "./interactive-frosted-glass-card";
// Phase 8: Advanced Media & Mockups
export * from "./iphone-mockup";
export * from "./kbd";
export * from "./light-rays";
export * from "./line-shadow-text";
export * from "./loader";
export * from "./loading-dots";
export * from "./macbook-pro";
export * from "./magic-card";
export * from "./material";
export * from "./menubar";
export * from "./mesh-gradient-bg";
export * from "./navigation-menu";
export * from "./neuro-noise-bg";
export * from "./noise-pattern-card";
export * from "./notification-message-list";
export * from "./pagination";
export * from "./popover";
export * from "./pricing-card";
export * from "./progress";
export * from "./progressive-blur";
export * from "./reaction-chip";
export * from "./resizable";
export * from "./safari";
export * from "./scroll-velocity";
export * from "./sheet";
export * from "./shine-border";
export * from "./skeleton";
export * from "./slider";
export * from "./slider-number-flow";
export * from "./snippet";
export * from "./snippet-status";
export * from "./spinner";
export * from "./stars-canvas";
export * from "./status-badge";
export * from "./table";
export * from "./terminal";
export * from "./text-loop";
export * from "./text-scramble";
export * from "./text-shimmer";
export * from "./textarea";
export * from "./theme-switcher";
export * from "./toggle-group";
export * from "./tree";
export * from "./video-player";
export * from "./video-text";
export * from "./warp-background";
export * from "./wave-animation";
export * from "./waves-bg";
export * from "./word-fade-in";
export * from "./x-post-card";
