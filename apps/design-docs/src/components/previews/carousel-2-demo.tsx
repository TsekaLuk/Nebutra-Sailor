"use client";

import * as React from "react";
import { Carousel2 } from "@nebutra/ui/primitives";

export function Carousel2Demo() {
  return (
    <Carousel opts={{ align: "start" }} className="w-full max-w-sm">
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <NebutraCard>
              <CardContent className="flex aspect-square items-center justify-center p-6">
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
