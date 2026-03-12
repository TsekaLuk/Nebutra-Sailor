"use client";

import dynamic from "next/dynamic";

export const AccordionDemo = dynamic(
  () => import("./accordion-demo").then((m) => ({ default: m.AccordionDemo })),
  { ssr: false },
);

export const AlertDemo = dynamic(
  () => import("./alert-demo").then((m) => ({ default: m.AlertDemo })),
  { ssr: false },
);

export const PageContainerDemo = dynamic(
  () => import("./page-container-demo").then((m) => ({ default: m.PageContainerDemo })),
  { ssr: false },
);

export const AspectRatioDemo = dynamic(
  () => import("./aspect-ratio-demo").then((m) => ({ default: m.AspectRatioDemo })),
  { ssr: false },
);

export const AlertDialogDemo = dynamic(
  () =>
    import("./alert-dialog-demo").then((m) => ({
      default: m.AlertDialogDemo,
    })),
  { ssr: false },
);

export const AlertDialogCustomDemo = dynamic(
  () =>
    import("./alert-dialog-custom-demo").then((m) => ({
      default: m.AlertDialogCustomDemo,
    })),
  { ssr: false },
);

export const AvatarSizeDemo = dynamic(
  () => import("./avatar-demo").then((m) => ({ default: m.AvatarSizeDemo })),
  { ssr: false },
);

export const AvatarGroupDemo = dynamic(
  () => import("./avatar-demo").then((m) => ({ default: m.AvatarGroupDemo })),
  { ssr: false },
);

export const AvatarFallbackDemo = dynamic(
  () => import("./avatar-demo").then((m) => ({ default: m.AvatarFallbackDemo })),
  { ssr: false },
);

export const AvatarGitPlatformDemo = dynamic(
  () => import("./avatar-demo").then((m) => ({ default: m.AvatarGitPlatformDemo })),
  { ssr: false },
);

export const AvatarWithIconDemo = dynamic(
  () => import("./avatar-demo").then((m) => ({ default: m.AvatarWithIconDemo })),
  { ssr: false },
);

export const DiceBearAvatarDemo = dynamic(
  () => import("./avatar-demo").then((m) => ({ default: m.DiceBearAvatarDemo })),
  { ssr: false },
);

export const BadgeDemo = dynamic(
  () => import("./badge-demo").then((m) => ({ default: m.BadgeDemo })),
  { ssr: false },
);

export const ButtonDemo = dynamic(
  () => import("./button-demo").then((m) => ({ default: m.ButtonDemo })),
  { ssr: false },
);

export const BoxDemo = dynamic(
  () => import("./box-demo").then((m) => ({ default: m.BoxDemo })),
  { ssr: false },
);

export const FlexDemo = dynamic(
  () => import("./flex-demo").then((m) => ({ default: m.FlexDemo })),
  { ssr: false },
);

export const GridSystemDemo = dynamic(
  () => import("./grid-system-demo").then((m) => ({ default: m.GridSystemDemo })),
  { ssr: false },
);

export const StackDemo = dynamic(
  () => import("./stack-demo").then((m) => ({ default: m.StackDemo })),
  { ssr: false },
);

export const SeparatorDemo = dynamic(
  () => import("./separator-demo").then((m) => ({ default: m.SeparatorDemo })),
  { ssr: false },
);

export const DescriptionDemo = dynamic(
  () => import("./description-demo").then((m) => ({ default: m.DescriptionDemo })),
  { ssr: false },
);

export const HeadingDemo = dynamic(
  () => import("./heading-demo").then((m) => ({ default: m.HeadingDemo })),
  { ssr: false },
);

export const TextDemo = dynamic(
  () => import("./text-demo").then((m) => ({ default: m.TextDemo })),
  { ssr: false },
);

export const CheckboxDemo = dynamic(
  () => import("./checkbox-demo").then((m) => ({ default: m.CheckboxDemo })),
  { ssr: false },
);

export const CheckboxGroupDemo = dynamic(
  () => import("./checkbox-group-demo").then((m) => ({ default: m.CheckboxGroupDemo })),
  { ssr: false },
);

export const ChoiceboxDemo = dynamic(
  () => import("./choicebox-demo").then((m) => ({ default: m.ChoiceboxDemo })),
  { ssr: false },
);

export const DateInputDemo = dynamic(
  () => import("./date-input-demo").then((m) => ({ default: m.DateInputDemo })),
  { ssr: false },
);

export const ExpandingTextareaDemo = dynamic(
  () => import("./expanding-textarea-demo").then((m) => ({ default: m.ExpandingTextareaDemo })),
  { ssr: false },
);

export const FieldDemo = dynamic(
  () => import("./field-demo").then((m) => ({ default: m.FieldDemo })),
  { ssr: false },
);

