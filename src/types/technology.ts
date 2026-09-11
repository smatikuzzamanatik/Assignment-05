export type TechCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Language"
  | "Styling"
  | "DevOps"
  | "Tools"

export type DifficultyLevel = "Beginner-Friendly" | "Intermediate" | "Advanced"

export interface Technology {
  readonly id: string
  readonly name: string
  readonly category: TechCategory
  readonly description: string
  readonly icon: string
  readonly rating: number
  readonly difficulty: DifficultyLevel
  readonly badge: string
}

export interface NavItem {
  readonly label: string
  readonly href: string
}
