/**
 * Brand Guidelines - 品牌使用规范
 *
 * Based on: 云毓智能品牌视觉识别手册 (Nebutra Brand Visual Identity Manual)
 *
 * This module provides programmatic access to brand guidelines for:
 * - Design system integration
 * - Automated compliance checking
 * - Documentation generation
 */

// Logo Guidelines
export {
  logoSafetyZone,
  logoMinSize,
  logoVariants,
  logoColorUsage,
  logoProhibitedUses,
  logoGrid,
  logoSpecialVersions,
} from "./logo";

export type { LogoVariant, LogoProhibitedUse } from "./logo";

// Color Guidelines
export {
  nebutraBlue,
  nebutraCyan,
  brandGradient,
  neutralColors,
  colorProhibitedUses,
  allowedColorCombinations,
  generateColorScale,
  // Complete color scales
  nebutraBlueScale,
  nebutraCyanScale,
  nebutraNeutralScale,
  semanticColors,
} from "./color";

export type { ColorProhibitedUse, AllowedColorCombination } from "./color";

/**
 * Complete Brand Guidelines Object
 *
 * Unified export for easy consumption
 */
export const brandGuidelines = {
  // Logo
  logo: {
    safetyZone: {
      ratio: 0.25,
      description: "最小边距不小于标志高度的 1/4",
    },
    minSize: {
      print: { minHeightMm: 6 },
      digital: { minHeightPx: 35 },
    },
  },

  // Colors
  colors: {
    primary: {
      name: "云毓蓝",
      hex: "#0033FE",
    },
    secondary: {
      name: "云毓青",
      hex: "#0BF1C3",
    },
    gradient: "linear-gradient(135deg, #0033FE 0%, #0BF1C3 100%)",
  },

  // Typography
  typography: {
    cn: "vivo Sans",
    en: "Poppins",
    weights: ["Light", "Regular", "Medium", "DemiBold", "Bold"],
  },
} as const;

export type BrandGuidelines = typeof brandGuidelines;
