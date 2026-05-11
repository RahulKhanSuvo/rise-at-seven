# Rise at Seven - Agency Website

A high-performance, visually stunning agency website built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. This project features sophisticated scroll-driven animations, premium interactions, and a robust development workflow.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion (Motion/React)](https://www.framer.com/motion/)
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/)
- **Carousels**: [Swiper.js](https://swiperjs.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Runtime**: [Bun](https://bun.sh/)

## ✨ Key Features

- **Dynamic Hero Section**: High-fidelity navbar with scroll-triggered visibility (hides on scroll down, shows on scroll up) and background transitions.
- **Scroll Reveal Footer**: A premium, scroll-driven footer expansion effect using Framer Motion.
- **Legacy Stacking Animation**: Sophisticated scroll-linked element stacking in the "Legacy" section.
- **Interactive Featured Work**: Custom cursor interactions and hover-aware project showcases.
- **Smooth Motion**: Lenis-powered smooth scrolling integrated with scroll-linked animations.
- **Modular Architecture**: Clean, reusable component structure for high maintainability.

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone [<repository-url>](https://github.com/RahulKhanSuvo/rise-at-seven.git)
   cd rise-at-seven
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Run the development server:
   ```bash
   bun dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```text
src/
├── app/              # Next.js App Router pages & layouts
├── assets/           # Static images and icons
├── common/           # Reusable UI primitives (Buttons, Inputs)
├── components/       # Feature-specific components
│   ├── hero/         # Navbar & Hero logic
│   ├── Featured/     # Project showcase
│   ├── Legacy/       # Stacking animations
│   ├── Footer/       # Reveal effect & newsletter
│   └── Reveal.tsx    # Global animation wrapper
├── data/             # Static content and project data
└── lib/              # Utility functions (cn, etc.)
```

## 🏗️ Development Workflow

This project enforces high code quality standards through automated Git hooks:

- **Type Checking**: `tsc --noEmit` runs before every commit to ensure zero type errors.
- **Linting & Formatting**: `eslint` and `prettier` run automatically via `lint-staged`.
- **Commit Standards**: `commitlint` enforces [Conventional Commits](https://www.conventionalcommits.org/) to keep the git history clean.

### Pre-commit Check
When you run `git commit`, the following sequence occurs:
1. `bunx tsc --noEmit` (Blocks commit if types are broken)
2. `eslint --fix` (Fixes auto-fixable lint issues)
3. `prettier --write` (Ensures consistent formatting)

## 📄 License

This project is for demonstration purposes. All design rights belong to their respective owners.