export const MultipleSelectorDemo = dynamic(
  () => import("./multiple-selector-demo").then((m) => ({ default: m.MultipleSelectorDemo })),
  { ssr: false },
);

export const MenubarDemo = dynamic(
  () => import("./menubar-demo").then((m) => ({ default: m.MenubarDemo })),
  { ssr: false },
);

export const RadioGroupCardDemo = dynamic(
  () => import("./radio-group-card-demo").then((m) => ({ default: m.RadioGroupCardDemo })),
  { ssr: false },
);

export const RadioGroupStackedDemo = dynamic(
  () => import("./radio-group-stacked-demo").then((m) => ({ default: m.RadioGroupStackedDemo })),
  { ssr: false },
);

export const ComboboxDemo = dynamic(
  () => import("./combobox-demo").then((m) => ({ default: m.ComboboxDemo })),
  { ssr: false },
);

export const DialogDemo = dynamic(
  () => import("./dialog-demo").then((m) => ({ default: m.DialogDemo })),
  { ssr: false },
);

export const InputDemo = dynamic(
  () => import("./input-demo").then((m) => ({ default: m.InputDemo })),
  { ssr: false },
);

export const SelectDemo = dynamic(
  () => import("./select-demo").then((m) => ({ default: m.SelectDemo })),
  { ssr: false },
);

export const SwitchDemo = dynamic(
  () => import("./switch-demo").then((m) => ({ default: m.SwitchDemo })),
  { ssr: false },
);

export const TabsDemo = dynamic(
  () => import("./tabs-demo").then((m) => ({ default: m.TabsDemo })),
  { ssr: false },
);

export const TooltipDemo = dynamic(
  () => import("./tooltip-demo").then((m) => ({ default: m.TooltipDemo })),
  { ssr: false },
);

// Phase 3 components
export const EmptyStateDemo = dynamic(
  () => import("./empty-state-demo").then((m) => ({ default: m.EmptyStateDemo })),
  { ssr: false },
);

export const ErrorMessageDemo = dynamic(
  () => import("./error-message-demo").then((m) => ({ default: m.ErrorMessageDemo })),
  { ssr: false },
);

export const StatusBadgeDemo = dynamic(
  () => import("./status-badge-demo").then((m) => ({ default: m.StatusBadgeDemo })),
  { ssr: false },
);

export const FeedbackDemo = dynamic(
  () => import("./feedback-demo").then((m) => ({ default: m.FeedbackDemo })),
  { ssr: false },
);

export const SnippetStatusDemo = dynamic(
  () => import("./snippet-status-demo").then((m) => ({ default: m.SnippetStatusDemo })),
  { ssr: false },
);

export const CollapsibleDemo = dynamic(
  () => import("./collapsible-demo").then((m) => ({ default: m.CollapsibleDemo })),
  { ssr: false },
);

export const SnippetDemo = dynamic(
  () => import("./snippet-demo").then((m) => ({ default: m.SnippetDemo })),
  { ssr: false },
);

export const NotificationMessageListDemo = dynamic(
  () => import("./notification-message-list-demo").then((m) => ({ default: m.NotificationMessageListDemo })),
  { ssr: false },
);

export const MessageWithReactionsDemo = dynamic(
  () => import("./reaction-chip-demo").then((m) => ({ default: m.MessageWithReactionsDemo })),
  { ssr: false },
);

export const AnnouncementDemo = dynamic(
  () => import("./announcement-demo").then((m) => ({ default: m.AnnouncementDemo })),
  { ssr: false },
);

export const LoaderDemo = dynamic(
  () => import("./loader-demo").then((m) => ({ default: m.LoaderDemo })),
  { ssr: false },
);

export const SpinnerDemo = dynamic(
  () => import("./spinner-demo").then((m) => ({ default: m.SpinnerDemo })),
  { ssr: false },
);

// Phase 4 components
export const InteractiveCardDemo = dynamic(
  () => import("./interactive-card-demo").then((m) => ({ default: m.InteractiveCardDemo })),
  { ssr: false },
);

export const FeatureCardDemo = dynamic(
  () => import("./feature-card-demo").then((m) => ({ default: m.FeatureCardDemo })),
  { ssr: false },
);

export const HeroCardDemo = dynamic(
  () => import("./hero-card-demo").then((m) => ({ default: m.HeroCardDemo })),
  { ssr: false },
);

export const PricingCardDemo = dynamic(
  () => import("./pricing-card-demo").then((m) => ({ default: m.PricingCardDemo })),
  { ssr: false },
);

export const ExpandableTabsDemo = dynamic(
  () => import("./expandable-tabs-demo").then((m) => ({ default: m.ExpandableTabsDemo })),
  { ssr: false },
);

export const ContextCardDemo = dynamic(
  () => import("./context-card-demo").then((m) => ({ default: m.ContextCardDemo })),
  { ssr: false },
);

