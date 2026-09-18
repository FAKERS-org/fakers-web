
# AI Agent Prompt: Build the FAKERS Organization Website

## Role
You are a senior frontend engineer and design engineer. You specialize in React, TypeScript, Tailwind CSS, shadcn/ui patterns, i18n, theming, accessibility, and subtle motion design.

## Project Context
- Organization: **FAKERS Organization**
- Positioning: **Independent IT and Applied AI Services Solution Provider**
- Goal: Build a minimalist, professional marketing website that communicates trust, technical expertise, and applied AI capability.
- Existing stack: **Bun + Vite + React + TypeScript + Tailwind CSS**. The project is already scaffolded.
- Visual reference: **Cloudflare website/dashboard UI/UX**, implemented with **shadcn/ui-like components**.
- Primary languages: **English** and **Khmer**.
- Theme modes: **Light / Dark / System**.

## Non-Negotiable Design Constraints
- Follow Cloudflare’s clean, minimal, high-contrast design language.
- Use **no gradients**.
- Avoid the “generic AI-generated” look: no purple/blue AI gradients, neon glows, glassmorphism, heavy blur, oversized rounded cards, or excessive shadows.
- Prefer neutral surfaces, subtle borders (e.g., `border border-border/50`), crisp typography, generous whitespace, and restrained accent colors (e.g., a single, muted primary color like Cloudflare's orange or a professional deep blue, used sparingly).
- The UI must feel intentional, enterprise-ready, and human-designed.
- Use shadcn/ui component patterns: Button, Card, Badge, Separator, DropdownMenu, NavigationMenu, Sheet, Tabs, Accordion, Skeleton, Tooltip, etc.
- Use `lucide-react` for icons (stroke width 1.5 or 2 for a refined look).
- Use CSS variables for design tokens and support light/dark themes.

## Tech Stack & Libraries
- **Runtime/Package manager:** Bun
- **Build tool:** Vite
- **Framework:** React + TypeScript
- **Styling:** Tailwind CSS
- **UI primitives:** shadcn/ui patterns + Radix UI
- **Utility libraries:** `class-variance-authority`, `clsx`, `tailwind-merge`
- **Icons:** `lucide-react`
- **i18n:** `i18next`, `react-i18next`, `i18next-browser-languagedetector`
- **Animation:** `framer-motion` (strictly for subtle reveals) or native Tailwind transitions
- **Routing:** `react-router-dom` (for clean multi-page architecture)
- **Theme:** Custom ThemeProvider using CSS variables, `localStorage`, and `matchMedia` for system preference.

## Required Website Structure
Build a clean marketing website with these routes or sections:
- **Home**: Hero, Trusted-by/Logos, Core Services, Key Solutions, Why FAKERS, Process/How we work, Final CTA.
- **Services**: Detailed breakdown of IT and Applied AI services.
- **Solutions**: Industry-specific or use-case-specific solutions.
- **About**: Mission, vision, and technical philosophy.
- **Contact**: Minimalist contact form and direct contact information.

*Note: If using a single-page layout, implement these as anchored sections with smooth scrolling. If using multi-page routing, keep the same sections distributed logically.*

## Component Architecture & Data-Driven Design
Create dynamic, reusable, and maintainable components. **Do not hardcode repeated content in JSX.**

Recommended structure:
```txt
src/
  components/
    ui/              # shadcn-like primitives (button, card, badge, etc.)
    layout/          # Header, Footer, Container, Section, Breadcrumbs
    sections/        # Hero, ServicesGrid, SolutionsGrid, Process, CTA, ContactForm
    common/          # Logo, ThemeToggle, LanguageSwitcher, SectionHeading, MotionWrapper
  data/
    navigation.ts
    services.ts
    solutions.ts
    process.ts
    site.ts
  hooks/
    useTheme.ts
    useMediaQuery.ts
  i18n/
    index.ts
    locales/
      en.json
      km.json
  lib/
    utils.ts
  pages/             # Home, Services, Solutions, About, Contact
```

**Data Schema Example (Enforce this pattern):**
```typescript
// src/data/services.ts
export interface ServiceItem {
  id: string;
  icon: string; // Lucide icon name
  titleKey: string; // i18n key, e.g., 'services.ai.title'
  descriptionKey: string; // i18n key, e.g., 'services.ai.description'
  features: string[]; // Array of i18n keys
}
export const servicesData: ServiceItem[] = [ ... ];
```

## i18n Requirements (Critical for Khmer)
- Support **English (en)** and **Khmer (km)**.
- Default language: English. Fallback language: English.
- Add a `LanguageSwitcher` component in the header (DropdownMenu or Segmented Control).
- Persist selected language in `localStorage`.
- Update `<html lang="...">` and `dir` attributes when language changes.
- All user-facing text must come from translation files. No hardcoded visible strings.
- Use nested translation keys by section, e.g., `nav.home`, `hero.title`, `services.ai.title`.
- **Khmer Typography Handling**: 
  - Import `Kantumruy Pro` or `Noto Sans Khmer` from Google Fonts in `index.css`.
  - Add a global CSS rule: `[lang="km"] { font-family: 'Kantumruy Pro', sans-serif; line-height: 1.7; }` to ensure Khmer text has adequate breathing room and doesn't clip.
  - Ensure font fallback works seamlessly with Latin text.

## Theme Requirements
- Support **Light**, **Dark**, and **System** modes.
- Add a `ThemeToggle` component (e.g., a DropdownMenu with Sun, Moon, and Monitor icons).
- Persist theme preference in `localStorage`.
- When “System” is selected, respond to OS-level theme changes via `window.matchMedia('(prefers-color-scheme: dark)')`.
- Prevent flash of incorrect theme (FOUC) by injecting a small inline script in `index.html` or handling it synchronously in the ThemeProvider.
- Use CSS variables and Tailwind’s `dark` class strategy. Ensure all components look correct in both themes.

## Animation Requirements
- Use subtle, fast, purposeful animations. Recommended durations: 150ms–300ms.
- Use fade, slide, and scale sparingly. 
- **Standard Reveal Variant (Framer Motion)**:
  ```typescript
  const revealVariant = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };
  ```
- Animate: Header/mobile menu, Language switcher, Theme toggle, Section reveal on scroll (`whileInView`), Card hover states (e.g., subtle `translate-y-[-2px]` and border color change), Button hover/focus states.
- **Respect `prefers-reduced-motion`**: Disable Framer Motion animations if this media query is active.
- Do not over-animate. Avoid parallax, continuous motion, gradient animation, or distracting effects.

## Accessibility & SEO Requirements
- Use semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Ensure keyboard navigation works everywhere (especially DropdownMenus and Sheets).
- Add visible `focus-visible` states (e.g., `focus-visible:ring-2 focus-visible:ring-ring`).
- Use ARIA labels where needed (e.g., `<button aria-label="Toggle theme">`).
- Maintain WCAG AA contrast in both themes.
- **SEO**: Include a reusable `<SEO>` component or React Helmet to manage `<title>`, `<meta name="description">`, and Open Graph tags for each page. Use data from `src/data/site.ts`.

## Performance Requirements
- Optimize fonts (use `&display=swap`).
- Lazy-load below-the-fold components or routes using `React.lazy` and `Suspense` where appropriate.
- Keep bundle size reasonable. Avoid importing entire icon libraries; import specific icons from `lucide-react`.
- Ensure `bun run build` completes with zero TypeScript or build errors.

## Deliverables
Provide:
1. Complete code changes with **file paths** above every code block.
2. Reusable UI components (shadcn-style).
3. i18n configuration and complete `en.json` / `km.json` translation files for all sections.
4. Theme provider, theme toggle, and FOUC prevention logic.
5. Language switcher component.
6. Data files (`services.ts`, `solutions.ts`, etc.) with TypeScript interfaces.
7. Subtle animation utilities/wrappers (e.g., `MotionWrapper.tsx`).
8. Instructions to run the project: `bun install`, `bun run dev`, `bun run build`.

## Acceptance Criteria
The final result must:
- Look and feel like a Cloudflare-inspired, shadcn/ui-based minimalist website.
- Contain **no gradients** and no generic AI-generated visual style.
- Support English and Khmer switching correctly, with proper Khmer typography.
- Support Light, Dark, and System themes correctly without FOUC.
- Use reusable, dynamic, data-driven components.
- Be responsive on mobile, tablet, and desktop.
- Be accessible, keyboard-friendly, and SEO-ready.
- Include subtle, polished animations that improve UX.
- Build successfully with Bun + Vite + React + TypeScript + Tailwind CSS.

## Phased Execution Plan (CRITICAL)
Do NOT attempt to generate the entire codebase in one response. You will hit token limits and produce incomplete code. Follow this phased approach and **wait for my confirmation** before moving to the next phase:

- **Phase 1: Foundation & Configuration**  
  Provide `tailwind.config.js`, `index.css` (with fonts, CSS variables for light/dark, and `[lang="km"]` rules), `vite.config.ts`, and the `ThemeProvider` + `i18n` initialization.
- **Phase 2: Core UI Primitives & Utilities**  
  Provide `lib/utils.ts`, and key shadcn-like components: `Button`, `Card`, `Badge`, `DropdownMenu`, `Sheet`.
- **Phase 3: Layout & Navigation**  
  Provide `Header` (with Logo, Nav, ThemeToggle, LanguageSwitcher), `Footer`, and `Container`/`Section` wrappers.
- **Phase 4: Data & Translation Files**  
  Provide `site.ts`, `services.ts`, `solutions.ts`, and the complete `en.json` / `km.json` files.
- **Phase 5: Page Sections & Assembly**  
  Provide `Hero`, `ServicesGrid`, `SolutionsGrid`, `Process`, `CTA`, and assemble them into `pages/Home.tsx`. Include the `MotionWrapper` for scroll reveals.
- **Phase 6: Final Polish & Routing**  
  Provide `App.tsx` with `react-router-dom` setup, SEO component, and final instructions.

## Final Instruction
Acknowledge this prompt. If you understand, **begin with Phase 1: Foundation & Configuration**. Do not proceed to Phase 2 until I explicitly say "Proceed to Phase 2".
```

### 💡 Why this extension makes it better:
1. **Phased Execution**: This is the single most important addition. AI agents *will* fail or truncate if asked to output 20+ files at once. Forcing it to wait for your approval ensures high-quality, complete code for each step.
2. **Khmer-Specific CSS**: The `[lang="km"] { line-height: 1.7; }` rule prevents the common issue where Khmer text feels cramped or clips vertically compared to English.
3. **Data Schema Example**: Showing the AI exactly how you want the data structured prevents it from generating messy, hardcoded JSX arrays.
4. **FOUC Prevention**: Explicitly mentioning the "flash of incorrect theme" forces the AI to handle theme initialization correctly (a common pitfall in Vite + React theme setups).
5. **Standardized Animation Variant**: Giving the AI the exact `revealVariant` object ensures consistency across all sections, preventing it from inventing jarring, mismatched animations.