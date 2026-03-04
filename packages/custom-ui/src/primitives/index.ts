/**
 * Primitives — foundational UI components for all apps.
 *
 * ## Component library strategy
 *
 * This package contains two coexisting component layers:
 *
 * ### Radix UI (headless) — default choice
 * Accessible, unstyled primitives. Use these for standard UI needs:
 * - `Popover`, `Select`, `Dialog`, `Tooltip`, `DropdownMenu`, `Accordion`, `Tabs`, etc.
 * Prefer Radix when the use case is covered — they integrate cleanly with Tailwind tokens.
 *
 * ### HeroUI (hero-* prefix) — extended use cases only
 * Opinionated components with built-in animations, advanced interactions, and complex state.
 * Use **only** when the Radix equivalent lacks the required feature:
 *
 * | Hero component    | Feature absent in Radix equivalent              |
 * |-------------------|-------------------------------------------------|
 * | `HeroPopover`     | Backdrop blur/opaque, showArrow, scale trigger  |
 * | `HeroSelect`      | Multi-select with chips, virtualization, sections|
 * | `HeroCard`        | isPressable (button semantics), isBlurred, ripple|
 * | `HeroSkeleton`    | Shimmer animation (no Radix skeleton primitive)  |
 * | `HeroSwitch`      | Built-in thumb icon, color variants              |
 * | `HeroSlider`      | Range, step marks, output tooltip                |
 * | `HeroProgress`    | Striped, animated, indeterminate variant          |
 * | `HeroCheckboxGroup`| Selection with descriptions, per-item colors   |
 * | `Calendar`, `DatePicker`, `DateInput` | No Radix equivalent           |
 *
 * Do NOT add new HeroUI wrappers if a Radix primitive can handle the case.
 */

