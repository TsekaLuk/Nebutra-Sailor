"use client";

import dynamic from "next/dynamic";

export const AccordionDemo = dynamic(
  () => import("./accordion-demo").then((m) => ({ default: m.AccordionDemo })),
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

export const CheckboxDemo = dynamic(
  () => import("./checkbox-demo").then((m) => ({ default: m.CheckboxDemo })),
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
