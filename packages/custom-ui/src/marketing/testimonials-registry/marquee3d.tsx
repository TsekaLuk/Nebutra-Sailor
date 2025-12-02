"use client";

import type { TestimonialsCommonProps } from "./types";
import { cn } from "../../utils/cn";
import { Marquee } from "../marquee";
import { Card, CardContent } from "../../primitives/card";
import { Avatar, AvatarImage, AvatarFallback } from "../../primitives/avatar";

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
    <Card
      className="w-48"
      role="article"
      aria-label={`Testimonial from ${name}`}
    >
      <CardContent>
        <div className="flex items-center gap-2.5">
          <Avatar className="size-9">
            <AvatarImage src={img} alt={username} />
            <AvatarFallback>{name?.[0] ?? "?"}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-foreground flex items-center gap-1">
              {name}{" "}
              {country ? <span className="text-xs">{country}</span> : null}
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
    img:
      x.avatarUrl ??
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=60",
    name: x.author,
    username: x.company
      ? `@${x.company.toLowerCase().replace(/\s+/g, "")}`
      : `@user${i}`,
    body: x.quote,
    country: undefined,
  }));

  if (mapped.length === 0) return null;

  // Split into 4 roughly equal columns
  const cols = 4;
  const perCol = Math.ceil(mapped.length / cols);
  const columns: (typeof mapped)[] = Array.from({ length: cols }, (_, c) =>
    mapped.slice(c * perCol, (c + 1) * perCol),
  );

  return (
    <div
      className={cn(
        "border border-border rounded-lg relative flex w-full max-w-[1000px] items-center justify-center overflow-hidden gap-1.5 [perspective:300px]",
        className,
      )}
      style={{ height }}
    >
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
        }}
      >
        {columns.map((col, idx) => (
          <Marquee
            key={idx}
            vertical
            pauseOnHover
            className="[--duration:40s]"
            reverse={idx % 2 === 1}
            repeat={3}
          >
            {col.map((r, i) => (
              <TestimonialCard key={`${idx}-${i}-${r.username}`} {...r} />
            ))}
          </Marquee>
        ))}

        {/* gradient masks */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
      </div>
    </div>
  );
}
