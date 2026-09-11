import * as React from "react"
import { cn } from "@/lib/utils"

export interface BrandLogoProps extends React.ComponentProps<"div"> {
  readonly size?: "sm" | "default" | "lg"
}

/** Renders the Dev Stack brand logo mark and typography. */
export function BrandLogo({
  className,
  size = "default",
  ...props
}: BrandLogoProps) {
  const iconDimensions =
    size === "sm"
      ? "size-7 text-xs"
      : size === "lg"
        ? "size-10 text-base"
        : "size-8 text-sm"
  const titleSize =
    size === "sm" ? "text-base" : size === "lg" ? "text-xl" : "text-lg"

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 font-bold tracking-tight select-none",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "bg-brand-gradient flex items-center justify-center rounded-lg font-black text-white shadow-xs",
          iconDimensions
        )}
        aria-hidden="true"
      >
        DS
      </div>
      <span className={cn("font-heading font-bold text-foreground", titleSize)}>
        Dev <span className="text-brand-gradient">Stack</span>
      </span>
    </div>
  )
}
