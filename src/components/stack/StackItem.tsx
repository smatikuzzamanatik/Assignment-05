import * as React from "react"
import { RiCloseLine } from "@remixicon/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Technology } from "@/types/technology"

export interface StackItemProps {
  readonly item: Technology
  readonly onRemove: (id: string) => void
}

/** Renders an individual technology item row within the selected stack list. */
export function StackItem({ item, onRemove }: StackItemProps) {
  const [imageFailed, setImageFailed] = React.useState<boolean>(false)

  return (
    <div className="group flex items-center justify-between gap-3 rounded-xl border border-border/70 bg-card p-3 shadow-2xs transition-all hover:border-foreground/20 hover:shadow-xs">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted/40 p-1 ring-1 ring-border/40">
          {imageFailed ? (
            <div className="flex size-full items-center justify-center rounded bg-muted text-[0.65rem] font-bold text-foreground">
              {item.name.slice(0, 2).toUpperCase()}
            </div>
          ) : (
            <img
              src={item.icon}
              alt={`${item.name} logo`}
              className="size-full object-contain"
              onError={() => setImageFailed(true)}
            />
          )}
        </div>
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-semibold text-foreground">
            {item.name}
          </span>
          <Badge
            variant="outline"
            className="w-fit rounded-sm border-border/60 px-1.5 py-0 text-[0.65rem] font-medium text-muted-foreground"
          >
            {item.category}
          </Badge>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon-xs"
        onClick={() => onRemove(item.id)}
        aria-label={`Remove ${item.name} from stack`}
        className="shrink-0 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
      >
        <RiCloseLine className="size-4" />
      </Button>
    </div>
  )
}
