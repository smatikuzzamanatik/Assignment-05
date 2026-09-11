import { TechnologyCard } from "@/components/technologies/TechnologyCard"
import { TechnologyCardSkeleton } from "@/components/technologies/TechnologyCardSkeleton"
import type { Technology } from "@/types/technology"

export interface TechnologyGridProps {
  readonly technologies: readonly Technology[]
  readonly selectedIds: ReadonlySet<string>
  readonly onAdd: (technology: Technology) => void
  readonly isLoading?: boolean
}

const SKELETON_COUNT = 6

/** Renders a responsive multi-column grid of technology cards with loading skeleton fallbacks. */
export function TechnologyGrid({
  technologies,
  selectedIds,
  onAdd,
  isLoading = false,
}: TechnologyGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
          <TechnologyCardSkeleton key={`skeleton-${index}`} />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {technologies.map((tech) => (
        <TechnologyCard
          key={tech.id}
          technology={tech}
          isAdded={selectedIds.has(tech.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  )
}
