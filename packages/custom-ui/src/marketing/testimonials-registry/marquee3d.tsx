"use client";

import type { TestimonialsCommonProps } from "./types";
import { cn } from "../../utils/cn";
import { Marquee } from "../marquee";
import { Card, CardContent } from "../../primitives/card";
import { Avatar, AvatarImage, AvatarFallback } from "../../primitives/avatar";

/**
 * TestimonialCard - Standard design from reference
 * w-50 (200px), Avatar size-9 (36px), proper spacing
 */
function TestimonialCard({
  img,
  name,
  username,
  body,
  country,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  country?: string;
}) {
  return (
    <Card className="w-50">
      <CardContent>
        <div className="flex items-center gap-2.5">
          <Avatar className="size-9">
            <AvatarImage src={img} alt={username} />
            <AvatarFallback>{name?.[0] ?? "?"}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-foreground flex items-center gap-1">
              {name} {country && <span className="text-xs">{country}</span>}
            </figcaption>
            <p className="text-xs font-medium text-muted-foreground">
              {username}
            </p>
          </div>
        </div>
        <blockquote className="mt-3 text-sm text-secondary-foreground">
          {body}
        </blockquote>
      </CardContent>
    </Card>
  );
}

export function Marquee3DTestimonials({
  items,
  className,
  height = 384,
}: TestimonialsCommonProps) {
  // map unified items to card props; provide sensible fallbacks
  const mapped = (items ?? []).map((x, i) => ({
    img: x.avatarUrl ?? "https://randomuser.me/api/portraits/women/32.jpg",
    name: x.author,
    username: x.company
      ? `@${x.company.toLowerCase().replace(/\s+/g, "")}`
      : `@user${i}`,
    body: x.quote,
    country: undefined,
  }));

  if (mapped.length === 0) return null;

  return (
    <div
      className={cn(
        "border border-border rounded-lg relative flex h-96 w-full max-w-[800px] flex-row items-center justify-center overflow-hidden gap-1.5 [perspective:300px]",
        className,
      )}
      style={height ? { height } : undefined}
    >
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
        }}
      >
        {/* Vertical Marquee (downwards) */}
        <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
          {mapped.map((review) => (
            <TestimonialCard key={`col1-${review.username}`} {...review} />
          ))}
        </Marquee>
        {/* Vertical Marquee (upwards) */}
        <Marquee
          vertical
          pauseOnHover
          reverse
          repeat={3}
          className="[--duration:40s]"
        >
          {mapped.map((review) => (
            <TestimonialCard key={`col2-${review.username}`} {...review} />
          ))}
        </Marquee>
        {/* Vertical Marquee (downwards) */}
        <Marquee
          vertical
          pauseOnHover
          repeat={3}
          className="[--duration:40s] hidden sm:flex"
        >
          {mapped.map((review) => (
            <TestimonialCard key={`col3-${review.username}`} {...review} />
          ))}
        </Marquee>
        {/* Vertical Marquee (upwards) */}
        <Marquee
          vertical
          pauseOnHover
          reverse
          repeat={3}
          className="[--duration:40s] hidden md:flex"
        >
          {mapped.map((review) => (
            <TestimonialCard key={`col4-${review.username}`} {...review} />
          ))}
        </Marquee>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
      </div>
    </div>
  );
}
