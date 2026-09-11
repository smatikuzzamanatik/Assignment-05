import * as React from "react"
import { BrandLogo } from "@/components/layout/BrandLogo"
import { MobileMenu } from "@/components/layout/MobileMenu"
import { Button } from "@/components/ui/button"
import { NAV_ITEMS } from "@/constants/navigation"
import { cn } from "@/lib/utils"
import type { NavItem } from "@/types/technology"

export interface NavbarProps {
  readonly activeHref?: string
  readonly onNavigate?: (href: string) => void
  readonly onSignIn?: () => void
  readonly onSignUp?: () => void
  readonly navItems?: readonly NavItem[]
}

/** Renders the responsive, sticky navigation bar with desktop and mobile layouts. */
export function Navbar({
  activeHref = "#home",
  onNavigate,
  onSignIn,
  onSignUp,
  navItems = NAV_ITEMS,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false)

  const handleNavClick = (href: string) => {
    onNavigate?.(href)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-colors supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile Left: Hamburger */}
        <div className="flex items-center md:hidden">
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onOpenChange={setIsMobileMenuOpen}
            items={navItems}
            activeHref={activeHref}
            onNavigate={handleNavClick}
            onSignIn={onSignIn}
            onSignUp={onSignUp}
          />
        </div>

        {/* Brand Logo: Center on mobile, Left on desktop */}
        <div className="flex items-center">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("#home")
            }}
            className="cursor-pointer transition-opacity hover:opacity-90"
          >
            <BrandLogo />
          </a>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          {navItems.map((item) => {
            const isActive = activeHref === item.href
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className={cn(
                  "relative py-1 transition-colors hover:text-foreground",
                  isActive
                    ? "after:bg-brand-gradient font-semibold text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* Right: Auth Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onSignIn}
            className="text-sm font-medium text-foreground/80 hover:text-foreground"
          >
            Sign In
          </Button>
          <Button
            size="sm"
            onClick={onSignUp}
            className="bg-brand-gradient hover:bg-brand-gradient-hover active:bg-brand-gradient-active rounded-full px-4 font-medium text-white shadow-xs transition-transform active:scale-95 sm:px-5"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  )
}
