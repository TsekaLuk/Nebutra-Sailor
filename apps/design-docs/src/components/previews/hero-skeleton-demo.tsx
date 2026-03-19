"use client"

import { HeroSkeleton, Card, Button } from "@nebutra/ui/primitives"
import { useState } from "react"

export function HeroSkeletonDemo() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="gap-8 max-w-2xl p-4 md:p-8 mx-auto flex w-full flex-col items-center">
      <div className="gap-4 mb-4 flex">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsLoaded(!isLoaded)}
        >
          Toggle Loading State
        </Button>
      </div>

      <div className="md:grid-cols-2 gap-6 grid w-full grid-cols-1">
        {/* Card Example */}
        <Card className="p-4 gap-4 flex flex-col">
          <HeroSkeleton isLoaded={isLoaded} className="rounded-lg">
            <div className="h-32 flex w-full items-center justify-center rounded-lg bg-muted">
              <span className="text-sm font-medium text-muted-foreground">
                Image Loaded
              </span>
            </div>
          </HeroSkeleton>

          <div className="space-y-3">
            <HeroSkeleton isLoaded={isLoaded} className="w-4/5 rounded-lg">
              <div className="h-5 w-4/5 rounded-lg bg-muted">
                <h3 className="text-base font-bold text-foreground">
                  Content Title
                </h3>
              </div>
            </HeroSkeleton>

            <HeroSkeleton isLoaded={isLoaded} className="w-full rounded-lg">
              <div className="h-3 w-full rounded-lg bg-muted"></div>
            </HeroSkeleton>

            <HeroSkeleton isLoaded={isLoaded} className="w-5/6 rounded-lg">
              <div className="h-3 w-5/6 rounded-lg bg-muted"></div>
            </HeroSkeleton>

            <HeroSkeleton isLoaded={isLoaded} className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-muted"></div>
            </HeroSkeleton>
          </div>
        </Card>

        {/* User Profile Example */}
        <Card className="p-4 gap-4 flex items-center">
          <HeroSkeleton
            isLoaded={isLoaded}
            className="w-14 h-14 shrink-0 rounded-full"
          >
            <div className="w-14 h-14 bg-blue-100 font-bold flex shrink-0 items-center justify-center rounded-full text-blue-700">
              U
            </div>
          </HeroSkeleton>

          <div className="gap-2 flex w-full flex-col">
            <HeroSkeleton isLoaded={isLoaded} className="h-4 w-3/5 rounded-lg">
              <div className="h-4 font-semibold w-full text-foreground">
                John Doe
              </div>
            </HeroSkeleton>
            <HeroSkeleton isLoaded={isLoaded} className="h-3 w-4/5 rounded-lg">
              <div className="h-3 text-xs w-full text-muted-foreground">
                Software Engineer
              </div>
            </HeroSkeleton>
          </div>
        </Card>
      </div>
    </div>
  )
}
