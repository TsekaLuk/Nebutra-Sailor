"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";

export interface OrbParticlesProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size of the particle field in pixels (default: 320) */
  size?: number;
  /** Number of particles (default: 10) */
  particleCount?: number;
  /**
   * Color of the particles.
   * Use CSS custom properties for theme compatibility:
   * - "hsl(var(--accent))" for accent color
   * - "hsl(var(--primary))" for primary brand color
   */
  particleColor?: string;
  /** Minimum particle size in pixels (default: 2) */
  minParticleSize?: number;
  /** Maximum particle size in pixels (default: 4) */
  maxParticleSize?: number;
  /** Base orbit duration in seconds (default: 15) */
  orbitDuration?: number;
}

interface Particle {
  id: number;
  size: number;
  radius: number;
  startAngle: number;
  duration: number;
  delay: number;
  opacity: number;
}

/**
 * OrbParticles - Floating micro-dots orbiting the orb core.
 *
 * Features:
 * - Randomized particle sizes and orbits
 * - Staggered orbital animations
 * - Varying speeds for natural movement
 *
 * @example
 * // Using semantic CSS variables (recommended)
 * <OrbParticles particleColor="hsl(var(--accent))" />
 *
 * @example
 * // Using custom hex colors (for decorative/artistic purposes)
 * <OrbParticles particleColor="#0BF1C3" />
 */
export const OrbParticles = React.forwardRef<HTMLDivElement, OrbParticlesProps>(
  (
    {
      size = 320,
      particleCount = 10,
      particleColor = "hsl(var(--accent))",
      minParticleSize = 2,
      maxParticleSize = 4,
      orbitDuration = 15,
      className,
      ...props
    },
    ref,
  ) => {
    const particles = React.useMemo<Particle[]>(() => {
      return Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        size:
          minParticleSize + Math.random() * (maxParticleSize - minParticleSize),
        radius: (size / 2) * (0.5 + Math.random() * 0.4),
        startAngle: Math.random() * 360,
        duration: orbitDuration * (0.7 + Math.random() * 0.6),
        delay: Math.random() * -orbitDuration,
        opacity: 0.4 + Math.random() * 0.4,
      }));
    }, [particleCount, size, minParticleSize, maxParticleSize, orbitDuration]);

    const centerX = size / 2;
    const centerY = size / 2;

    return (
      <div
        ref={ref}
        className={cn("absolute pointer-events-none", className)}
        style={{ width: size, height: size }}
        aria-hidden="true"
        {...props}
      >
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particleColor,
              boxShadow: `0 0 ${particle.size * 2}px ${particleColor}`,
              opacity: particle.opacity,
              left: centerX - particle.size / 2,
              top: centerY - particle.size / 2,
            }}
            animate={{
              x: [
                Math.cos((particle.startAngle * Math.PI) / 180) *
                  particle.radius,
                Math.cos(((particle.startAngle + 360) * Math.PI) / 180) *
                  particle.radius,
              ],
              y: [
                Math.sin((particle.startAngle * Math.PI) / 180) *
                  particle.radius,
                Math.sin(((particle.startAngle + 360) * Math.PI) / 180) *
                  particle.radius,
              ],
              scale: [1, 1.2, 1],
            }}
            transition={{
              x: {
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
                delay: particle.delay,
              },
              y: {
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
                delay: particle.delay,
              },
              scale: {
                duration: particle.duration / 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              },
            }}
          />
        ))}
      </div>
    );
  },
);

OrbParticles.displayName = "OrbParticles";
