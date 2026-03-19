"use client"

import * as React from "react"
import {
  CardTitle,
  CardFooter,
  Button,
  CardHeader,
  CardDescription,
} from "@nebutra/ui/primitives"

import { Card, CardBody } from "@nebutra/ui/patterns"
export function CardPricingDemo() {
  return (
    <Card variant="gradient" padding="lg">
      <CardHeader>
        <CardTitle>Pro Plan</CardTitle>
        <CardDescription>Everything you need to ship faster.</CardDescription>
      </CardHeader>
      <CardBody>
        <p className="text-3xl font-bold">
          $49
          <span className="text-base font-normal text-muted-foreground">
            /mo
          </span>
        </p>
      </CardBody>
      <CardFooter>
        <Button className="w-full">Get started</Button>
      </CardFooter>
    </Card>
  )
}
