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
export function CardDemo() {
  return (
    <Card variant="default" padding="md">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
      </CardHeader>
      <CardBody>
        <CardDescription>Launch your next big idea securely.</CardDescription>
      </CardBody>
      <CardFooter className="gap-2 flex justify-end">
        <Button variant="outline">Cancel</Button>
        <Button>Create</Button>
      </CardFooter>
    </Card>
  )
}
