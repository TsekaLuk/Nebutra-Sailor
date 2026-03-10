/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";
import { CardTitle, CardFooter, Button, CardHeader, CardDescription } from "@nebutra/ui/primitives";

export function CardDemo() {
  return (
    <NebutraCard variant="default" padding="md">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
      </CardHeader>
      <CardBody>
        <CardDescription>Launch your next big idea securely.</CardDescription>
      </CardBody>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Create</Button>
      </CardFooter>
    </NebutraCard>
  );
}
