'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'

export function HabitSkeleton() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex gap-3">
          <div className="w-12 h-12 rounded-lg bg-muted animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
            <div className="h-3 bg-muted rounded animate-pulse w-1/2" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-2 bg-muted rounded animate-pulse" />
      </CardContent>
    </Card>
  )
}

export function HabitGridSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <HabitSkeleton key={i} />
      ))}
    </div>
  )
}

export function StatCardSkeleton() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="h-4 bg-muted rounded animate-pulse mb-2 w-1/3" />
        <div className="h-8 bg-muted rounded animate-pulse w-1/2" />
      </CardContent>
    </Card>
  )
}