// Phase 5 components (Animated & Magic UI Part 1)
export const AnimatedBeamDemo = dynamic(
  () => import("./animated-beam-demo").then((m) => ({ default: m.AnimatedBeamDemo })),
  { ssr: false },
);

export const AnimatedGradientTextDemo = dynamic(
  () => import("./animated-gradient-text-demo").then((m) => ({ default: m.AnimatedGradientTextDemo })),
  { ssr: false },
);

export const AnimatedGroupDemo = dynamic(
  () => import("./animated-group-demo").then((m) => ({ default: m.AnimatedGroupDemo })),
  { ssr: false },
);

export const AnimatedListDemo = dynamic(
  () => import("./animated-list-demo").then((m) => ({ default: m.AnimatedListDemo })),
  { ssr: false },
);

export const AnimatedShinyTextDemo = dynamic(
  () => import("./animated-shiny-text-demo").then((m) => ({ default: m.AnimatedShinyTextDemo })),
  { ssr: false },
);

export const MagicCardDemo = dynamic(
  () => import("./magic-card-demo").then((m) => ({ default: m.MagicCardDemo })),
  { ssr: false },
);

// Phase 6 components (Animated & Magic UI Part 2)
export const AuroraTextDemo = dynamic(
  () => import("./aurora-text-demo").then((m) => ({ default: m.AuroraTextDemo })),
  { ssr: false },
);

export const AvatarCirclesDemo = dynamic(
  () => import("./avatar-circles-demo").then((m) => ({ default: m.AvatarCirclesDemo })),
  { ssr: false },
);

export const BentoGridDemo = dynamic(
  () => import("./bento-grid-demo").then((m) => ({ default: m.BentoGridDemo })),
  { ssr: false },
);

export const BorderTrailDemo = dynamic(
  () => import("./border-trail-demo").then((m) => ({ default: m.BorderTrailDemo })),
  { ssr: false },
);

export const CanvasRevealEffectDemo = dynamic(
  () => import("./canvas-reveal-effect-demo").then((m) => ({ default: m.CanvasRevealEffectDemo })),
  { ssr: false },
);

export const CardSpotlightDemo = dynamic(
  () => import("./card-spotlight-demo").then((m) => ({ default: m.CardSpotlightDemo })),
  { ssr: false },
);

export const DotPatternDemo = dynamic(
  () => import("./dot-pattern-demo").then((m) => ({ default: m.DotPatternDemo })),
  { ssr: false },
);

export const ConfettiDemo = dynamic(
  () => import("./confetti-demo").then((m) => ({ default: m.ConfettiDemo })),
  { ssr: false },
);

export const BrowserMockupDemo = dynamic(
  () => import("./browser-mockup-demo").then((m) => ({ default: m.BrowserMockupDemo })),
  { ssr: false },
);

export const FlickeringGridDemo = dynamic(
  () => import("./flickering-grid-demo").then((m) => ({ default: m.FlickeringGridDemo })),
  { ssr: false },
);

export const GaugeDemo = dynamic(
  () => import("./gauge-demo").then((m) => ({ default: m.GaugeDemo })),
  { ssr: false },
);

export const GlobeDemo = dynamic(
  () => import("./globe-demo").then((m) => ({ default: m.GlobeDemo })),
  { ssr: false },
);

export const GlowingEffectDemo = dynamic(
  () => import("./glowing-effect-demo").then((m) => ({ default: m.GlowingEffectDemo })),
  { ssr: false },
);

export const ShineBorderDemo = dynamic(
  () => import("./shine-border-demo").then((m) => ({ default: m.ShineBorderDemo })),
  { ssr: false },
);

export const BubbleTextDemo = dynamic(
  () => import("./bubble-text-demo"),
  { ssr: false },
);

export const GradientAnimatedTextDemo = dynamic(
  () => import("./gradient-animated-text-demo"),
  { ssr: false },
);

export const LineShadowTextDemo = dynamic(
  () => import("./line-shadow-text-demo"),
  { ssr: false },
);

export const TextLoopDemo = dynamic(
  () => import("./text-loop-demo"),
  { ssr: false },
);

export const TextScrambleDemo = dynamic(
  () => import("./text-scramble-demo"),
  { ssr: false },
);

export const TextShimmerDemo = dynamic(
  () => import("./text-shimmer-demo"),
  { ssr: false },
);

export const WordFadeInDemo = dynamic(
  () => import("./word-fade-in-demo"),
  { ssr: false },
);

// Phase 8: Advanced Media & Mockups
export const IphoneMockupDemo = dynamic(
  () => import("./iphone-mockup-demo").then((m) => ({ default: m.IphoneMockupDemo })),
  { ssr: false },
);

export const SafariDemo = dynamic(
  () => import("./safari-demo").then((m) => ({ default: m.SafariDemo })),
  { ssr: false },
);

