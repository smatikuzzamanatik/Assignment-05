import { RiStackLine } from "@remixicon/react"
import { cn } from "@/lib/utils"

export interface EmptyStackProps {
  readonly message?: string
  readonly className?: string
}

/** Renders an empty state placeholder when no technologies have been selected. */
export function EmptyStack({
  message = "Your stack is empty.",
  className,
}: EmptyStackProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border/80 bg-muted/20 p-8 text-center transition-colors",
        className
      )}
    >
      <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-muted/60 text-muted-foreground">
        <RiStackLine className="size-5" />
      </div>
      <p className="text-sm font-medium text-muted-foreground">{message}</p>
      <p className="mt-1 text-xs text-muted-foreground/70">
        Click &quot;Add to Stack&quot; on any technology card to begin.
      </p>
    </div>
  )
}
