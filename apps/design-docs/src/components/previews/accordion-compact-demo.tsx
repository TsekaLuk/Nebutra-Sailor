/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";
import { AccordionTrigger, AccordionContent, AccordionItem } from "@nebutra/ui/primitives";

export function AccordionCompactDemo() {
  return (
    <NebutraAccordion type="single" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger size="small">Compact Question</AccordionTrigger>
        <AccordionContent size="small">
          Compact content with reduced padding.
        </AccordionContent>
      </AccordionItem>
    </NebutraAccordion>
  );
}