export {
  Button,
  ButtonLink,
  buttonVariants,
  type ButtonProps,
  type ButtonLinkProps,
} from "./button";
export { Input, type InputProps } from "./input";
export { Textarea, type TextareaProps } from "./textarea";
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  type AccordionSize,
} from "./accordion";
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./card";
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
export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./tooltip";
export {
  ExpandableTabs,
  type ExpandableTabsProps,
  type TabItem,
} from "./expandable-tabs";
export { ShineBorder, type ShineBorderProps } from "./shine-border";
export { GlowingEffect, type GlowingEffectProps } from "./glowing-effect";
export { AnimatedGroup, type AnimatedGroupProps } from "./animated-group";
export { InfiniteSlider, type InfiniteSliderProps } from "./infinite-slider";
export {
  AssistedPasswordConfirmation,
  type AssistedPasswordConfirmationProps,
} from "./assisted-password-confirmation";
export { Badge, badgeVariants, type BadgeProps } from "./badge";
export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  useCarousel,
  type CarouselApi,
} from "./carousel";
export {
  NoisePatternCard,
  NoisePatternCardBody,
  type NoisePatternCardProps,
  type NoisePatternCardBodyProps,
} from "./noise-pattern-card";
export {
  FeatureCard,
  FeatureCardDecorator,
  FeatureCardHeader,
  FeatureCardContent,
  DualModeImage,
  CircularUI,
  type FeatureCardProps,
  type FeatureCardHeaderProps,
  type DualModeImageProps,
  type CircularUIProps,
  type CircleConfig,
} from "./feature-card";
export { BorderTrail, type BorderTrailProps } from "./border-trail";
export {
  DisplayCards,
  type DisplayCardsProps,
  type DisplayCardProps,
} from "./display-cards";
export {
  CanvasRevealEffect,
  type CanvasRevealEffectProps,
} from "./canvas-reveal-effect";
export { CardSpotlight, type CardSpotlightProps } from "./card-spotlight";
export {
  GridPatternCard,
  GridPatternCardBody,
  type GridPatternCardProps,
  type GridPatternCardBodyProps,
} from "./grid-pattern-card";
export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  useChart,
  type ChartConfig,
  type ChartContainerProps,
  type ChartTooltipContentProps,
  type ChartLegendContentProps,
} from "./chart";
export { DottedWorldMap, type DottedWorldMapProps } from "./dotted-world-map";
export {
  Browser,
  BrowserMockup,
  type BrowserProps,
  type BrowserMockupProps,
} from "./browser-mockup";
export {
  Globe,
  type GlobeProps,
  type GlobeConfig,
  type GlobeMarker,
} from "./globe";
export {
  FeatureCheckItem,
  type FeatureCheckItemProps,
} from "./feature-check-item";
export {
  FeatureIconItem,
  type FeatureIconItemProps,
} from "./feature-icon-item";
export {
  GridFeatureCard,
  type GridFeatureCardProps,
} from "./grid-feature-card";
export {
  NotificationMessageList,
  type NotificationMessageListProps,
  type NotificationMessage,
} from "./notification-message-list";
export {
  FeatureArrowCard,
  type FeatureArrowCardProps,
} from "./feature-arrow-card";
export {
  GrainGradientBackground,
  GrainCloudsBackground,
  type GrainGradientBackgroundProps,
  type GrainCloudsBackgroundProps,
} from "./grain-gradient-background";
export {
  DitheringBackground,
  type DitheringBackgroundProps,
  type DitheringThemeConfig,
  type ThemeMode,
} from "./dithering-background";
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "./dropdown-menu";
export {
  ThemeSwitcher,
  type ThemeSwitcherProps,
  type ThemeSwitcherValue,
} from "./theme-switcher";
export {
  GradientAnimatedText,
  type GradientAnimatedTextProps,
  type GradientVariant,
  type GradientTheme,
} from "./gradient-animated-text";
export {
  DitheringShader,
  DITHERING_SHAPES,
  DITHERING_TYPES,
  type DitheringShaderProps,
  type DitheringShaderShape,
  type DitheringShaderType,
} from "./dithering-shader";
export {
  GitHubCalendar,
  type GitHubCalendarProps,
  type ContributionDay,
} from "./github-calendar";
export { StarsCanvas, type StarsCanvasProps } from "./stars-canvas";
export { WaveAnimation, type WaveAnimationProps } from "./wave-animation";
export { TextShimmer, type TextShimmerProps } from "./text-shimmer";
export {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
  type AnnouncementProps,
  type AnnouncementTagProps,
  type AnnouncementTitleProps,
} from "./announcement";
export { WordFadeIn, type WordFadeInProps } from "./word-fade-in";
export { VideoPlayer, type VideoPlayerProps } from "./video-player";
export {
  AgentPlan,
  type AgentPlanProps,
  type AgentTask,
  type AgentSubtask,
  type TaskStatus,
  type TaskPriority,
} from "./agent-plan";
export {
  BentoGrid,
  BentoCard,
  type BentoGridProps,
  type BentoCardProps,
} from "./bento-grid";
export { ProgressiveBlur, type ProgressiveBlurProps } from "./progressive-blur";
export {
  Confetti,
  ConfettiButton,
  type ConfettiProps,
  type ConfettiButtonProps,
  type ConfettiRef,
  type ConfettiApi,
} from "./confetti";
export { AuroraText, type AuroraTextProps } from "./aurora-text";
export {
  ScrollVelocityContainer,
  ScrollVelocityRow,
  wrap as scrollVelocityWrap,
  type ScrollVelocityContainerProps,
  type ScrollVelocityRowProps,
} from "./scroll-velocity";
export { TextScramble, type TextScrambleProps } from "./text-scramble";
export { BubbleText, type BubbleTextProps } from "./bubble-text";
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
export {
  StatusBadge,
  statusBadgeVariants,
  type StatusBadgeProps,
} from "./status-badge";
export {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
  type TerminalProps,
  type TypingAnimationProps,
  type AnimatedSpanProps,
} from "./terminal";
export {
  XPostCard,
  ClientXPostCard,
  XPostSkeleton,
  type XPostCardProps,
} from "./x-post-card";
export {
  AnimatedShinyText,
  type AnimatedShinyTextProps,
} from "./animated-shiny-text";
export { TextLoop, type TextLoopProps } from "./text-loop";
export {
  ColorBadge,
  colorBadgeVariants,
  colorBadgeSizes,
  type ColorBadgeProps,
  type ColorBadgeVariant,
  type ColorBadgeSize,
} from "./color-badge";
export { Awards, type AwardsComponentProps } from "./awards";
export {
  Loader,
  CircularLoader,
  ClassicLoader,
  PulseLoader,
  PulseDotLoader,
  DotsLoader,
  TypingLoader,
  WaveLoader,
  BarsLoader,
  TerminalLoader,
  TextBlinkLoader,
  TextShimmerLoader,
  TextDotsLoader,
  type LoaderProps,
  type LoaderSizeProps,
  type TextLoaderProps,
} from "./loader";
export {
  AnimatedList,
  AnimatedListItem,
  type AnimatedListProps,
  type AnimatedListItemProps,
} from "./animated-list";
export {
  DottedMap,
  type DottedMapProps,
  type DottedMapMarker,
} from "./dotted-map";
export { MagicCard, type MagicCardProps } from "./magic-card";
export { VideoText, type VideoTextProps } from "./video-text";
export { Safari, type SafariProps, type SafariMode } from "./safari";
export { LightRays, type LightRaysProps } from "./light-rays";
export { DateInput, type DateInputProps } from "./date-input";
export {
  AvatarCircles,
  type AvatarCirclesProps,
  type AvatarCircleItem,
} from "./avatar-circles";
export { AnimatedBeam, type AnimatedBeamProps } from "./animated-beam";
export {
  LineShadowText,
  LINE_SHADOW_CSS,
  type LineShadowTextProps,
} from "./line-shadow-text";
export {
  AnimatedGradientText,
  ANIMATED_GRADIENT_CSS,
  type AnimatedGradientTextProps,
} from "./animated-gradient-text";
export { IphoneMockup, type IphoneMockupProps } from "./iphone-mockup";
export {
  Snippet,
  type SnippetProps,
  type SnippetVariant,
  type SnippetColor,
  type SnippetSize,
  type SnippetRadius,
} from "./snippet";
export {
  Highlighter,
  type HighlighterProps,
  type HighlighterAction,
} from "./highlighter";
export { DotPattern, type DotPatternProps } from "./dot-pattern";
export {
  HeroCard,
  HeroCardHeader,
  HeroCardBody,
  HeroCardFooter,
  type HeroCardProps,
  type HeroCardHeaderProps,
  type HeroCardBodyProps,
  type HeroCardFooterProps,
} from "./hero-card";
export { HeroSkeleton, type HeroSkeletonProps } from "./hero-skeleton";
export {
  CodeBlock,
  type CodeBlockProps,
  type CodeBlockFile,
} from "./code-block";
export {
  HeroPopover,
  HeroPopoverTrigger,
  HeroPopoverContent,
  type HeroPopoverProps,
  type HeroPopoverTriggerProps,
  type HeroPopoverContentProps,
  type HeroPopoverPlacement,
  type HeroPopoverColor,
  type HeroPopoverBackdrop,
} from "./hero-popover";
export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  type PopoverProps,
  type PopoverTriggerProps,
  type PopoverContentProps,
  type PopoverAnchorProps,
} from "./popover";
export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  type DrawerProps,
  type DrawerDirection,
  type DrawerTriggerProps,
  type DrawerPortalProps,
  type DrawerCloseProps,
  type DrawerOverlayProps,
  type DrawerContentProps,
  type DrawerHeaderProps,
  type DrawerBodyProps,
  type DrawerFooterProps,
  type DrawerTitleProps,
  type DrawerDescriptionProps,
} from "./drawer";
export {
  HeroSelect,
  HeroSelectItem,
  HeroSelectSection,
  type HeroSelectProps,
  type HeroSelectItemProps,
  type HeroSelectSectionProps,
} from "./hero-select";
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
export { FlickeringGrid, type FlickeringGridProps } from "./flickering-grid";
export { WarpBackground, type WarpBackgroundProps } from "./warp-background";
export {
  Calendar,
  // Date utilities
  CalendarDate,
  CalendarDateTime,
  ZonedDateTime,
  today,
  getLocalTimeZone,
  parseDate,
  parseDateTime,
  parseZonedDateTime,
  parseAbsolute,
  parseAbsoluteToLocal,
  isWeekend,
  isToday,
  isSameDay,
  isSameMonth,
  isSameYear,
  getDayOfWeek,
  now,
  startOfWeek,
  startOfMonth,
  startOfYear,
  endOfWeek,
  endOfMonth,
  endOfYear,
  RangeCalendar,
  // Types
  type CalendarProps,
  type RangeCalendarProps,
  type DateValue,
  type RangeValue,
  type SupportedCalendars,
  type FirstDayOfWeek,
  type CalendarColor,
} from "./calendar";
export {
  DatePicker,
  DateRangePicker,
  type DatePickerProps,
  type DateRangePickerProps,
} from "./date-picker";
export {
  CalendarPicker,
  type CalendarPickerProps,
  type CalendarPreset,
  type CalendarPickerSize,
} from "./calendar-picker";
export {
  CheckboxGroup,
  Checkbox,
  type CheckboxGroupProps,
  type CheckboxProps,
} from "./checkbox-group";
export {
  ChoiceboxGroup,
  choiceboxItemVariants,
  type ChoiceboxGroupProps,
  type ChoiceboxItemProps,
} from "./choicebox";
export {
  Slider,
  type SliderProps,
  type SliderValue,
  type SliderStepMark,
  type SliderColor,
  type SliderSize,
  type SliderRadius,
  type SliderOrientation,
} from "./slider";
export { Spinner, type SpinnerProps, type SpinnerVariant } from "./spinner";
export {
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
  SkeletonCard,
  type SkeletonProps,
} from "./skeleton";
export { Separator } from "./separator";
export {
  GithubInlineDiff,
  type GithubInlineDiffProps,
  type DiffLine,
  type DiffLineKind,
  type DiffComment,
} from "./github-inline-diff";
export {
  ReactionChip,
  ReactionBadge,
  MessageWithReactions,
  type ReactionChipProps,
  type ReactionBadgeProps,
  type MessageWithReactionsProps,
} from "./reaction-chip";
export {
  SnippetStatus,
  type SnippetStatusProps,
  type SnippetStatusType,
} from "./snippet-status";
export {
  Progress,
  type ProgressProps,
  type ProgressColor,
  type ProgressSize,
  type ProgressRadius,
} from "./progress";
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  type BreadcrumbProps,
  type BreadcrumbListProps,
  type BreadcrumbItemProps,
  type BreadcrumbLinkProps,
  type BreadcrumbPageProps,
  type BreadcrumbSeparatorProps,
  type BreadcrumbEllipsisProps,
} from "./breadcrumb";
export {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  AlertToolbar,
  alertVariants,
  type AlertProps,
  type AlertIconProps,
  type AlertTitleProps,
  type AlertDescriptionProps,
  type AlertContentProps,
  type AlertToolbarProps,
  type AlertVariant,
  type AlertAppearance,
  type AlertSize,
} from "./alert";
export {
  Switch,
  type SwitchProps,
  type SwitchColor,
  type SwitchSize,
  type ThumbIconProps,
} from "./switch";
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
  type TabsVariant,
  type TabsSize,
  type TabsShape,
} from "./tabs";
export { Label, labelVariants, type LabelProps } from "./label";
export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetPortal,
  SheetOverlay,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  type SheetProps,
  type SheetTriggerProps,
  type SheetCloseProps,
  type SheetPortalProps,
  type SheetOverlayProps,
  type SheetContentProps,
  type SheetHeaderProps,
  type SheetFooterProps,
  type SheetTitleProps,
  type SheetDescriptionProps,
  type SheetSide,
} from "./sheet";
export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
  type CommandProps,
  type CommandDialogProps,
  type CommandInputProps,
  type CommandListProps,
  type CommandEmptyProps,
  type CommandGroupProps,
  type CommandSeparatorProps,
  type CommandItemProps,
  type CommandShortcutProps,
} from "./command";
export {
  Combobox,
  comboboxTriggerVariants,
  type ComboboxProps,
  type ComboboxSize,
  type ComboboxOption,
  type ComboboxOptionProps,
  type ComboboxInputProps,
  type ComboboxEmptyProps,
  type ComboboxGroupProps,
} from "./combobox";
export {
  CommandMenu,
  type CommandMenuRootProps,
  type CommandMenuItemProps,
} from "./command-menu";
export {
  ContextCard,
  type ContextCardTriggerProps,
  type ContextCardSide,
} from "./context-card";
export {
  ContextMenu,
  type ContextMenuItemProps,
  type ContextMenuLabelProps,
  type ContextMenuSeparatorProps,
  type ContextMenuContentProps,
} from "./context-menu";
export {
  AnimateIn,
  AnimateInGroup,
  type AnimateInProps,
  type AnimateInGroupProps,
} from "./animate-in";
export { Description, type DescriptionProps } from "./description";
export {
  EmptyState,
  type EmptyStateRootProps,
  type EmptyStateIconProps,
} from "./empty-state";
export {
  Entity,
  type EntityProps,
  type EntityContentProps,
  type EntityListProps,
} from "./entity";
export {
  ErrorMessage,
  type ErrorMessageProps,
  type ErrorObject,
} from "./error-message";
export {
  Feedback,
  type FeedbackProps,
  type FeedbackPayload,
} from "./feedback";
export {
  Gauge,
  type GaugeProps,
  type GaugeColorStop,
} from "./gauge";
export {
  Grid,
  type GridSystemProps,
  type GridCellProps,
} from "./grid-system";
export { Kbd, type KbdProps } from "./kbd";
export { LoadingDots, type LoadingDotsProps } from "./loading-dots";
export {
  MultipleSelector,
  useDebounce,
  type MultipleSelectorProps,
  type MultipleSelectorOption,
  type MultipleSelectorRef,
} from "./multiple-selector";
export {
  TreeProvider,
  TreeView,
  TreeNode,
  TreeNodeTrigger,
  TreeNodeContent,
  TreeExpander,
  TreeIcon,
  TreeLabel,
  TreeLines,
  type TreeProviderProps,
  type TreeViewProps,
  type TreeNodeProps,
  type TreeNodeTriggerProps,
  type TreeNodeContentProps,
  type TreeExpanderProps,
  type TreeIconProps,
  type TreeLabelProps,
} from "./tree";
export {
  FallbackCard,
  LetterGlitch,
  type FallbackCardProps,
  type LetterGlitchProps,
} from "./fallback-card";
export {
  InteractiveCard,
  AnimatedExportIcon,
  type InteractiveCardProps,
} from "./interactive-card";
export {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  type InputOTPProps,
  type InputOTPGroupProps,
  type InputOTPSlotProps,
  type InputOTPSeparatorProps,
} from "./input-otp";
export {
  Enable2FACard,
  type Enable2FACardProps,
  type Enable2FAStep,
} from "./enable-2fa-card";
export {
  AnimatedHikeCard,
  type AnimatedHikeCardProps,
  type Stat as AnimatedHikeCardStat,
} from "./animated-hike-card";
export { Material, type MaterialProps } from "./material";
export {
  PricingCard,
  PricingCardRoot,
  PricingCardHeader,
  PricingCardDescription,
  PricingCardPlan,
  PricingCardPlanName,
  PricingCardBadge,
  PricingCardPrice,
  PricingCardMainPrice,
  PricingCardPeriod,
  PricingCardOriginalPrice,
  PricingCardBody,
  PricingCardList,
  PricingCardListItem,
  PricingCardSeparator,
} from "./pricing-card";
