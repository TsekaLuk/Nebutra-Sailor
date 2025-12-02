/**
 * Primitives - shadcn-compatible base components
 *
 * These are foundational UI components that can be used across all apps.
 */

export { Button, buttonVariants, type ButtonProps } from "./button";
export { Input, type InputProps } from "./input";
export { Textarea, type TextareaProps } from "./textarea";
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./card";
export { Avatar, AvatarImage, AvatarFallback } from "./avatar";
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
export { BrowserMockup, type BrowserMockupProps } from "./browser-mockup";
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
