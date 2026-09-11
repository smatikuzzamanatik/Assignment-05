import { RiGithubFill, RiLinkedinFill, RiTwitterXFill } from "@remixicon/react"
import { BrandLogo } from "@/components/layout/BrandLogo"
import { FOOTER_SECTIONS } from "@/constants/navigation"

export interface FooterProps {
  readonly copyrightYear?: number
  readonly onNavigate?: (href: string) => void
}

/** Renders the site footer with brand overview, categorised link groups, and copyright bar. */
export function Footer({ copyrightYear = 2026, onNavigate }: FooterProps) {
  const handleLinkClick = (href: string) => {
    onNavigate?.(href)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="mt-20 border-t border-border/50 bg-card/40 transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand & Social Column */}
          <div className="flex flex-col items-start md:col-span-5">
            <BrandLogo size="default" />
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-muted-foreground">
              Curated tools, technologies, and resources for modern web
              development workflows.
            </p>
            <div className="mt-5 flex items-center gap-4 text-muted-foreground">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="transition-colors hover:text-foreground"
              >
                <RiGithubFill className="size-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter profile"
                className="transition-colors hover:text-foreground"
              >
                <RiTwitterXFill className="size-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="transition-colors hover:text-foreground"
              >
                <RiLinkedinFill className="size-5" />
              </a>
            </div>
          </div>

          {/* Three Link Columns: Product, Company, Legal */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            {/* Product */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold tracking-wider text-foreground uppercase">
                Product
              </h4>
              <ul className="space-y-2 text-xs">
                {FOOTER_SECTIONS.product.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleLinkClick(item.href)
                      }}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold tracking-wider text-foreground uppercase">
                Company
              </h4>
              <ul className="space-y-2 text-xs">
                {FOOTER_SECTIONS.company.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleLinkClick(item.href)
                      }}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold tracking-wider text-foreground uppercase">
                Legal
              </h4>
              <ul className="space-y-2 text-xs">
                {FOOTER_SECTIONS.legal.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleLinkClick(item.href)
                      }}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Links */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {copyrightYear} Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault()
                handleLinkClick("#privacy")
              }}
              className="transition-colors hover:text-foreground"
            >
              Privacy
            </a>
            <a
              href="#terms"
              onClick={(e) => {
                e.preventDefault()
                handleLinkClick("#terms")
              }}
              className="transition-colors hover:text-foreground"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
