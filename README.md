# 🧱 Dev Stack Builder

A modern, interactive development stack planner and architecture exploration web application built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui**. Dev Stack empowers engineers and teams to explore, compare, and assemble optimal frontend, backend, database, and DevOps tooling configurations for their next projects.

---

## 🚀 Live Demo & Repository

- **Repository**: [GitHub Repository](https://github.com/)
- **Live Deployment**: [Live Site](https://devstack-builder.vercel.app/)

---

## 🛠️ Technologies Used

- **React 19**: Modern component library leveraging pure functional components and declarative hooks.
- **TypeScript**: Complete compile-time type safety with zero `any` declarations.
- **Vite 8**: Ultra-fast build tool and lightning-quick HMR development server.
- **Tailwind CSS v4**: High-performance utility-first styling configured with unified design tokens.
- **shadcn/ui (Radix Nova)**: Accessible, composable primitives including Button, Card, Badge, Sheet, Separator, and Skeleton.
- **React-Toastify**: Real-time feedback alerts for stack modifications and duplicate warnings.
- **Remix Icons**: Minimalist, pixel-crisp iconography.

---

## ✨ Key Features

1. **Interactive Stack Composition & Duplicate Prevention**
   - Seamlessly add technologies from across multiple disciplines (Frontend, Backend, Database, Language, Styling, DevOps).
   - Real-time duplicate detection: attempting to re-add an existing item triggers an immediate warning alert and prevents duplicates.
   - Dynamic button states transition cleanly to disabled `✓ Added to Stack` badges.

2. **Props-Driven Design Pattern & Centralized Design System**
   - 100% decoupling between presentational components and state management. Every component (`Navbar`, `MobileMenu`, `HeroSection`, `TechnologyCard`, `TechnologyGrid`, `YourStack`, `StackItem`, `EmptyStack`, `Footer`) relies purely on typed props.
   - Centralized brand theme gradient (`#f97316` → `#ec4899` → `#8b5cf6`) defined in a single CSS variable token (`--brand-gradient`), powering headings, logo marks, and primary action buttons.

3. **Realistic Asynchronous Loading & Skeleton States**
   - Fetches technology data dynamically from an external JSON dataset (`/data/technologies.json`) on mount.
   - Renders animated shimmer skeleton cards during fetch latency, ensuring zero cumulative layout shift (CLS).

---

## 📖 React Core Concepts Q&A

### 1. What is JSX, and why is it used in React?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows developers to write HTML-like markup directly inside JavaScript files.

**Why it is used:**

- **Co-location of Logic and UI**: Instead of separating markup and logic across different files, JSX brings them together inside reusable components.
- **Expressive Power**: You can embed any standard JavaScript expression directly inside curly braces (`{}`).
- **Compile-Time Safety**: Build tools compile JSX into `React.createElement()` or native JSX runtime calls, catching structural and typographical bugs before the code runs in production.

---

### 2. What is the difference between props and state?

| Concept        | Props (Properties)                                 | State                                                                |
| :------------- | :------------------------------------------------- | :------------------------------------------------------------------- |
| **Ownership**  | Passed from parent component down to child.        | Owned and managed locally inside the component.                      |
| **Mutability** | **Read-only (immutable)** for the child component. | **Mutable** via its state updater function (`setState`).             |
| **Purpose**    | Configures child components and passes callbacks.  | Tracks values that change over time (e.g. user input, fetched data). |
| **Re-render**  | Causes child to re-render when new props arrive.   | Calling updater schedules a re-render of the component.              |

---

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook declares a local state variable in a functional component that persists between renders and schedules a re-render when modified.

**Where it was used in this project:**

1. In `src/App.tsx`:
   - `const [technologies, setTechnologies] = useState<readonly Technology[]>([])`: Stores the loaded technology items from the JSON dataset.
   - `const [selectedStack, setSelectedStack] = useState<readonly Technology[]>([])`: Tracks user-selected technologies in the active stack.
   - `const [isLoading, setIsLoading] = useState<boolean>(true)`: Manages whether skeleton loaders or live cards are rendered.
   - `const [activeHref, setActiveHref] = useState<string>("#home")`: Tracks the active navigation tab.
2. In `src/components/layout/Navbar.tsx`:
   - `const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)`: Controls mobile hamburger drawer open/closed state.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook allows functional components to execute **side effects** (operations that interact with the outside world, such as data fetching, subscriptions, timers, or manual DOM manipulations) after rendering.

**Why it was needed to load JSON data:**

- Fetching data from `/data/technologies.json` is an asynchronous side effect that cannot run synchronously during render.
- By placing `fetch()` inside a `useEffect` with an empty dependency array (`[]`), the network request runs exactly once when the component mounts, preventing infinite fetch loops and updating local state once data arrives.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` prop to identify which items in a dynamic list have changed, been added, or been removed during Virtual DOM reconciliation.

**Why it matters:**

- **Diffing Efficiency**: Unique keys allow React to reorder or patch only the modified DOM node rather than destroying and re-rendering the entire list.
- **State Preservation**: Without stable, unique keys (such as `tech.id`), child components can retain incorrect internal state when list order changes.

---

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

**Conditional rendering** is the technique of rendering different UI elements or components based on specific conditions or state expressions.

**Example from `src/components/stack/YourStack.tsx`:**

```tsx
<CardContent className="p-0">
  {count === 0 ? (
    <EmptyStack message="Your stack is empty." />
  ) : (
    <div className="flex max-h-[600px] flex-col gap-2.5 overflow-y-auto">
      {items.map((item) => (
        <StackItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </div>
  )}
</CardContent>
```

When `count === 0`, the dashed `EmptyStack` placeholder renders. When items exist (`count > 0`), the list of `StackItem` components renders along with the "Remove All" button.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

1. **Parent to Child (Downwards)**:
   - Data is passed as attributes (**props**) directly on the JSX tag.
   - Example: `<TechnologyCard technology={tech} isAdded={selectedIds.has(tech.id)} ... />`
2. **Child to Parent (Upwards)**:
   - The parent passes a callback function down as a prop.
   - The child invokes that callback with data when a user event occurs.
   - Example:
     - Parent (`App.tsx`) provides: `onAdd={handleAddToStack}`
     - Child (`TechnologyCard.tsx`) triggers: `onClick={() => onAdd(technology)}`
     - The parent receives the `technology` object and updates the top-level stack state.

---

## 🏃 Local Development

```bash
# Install dependencies
pnpm install

# Run local development server
pnpm dev

# Type check TypeScript
pnpm typecheck

# Build for production
pnpm build

# Preview production build
pnpm preview
```