export const TerminalDemo = dynamic(
  () => import("./terminal-demo").then((m) => ({ default: m.TerminalDemo })),
  { ssr: false },
);

export const VideoPlayerDemo = dynamic(
  () => import("./video-player-demo").then((m) => ({ default: m.VideoPlayerDemo })),
  { ssr: false },
);

export const VideoTextDemo = dynamic(
  () => import("./video-text-demo").then((m) => ({ default: m.VideoTextDemo })),
  { ssr: false },
);

// Phase 9 components
export const Slider1Demo = dynamic(
  () => import("./slider-1-demo"),
  { ssr: false },
);

export const SliderNumberFlowDemo = dynamic(
  () => import("./slider-number-flow-demo").then((m) => ({ default: m.SliderNumberFlowDemo })),
  { ssr: false },
);

export const CalendarMinMaxDemo = dynamic(
  () => import("./calendar-min-max-demo"),
  { ssr: false },
);

export const CalendarUnavailableDemo = dynamic(
  () => import("./calendar-unavailable-demo"),
  { ssr: false },
);

export const DatePickerDefaultDemo = dynamic(
  () => import("./date-picker-default-demo"),
  { ssr: false },
);

export const DatePickerMinMaxDemo = dynamic(
  () => import("./date-picker-min-max-demo"),
  { ssr: false },
);


export const Carousel3Demo = dynamic(
  () => import("./carousel-3-demo").then((m) => ({ default: m.Carousel3Demo })),
  { ssr: false },
);

export const Input2Demo = dynamic(
  () => import("./input-2-demo").then((m) => ({ default: m.Input2Demo })),
  { ssr: false },
);

export const DropdownMenu3Demo = dynamic(
  () => import("./dropdown-menu-3-demo").then((m) => ({ default: m.DropdownMenu3Demo })),
  { ssr: false },
);

export const Button4Demo = dynamic(
  () => import("./button-4-demo").then((m) => ({ default: m.Button4Demo })),
  { ssr: false },
);



export const Calendar4Demo = dynamic(
  () => import("./calendar-4-demo").then((m) => ({ default: m.Calendar4Demo })),
  { ssr: false },
);

export const Calendar5Demo = dynamic(
  () => import("./calendar-5-demo").then((m) => ({ default: m.Calendar5Demo })),
  { ssr: false },
);

export const Combobox2Demo = dynamic(
  () => import("./combobox-2-demo").then((m) => ({ default: m.Combobox2Demo })),
  { ssr: false },
);

export const Card2Demo = dynamic(
  () => import("./card-2-demo").then((m) => ({ default: m.Card2Demo })),
  { ssr: false },
);

export const CommandDemo = dynamic(
  () => import("./command-demo").then((m) => ({ default: m.CommandDemo })),
  { ssr: false },
);

export const Popover2Demo = dynamic(
  () => import("./popover-2-demo").then((m) => ({ default: m.Popover2Demo })),
  { ssr: false },
);

export const ToggleDemo = dynamic(
  () => import("./toggle-demo").then((m) => ({ default: m.ToggleDemo })),
  { ssr: false },
);

export const Badge2Demo = dynamic(
  () => import("./badge-2-demo").then((m) => ({ default: m.Badge2Demo })),
  { ssr: false },
);

export const CalendarDemo = dynamic(
  () => import("./calendar-demo").then((m) => ({ default: m.CalendarDemo })),
  { ssr: false },
);

export const Separator2Demo = dynamic(
  () => import("./separator-2-demo").then((m) => ({ default: m.Separator2Demo })),
  { ssr: false },
);

export const Skeleton2Demo = dynamic(
  () => import("./skeleton-2-demo").then((m) => ({ default: m.Skeleton2Demo })),
  { ssr: false },
);

export const RadioGroup3Demo = dynamic(
  () => import("./radio-group-3-demo").then((m) => ({ default: m.RadioGroup3Demo })),
  { ssr: false },
);

export const CarouselDemo = dynamic(
  () => import("./carousel-demo").then((m) => ({ default: m.CarouselDemo })),
  { ssr: false },
);

export const PaginationDemo = dynamic(
  () => import("./pagination-demo").then((m) => ({ default: m.PaginationDemo })),
  { ssr: false },
);

export const Slider2Demo = dynamic(
  () => import("./slider-2-demo").then((m) => ({ default: m.Slider2Demo })),
  { ssr: false },
);

export const Input7Demo = dynamic(
  () => import("./input-7-demo").then((m) => ({ default: m.Input7Demo })),
  { ssr: false },
);

export const ResizableDemo = dynamic(
  () => import("./resizable-demo").then((m) => ({ default: m.ResizableDemo })),
  { ssr: false },
);

