import { RiMenuLine } from "@remixicon/react"
import { BrandLogo } from "@/components/layout/BrandLogo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import type { NavItem } from "@/types/technology"

export interface MobileMenuProps {
  readonly isOpen: boolean
  readonly onOpenChange: (open: boolean) => void
  readonly items: readonly NavItem[]
  readonly activeHref: string
  readonly onNavigate: (href: string) => void
  readonly onSignIn?: () => void
  readonly onSignUp?: () => void
}

/** Renders the mobile drawer navigation using a sheet overlay. */
export function MobileMenu({
  isOpen,
  onOpenChange,
  items,
  activeHref,
  onNavigate,
  onSignIn,
  onSignUp,
}: MobileMenuProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <RiMenuLine className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] p-6">
        <SheetHeader className="p-0 text-left">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <BrandLogo size="sm" />
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-2">
          {items.map((item) => {
            const isActive = activeHref === item.href
            return (
              <button
                key={item.href}
                type="button"
                onClick={() => {
                  onNavigate(item.href)
                  onOpenChange(false)
                }}
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors",
                  isActive
                    ? "bg-brand-subtle font-semibold text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            )
          })}
        </nav>
        <div className="mt-auto flex flex-col gap-2.5 border-t border-border/50 pt-6">
          <Button
            variant="outline"
            className="w-full justify-center"
            onClick={() => {
              onSignIn?.()
              onOpenChange(false)
            }}
          >
            Sign In
          </Button>
          <Button
            className="bg-brand-gradient hover:bg-brand-gradient-hover w-full justify-center rounded-full text-white shadow-xs"
            onClick={() => {
              onSignUp?.()
              onOpenChange(false)
            }}
          >
            Sign Up
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
