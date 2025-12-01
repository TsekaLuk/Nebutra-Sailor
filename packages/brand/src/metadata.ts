/**
 * Nebutra Brand Metadata
 * Central source of truth for brand identity
 * 
 * Based on: 云毓智能品牌视觉识别手册 (Nebutra Brand Visual Identity Manual)
 */

export const brand = {
  // Brand names
  name: "Nebutra",
  nameCn: "云毓智能",
  nameFull: "无锡云毓智能科技有限公司",
  nameFullEn: "Wuxi Nebutra Intelligent Technology Co., Ltd.",
  
  tagline: "Enterprise SaaS Platform",
  taglineCn: "智能数据·云端孕育",
  description: "AI-native enterprise platform for multi-tenant systems",
  descriptionCn: "致力于将分散数据在云端整合、处理，并转化为有价值产品与服务",
  
  // Brand story
  story: {
    concept: "Logo以首字母N的基础造型概念为主要设计框架，通过几何正负空间构建隐形'N'，形成近似六边形的稳定结构",
    colorMeaning: "蓝绿渐变体现未来感与科技锋芒，'云'代表云端平台，'毓'寓意孕育与转化",
    values: ["创新", "可靠", "无限潜力", "前瞻性", "突破精神"],
  },
  
  // Official domains
  domains: {
    landing: "nebutra.com",
    app: "app.nebutra.com",
    api: "api.nebutra.com",
    studio: "studio.nebutra.com",
    cdn: "cdn.nebutra.com",
  },
  
  // Social links
  social: {
    twitter: "https://twitter.com/nebutra",
    github: "https://github.com/nebutra",
    discord: "https://discord.gg/nebutra",
    linkedin: "https://linkedin.com/company/nebutra",
  },
} as const;

/**
 * Brand Colors - 云毓智能品牌色彩规范
 * 
 * 云毓蓝 (Nebutra Blue): #0033FE - 象征科技与信任
 * 云毓青 (Nebutra Cyan): #0BF1C3 - 象征数据流动与智能交互
 */
export const colors = {
  // 云毓蓝 - Primary brand color
  // 蓝色象征科技与信任，契合云毓智能在AI-SaaS与云端数据智能领域的专业定位
  primary: {
    50: "#e6ebff",
    100: "#ccd7ff",
    200: "#99afff",
    300: "#6687ff",
    400: "#335ffe",
    500: "#0033FE", // 云毓蓝 Main (VI标准色)
    600: "#0029cb",
    700: "#001f98",
    800: "#001466",
    900: "#000a33",
    950: "#00051a",
  },
  
  // 云毓青 - Secondary / Accent
  // 青色的通透感象征信息的清晰与算法的灵动
  accent: {
    50: "#e7fef8",
    100: "#cffdf1",
    200: "#9ffbe3",
    300: "#6ff9d5",
    400: "#3df5c9",
    500: "#0BF1C3", // 云毓青 Main (VI标准色)
    600: "#09c19c",
    700: "#079175",
    800: "#05614e",
    900: "#023027",
    950: "#011814",
  },
  
  // 黑白 - Black & White (VI标准)
  white: "#FFFFFF",
  black: "#000000",
  
  // 品牌渐变 - 线性渐变与角度渐变
  gradient: {
    primary: "linear-gradient(135deg, #0033FE 0%, #0BF1C3 100%)",
    primaryReverse: "linear-gradient(135deg, #0BF1C3 0%, #0033FE 100%)",
    primaryVertical: "linear-gradient(180deg, #0033FE 0%, #0BF1C3 100%)",
    primaryRadial: "radial-gradient(circle, #0BF1C3 0%, #0033FE 100%)",
  },
  
  // Semantic colors (based on brand palette)
  success: "#22c55e",
  warning: "#f59e0b",
  error: "#ef4444",
  info: "#0033FE", // 使用品牌蓝
  
  // Neutrals
  neutral: {
    0: "#ffffff",
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b",
  },
} as const;

/**
 * Typography - 品牌标准字体
 * 
 * 中文: vivo Sans (Light/Regular/Medium/DemiBold/Bold)
 * 英文: Poppins (Regular/Medium/SemiBold)
 */
export const typography = {
  fontFamily: {
    // 中文字体 - vivo Sans 为主，系统字体为后备
    cn: '"vivo Sans", "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif',
    // 英文字体 - Poppins 为主
    en: '"Poppins", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    // 默认组合 (英文优先，中文后备)
    sans: '"Poppins", "vivo Sans", "PingFang SC", "Microsoft YaHei", sans-serif',
    // 代码字体
    mono: '"JetBrains Mono", "Fira Code", Consolas, monospace',
    // 展示字体 (标题/Hero)
    display: '"Poppins", "vivo Sans", sans-serif',
  },
  
  // Font weights - 基于 VI 手册字重规范
  fontWeight: {
    light: 300,      // vivo Sans Light
    normal: 400,     // vivo Sans Regular / Poppins Regular
    medium: 500,     // vivo Sans Medium / Poppins Medium
    semibold: 600,   // vivo Sans DemiBold / Poppins SemiBold
    bold: 700,       // vivo Sans Bold
  },
} as const;

/**
 * Logo asset paths (relative to package)
 */
export const logoAssets = {
  // Default logo
  default: "assets/logo/logo-color.svg",
  
  // Variants
  color: "assets/logo/logo-color.svg",
  inverse: "assets/logo/logo-inverse.svg",
  mono: "assets/logo/logo-mono.svg",
  
  // Localized
  en: "assets/logo/logo-en.svg",
  zh: "assets/logo/logo-zh.svg",
  zhEn: "assets/logo/logo-zh-en.svg",
  
  // Layouts
  horizontalEn: "assets/logo/logo-horizontal-en.svg",
  horizontalZh: "assets/logo/logo-horizontal-zh.svg",
  verticalEn: "assets/logo/logo-vertical-en.svg",
  verticalZh: "assets/logo/logo-vertical-zh.svg",
} as const;

/**
 * Favicon assets
 */
export const faviconAssets = {
  ico: "assets/favicon/favicon.ico",
  svg: "assets/favicon/favicon.svg",
  apple: "assets/favicon/apple-touch-icon.png",
  android192: "assets/favicon/android-chrome-192x192.png",
  android512: "assets/favicon/android-chrome-512x512.png",
} as const;

/**
 * OG Image dimensions
 */
export const ogImageDimensions = {
  default: { width: 1200, height: 630 },
  twitter: { width: 1200, height: 600 },
  square: { width: 1200, height: 1200 },
} as const;

export type BrandColors = typeof colors;
export type BrandTypography = typeof typography;
export type LogoAssets = typeof logoAssets;
