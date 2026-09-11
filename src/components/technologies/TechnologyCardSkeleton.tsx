import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

/** Renders an animated skeleton placeholder matching the TechnologyCard layout. */
export function TechnologyCardSkeleton() {
  return (
    <Card className="rounded-2xl border-border/60 bg-card/60 p-5 shadow-xs">
      <CardContent className="flex flex-col gap-4 p-0">
        {/* Top row: Icon and Badge */}
        <div className="flex items-center justify-between">
          <Skeleton className="size-10 rounded-xl" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>

        {/* Title and Description */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-28 rounded-md" />
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-4/5 rounded-md" />
        </div>

        {/* Metadata row */}
        <div className="flex items-center justify-between pt-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-4 w-20 rounded-md" />
          <Skeleton className="h-4 w-10 rounded-md" />
        </div>

        {/* Action Button */}
        <Skeleton className="mt-1 h-9 w-full rounded-xl" />
      </CardContent>
    </Card>
  )
}
