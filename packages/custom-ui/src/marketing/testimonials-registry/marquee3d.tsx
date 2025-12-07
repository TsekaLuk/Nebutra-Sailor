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
      className="w-44 sm:w-52 md:w-56 shrink-0"
      role="article"
      aria-label={`Testimonial from ${name}`}
    >
      <CardContent className="p-2.5 sm:p-3">
        <div className="flex items-center gap-2">
          <Avatar className="size-6 sm:size-7 shrink-0">
            <AvatarImage src={img} alt={username} />
            <AvatarFallback>{name?.[0] ?? "?"}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0">
            <figcaption className="text-[11px] sm:text-xs font-medium text-foreground flex items-center gap-1 truncate">
              {name}{" "}
              {country ? <span className="text-[10px]">{country}</span> : null}
            </figcaption>
            <p className="text-[10px] font-medium text-muted-foreground truncate">
              {username}
            </p>
          </div>
        </div>
        <blockquote className="mt-2 text-[11px] sm:text-xs text-secondary-foreground line-clamp-3 sm:line-clamp-4 leading-relaxed">
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

  // Responsive column count: 2 on mobile, 3 on tablet, 4 on desktop
  // We create 4 columns and hide extras via CSS
  const cols = 4;
  const perCol = Math.ceil(mapped.length / cols);
  const columns: (typeof mapped)[] = Array.from({ length: cols }, (_, c) =>
    mapped.slice(c * perCol, (c + 1) * perCol),
  );

  return (
    <div
      className={cn(
        "border border-border rounded-lg relative flex w-full max-w-[1000px] items-center justify-center overflow-hidden [perspective:200px] sm:[perspective:250px] md:[perspective:300px]",
        className,
      )}
      style={{ height }}
    >
      <div
        className="flex flex-row items-center gap-2 sm:gap-3 md:gap-4
          [transform:translateX(-50px)_translateZ(-50px)_rotateX(15deg)_rotateY(-8deg)_rotateZ(15deg)]
          sm:[transform:translateX(-80px)_translateZ(-80px)_rotateX(18deg)_rotateY(-9deg)_rotateZ(18deg)]
          md:[transform:translateX(-100px)_translateZ(-100px)_rotateX(20deg)_rotateY(-10deg)_rotateZ(20deg)]"
      >
        {columns.map((col, idx) => (
          <Marquee
            key={idx}
            vertical
            pauseOnHover
            className={cn(
              "[--duration:40s]",
              // Hide 3rd and 4th columns on mobile, show 3rd on tablet, all on desktop
              idx === 2 && "hidden sm:flex",
              idx === 3 && "hidden md:flex",
            )}
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
