# Rise at Seven — Agency Website

A high-performance, visually stunning agency website built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. This project features sophisticated scroll-driven animations, premium micro-interactions, a responsive mobile experience, and a robust development workflow.

---

## 🚀 Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router + Turbopack) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Animations** | [Motion / Framer Motion](https://motion.dev/) |
| **Smooth Scrolling** | [Lenis](https://lenis.darkroom.engineering/) |
| **Carousels / Marquee** | [Swiper.js](https://swiperjs.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Utilities** | [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) |
| **Runtime** | [Bun](https://bun.sh/) |

---

## ✨ Features

- **Smart Navbar**: Hides on scroll-down, reappears on scroll-up. Supports a light/dark background transition based on scroll position. Includes a fully animated **mobile menu** with accordion-style navigation.
- **Animated Hero Section**: Large kinetic typography ("We Create Category Leaders") with a responsive, scroll-triggered animated logo pill that adapts across mobile, tablet, and desktop breakpoints.
- **Achievement Badges**: Highlights key agency stats with a visually polished badge layout.
- **Agency Logo Marquee**: Swiper-powered infinite scrolling marquee of partner/client logos with responsive edge blur and color-fade overlays.
- **"What's New" Section**: Highlights latest agency news or campaigns.
- **Our Services**: Animated services breakdown with rich content layout.
- **Brief Marquee**: Physics-based scroll-driven marquee with mouse-wheel acceleration and smooth decay.
- **Featured Work**: Interactive project showcase with hover-aware custom cursor, per-project badge layers, and image gradient overlays.
- **Legacy Section**: Scroll-linked stacking animation for showcasing milestones.
- **"Ready to Rise" CTA**: Full-bleed call-to-action section.
- **Scroll Reveal Footer**: Scroll-driven background expansion (desktop only) and content fade-in, with newsletter sign-up, footer links, large logo, and bottom bar.
- **Page Loader**: Animated entry loader on first visit.
- **Custom Cursor**: Globally tracked custom cursor component.
- **Smooth Scrolling**: Lenis-powered smooth scrolling integrated with Motion scroll hooks.

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed.

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/RahulKhanSuvo/rise-at-seven.git
cd rise-at-seven

# 2. Install dependencies
bun install

# 3. Start the development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other Commands

```bash
bun run build   # Production build
bun start       # Start production server
bun run lint    # Run ESLint
```

---

## 📁 Project Structure

```text
src/
├── app/                        # Next.js App Router (pages & layouts)
├── assets/                     # Static images, SVGs, and logos
│   └── agency/                 # Client/partner logos for the marquee
├── common/                     # Reusable UI primitives
│   ├── AnimatedLogo.tsx        # Scroll-triggered animated logo pill
│   ├── Button.tsx              # Shared button component
│   ├── PageLoader.tsx          # Initial page load animation
│   ├── ScrollToTop.tsx         # Scroll-to-top utility
│   └── TextSideAnimation.tsx   # Sliding text reveal animation
├── components/                 # Feature-specific sections
│   ├── hero/                   # Navbar, Hero, HeroBigText, MobileMenu, Badges
│   ├── agencyLogoMrq/          # Agency logo Swiper marquee
│   ├── BriefMarquee/           # Physics-based scroll marquee
│   ├── whatsNew/               # "What's New" news section
│   ├── OurServices/            # Services content section
│   ├── Featured/               # Featured work project cards
│   ├── Legacy/                 # Stacking scroll animation section
│   ├── ReadyToRise/            # CTA section
│   ├── Footer/                 # Scroll-reveal footer with newsletter
│   ├── Cursor.tsx              # Custom cursor tracker
│   ├── Reveal.tsx              # Global scroll reveal animation wrapper
│   └── SmoothScroll.tsx        # Lenis smooth scroll provider
├── constants/                  # App-wide constants
├── data/                       # Static content & project data
├── hook/                       # Custom React hooks
│   ├── useCustomResize.ts      # Debounced resize listener
│   └── useResponsiveValue.ts   # Breakpoint-aware value selector
├── lib/                        # Utility functions (cn, etc.)
└── types/                      # Shared TypeScript types
```

---

## 🏗️ Development Workflow

This project enforces high code quality through automated Git hooks:

- **Type Checking**: `tsc --noEmit` runs before every commit — blocks commit on type errors.
- **Linting**: `eslint --fix` auto-fixes issues on staged files.
- **Formatting**: `prettier --write` enforces consistent code style.
- **Commit Standards**: `commitlint` enforces [Conventional Commits](https://www.conventionalcommits.org/).

### Pre-commit sequence (`git commit`)

```
1. bunx tsc --noEmit       → type check (blocks on failure)
2. eslint --fix            → lint & auto-fix
3. prettier --write        → format staged files
```

---

## 📄 License

This project is for demonstration purposes. All design rights belong to their respective owners.
