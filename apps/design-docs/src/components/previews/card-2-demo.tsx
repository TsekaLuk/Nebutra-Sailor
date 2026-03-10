/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";
import { CardTitle, Card, CardHeader, CardDescription } from "@nebutra/ui/primitives";

import { Zap } from "lucide-react"

<Card variant="bordered" padding="md">
  <CardHeader>
    <CardIcon size="md">
      <Zap className="h-5 w-5" />
    </CardIcon>
    <CardTitle>Fast Deployments</CardTitle>
  </CardHeader>
  <CardBody>
    <CardDescription>Deploy in seconds.</CardDescription>
  </CardBody>
</Card>

export function Card2Demo() {
  return (
    <NebutraCard variant="bordered" padding="md">
    <CardHeader>
      <CardIcon size="md">
        <span>⚡️</span>
      </CardIcon>
      <CardTitle>Fast Deployments</CardTitle>
    </CardHeader>
    <CardBody>
      <CardDescription>Deploy in seconds.</CardDescription>
    </CardBody>
  </NebutraCard>
  );
}