export const Textarea3Demo = dynamic(
  () => import("./textarea-3-demo").then((m) => ({ default: m.Textarea3Demo })),
  { ssr: false },
);

export const Combobox5Demo = dynamic(
  () => import("./combobox-5-demo").then((m) => ({ default: m.Combobox5Demo })),
  { ssr: false },
);

export const Input4Demo = dynamic(
  () => import("./input-4-demo").then((m) => ({ default: m.Input4Demo })),
  { ssr: false },
);

export const Avatar5Demo = dynamic(
  () => import("./avatar-5-demo").then((m) => ({ default: m.Avatar5Demo })),
  { ssr: false },
);

export const Command2Demo = dynamic(
  () => import("./command-2-demo").then((m) => ({ default: m.Command2Demo })),
  { ssr: false },
);

export const Label3Demo = dynamic(
  () => import("./label-3-demo").then((m) => ({ default: m.Label3Demo })),
  { ssr: false },
);

export const Carousel2Demo = dynamic(
  () => import("./carousel-2-demo").then((m) => ({ default: m.Carousel2Demo })),
  { ssr: false },
);

export const Combobox4Demo = dynamic(
  () => import("./combobox-4-demo").then((m) => ({ default: m.Combobox4Demo })),
  { ssr: false },
);

export const Combobox6Demo = dynamic(
  () => import("./combobox-6-demo").then((m) => ({ default: m.Combobox6Demo })),
  { ssr: false },
);

export const Tooltip2Demo = dynamic(
  () => import("./tooltip-2-demo").then((m) => ({ default: m.Tooltip2Demo })),
  { ssr: false },
);

export const Select3Demo = dynamic(
  () => import("./select-3-demo").then((m) => ({ default: m.Select3Demo })),
  { ssr: false },
);

export const ScrollAreaDemo = dynamic(
  () => import("./scroll-area-demo").then((m) => ({ default: m.ScrollAreaDemo })),
  { ssr: false },
);

export const Button3Demo = dynamic(
  () => import("./button-3-demo").then((m) => ({ default: m.Button3Demo })),
  { ssr: false },
);

export const Card3Demo = dynamic(
  () => import("./card-3-demo").then((m) => ({ default: m.Card3Demo })),
  { ssr: false },
);

export const DatePickerDemo = dynamic(
  () => import("./date-picker-demo").then((m) => ({ default: m.DatePickerDemo })),
  { ssr: false },
);

export const SkeletonDemo = dynamic(
  () => import("./skeleton-demo").then((m) => ({ default: m.SkeletonDemo })),
  { ssr: false },
);

export const Progress3Demo = dynamic(
  () => import("./progress-3-demo").then((m) => ({ default: m.Progress3Demo })),
  { ssr: false },
);

export const Dialog2Demo = dynamic(
  () => import("./dialog-2-demo").then((m) => ({ default: m.Dialog2Demo })),
  { ssr: false },
);

export const DatePicker5Demo = dynamic(
  () => import("./date-picker-5-demo").then((m) => ({ default: m.DatePicker5Demo })),
  { ssr: false },
);

export const TableDemo = dynamic(
  () => import("./table-demo").then((m) => ({ default: m.TableDemo })),
  { ssr: false },
);

export const InputOtpDemo = dynamic(
  () => import("./input-otp-demo").then((m) => ({ default: m.InputOtpDemo })),
  { ssr: false },
);

export const Accordion2Demo = dynamic(
  () => import("./accordion-2-demo").then((m) => ({ default: m.Accordion2Demo })),
  { ssr: false },
);

export const PopoverDemo = dynamic(
  () => import("./popover-demo").then((m) => ({ default: m.PopoverDemo })),
  { ssr: false },
);

export const Button2Demo = dynamic(
  () => import("./button-2-demo").then((m) => ({ default: m.Button2Demo })),
  { ssr: false },
);

export const BreadcrumbDemo = dynamic(
  () => import("./breadcrumb-demo").then((m) => ({ default: m.BreadcrumbDemo })),
  { ssr: false },
);

export const SliderDemo = dynamic(
  () => import("./slider-demo").then((m) => ({ default: m.SliderDemo })),
  { ssr: false },
);

export const DatePicker3Demo = dynamic(
  () => import("./date-picker-3-demo").then((m) => ({ default: m.DatePicker3Demo })),
  { ssr: false },
);

export const Separator4Demo = dynamic(
  () => import("./separator-4-demo").then((m) => ({ default: m.Separator4Demo })),
  { ssr: false },
);

export const Combobox3Demo = dynamic(
  () => import("./combobox-3-demo").then((m) => ({ default: m.Combobox3Demo })),
  { ssr: false },
);

export const ScrollArea2Demo = dynamic(
  () => import("./scroll-area-2-demo").then((m) => ({ default: m.ScrollArea2Demo })),
  { ssr: false },
);

