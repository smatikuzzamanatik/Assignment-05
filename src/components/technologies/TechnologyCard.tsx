import * as React from "react"
import { RiCheckLine, RiStarFill } from "@remixicon/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Technology } from "@/types/technology"

const BADGE_COLOR_MAP: Record<string, string> = {
  Popular:
    "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/50 dark:text-sky-300 dark:border-sky-800",
  Versatile:
    "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800",
  Fast: "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/50 dark:text-orange-300 dark:border-orange-800",
  Standard:
    "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800",
  "Top SQL":
    "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/50 dark:text-indigo-300 dark:border-indigo-800",
  Cache:
    "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-800",
  Ubiquitous:
    "bg-amber-700/10 text-amber-800 border-amber-300 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800",
  Essential:
    "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800",
  Robust:
    "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/50 dark:text-cyan-300 dark:border-cyan-800",
  Modern:
    "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/50 dark:text-teal-300 dark:border-teal-800",
  Containers:
    "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/50 dark:text-sky-300 dark:border-sky-800",
  "Data & AI":
    "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/50 dark:text-purple-300 dark:border-purple-800",
  Flexible:
    "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950/50 dark:text-pink-300 dark:border-pink-800",
}

export interface TechnologyCardProps {
  readonly technology: Technology
  readonly isAdded: boolean
  readonly onAdd: (technology: Technology) => void
}

/** Renders an individual technology card with metadata badges, ratings, and stack toggling. */
export function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  const [imageFailed, setImageFailed] = React.useState<boolean>(false)

  const badgeClass =
    BADGE_COLOR_MAP[technology.badge] ??
    "bg-muted text-muted-foreground border-border"

  return (
    <Card className="group relative flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-md">
      <CardContent className="flex flex-col gap-3.5 p-0">
        {/* Top Header: Tech Icon & Badge */}
        <div className="flex items-center justify-between">
          <div className="flex size-10 items-center justify-center rounded-xl bg-muted/40 p-1.5 ring-1 ring-border/50">
            {imageFailed ? (
              <div className="flex size-full items-center justify-center rounded-lg bg-muted text-xs font-bold text-foreground">
                {technology.name.slice(0, 2).toUpperCase()}
              </div>
            ) : (
              <img
                src={technology.icon}
                alt={`${technology.name} icon`}
                className="size-full object-contain"
                loading="lazy"
                onError={() => setImageFailed(true)}
              />
            )}
          </div>
          <span
            className={cn(
              "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.7rem] font-semibold tracking-wide",
              badgeClass
            )}
          >
            {technology.badge}
          </span>
        </div>

        {/* Title and Description */}
        <div className="space-y-1.5">
          <h3 className="font-heading text-lg font-bold tracking-tight text-foreground">
            {technology.name}
          </h3>
          <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
            {technology.description}
          </p>
        </div>

        {/* Metadata Row: Category, Difficulty, Rating */}
        <div className="flex items-center justify-between border-t border-border/40 pt-1 text-xs">
          <Badge
            variant="outline"
            className="rounded-md border-border/70 bg-muted/30 px-2 py-0.5 text-[0.7rem] font-medium text-foreground/80"
          >
            {technology.category}
          </Badge>
          <span className="text-[0.75rem] font-medium text-muted-foreground">
            {technology.difficulty}
          </span>
          <div className="flex items-center gap-1 text-[0.8rem] font-semibold text-foreground">
            <RiStarFill className="size-3.5 fill-amber-400 text-amber-400" />
            <span>{technology.rating.toFixed(1)}</span>
          </div>
        </div>
      </CardContent>

      {/* Action Button */}
      <div className="mt-4 pt-1">
        {isAdded ? (
          <Button
            disabled
            className="w-full cursor-not-allowed rounded-xl bg-muted/80 font-semibold text-muted-foreground opacity-80"
            size="sm"
          >
            <RiCheckLine className="size-4" />
            Added to Stack
          </Button>
        ) : (
          <Button
            onClick={() => onAdd(technology)}
            className="w-full rounded-xl bg-foreground font-semibold text-background shadow-xs transition-colors hover:bg-foreground/90"
            size="sm"
          >
            Add to Stack
          </Button>
        )}
      </div>
    </Card>
  )
}
