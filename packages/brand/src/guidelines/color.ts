/**
 * Color Usage Guidelines - 品牌色彩使用规范
 * 
 * Based on: 云毓智能品牌视觉识别手册 (Nebutra Brand Visual Identity Manual)
 */

/**
 * Brand Primary Color - 云毓蓝 (Nebutra Blue)
 * 
 * 云毓蓝是品牌的核心标准色。蓝色象征科技与信任，契合云毓智能在AI-SaaS与云端数据智能领域的专业定位。
 * "云"代表云端平台，"毓"寓意孕育与转化。
 */
export const nebutraBlue = {
  name: "云毓蓝",
  nameEn: "Nebutra Blue",
  
  /** Color values */
  hex: "#0033FE",
  rgb: { r: 0, g: 51, b: 254 },
  hsl: { h: 228, s: 100, l: 50 },
  
  /** Print color values (if needed) */
  cmyk: { c: 100, m: 80, y: 0, k: 0 },
  
  /** Semantic meaning */
  meaning: "象征科技与信任，体现创新、可靠与无限潜力",
  
  /** Usage */
  usage: [
    "主要品牌色",
    "标志主色",
    "重要按钮/CTA",
    "标题强调",
    "链接颜色",
  ],
} as const;

/**
 * Brand Secondary Color - 云毓青 (Nebutra Cyan)
 * 
 * 品牌主要辅助色定义为"云毓青"。它源于数据流动与智能交互的瞬间，
 * 青色的通透感象征着信息的清晰与算法的灵动。
 */
export const nebutraCyan = {
  name: "云毓青",
  nameEn: "Nebutra Cyan",
  
  /** Color values */
  hex: "#0BF1C3",
  rgb: { r: 11, g: 241, b: 195 },
  hsl: { h: 168, s: 91, l: 49 },
  
  /** Print color values (if needed) */
  cmyk: { c: 55, m: 0, y: 35, k: 0 },
  
  /** Semantic meaning */
  meaning: "象征信息的清晰与算法的灵动，体现从原始数据到智慧产品的转化路径",
  
  /** Usage */
  usage: [
    "辅助品牌色",
    "渐变终止色",
    "交互反馈",
    "成功状态",
    "数据可视化",
  ],
} as const;

/**
 * Brand Gradient - 品牌渐变
 * 
 * 色彩上使用清新明快的蓝绿渐变，通过线性渐变与角度渐变的方式填充，
 * 让整体更具未来感与科技的锋芒。
 */
export const brandGradient = {
  /** Primary gradient (135°) - Logo标准渐变 */
  primary: {
    css: "linear-gradient(135deg, #0033FE 0%, #0BF1C3 100%)",
    angle: 135,
    stops: [
      { color: "#0033FE", position: 0 },
      { color: "#0BF1C3", position: 100 },
    ],
    usage: "Logo、Hero区域、主要CTA按钮",
  },
  
  /** Reverse gradient */
  reverse: {
    css: "linear-gradient(135deg, #0BF1C3 0%, #0033FE 100%)",
    angle: 135,
    stops: [
      { color: "#0BF1C3", position: 0 },
      { color: "#0033FE", position: 100 },
    ],
    usage: "次要元素、hover状态",
  },
  
  /** Vertical gradient */
  vertical: {
    css: "linear-gradient(180deg, #0033FE 0%, #0BF1C3 100%)",
    angle: 180,
    stops: [
      { color: "#0033FE", position: 0 },
      { color: "#0BF1C3", position: 100 },
    ],
    usage: "垂直布局元素、页面分割",
  },
  
  /** Radial gradient */
  radial: {
    css: "radial-gradient(circle, #0BF1C3 0%, #0033FE 100%)",
    type: "radial",
    stops: [
      { color: "#0BF1C3", position: 0 },
      { color: "#0033FE", position: 100 },
    ],
    usage: "背景光晕、焦点效果",
  },
} as const;

/**
 * Neutral Colors - 黑白 (VI标准)
 */
export const neutralColors = {
  white: {
    name: "白",
    nameEn: "White",
    hex: "#FFFFFF",
    rgb: { r: 255, g: 255, b: 255 },
    usage: "背景、文字反白",
  },
  black: {
    name: "黑",
    nameEn: "Black",
    hex: "#000000",
    rgb: { r: 0, g: 0, b: 0 },
    usage: "正文文字、墨稿标志",
  },
} as const;

/**
 * Color Prohibited Uses - 色彩禁用示例
 * 
 * 为了使品牌标准色彩在未来的传播中更加科学有效，设置标准色和辅助色的使用规范。
 */
export const colorProhibitedUses = [
  {
    id: "high-saturation-overlay",
    name: "高饱和度背景与颜色重叠",
    description: "禁用高饱和度背景与颜色重叠，避免颜色过于刺眼，影响品牌形象",
    example: "不要在高饱和度的红、橙、黄等背景上使用品牌色",
  },
  {
    id: "high-brightness-overlay",
    name: "明度过高的重叠颜色",
    description: "禁用明度过高的重叠颜色，避免影响内容的识别性",
    example: "不要将浅色品牌色放在浅色背景上",
  },
  {
    id: "modify-brand-colors",
    name: "修改品牌标准色",
    description: "禁止调整品牌色的色相、饱和度或明度",
    example: "不要将云毓蓝调成紫色或浅蓝",
  },
  {
    id: "non-brand-gradient",
    name: "非品牌渐变",
    description: "禁止使用非品牌标准的渐变组合",
    example: "不要将云毓蓝与其他非品牌色进行渐变",
  },
] as const;

/**
 * Allowed Color Combinations - 允许使用的色彩组合
 */
export const allowedColorCombinations = [
  {
    name: "品牌渐变背景 + 白色文字",
    background: brandGradient.primary.css,
    foreground: "#FFFFFF",
    contrast: "AAA",
  },
  {
    name: "白色背景 + 云毓蓝文字",
    background: "#FFFFFF",
    foreground: "#0033FE",
    contrast: "AAA",
  },
  {
    name: "深色背景 + 云毓青强调",
    background: "#000000",
    foreground: "#0BF1C3",
    contrast: "AAA",
  },
  {
    name: "云毓蓝背景 + 白色文字",
    background: "#0033FE",
    foreground: "#FFFFFF",
    contrast: "AAA",
  },
] as const;

/**
 * Color Scale Generator
 * 
 * Generate color scale from a base color (50-950)
 */
export const generateColorScale = (baseHex: string) => {
  // This is a simplified version - in production, use a proper color manipulation library
  return {
    50: baseHex,   // Lightest
    100: baseHex,
    200: baseHex,
    300: baseHex,
    400: baseHex,
    500: baseHex,  // Base
    600: baseHex,
    700: baseHex,
    800: baseHex,
    900: baseHex,
    950: baseHex,  // Darkest
  };
};

// Type exports
export type ColorProhibitedUse = typeof colorProhibitedUses[number];
export type AllowedColorCombination = typeof allowedColorCombinations[number];
