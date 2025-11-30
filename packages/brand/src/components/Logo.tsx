"use client";

import * as React from "react";

export type LogoVariant = 
  | "color" 
  | "inverse" 
  | "mono" 
  | "en" 
  | "zh" 
  | "zh-en"
  | "horizontal-en"
  | "horizontal-zh"
  | "vertical-en"
  | "vertical-zh";

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Logo variant
   * @default "color"
   */
  variant?: LogoVariant;
  
  /**
   * Logo size (width)
   * @default 120
   */
  size?: number;
  
  /**
   * Custom className
   */
  className?: string;
}

/**
 * Nebutra Logo Component
 * 
 * Renders an inline SVG logo. For static assets, import from @nebutra/brand/assets/*
 * 
 * @example
 * ```tsx
 * <Logo variant="color" size={120} />
 * <Logo variant="inverse" className="h-8 w-auto" />
 * ```
 */
export function Logo({ 
  variant = "color", 
  size = 120,
  className,
  ...props 
}: LogoProps) {
  // Primary color based on variant
  const primaryColor = variant === "inverse" ? "#ffffff" : "#6366f1";
  const secondaryColor = variant === "mono" ? "#71717a" : "#14b8a6";
  
  // Calculate height based on aspect ratio (roughly 1:0.25 for horizontal)
  const aspectRatio = variant.includes("horizontal") ? 4 : 
                      variant.includes("vertical") ? 0.5 : 1;
  const height = size / aspectRatio;
  
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 120 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Nebutra Logo"
      role="img"
      {...props}
    >
      {/* Stylized "N" mark */}
      <path
        d="M4 24V6h4l10 12V6h4v18h-4L8 12v12H4z"
        fill={primaryColor}
      />
      
      {/* Accent dot */}
      <circle
        cx="26"
        cy="22"
        r="3"
        fill={secondaryColor}
      />
      
      {/* "ebutra" text */}
      <text
        x="32"
        y="22"
        fontFamily="Inter, sans-serif"
        fontSize="16"
        fontWeight="600"
        fill={primaryColor}
      >
        ebutra
      </text>
    </svg>
  );
}

/**
 * Logomark only (without text)
 */
export function Logomark({
  size = 32,
  className,
  variant = "color",
  ...props
}: Omit<LogoProps, "variant"> & { variant?: "color" | "inverse" | "mono" }) {
  const primaryColor = variant === "inverse" ? "#ffffff" : "#6366f1";
  const accentColor = variant === "mono" ? "#71717a" : "#14b8a6";
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Nebutra"
      role="img"
      {...props}
    >
      {/* Stylized "N" mark */}
      <path
        d="M6 26V6h5l10 14V6h5v20h-5L11 12v14H6z"
        fill={primaryColor}
      />
      
      {/* Accent dot */}
      <circle
        cx="26"
        cy="24"
        r="3"
        fill={accentColor}
      />
    </svg>
  );
}

/**
 * Wordmark only (text without logomark)
 */
export function Wordmark({
  size = 100,
  className,
  variant = "color",
  ...props
}: Omit<LogoProps, "variant"> & { variant?: "color" | "inverse" | "mono" }) {
  const color = variant === "inverse" ? "#ffffff" : 
                variant === "mono" ? "#18181b" : "#6366f1";
  
  return (
    <svg
      width={size}
      height={size * 0.25}
      viewBox="0 0 100 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Nebutra"
      role="img"
      {...props}
    >
      <text
        x="0"
        y="20"
        fontFamily="Inter, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill={color}
      >
        Nebutra
      </text>
    </svg>
  );
}

export default Logo;
