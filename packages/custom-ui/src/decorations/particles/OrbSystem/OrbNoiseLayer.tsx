"use client";

import * as React from "react";
import { cn } from "../../../utils/cn";

export interface OrbNoiseLayerProps extends Omit<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  "width" | "height"
> {
  /** Size of the noise layer in pixels (default: 240) */
  size?: number;
  /** Opacity of the noise texture 0-1 (default: 0.15) */
  opacity?: number;
  /** Whether to animate the noise (default: true) */
  animated?: boolean;
  /** Animation speed in frames per second (default: 12) */
  fps?: number;
}

/**
 * OrbNoiseLayer - Animated grain texture overlay for the orb.
 *
 * Features:
 * - Canvas-based noise generation
 * - Optional animation for subtle movement
 * - Blends with the orb for depth
 *
 * @example
 * <OrbNoiseLayer
 *   size={240}
 *   opacity={0.15}
 *   animated={true}
 *   fps={12}
 * />
 */
export const OrbNoiseLayer = React.forwardRef<
  HTMLCanvasElement,
  OrbNoiseLayerProps
>(
  (
    {
      size = 240,
      opacity = 0.15,
      animated = true,
      fps = 12,
      className,
      ...props
    },
    ref,
  ) => {
    const internalRef = React.useRef<HTMLCanvasElement>(null);
    const canvasRef =
      (ref as React.RefObject<HTMLCanvasElement>) || internalRef;

    React.useEffect(() => {
      const canvas =
        typeof canvasRef === "object" && canvasRef?.current
          ? canvasRef.current
          : null;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const generateNoise = () => {
        const imageData = ctx.createImageData(size, size);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
          // Calculate position for circular mask
          const pixelIndex = i / 4;
          const x = pixelIndex % size;
          const y = Math.floor(pixelIndex / size);
          const centerX = size / 2;
          const centerY = size / 2;
          const distance = Math.sqrt(
            Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2),
          );
          const maxDistance = size / 2;

          // Only render noise within the circular area
          if (distance < maxDistance) {
            const noise = Math.random() * 255;
            // Fade toward edges
            const edgeFade = 1 - distance / maxDistance;
            const alpha = Math.pow(edgeFade, 2) * opacity * 255;

            data[i] = noise; // R
            data[i + 1] = noise; // G
            data[i + 2] = noise; // B
            data[i + 3] = alpha; // A
          }
        }

        ctx.putImageData(imageData, 0, 0);
      };

      generateNoise();

      if (animated) {
        const interval = setInterval(generateNoise, 1000 / fps);
        return () => clearInterval(interval);
      }
    }, [size, opacity, animated, fps, canvasRef]);

    return (
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        className={cn(
          "absolute pointer-events-none mix-blend-overlay rounded-full",
          className,
        )}
        style={{
          width: size,
          height: size,
        }}
        aria-hidden="true"
        {...props}
      />
    );
  },
);

OrbNoiseLayer.displayName = "OrbNoiseLayer";
