import * as React from "react"
import { ToastContainer, toast } from "react-toastify"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { HeroSection } from "@/components/sections/HeroSection"
import { YourStack } from "@/components/stack/YourStack"
import { TechnologyGrid } from "@/components/technologies/TechnologyGrid"
import type { Technology } from "@/types/technology"

/** Renders the root application orchestrating data loading, stack state, and toast alerts. */
export function App() {
  const [technologies, setTechnologies] = React.useState<readonly Technology[]>(
    []
  )
  const [selectedStack, setSelectedStack] = React.useState<
    readonly Technology[]
  >([])
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [activeHref, setActiveHref] = React.useState<string>("#home")

  // Load technologies from public JSON dataset on mount
  React.useEffect(() => {
    let isMounted = true

    const loadData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("/data/technologies.json")
        if (!response.ok) {
          throw new Error(`Failed to load dataset: ${response.statusText}`)
        }
        const data = (await response.json()) as Technology[]
        // Brief delay to showcase the loading skeleton per challenge requirement
        await new Promise((resolve) => setTimeout(resolve, 350))
        if (isMounted) {
          setTechnologies(data)
        }
      } catch {
        if (isMounted) {
          toast.error("Unable to load technologies dataset.")
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    void loadData()
    return () => {
      isMounted = false
    }
  }, [])

  // Derived set of selected technology IDs for fast O(1) lookup
  const selectedIds = React.useMemo(() => {
    return new Set(selectedStack.map((item) => item.id))
  }, [selectedStack])

  /** Adds a technology to the user stack or issues a duplicate warning. */
  const handleAddToStack = (technology: Technology) => {
    if (selectedIds.has(technology.id)) {
      toast.warning(`${technology.name} is already in your stack!`)
      return
    }
    setSelectedStack((prev) => [...prev, technology])
    toast.success(`${technology.name} added to your stack!`)
  }

  /** Removes a single technology from the user stack by its unique ID. */
  const handleRemoveFromStack = (techId: string) => {
    const target = selectedStack.find((item) => item.id === techId)
    setSelectedStack((prev) => prev.filter((item) => item.id !== techId))
    if (target) {
      toast.info(`${target.name} removed from stack.`)
    }
  }

  /** Clears all technologies from the user stack in a single action. */
  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return
    setSelectedStack([])
    toast.error("All technologies removed from stack.")
  }

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-pink-500/20 selection:text-pink-600">
      <Navbar
        activeHref={activeHref}
        onNavigate={setActiveHref}
        onSignIn={() => toast.info("Sign In modal opened.")}
        onSignUp={() => toast.info("Sign Up modal opened.")}
      />

      <main>
        {/* Banner / Hero Section */}
        <HeroSection
          titlePrefix="Build Your Ideal"
          titleHighlight="Development Stack"
          description="Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project."
        />

        {/* Explore Technologies & Your Stack Container */}
        <section id="technologies" className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-10 text-left">
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Explore the{" "}
                <span className="text-brand-gradient">Technologies</span>
              </h2>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                Pick one technology per category to build your ideal stack.
              </p>
            </div>

            {/* Layout: Tech Grid + Sticky Sidebar */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Left Main Area: Technology Cards Grid */}
              <div className="lg:col-span-8 xl:col-span-9">
                <TechnologyGrid
                  technologies={technologies}
                  selectedIds={selectedIds}
                  onAdd={handleAddToStack}
                  isLoading={isLoading}
                />
              </div>

              {/* Right Sidebar: Your Stack Panel */}
              <div className="lg:col-span-4 xl:col-span-3">
                <div className="sticky top-24">
                  <YourStack
                    items={selectedStack}
                    onRemove={handleRemoveFromStack}
                    onRemoveAll={handleRemoveAll}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigate={setActiveHref} />

      {/* React-Toastify Alerts Container */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default App