export const Input5Demo = dynamic(
  () => import("./input-5-demo").then((m) => ({ default: m.Input5Demo })),
  { ssr: false },
);



export const ToggleGroupDemo = dynamic(
  () => import("./toggle-group-demo").then((m) => ({ default: m.ToggleGroupDemo })),
  { ssr: false },
);

export const DatePicker2Demo = dynamic(
  () => import("./date-picker-2-demo").then((m) => ({ default: m.DatePicker2Demo })),
  { ssr: false },
);

export const Calendar3Demo = dynamic(
  () => import("./calendar-3-demo").then((m) => ({ default: m.Calendar3Demo })),
  { ssr: false },
);

export const Avatar4Demo = dynamic(
  () => import("./avatar-4-demo").then((m) => ({ default: m.Avatar4Demo })),
  { ssr: false },
);

export const DropdownMenu2Demo = dynamic(
  () => import("./dropdown-menu-2-demo").then((m) => ({ default: m.DropdownMenu2Demo })),
  { ssr: false },
);

export const Calendar2Demo = dynamic(
  () => import("./calendar-2-demo").then((m) => ({ default: m.Calendar2Demo })),
  { ssr: false },
);

export const Tooltip3Demo = dynamic(
  () => import("./tooltip-3-demo").then((m) => ({ default: m.Tooltip3Demo })),
  { ssr: false },
);

export const ProgressDemo = dynamic(
  () => import("./progress-demo").then((m) => ({ default: m.ProgressDemo })),
  { ssr: false },
);

export const Progress1Demo = dynamic(
  () => import("./progress-1-demo").then((m) => ({ default: m.Progress1Demo })),
  { ssr: false }
);

export const AnimatedCircularProgressBarDemo = dynamic(
  () => import("./animated-circular-progress-bar-demo").then((m) => ({ default: m.AnimatedCircularProgressBarDemo })),
  { ssr: false }
);



export const Combobox7Demo = dynamic(
  () => import("./combobox-7-demo").then((m) => ({ default: m.Combobox7Demo })),
  { ssr: false },
);

export const DatePicker4Demo = dynamic(
  () => import("./date-picker-4-demo").then((m) => ({ default: m.DatePicker4Demo })),
  { ssr: false },
);

export const Textarea2Demo = dynamic(
  () => import("./textarea-2-demo").then((m) => ({ default: m.Textarea2Demo })),
  { ssr: false },
);

export const Separator3Demo = dynamic(
  () => import("./separator-3-demo").then((m) => ({ default: m.Separator3Demo })),
  { ssr: false },
);

export const Label2Demo = dynamic(
  () => import("./label-2-demo").then((m) => ({ default: m.Label2Demo })),
  { ssr: false },
);

export const Input6Demo = dynamic(
  () => import("./input-6-demo").then((m) => ({ default: m.Input6Demo })),
  { ssr: false },
);

export const Toggle3Demo = dynamic(
  () => import("./toggle-3-demo").then((m) => ({ default: m.Toggle3Demo })),
  { ssr: false },
);

export const Breadcrumb2Demo = dynamic(
  () => import("./breadcrumb-2-demo").then((m) => ({ default: m.Breadcrumb2Demo })),
  { ssr: false },
);

export const Tabs3Demo = dynamic(
  () => import("./tabs-3-demo").then((m) => ({ default: m.Tabs3Demo })),
  { ssr: false },
);

export const ToggleGroup2Demo = dynamic(
  () => import("./toggle-group-2-demo").then((m) => ({ default: m.ToggleGroup2Demo })),
  { ssr: false },
);

export const LabelDemo = dynamic(
  () => import("./label-demo").then((m) => ({ default: m.LabelDemo })),
  { ssr: false },
);

export const DropdownMenuDemo = dynamic(
  () => import("./dropdown-menu-demo").then((m) => ({ default: m.DropdownMenuDemo })),
  { ssr: false },
);

export const Select2Demo = dynamic(
  () => import("./select-2-demo").then((m) => ({ default: m.Select2Demo })),
  { ssr: false },
);

export const Calendar6Demo = dynamic(
  () => import("./calendar-6-demo").then((m) => ({ default: m.Calendar6Demo })),
  { ssr: false },
);

export const Avatar3Demo = dynamic(
  () => import("./avatar-3-demo").then((m) => ({ default: m.Avatar3Demo })),
  { ssr: false },
);

export const DrawerDemo = dynamic(
  () => import("./drawer-demo").then((m) => ({ default: m.DrawerDemo })),
  { ssr: false },
);

export const Popover3Demo = dynamic(
  () => import("./popover-3-demo").then((m) => ({ default: m.Popover3Demo })),
  { ssr: false },
);

