import { RiArrowRightLine } from "@remixicon/react"
import { StackIllustration } from "@/components/sections/StackIllustration"
import { Button } from "@/components/ui/button"

export interface HeroSectionProps {
  readonly titlePrefix?: string
  readonly titleHighlight?: string
  readonly description?: string
  readonly onExploreClick?: () => void
  readonly onLearnMoreClick?: () => void
}

/** Renders the hero banner section featuring two-tone typography and call-to-action triggers. */
export function HeroSection({
  titlePrefix = "Build Your Ideal",
  titleHighlight = "Development Stack",
  description = "Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.",
  onExploreClick,
  onLearnMoreClick,
}: HeroSectionProps) {
  const handleExplore = () => {
    if (onExploreClick) {
      onExploreClick()
      return
    }
    const techSection = document.querySelector("#technologies")
    techSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handleLearnMore = () => {
    if (onLearnMoreClick) {
      onLearnMoreClick()
      return
    }
    const aboutSection = document.querySelector("#about")
    aboutSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden py-12 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading, Description & Action Buttons */}
          <div className="flex flex-col items-start lg:col-span-7">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {titlePrefix}
              <span className="text-brand-gradient mt-1 block">
                {titleHighlight}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                onClick={handleExplore}
                className="bg-brand-gradient hover:bg-brand-gradient-hover active:bg-brand-gradient-active rounded-full px-6 font-semibold text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/30 active:scale-95"
              >
                Explore Technologies
                <RiArrowRightLine className="ml-1.5 size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleLearnMore}
                className="rounded-full px-6 font-medium text-foreground transition-colors hover:bg-muted/80"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Column: Hero Visual Stack Illustration */}
          <div className="flex justify-center lg:col-span-5">
            <StackIllustration className="w-full max-w-[460px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
