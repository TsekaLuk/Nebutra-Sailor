"use client";

/**
 * HeroSelect - Dropdown select from HeroUI
 *
 * @description
 * A select component with support for single/multiple selection,
 * sections, virtualization, and custom rendering.
 *
 * @example Basic usage
 * ```tsx
 * import { HeroSelect, HeroSelectItem } from "@nebutra/custom-ui/primitives";
 *
 * <HeroSelect label="Favorite Animal" placeholder="Select an animal">
 *   <HeroSelectItem key="cat">Cat</HeroSelectItem>
 *   <HeroSelectItem key="dog">Dog</HeroSelectItem>
 *   <HeroSelectItem key="elephant">Elephant</HeroSelectItem>
 * </HeroSelect>
 * ```
 *
 * @example Multiple selection
 * ```tsx
 * <HeroSelect
 *   label="Animals"
 *   selectionMode="multiple"
 *   placeholder="Select animals"
 * >
 *   <HeroSelectItem key="cat">Cat</HeroSelectItem>
 *   <HeroSelectItem key="dog">Dog</HeroSelectItem>
 * </HeroSelect>
 * ```
 *
 * @example With sections
 * ```tsx
 * <HeroSelect label="Location">
 *   <HeroSelectSection title="North America">
 *     <HeroSelectItem key="us">United States</HeroSelectItem>
 *     <HeroSelectItem key="ca">Canada</HeroSelectItem>
 *   </HeroSelectSection>
 * </HeroSelect>
 * ```
 *
 * @example With virtualization (large lists)
 * ```tsx
 * <HeroSelect isVirtualized items={items} maxListboxHeight={400}>
 *   {(item) => <HeroSelectItem key={item.key}>{item.label}</HeroSelectItem>}
 * </HeroSelect>
 * ```
 */
export {
  Select as HeroSelect,
  SelectItem as HeroSelectItem,
  SelectSection as HeroSelectSection,
} from "@heroui/select";

export type {
  SelectProps as HeroSelectProps,
  SelectItemProps as HeroSelectItemProps,
  SelectSectionProps as HeroSelectSectionProps,
} from "@heroui/select";