export const Progress4Demo = dynamic(
  () => import("./progress-4-demo").then((m) => ({ default: m.Progress4Demo })),
  { ssr: false },
);

export const Progress2Demo = dynamic(
  () => import("./progress-2-demo").then((m) => ({ default: m.Progress2Demo })),
  { ssr: false },
);

export const Tabs2Demo = dynamic(
  () => import("./tabs-2-demo").then((m) => ({ default: m.Tabs2Demo })),
  { ssr: false },
);

export const Tabs4Demo = dynamic(
  () => import("./tabs-4-demo").then((m) => ({ default: m.Tabs4Demo })),
  { ssr: false },
);

export const Tooltip4Demo = dynamic(
  () => import("./tooltip-4-demo").then((m) => ({ default: m.Tooltip4Demo })),
  { ssr: false },
);

export const Tooltip5Demo = dynamic(
  () => import("./tooltip-5-demo").then((m) => ({ default: m.Tooltip5Demo })),
  { ssr: false },
);

export const Input3Demo = dynamic(
  () => import("./input-3-demo").then((m) => ({ default: m.Input3Demo })),
  { ssr: false },
);

export const Avatar2Demo = dynamic(
  () => import("./avatar-2-demo").then((m) => ({ default: m.Avatar2Demo })),
  { ssr: false },
);

export const Accordion4Demo = dynamic(
  () => import("./accordion-4-demo").then((m) => ({ default: m.Accordion4Demo })),
  { ssr: false },
);

export const Toggle2Demo = dynamic(
  () => import("./toggle-2-demo").then((m) => ({ default: m.Toggle2Demo })),
  { ssr: false },
);

export const Checkbox2Demo = dynamic(
  () => import("./checkbox-2-demo").then((m) => ({ default: m.Checkbox2Demo })),
  { ssr: false },
);

export const Accordion3Demo = dynamic(
  () => import("./accordion-3-demo").then((m) => ({ default: m.Accordion3Demo })),
  { ssr: false },
);

export const SheetDemo = dynamic(
  () => import("./sheet-demo").then((m) => ({ default: m.SheetDemo })),
  { ssr: false },
);

export const RadioGroup2Demo = dynamic(
  () => import("./radio-group-2-demo").then((m) => ({ default: m.RadioGroup2Demo })),
  { ssr: false },
);

export const Drawer2Demo = dynamic(
  () => import("./drawer-2-demo").then((m) => ({ default: m.Drawer2Demo })),
  { ssr: false },
);

export const RadioGroupDemo = dynamic(
  () => import("./radio-group-demo").then((m) => ({ default: m.RadioGroupDemo })),
  { ssr: false },
);

export const MermaidDemo = dynamic(
  () => import("./mermaid-demo").then((m) => ({ default: m.MermaidDemo })),
  { ssr: false },
);

export const SonnerDemo = dynamic(
  () => import("./sonner-demo").then((m) => ({ default: m.SonnerDemo })),
  { ssr: false },
);

export const TreeViewDemo = dynamic(
  () => import("./tree-view-demo").then((m) => ({ default: m.TreeViewDemo })),
  { ssr: false },
);

export const WaveAnimationDemo = dynamic(
  () => import("./wave-animation-demo").then((m) => ({ default: m.WaveAnimationDemo })),
  { ssr: false },
);

export const XPostCardDemo = dynamic(
  () => import("./x-post-card-demo").then((m) => ({ default: m.XPostCardDemo })),
  { ssr: false },
);

export const BookDemo = dynamic(
  () => import("./book-demo").then((m) => ({ default: m.BookDemo })),
  { ssr: false },
);

// Auto-injected missing components

export const AgentPlanDemo = dynamic(
  () => import("./agent-plan-demo").then((m) => ({ default: m.AgentPlanDemo })),
  { ssr: false },
);

export const AnimatedHikeCardDemo = dynamic(
  () => import("./animated-hike-card-demo").then((m) => ({ default: m.AnimatedHikeCardDemo })),
  { ssr: false },
);

export const AssistedPasswordConfirmationDemo = dynamic(
  () => import("./assisted-password-confirmation-demo").then((m) => ({ default: m.AssistedPasswordConfirmationDemo })),
  { ssr: false },
);

export const AwardsDemo = dynamic(
  () => import("./awards-demo").then((m) => ({ default: m.AwardsDemo })),
  { ssr: false },
);

export const CalendarPickerDemo = dynamic(
  () => import("./calendar-picker-demo").then((m) => ({ default: m.CalendarPickerDemo })),
  { ssr: false },
);

export const CodeBlockDemo = dynamic(
  () => import("./code-block-demo").then((m) => ({ default: m.CodeBlockDemo })),
  { ssr: false },
);

export const ColorBadgeDemo = dynamic(
  () => import("./color-badge-demo").then((m) => ({ default: m.ColorBadgeDemo })),
  { ssr: false },
);

