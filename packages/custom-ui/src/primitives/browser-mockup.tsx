"use client";

import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import { cn } from "../utils/cn";

export interface BrowserMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image source URL or StaticImageData */
  image?: StaticImageData | string;
  /** Alt text for the image */
  imageAlt?: string;
  /** URL to display in the address bar (decorative) */
  url?: string;
  /** Custom placeholder when no image is provided */
  placeholder?: React.ReactNode;
  /** Image width */
  imageWidth?: number;
  /** Image height */
  imageHeight?: number;
}

/**
 * BrowserMockup - Safari-style browser window frame
 *
 * A decorative browser window frame for displaying screenshots, demos, or previews.
 * Includes traffic light buttons and address bar styling.
 *
 * @example
 * ```tsx
 * <BrowserMockup
 *   image="/screenshots/dashboard.png"
 *   url="https://example.com"
 * />
 * ```
 */
export function BrowserMockup({
  image,
  imageAlt = "Preview",
  url,
  placeholder,
  imageWidth = 800,
  imageHeight = 450,
  className,
  ...props
}: BrowserMockupProps) {
  return (
    <div
      className={cn(
        "min-w-[700px] rounded-xl border border-zinc-200 dark:border-zinc-800 bg-muted shadow-md overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Browser top bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        {/* Traffic lights */}
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-red-400 rounded-full" aria-hidden="true" />
          <span className="w-3 h-3 bg-yellow-400 rounded-full" aria-hidden="true" />
          <span className="w-3 h-3 bg-green-500 rounded-full" aria-hidden="true" />
        </div>

        {/* Address bar */}
        <div className="flex-1 mx-4 bg-gray-200 dark:bg-zinc-800 rounded-md h-5 max-w-md flex items-center justify-center">
          {url && (
            <span className="text-xs text-muted-foreground truncate px-2">
              {url}
            </span>
          )}
        </div>

        {/* Right side placeholder */}
        <div className="w-4 h-4" />
      </div>

      {/* Content area */}
      <div className="bg-gray-100 dark:bg-zinc-800 aspect-video flex items-center justify-center">
        {image ? (
          <Image
            src={image}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="object-contain max-h-full max-w-full"
          />
        ) : (
          placeholder || (
            <div className="text-sm text-gray-500 dark:text-gray-400">
              No preview image
            </div>
          )
        )}
      </div>
    </div>
  );
}

BrowserMockup.displayName = "BrowserMockup";
