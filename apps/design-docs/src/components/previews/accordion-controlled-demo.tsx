/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";
import { AccordionTrigger, AccordionContent, AccordionItem } from "@nebutra/ui/primitives";

export function AccordionControlledDemo() {
  return (
    <NebutraAccordion type="single" defaultValue="item-1" className="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger>Controlled Item</AccordionTrigger>
      <AccordionContent>This accordion is controlled.</AccordionContent>
    </AccordionItem>
  </NebutraAccordion>
  );
}