export const Badge1Demo = dynamic(
  () => import("./badge-1-demo").then((m) => ({ default: m.Badge1Demo })),
  { ssr: false },
);

export const DisplayCardsDemo = dynamic(
  () => import("./display-cards-demo").then((m) => ({ default: m.DisplayCardsDemo })),
  { ssr: false },
);

export const DitheringBackgroundDemo = dynamic(
  () => import("./dithering-background-demo").then((m) => ({ default: m.DitheringBackgroundDemo })),
  { ssr: false },
);

export const DitheringShaderDemo = dynamic(
  () => import("./dithering-shader-demo").then((m) => ({ default: m.DitheringShaderDemo })),
  { ssr: false },
);

export const DottedMapDemo = dynamic(
  () => import("./dotted-map-demo").then((m) => ({ default: m.DottedMapDemo })),
  { ssr: false },
);

export const DottedWorldMapDemo = dynamic(
  () => import("./dotted-world-map-demo").then((m) => ({ default: m.DottedWorldMapDemo })),
  { ssr: false },
);

export const EntityDemo = dynamic(
  () => import("./entity-demo").then((m) => ({ default: m.EntityDemo })),
  { ssr: false },
);

export const FeatureArrowCardDemo = dynamic(
  () => import("./feature-arrow-card-demo").then((m) => ({ default: m.FeatureArrowCardDemo })),
  { ssr: false },
);

export const FeatureCheckItemDemo = dynamic(
  () => import("./feature-check-item-demo").then((m) => ({ default: m.FeatureCheckItemDemo })),
  { ssr: false },
);

export const FeatureIconItemDemo = dynamic(
  () => import("./feature-icon-item-demo").then((m) => ({ default: m.FeatureIconItemDemo })),
  { ssr: false },
);

export const GithubCalendarDemo = dynamic(
  () => import("./github-calendar-demo").then((m) => ({ default: m.GithubCalendarDemo })),
  { ssr: false },
);

export const GithubInlineDiffDemo = dynamic(
  () => import("./github-inline-diff-demo").then((m) => ({ default: m.GithubInlineDiffDemo })),
  { ssr: false },
);

export const GrainGradientBackgroundDemo = dynamic(
  () => import("./grain-gradient-background-demo").then((m) => ({ default: m.GrainGradientBackgroundDemo })),
  { ssr: false },
);

export const GridFeatureCardDemo = dynamic(
  () => import("./grid-feature-card-demo").then((m) => ({ default: m.GridFeatureCardDemo })),
  { ssr: false },
);

export const GridPatternCardDemo = dynamic(
  () => import("./grid-pattern-card-demo").then((m) => ({ default: m.GridPatternCardDemo })),
  { ssr: false },
);

export const HeroPopoverDemo = dynamic(
  () => import("./hero-popover-demo").then((m) => ({ default: m.HeroPopoverDemo })),
  { ssr: false },
);

export const HeroSelectDemo = dynamic(
  () => import("./hero-select-demo").then((m) => ({ default: m.HeroSelectDemo })),
  { ssr: false },
);

export const HeroSkeletonDemo = dynamic(
  () => import("./hero-skeleton-demo").then((m) => ({ default: m.HeroSkeletonDemo })),
  { ssr: false },
);

export const HighlighterDemo = dynamic(
  () => import("./highlighter-demo").then((m) => ({ default: m.HighlighterDemo })),
  { ssr: false },
);

export const InfiniteSliderDemo = dynamic(
  () => import("./infinite-slider-demo").then((m) => ({ default: m.InfiniteSliderDemo })),
  { ssr: false },
);

export const IntroductionDemo = dynamic(
  () => import("./introduction-demo").then((m) => ({ default: m.IntroductionDemo })),
  { ssr: false },
);

export const LightRaysDemo = dynamic(
  () => import("./light-rays-demo").then((m) => ({ default: m.LightRaysDemo })),
  { ssr: false },
);

export const MaterialDemo = dynamic(
  () => import("./material-demo").then((m) => ({ default: m.MaterialDemo })),
  { ssr: false },
);

export const NoisePatternCardDemo = dynamic(
  () => import("./noise-pattern-card-demo").then((m) => ({ default: m.NoisePatternCardDemo })),
  { ssr: false },
);

export const ProgressiveBlurDemo = dynamic(
  () => import("./progressive-blur-demo").then((m) => ({ default: m.ProgressiveBlurDemo })),
  { ssr: false },
);

export const ScrollVelocityDemo = dynamic(
  () => import("./scroll-velocity-demo").then((m) => ({ default: m.ScrollVelocityDemo })),
  { ssr: false },
);

export const SidebarDemo = dynamic(
  () => import("./sidebar-demo").then((m) => ({ default: m.SidebarDemo })),
  { ssr: false },
);
