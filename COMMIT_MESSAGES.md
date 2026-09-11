# 📜 Project Git Commit Messages

**Repository:** [smatikuzzamanatik/React-assignment](https://github.com/smatikuzzamanatik/React-assignment)  
**Author:** smatikuzzamanatik  
**Branch:** `master`  
**Standard:** [Conventional Commits](https://www.conventionalcommits.org/) (`<type>(<scope>): <subject>`)

---

## 📋 Commit Summary Table

| #   | Hash      | Type    | Commit Message                                                                        | Date & Time         |
| --- | --------- | ------- | ------------------------------------------------------------------------------------- | ------------------- |
| 1   | `a8ce840` | `chore` | chore(init): initialize vite react typescript project scaffolding                     | 2026-09-11 18:03:39 |
| 2   | `fb09c22` | `chore` | chore(config): configure typescript compiler targets and path aliases                 | 2026-09-11 18:03:39 |
| 3   | `4e74442` | `chore` | chore(lint): configure eslint with react hooks and typescript rules                   | 2026-09-11 18:03:39 |
| 4   | `bb78760` | `chore` | chore(format): add prettier configuration and ignore rules                            | 2026-09-11 18:03:39 |
| 5   | `aba5392` | `chore` | chore(git): setup git ignore rules for node modules and build artifacts               | 2026-09-11 18:03:39 |
| 6   | `6069a57` | `build` | build(vite): configure vite bundler with tailwindcss and path resolution              | 2026-09-11 18:03:49 |
| 7   | `6ee1fae` | `style` | style(theme): add global styles and centralized brand gradient tokens                 | 2026-09-11 18:03:49 |
| 8   | `24093a8` | `build` | build(ui): configure shadcn ui registry and component paths                           | 2026-09-11 18:03:50 |
| 9   | `9aeb295` | `feat`  | feat(utils): implement class merging utility helper                                   | 2026-09-11 18:03:50 |
| 10  | `0cbd1e6` | `feat`  | feat(theme): implement dark and light theme provider component                        | 2026-09-11 18:03:50 |
| 11  | `2d73fe0` | `feat`  | feat(ui): add accessible button primitive with variants                               | 2026-09-11 18:04:22 |
| 12  | `e25bb96` | `feat`  | feat(ui): add badge component for technology categories and status                    | 2026-09-11 18:04:22 |
| 13  | `efbaf82` | `feat`  | feat(ui): add card primitives for structured content display                          | 2026-09-11 18:04:22 |
| 14  | `946b526` | `feat`  | feat(ui): add separator, sheet, and skeleton primitives                               | 2026-09-11 18:04:22 |
| 15  | `04a0f4b` | `feat`  | feat(data): define technology schema and static json dataset                          | 2026-09-11 18:04:22 |
| 16  | `5520fd3` | `feat`  | feat(assets): add brand logos and vector assets                                       | 2026-09-11 18:04:32 |
| 17  | `3bd9e01` | `feat`  | feat(layout): implement brand logo component with gradient typography                 | 2026-09-11 18:04:32 |
| 18  | `e76dde2` | `feat`  | feat(navigation): implement responsive navbar with active link indicator              | 2026-09-11 18:04:33 |
| 19  | `b908c69` | `feat`  | feat(navigation): implement mobile navigation drawer menu                             | 2026-09-11 18:04:33 |
| 20  | `191df6d` | `feat`  | feat(hero): implement isometric stack illustration component                          | 2026-09-11 18:04:33 |
| 21  | `a516e3b` | `feat`  | feat(hero): implement landing hero section with cta buttons                           | 2026-09-11 18:06:18 |
| 22  | `9cfecd4` | `feat`  | feat(technologies): implement skeleton loader for technology card                     | 2026-09-11 18:06:18 |
| 23  | `6bda5f8` | `feat`  | feat(technologies): implement interactive technology card component                   | 2026-09-11 18:06:19 |
| 24  | `10b3c3d` | `feat`  | feat(technologies): implement responsive technology grid layout                       | 2026-09-11 18:06:19 |
| 25  | `f043f80` | `feat`  | feat(stack): implement empty stack placeholder component                              | 2026-09-11 18:06:19 |
| 26  | `7d11028` | `feat`  | feat(stack): implement stack item with remove trigger                                 | 2026-09-11 18:07:12 |
| 27  | `1998a8a` | `feat`  | feat(stack): implement your stack drawer sidebar container                            | 2026-09-11 18:07:13 |
| 28  | `e877851` | `feat`  | feat(layout): implement responsive multi-column footer with social links              | 2026-09-11 18:07:13 |
| 29  | `b63d486` | `feat`  | feat(entry): mount react root with theme provider and global styles                   | 2026-09-11 18:07:13 |
| 30  | `f2e96c1` | `feat`  | feat(app): orchestrate root application state, async data fetch, and toast alerts     | 2026-09-11 18:07:13 |
| 31  | `df76a51` | `docs`  | docs(readme): add comprehensive project documentation and react core concepts answers | 2026-09-11 18:07:13 |
| 32  | `7747ef9` | `docs`  | docs(commits): record detailed git commit history and summary log                     | 2026-09-11 18:07:56 |

---

## 🔍 Detailed Commit Log

### 1. `chore(init): initialize vite react typescript project scaffolding`

- **Commit Hash:** `a8ce840b297a9f71229530d3720551648a9c334f`
- **Short Hash:** `a8ce840`
- **Date:** 2026-09-11 18:03:39 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Initialized Vite, React 19, TypeScript project scaffolding, manifest files (`package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, and `index.html`).

---

### 2. `chore(config): configure typescript compiler targets and path aliases`

- **Commit Hash:** `fb09c22aabeb91d030091dd9a1fb37666838e85b`
- **Short Hash:** `fb09c22`
- **Date:** 2026-09-11 18:03:39 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Configured TypeScript strict mode, ES2022 target, and `@/*` path alias mapping in `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json`.

---

### 3. `chore(lint): configure eslint with react hooks and typescript rules`

- **Commit Hash:** `4e744421a92abd294159cca2240714291289385d`
- **Short Hash:** `4e74442`
- **Date:** 2026-09-11 18:03:39 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Configured ESLint flat config (`eslint.config.js`) supporting TypeScript and React hooks linting.

---

### 4. `chore(format): add prettier configuration and ignore rules`

- **Commit Hash:** `bb78760c7331342a1639913952b00e79e5b672cd`
- **Short Hash:** `bb78760`
- **Date:** 2026-09-11 18:03:39 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Added `.prettierrc` and `.prettierignore` rules for code formatting.

---

### 5. `chore(git): setup git ignore rules for node modules and build artifacts`

- **Commit Hash:** `aba539240473e8f36fc7eb178cba4e05ba962409`
- **Short Hash:** `aba5392`
- **Date:** 2026-09-11 18:03:39 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Setup `.gitignore` preventing build artifacts, editor settings, and dependencies from entering source control.

---

### 6. `build(vite): configure vite bundler with tailwindcss and path resolution`

- **Commit Hash:** `6069a57a554b8a2f58a64f06456f3d74f45f66ac`
- **Short Hash:** `6069a57`
- **Date:** 2026-09-11 18:03:49 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Configured `vite.config.ts` with React plugin, Tailwind CSS v4 Vite integration, and path alias resolvers.

---

### 7. `style(theme): add global styles and centralized brand gradient tokens`

- **Commit Hash:** `6ee1faee04b01542265b424e34ded7854383a683`
- **Short Hash:** `6ee1fae`
- **Date:** 2026-09-11 18:03:49 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Defined CSS design tokens (`--brand-gradient`), dark theme variables, and global typography styles in `src/index.css`.

---

### 8. `build(ui): configure shadcn ui registry and component paths`

- **Commit Hash:** `24093a865c092cfaa0efac64d23e95f86a2adf82`
- **Short Hash:** `24093a8`
- **Date:** 2026-09-11 18:03:50 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Added `components.json` for shadcn UI registry setup and import paths.

---

### 9. `feat(utils): implement class merging utility helper`

- **Commit Hash:** `9aeb295fff191398a0e3fece631edf2740ec480d`
- **Short Hash:** `9aeb295`
- **Date:** 2026-09-11 18:03:50 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Implemented `cn()` utility combining `clsx` and `tailwind-merge` in `src/lib/utils.ts`.

---

### 10. `feat(theme): implement dark and light theme provider component`

- **Commit Hash:** `0cbd1e69251f5ca8acf2cf42d92a60f0addbca3a`
- **Short Hash:** `0cbd1e6`
- **Date:** 2026-09-11 18:03:50 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Implemented React Context-based ThemeProvider in `src/components/theme-provider.tsx` supporting dark, light, and system modes.

---

### 11. `feat(ui): add accessible button primitive with variants`

- **Commit Hash:** `2d73fe0d0b4f81ddeec8b201ef0701e5b94231a1`
- **Short Hash:** `2d73fe0`
- **Date:** 2026-09-11 18:04:22 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Implemented accessible `Button` component in `src/components/ui/button.tsx` using `class-variance-authority`.

---

### 12. `feat(ui): add badge component for technology categories and status`

- **Commit Hash:** `e25bb960f57eeb7aff596d3e5b0eb718cd1ea743`
- **Short Hash:** `e25bb96`
- **Date:** 2026-09-11 18:04:22 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Added `Badge` component in `src/components/ui/badge.tsx` for pill tags and category labels.

---

### 13. `feat(ui): add card primitives for structured content display`

- **Commit Hash:** `efbaf82b5f015b3506e990084119641f543e06b6`
- **Short Hash:** `efbaf82`
- **Date:** 2026-09-11 18:04:22 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Created composable `Card`, `CardHeader`, `CardTitle`, `CardDescription`, and `CardContent` components.

---

### 14. `feat(ui): add separator, sheet, and skeleton primitives`

- **Commit Hash:** `946b526c9ede8222d5b7f95ef1b94b3bf54f3b83`
- **Short Hash:** `946b526`
- **Date:** 2026-09-11 18:04:22 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Implemented UI primitives for dividers (`separator.tsx`), slide-over drawer panel (`sheet.tsx`), and loading shimmers (`skeleton.tsx`).

---

### 15. `feat(data): define technology schema and static json dataset`

- **Commit Hash:** `04a0f4b6ffbfcb3ee8394fff1b551c6541c97258`
- **Short Hash:** `04a0f4b`
- **Date:** 2026-09-11 18:04:22 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Added `Technology` TypeScript interface in `src/types/technology.ts` and comprehensive JSON fixtures in `public/data/technologies.json`.

---

### 16. `feat(assets): add brand logos and vector assets`

- **Commit Hash:** `5520fd3b49c8f36aaa637f50a5fc46db135bcd85`
- **Short Hash:** `5520fd3`
- **Date:** 2026-09-11 18:04:32 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Added SVGs for Vite and React branding in `public/vite.svg` and `src/assets/react.svg`.

---

### 17. `feat(layout): implement brand logo component with gradient typography`

- **Commit Hash:** `3bd9e01de102551d76e7f9654d8d52d5b9e463be`
- **Short Hash:** `3bd9e01`
- **Date:** 2026-09-11 18:04:32 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Created reusable `BrandLogo` component featuring the layered block mark and gradient brand lettering.

---

### 18. `feat(navigation): implement responsive navbar with active link indicator`

- **Commit Hash:** `e76dde269fdd53a401752c63cc4201039839f029`
- **Short Hash:** `e76dde2`
- **Date:** 2026-09-11 18:04:33 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Built sticky `Navbar` component with brand logo, desktop link transitions, and active stack counter badge.

---

### 19. `feat(navigation): implement mobile navigation drawer menu`

- **Commit Hash:** `b908c6921c4fd384a4533af4831c1a522f3c2164`
- **Short Hash:** `b908c69`
- **Date:** 2026-09-11 18:04:33 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Implemented slide-out `MobileMenu` drawer with hamburger trigger, quick links, and stack counter trigger.

---

### 20. `feat(hero): implement isometric stack illustration component`

- **Commit Hash:** `191df6d037d612d3769a8ce9dfd122e3f13fa46b`
- **Short Hash:** `191df6d`
- **Date:** 2026-09-11 18:04:33 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Designed and implemented multi-layer isometric 3D architecture SVG illustration in `StackIllustration.tsx`.

---

### 21. `feat(hero): implement landing hero section with cta buttons`

- **Commit Hash:** `a516e3bbff759afc1dff64347d30600d4f233954`
- **Short Hash:** `a516e3b`
- **Date:** 2026-09-11 18:06:18 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Created two-column `HeroSection` with headline gradient typography, subheadings, and quick action CTA buttons.

---

### 22. `feat(technologies): implement skeleton loader for technology card`

- **Commit Hash:** `9cfecd418cc982e6d5a039d7b4fa177905df04bd`
- **Short Hash:** `9cfecd4`
- **Date:** 2026-09-11 18:06:18 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Implemented `TechnologyCardSkeleton` component with pulse animations matching exact card dimensions.

---

### 23. `feat(technologies): implement interactive technology card component`

- **Commit Hash:** `6bda5f811f1cb1d4636c31826cd21d10080a7cd3`
- **Short Hash:** `6bda5f8`
- **Date:** 2026-09-11 18:06:19 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Implemented `TechnologyCard` with dynamic action buttons (`+ Add to Stack` vs `✓ Added to Stack`), category badges, and rating tags.

---

### 24. `feat(technologies): implement responsive technology grid layout`

- **Commit Hash:** `10b3c3d46e37a49d70948832c4ddbc8e8a1cabd0`
- **Short Hash:** `10b3c3d`
- **Date:** 2026-09-11 18:06:19 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Built `TechnologyGrid` section with section header, live count badge, and responsive grid layout (1/2/3 columns).

---

### 25. `feat(stack): implement empty stack placeholder component`

- **Commit Hash:** `f043f8049663a148d15cdb874dcab1946365bc14`
- **Short Hash:** `f043f80`
- **Date:** 2026-09-11 18:06:19 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Created user-friendly `EmptyStack` component with illustrative icon and instructions when the stack has zero items.

---

### 26. `feat(stack): implement stack item with remove trigger`

- **Commit Hash:** `7d11028b68a5f97df1295717e6110021920ea714`
- **Short Hash:** `7d11028`
- **Date:** 2026-09-11 18:07:12 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Built `StackItem` component with technology icon, category indicator, version badge, and trash remove button.

---

### 27. `feat(stack): implement your stack drawer sidebar container`

- **Commit Hash:** `1998a8a7816dfd92f0a7e8ed0bd93313084f2d48`
- **Short Hash:** `1998a8a`
- **Date:** 2026-09-11 18:07:13 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Implemented `YourStack` container managing active stack listings, count displays, and empty fallback state.

---

### 28. `feat(layout): implement responsive multi-column footer with social links`

- **Commit Hash:** `e877851a9ed87c72cd4342272559c0371b2389ce`
- **Short Hash:** `e877851`
- **Date:** 2026-09-11 18:07:13 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Developed comprehensive multi-column footer featuring project branding, product links, resources, and copyright notice.

---

### 29. `feat(entry): mount react root with theme provider and global styles`

- **Commit Hash:** `b63d486af7a7c58b565d29e2bc00362973c30168`
- **Short Hash:** `b63d486`
- **Date:** 2026-09-11 18:07:13 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Set up `src/main.tsx` bootstrapping React 19 StrictMode, ThemeProvider default dark configuration, and root mount.

---

### 30. `feat(app): orchestrate root application state, async data fetch, and toast alerts`

- **Commit Hash:** `f2e96c10f8aad2ca172c4b98c829fc715facbe27`
- **Short Hash:** `f2e96c1`
- **Date:** 2026-09-11 18:07:13 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Connected state management (`useState`, `useEffect`), duplicate check prevention, dynamic toasts, and layout composition in `App.tsx`.

---

### 31. `docs(readme): add comprehensive project documentation and react core concepts answers`

- **Commit Hash:** `df76a51a1322730950d06ccccf40f6d66ae2c21b`
- **Short Hash:** `df76a51`
- **Date:** 2026-09-11 18:07:13 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Authored project README with demo links, architecture breakdown, setup instructions, and in-depth React Core Concepts Q&A.

---

### 32. `docs(commits): record detailed git commit history and summary log`

- **Date:** 2026-09-11 18:07:45 +06:00
- **Author:** smatikuzzamanatik <admin@atik.com>
- **Details:** Compiled and documented the complete Conventional Commits log and metadata in `COMMIT_MESSAGES.md`.
