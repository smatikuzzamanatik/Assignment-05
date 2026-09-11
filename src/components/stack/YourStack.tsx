import { RiDeleteBinLine } from "@remixicon/react"
import { EmptyStack } from "@/components/stack/EmptyStack"
import { StackItem } from "@/components/stack/StackItem"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Technology } from "@/types/technology"

export interface YourStackProps {
  readonly items: readonly Technology[]
  readonly onRemove: (id: string) => void
  readonly onRemoveAll: () => void
}

/** Renders the sidebar stack management panel with count metrics, item list, and bulk clearing. */
export function YourStack({ items, onRemove, onRemoveAll }: YourStackProps) {
  const count = items.length
  const countLabel =
    count === 0
      ? "No technologies selected yet"
      : count === 1
        ? "1 Technology Selected"
        : `${count} Technologies Selected`

  return (
    <Card className="rounded-2xl border border-border/80 bg-card p-5 shadow-xs transition-shadow">
      <CardHeader className="flex flex-row items-start justify-between gap-2 p-0 pb-4">
        <div>
          <CardTitle className="font-heading text-lg font-bold tracking-tight text-foreground">
            Your Stack
          </CardTitle>
          <p className="mt-0.5 text-xs font-medium text-muted-foreground">
            {countLabel}
          </p>
        </div>
        {count > 0 && (
          <Button
            variant="ghost"
            size="xs"
            onClick={onRemoveAll}
            className="gap-1 text-xs font-semibold text-destructive transition-colors hover:bg-destructive/10 hover:text-destructive"
          >
            <RiDeleteBinLine className="size-3.5" />
            Remove All
          </Button>
        )}
      </CardHeader>

      <CardContent className="p-0">
        {count === 0 ? (
          <EmptyStack />
        ) : (
          <div className="flex max-h-[600px] flex-col gap-2.5 overflow-y-auto pr-1">
            {items.map((item) => (
              <StackItem key={item.id} item={item} onRemove={onRemove} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
