import type { NavItem } from "@/types/technology"

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const

export const FOOTER_SECTIONS = {
  product: [
    { label: "Home", href: "#home" },
    { label: "Technologies", href: "#technologies" },
    { label: "Projects", href: "#projects" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#careers" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
  ],
} as const
