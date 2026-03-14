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

export const BadgeIconColorsDemo = dynamic(
  () => import("./badge-icon-colors-demo").then((m) => ({ default: m.BadgeIconColorsDemo })),
  { ssr: false },
);

export const BadgePillMatrixDemo = dynamic(
  () => import("./badge-pill-demo").then((m) => ({ default: m.BadgePillMatrixDemo })),
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
export const SliderStatefulDemo = dynamic(
  () => import("./slider-stateful-demo"),
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


export const CarouselVerticalDemo = dynamic(
  () => import("./carousel-vertical-demo").then((m) => ({ default: m.CarouselVerticalDemo })),
  { ssr: false },
);

export const InputBasicDemo = dynamic(
  () => import("./input-basic-demo").then((m) => ({ default: m.InputBasicDemo })),
  { ssr: false },
);

export const DropdownMenuSubDemo = dynamic(
  () => import("./dropdown-menu-sub-demo").then((m) => ({ default: m.DropdownMenuSubDemo })),
  { ssr: false },
);

export const ButtonLoadingDemo = dynamic(
  () => import("./button-loading-demo").then((m) => ({ default: m.ButtonLoadingDemo })),
  { ssr: false },
);



export const CalendarMultiMonthDemo = dynamic(
  () => import("./calendar-multi-month-demo").then((m) => ({ default: m.CalendarMultiMonthDemo })),
  { ssr: false },
);

export const CalendarRangeDemo = dynamic(
  () => import("./calendar-range-demo").then((m) => ({ default: m.CalendarRangeDemo })),
  { ssr: false },
);

export const ComboboxDefaultValueDemo = dynamic(
  () => import("./combobox-default-value-demo").then((m) => ({ default: m.ComboboxDefaultValueDemo })),
  { ssr: false },
);

export const CardWithIconDemo = dynamic(
  () => import("./card-with-icon-demo").then((m) => ({ default: m.CardWithIconDemo })),
  { ssr: false },
);

export const CommandDemo = dynamic(
  () => import("./command-demo").then((m) => ({ default: m.CommandDemo })),
  { ssr: false },
);

export const PopoverSettingsDemo = dynamic(
  () => import("./popover-settings-demo").then((m) => ({ default: m.PopoverSettingsDemo })),
  { ssr: false },
);

export const ToggleDemo = dynamic(
  () => import("./toggle-demo").then((m) => ({ default: m.ToggleDemo })),
  { ssr: false },
);

export const BadgeStatusDotDemo = dynamic(
  () => import("./badge-status-dot-demo").then((m) => ({ default: m.BadgeStatusDotDemo })),
  { ssr: false },
);

export const CalendarDemo = dynamic(
  () => import("./calendar-demo").then((m) => ({ default: m.CalendarDemo })),
  { ssr: false },
);

export const SeparatorVerticalDemo = dynamic(
  () => import("./separator-vertical-demo").then((m) => ({ default: m.SeparatorVerticalDemo })),
  { ssr: false },
);

export const SkeletonListDemo = dynamic(
  () => import("./skeleton-list-demo").then((m) => ({ default: m.SkeletonListDemo })),
  { ssr: false },
);

export const RadioGroupBillingDemo = dynamic(
  () => import("./radio-group-billing-demo").then((m) => ({ default: m.RadioGroupBillingDemo })),
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

export const SliderIconDemo = dynamic(
  () => import("./slider-icon-demo").then((m) => ({ default: m.SliderIconDemo })),
  { ssr: false },
);

export const InputClearableDemo = dynamic(
  () => import("./input-clearable-demo").then((m) => ({ default: m.InputClearableDemo })),
  { ssr: false }
);
export const InputPasswordRevealDemo = dynamic(
  () => import("./input-password-reveal-demo").then((m) => ({ default: m.InputPasswordRevealDemo })),
  { ssr: false }
);
export const ResizableDemo = dynamic(
  () => import("./resizable-demo").then((m) => ({ default: m.ResizableDemo })),
  { ssr: false },
);

export const TextareaDisabledDemo = dynamic(
  () => import("./textarea-disabled-demo").then((m) => ({ default: m.TextareaDisabledDemo })),
  { ssr: false },
);

export const ComboboxSizesDemo = dynamic(
  () => import("./combobox-sizes-demo").then((m) => ({ default: m.ComboboxSizesDemo })),
  { ssr: false },
);

export const InputErrorDemo = dynamic(
  () => import("./input-error-demo").then((m) => ({ default: m.InputErrorDemo })),
  { ssr: false },
);

export const AvatarDicebearSimpleDemo = dynamic(
  () => import("./avatar-dicebear-simple-demo").then((m) => ({ default: m.AvatarDicebearSimpleDemo })),
  { ssr: false },
);

export const CommandDialogSimpleDemo = dynamic(
  () => import("./command-dialog-simple-demo").then((m) => ({ default: m.CommandDialogSimpleDemo })),
  { ssr: false },
);

export const LabelDisabledDemo = dynamic(
  () => import("./label-disabled-demo").then((m) => ({ default: m.LabelDisabledDemo })),
  { ssr: false },
);

export const CarouselMultipleDemo = dynamic(
  () => import("./carousel-multiple-demo").then((m) => ({ default: m.CarouselMultipleDemo })),
  { ssr: false },
);

export const ComboboxErrorDemo = dynamic(
  () => import("./combobox-error-demo").then((m) => ({ default: m.ComboboxErrorDemo })),
  { ssr: false },
);

export const ComboboxGroupsDemo = dynamic(
  () => import("./combobox-groups-demo").then((m) => ({ default: m.ComboboxGroupsDemo })),
  { ssr: false },
);

export const TooltipInstantDemo = dynamic(
  () => import("./tooltip-instant-demo").then((m) => ({ default: m.TooltipInstantDemo })),
  { ssr: false },
);

export const SelectDisabledDemo = dynamic(
  () => import("./select-disabled-demo").then((m) => ({ default: m.SelectDisabledDemo })),
  { ssr: false },
);

export const ScrollAreaDemo = dynamic(
  () => import("./scroll-area-demo").then((m) => ({ default: m.ScrollAreaDemo })),
  { ssr: false },
);

export const ButtonWithIconDemo = dynamic(
  () => import("./button-with-icon-demo").then((m) => ({ default: m.ButtonWithIconDemo })),
  { ssr: false },
);

export const CardPricingDemo = dynamic(
  () => import("./card-pricing-demo").then((m) => ({ default: m.CardPricingDemo })),
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

export const ProgressIndeterminateDemo = dynamic(
  () => import("./progress-indeterminate-demo").then((m) => ({ default: m.ProgressIndeterminateDemo })),
  { ssr: false },
);

export const DialogDestructiveDemo = dynamic(
  () => import("./dialog-destructive-demo").then((m) => ({ default: m.DialogDestructiveDemo })),
  { ssr: false },
);

export const DatePickerMultiMonthDemo = dynamic(
  () => import("./date-picker-multi-month-demo").then((m) => ({ default: m.DatePickerMultiMonthDemo })),
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

export const AccordionControlledDemo = dynamic(
  () => import("./accordion-controlled-demo").then((m) => ({ default: m.AccordionControlledDemo })),
  { ssr: false },
);

export const PopoverDemo = dynamic(
  () => import("./popover-demo").then((m) => ({ default: m.PopoverDemo })),
  { ssr: false },
);

export const ButtonSizesDemo = dynamic(
  () => import("./button-sizes-demo").then((m) => ({ default: m.ButtonSizesDemo })),
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

export const DatePickerRangeMinMaxDemo = dynamic(
  () => import("./date-picker-range-min-max-demo").then((m) => ({ default: m.DatePickerRangeMinMaxDemo })),
  { ssr: false },
);

export const SeparatorWithTextI18nDemo = dynamic(
  () => import("./separator-with-text-i18n-demo").then((m) => ({ default: m.SeparatorWithTextI18nDemo })),
  { ssr: false },
);

export const ComboboxDisabledDemo = dynamic(
  () => import("./combobox-disabled-demo").then((m) => ({ default: m.ComboboxDisabledDemo })),
  { ssr: false },
);

export const ScrollAreaListDemo = dynamic(
  () => import("./scroll-area-list-demo").then((m) => ({ default: m.ScrollAreaListDemo })),
  { ssr: false },
);

export const InputWithIconDemo = dynamic(
  () => import("./input-with-icon-demo").then((m) => ({ default: m.InputWithIconDemo })),
  { ssr: false },
);



export const ToggleGroupDemo = dynamic(
  () => import("./toggle-group-demo").then((m) => ({ default: m.ToggleGroupDemo })),
  { ssr: false },
);

export const DatePickerRangeDemo = dynamic(
  () => import("./date-picker-range-demo").then((m) => ({ default: m.DatePickerRangeDemo })),
  { ssr: false },
);

export const CalendarMonthYearDemo = dynamic(
  () => import("./calendar-month-year-demo").then((m) => ({ default: m.CalendarMonthYearDemo })),
  { ssr: false },
);

export const AvatarGitSimpleDemo = dynamic(
  () => import("./avatar-git-simple-demo").then((m) => ({ default: m.AvatarGitSimpleDemo })),
  { ssr: false },
);

export const DropdownMenuRadioGroupDemo = dynamic(
  () => import("./dropdown-menu-radio-group-demo").then((m) => ({ default: m.DropdownMenuRadioGroupDemo })),
  { ssr: false },
);

export const CalendarSimpleDemo = dynamic(
  () => import("./calendar-simple-demo").then((m) => ({ default: m.CalendarSimpleDemo })),
  { ssr: false },
);

export const TooltipRichContentDemo = dynamic(
  () => import("./tooltip-rich-content-demo").then((m) => ({ default: m.TooltipRichContentDemo })),
  { ssr: false },
);

export const ProgressDemo = dynamic(
  () => import("./progress-demo").then((m) => ({ default: m.ProgressDemo })),
  { ssr: false },
);

export const ProgressBasicDemo = dynamic(
  () => import("./progress-basic-demo").then((m) => ({ default: m.ProgressBasicDemo })),
  { ssr: false },
);

export const AnimatedCircularProgressBarDemo = dynamic(
  () => import("./animated-circular-progress-bar-demo").then((m) => ({ default: m.AnimatedCircularProgressBarDemo })),
  { ssr: false }
);



export const ComboboxWidthDemo = dynamic(
  () => import("./combobox-width-demo").then((m) => ({ default: m.ComboboxWidthDemo })),
  { ssr: false },
);

export const DatePickerVariantsDemo = dynamic(
  () => import("./date-picker-variants-demo").then((m) => ({ default: m.DatePickerVariantsDemo })),
  { ssr: false },
);

export const TextareaWithLimitDemo = dynamic(
  () => import("./textarea-with-limit-demo").then((m) => ({ default: m.TextareaWithLimitDemo })),
  { ssr: false },
);

export const SeparatorWithTextDemo = dynamic(
  () => import("./separator-with-text-demo").then((m) => ({ default: m.SeparatorWithTextDemo })),
  { ssr: false },
);

export const LabelDescriptionDemo = dynamic(
  () => import("./label-description-demo").then((m) => ({ default: m.LabelDescriptionDemo })),
  { ssr: false },
);

export const InputWithAddonsDemo = dynamic(
  () => import("./input-with-addons-demo").then((m) => ({ default: m.InputWithAddonsDemo })),
  { ssr: false },
);

export const ToggleSmallDemo = dynamic(
  () => import("./toggle-small-demo").then((m) => ({ default: m.ToggleSmallDemo })),
  { ssr: false },
);

export const BreadcrumbEllipsisDemo = dynamic(
  () => import("./breadcrumb-ellipsis-demo").then((m) => ({ default: m.BreadcrumbEllipsisDemo })),
  { ssr: false },
);

export const TabsPillDemo = dynamic(
  () => import("./tabs-pill-demo").then((m) => ({ default: m.TabsPillDemo })),
  { ssr: false },
);

export const ToggleGroupSingleDemo = dynamic(
  () => import("./toggle-group-single-demo").then((m) => ({ default: m.ToggleGroupSingleDemo })),
  { ssr: false },
);

export const DropdownMenuDemo = dynamic(
  () => import("./dropdown-menu-demo").then((m) => ({ default: m.DropdownMenuDemo })),
  { ssr: false },
);

export const SelectGroupsDemo = dynamic(
  () => import("./select-groups-demo").then((m) => ({ default: m.SelectGroupsDemo })),
  { ssr: false },
);

export const CalendarRangeMultiMonthDemo = dynamic(
  () => import("./calendar-range-multi-month-demo").then((m) => ({ default: m.CalendarRangeMultiMonthDemo })),
  { ssr: false },
);

export const AvatarGroupSimpleDemo = dynamic(
  () => import("./avatar-group-simple-demo").then((m) => ({ default: m.AvatarGroupSimpleDemo })),
  { ssr: false },
);

export const DrawerDemo = dynamic(
  () => import("./drawer-demo").then((m) => ({ default: m.DrawerDemo })),
  { ssr: false },
);

export const PopoverControlledDemo = dynamic(
  () => import("./popover-controlled-demo").then((m) => ({ default: m.PopoverControlledDemo })),
  { ssr: false },
);

export const ProgressCustomColorDemo = dynamic(
  () => import("./progress-custom-color-demo").then((m) => ({ default: m.ProgressCustomColorDemo })),
  { ssr: false },
);

export const ProgressWithLabelDemo = dynamic(
  () => import("./progress-with-label-demo").then((m) => ({ default: m.ProgressWithLabelDemo })),
  { ssr: false },
);

export const TabsLineDemo = dynamic(
  () => import("./tabs-line-demo").then((m) => ({ default: m.TabsLineDemo })),
  { ssr: false },
);

export const TabsButtonDemo = dynamic(
  () => import("./tabs-button-demo").then((m) => ({ default: m.TabsButtonDemo })),
  { ssr: false },
);

export const TooltipIconButtonDemo = dynamic(
  () => import("./tooltip-icon-button-demo").then((m) => ({ default: m.TooltipIconButtonDemo })),
  { ssr: false },
);

export const TooltipSideRightDemo = dynamic(
  () => import("./tooltip-side-right-demo").then((m) => ({ default: m.TooltipSideRightDemo })),
  { ssr: false },
);

export const InputWithLabelDemo = dynamic(
  () => import("./input-with-label-demo").then((m) => ({ default: m.InputWithLabelDemo })),
  { ssr: false },
);

export const AvatarFallbackSimpleDemo = dynamic(
  () => import("./avatar-fallback-simple-demo").then((m) => ({ default: m.AvatarFallbackSimpleDemo })),
  { ssr: false },
);

export const AccordionCompactDemo = dynamic(
  () => import("./accordion-compact-demo").then((m) => ({ default: m.AccordionCompactDemo })),
  { ssr: false },
);

export const ToggleLargeDemo = dynamic(
  () => import("./toggle-large-demo").then((m) => ({ default: m.ToggleLargeDemo })),
  { ssr: false },
);

export const CheckboxIndeterminateDemo = dynamic(
  () => import("./checkbox-indeterminate-demo").then((m) => ({ default: m.CheckboxIndeterminateDemo })),
  { ssr: false },
);

export const AccordionDisabledDemo = dynamic(
  () => import("./accordion-disabled-demo").then((m) => ({ default: m.AccordionDisabledDemo })),
  { ssr: false },
);

export const SheetDemo = dynamic(
  () => import("./sheet-demo").then((m) => ({ default: m.SheetDemo })),
  { ssr: false },
);

export const RadioGroupHorizontalDemo = dynamic(
  () => import("./radio-group-horizontal-demo").then((m) => ({ default: m.RadioGroupHorizontalDemo })),
  { ssr: false },
);

export const DrawerSideRightDemo = dynamic(
  () => import("./drawer-side-right-demo").then((m) => ({ default: m.DrawerSideRightDemo })),
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

export const BadgeAllColorsDemo = dynamic(
  () => import("./badge-all-colors-demo").then((m) => ({ default: m.BadgeAllColorsDemo })),
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
