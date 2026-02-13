# IMPLEMENATION PLAN: Ocean Park Digital - Enterprise Web Experience

## 1. Project Overview
**Goal**: Transform the existing basic Vite/React site into a high-end, cinematic agency website using Next.js 14+ (App Router).
**Core Identity**: "Ocean Park Digital" – Digital growth solutions.
**Aesthetic**: "Cinematic Ocean" – Deep, immersive blues/purples, fluid 3D motion, glassmorphism, and smooth interactions.

## 2. Technology Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CLSX + Tailwind Merge
- **Animation**: Framer Motion (Interactions), GSAP (optional for complex timelines), Lenis (Smooth Scroll)
- **3D/WebGL**: React Three Fiber (R3F) + Drei (For the hero "Ocean" effect)
- **Icons**: Lucide React
- **Fonts**: `next/font` (Inter for UI, Geist Mono for code/technical, maybe a serif like Playfair Display for headings to add elegance)

## 3. Directory Structure
```
src/
├── app/
│   ├── layout.tsx       # Root layout (includes Lenis, Navbar, Footer)
│   ├── page.tsx         # Home Page (Hero, Services, CTA)
│   ├── blog/
│   │   ├── page.tsx     # Blog Index
│   │   └── [slug]/
│   │       └── page.tsx # Blog Post (Dynamic Route)
│   ├── globals.css      # Tailwind directives + global styles
├── components/
│   ├── canvas/          # 3D Components (The Ocean Scene)
│   ├── ui/              # Reusable UI (Buttons, Cards, Inputs)
│   ├── layout/          # Header, Footer, Mobile Menu
│   └── sections/        # Page sections (Hero, ServicesGrid, etc.)
├── lib/
│   ├── data.ts          # Mock data for services and blog posts
│   └── utils.ts         # cn() utility
└── public/              # Assets
```

## 4. Phase 1: Foundation & Setup
1.  **Initialize**: `npx create-next-app@latest ocean-park-digital --typescript --tailwind --eslint`.
2.  **Dependencies**: `npm install framer-motion @react-three/fiber @react-three/drei three @studio-freight/lenis lucide-react clsx tailwind-merge`.
3.  **Config**:
    -   Setup `tailwind.config.ts` with custom colors extending the brand:
        -   `primary`: `#543ab7` (Deep Purple)
        -   `secondary`: `#00acc1` (Cyan/Ocean)
        -   `dark`: `#0f172a` (Slate 900)
    -   Configure `next.config.js` if needed for image handling.

## 5. Phase 2: Design & Components

### A. Global Layout (`app/layout.tsx`)
-   **Smooth Scroll**: Wrap the children in a `<SmoothScroll>` component using Lenis.
-   **Header**: Floating implementation. Transparent at top, blurs (glassmorphism) on scroll.
-   **Footer**: Clean, grid-based layout with links and "Get Started" call to action.

### B. The "Cinematic" Hero (`components/sections/Hero.tsx` & `components/canvas/Ocean.tsx`)
-   **Concept**: Instead of the SVG waves, we build a *real* 3D ocean using R3F.
-   **Implementation**:
    -   Use a PlaneGeometry with a custom shader or `MeshDistortMaterial` to create gently undulating waves.
    -   Lighting: Ambient light + Directional light matching the brand gradients (purple/teal).
    -   Interaction: Mouse movement slightly affects the wave intensity or camera angle.
-   **Overlay**: Hero text ("Ocean Park Digital") floats above the 3D canvas with a staggered fade-in animation using Framer Motion.

### C. Services Section (`components/sections/Services.tsx`)
-   **Layout**: Grid of cards.
-   **Design**: Glassmorphism cards (backdrop-filter: blur).
    -   Hover: Subtle border glow or scale effect.
-   **Animation**: `WhileInView` stagger effect. As user scrolls down, cards pop in one by one.

### D. Blog System (`app/blog/...`)
-   **Data**: Move the hardcoded blog data to `lib/data.ts`.
-   **Index Page**: Grid of blog post previews with distinctive typography.
-   **Detail Page**: Clean reading experience.
    -   Use `generateStaticParams` for static generation of blog posts.
    -   Add a "Estimated Read Time" and authoritative header.

## 6. Phase 3: Polish & "Wow" Factors
-   **Page Transitions**: Use a `template.tsx` with Framer Motion to slide/fade content between route changes.
-   **Micro-interactions**:
    -   Buttons should have magnetic hover effects or distinct press states.
    -   Links should have animated underlines.
-   **SEO**:
    -   Populate `metadata` in `layout.tsx` and `page.tsx` with "Digital Growth Solutions" keywords.
    -   Use proper Semantic HTML (`<main>`, `<section>`, `<article>`).

## 7. Migration Plan (Step-by-Step for Agent)
1.  **Scaffold** the Next.js app.
2.  **Port Content**: Copy the text and service data from the existing `Home.tsx` and `Blog.tsx` into `lib/data.ts`.
3.  **Build Core UI**: Create the `Button`, `Card` components.
4.  **Implement Layout**: Build the Navbar and Footer.
5.  **Develop Hero**: Create the R3F Scene. *Crucial for the "Cinematic" feel.*
6.  **Assemble Pages**: Build Home and Blog pages using the components.
7.  **Refine**: Add Lenis scroll and Framer Motion animations.

## 8. Specific Prompt for the Coding Agent

"Agent, please build this application following these steps. Start by initializing the Next.js project. Then, create the 'Ocean' 3D component using React Three Fiber. Ensure the color palette uses the deep purple and cyan gradients from the original design but modernized. Use Framer Motion for all entrance animations."
