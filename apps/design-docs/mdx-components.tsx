import defaultComponents from "fumadocs-ui/mdx";
import { Callout } from "fumadocs-ui/components/callout";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { ComponentPreview } from "@/components/component-preview";
import { Tab, Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/mdx-tabs";
import {
  Tip,
  Warning,
  Info,
  Note,
  Check,
  Step,
  Steps,
  Accordion,
  Accordions,
  AccordionGroup,
  Card,
  CardGroup,
} from "@/components/mdx-compat";
import {
  AccordionDemo,
  AvatarSizeDemo,
  AvatarGroupDemo,
  AvatarFallbackDemo,
  AvatarGitPlatformDemo,
  AvatarWithIconDemo,
  DiceBearAvatarDemo,
  BadgeDemo,
  ButtonDemo,
  CheckboxDemo,
  ComboboxDemo,
  DialogDemo,
  InputDemo,
  SelectDemo,
  SwitchDemo,
  TabsDemo,
  TooltipDemo,
} from "@/components/previews/dynamic-demos";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    // fumadocs built-in
    Callout,
    // Tabs
    Tab,
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    // Steps
    Step,
    Steps,
    // Accordion
    Accordion,
    Accordions,
    // Mintlify compat
    Tip,
    Warning,
    Info,
    Note,
    Check,
    AccordionGroup,
    Card,
    CardGroup,
    // Standard
    Link,
    // Live preview demos
    AccordionDemo,
    AvatarSizeDemo,
    AvatarGroupDemo,
    AvatarFallbackDemo,
    AvatarGitPlatformDemo,
    AvatarWithIconDemo,
    DiceBearAvatarDemo,
    BadgeDemo,
    ButtonDemo,
    CheckboxDemo,
    ComboboxDemo,
    DialogDemo,
    InputDemo,
    SelectDemo,
    SwitchDemo,
    TabsDemo,
    TooltipDemo,
    // Custom preview wrapper
    ComponentPreview,
    ...components,
  };
}
