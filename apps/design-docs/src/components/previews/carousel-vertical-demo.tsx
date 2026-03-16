/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";
import { CarouselPrevious, CarouselItem, CardContent, CarouselContent, CarouselNext } from "@nebutra/ui/primitives";

export function CarouselVerticalDemo() {
  return (
    <Carousel orientation="vertical" opts={{ align: "start" }} className="w-full max-w-xs">
    <CarouselContent className="-mt-1 h-[200px]">
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index} className="pt-1 md:basis-1/2">
          <div className="p-1">
            <NebutraCard>
              <CardContent className="flex items-center justify-center p-6">
                <span className="text-3xl font-semibold">{index + 1}</span>
              </CardContent>
            </NebutraCard>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  );
}
