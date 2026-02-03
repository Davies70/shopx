# Shopapocalypse

**Shopapocalypse** is a spoof eCommerce site built for those prepping in style for the end of days. It delivers a smooth, animated, and responsive shopping experience with a cached cart system — all powered by modern frontend technologies.

![Shopapocalypse Screenshot](./public/images/shopapo.png)

---

##  Features

- **Fast and Responsive** layout powered by Tailwind CSS
- **Smooth Animations** using **GSAP** and **Framer Motion**
- **Persistent Cart** with item caching via `localStorage`
- **Typed Components** using **TypeScript** for better reliability
- **Modern UI/UX** designed around a satirical apocalyptic theme

---

## Tech Stack

| Technology        | Purpose                                     |
| ----------------- | ------------------------------------------- |
| **React**         | UI library for building interactive UIs     |
| **TypeScript**    | Adds static typing to JavaScript            |
| **Tailwind CSS**  | Utility-first CSS framework for styling     |
| **GSAP**          | Robust animation library for scroll effects |
| **Framer Motion** | React animation library for UI transitions  |
| **Netlify**       | Hosting and CI/CD deployment platform       |

---

## Live Demo

 [https://shopapocalypse.netlify.app](https://shopapocalypse.netlify.app)

---

## Project Structure

```bash
src/
├── components/   # Reusable UI components
├── pages/        # Main views or sections
├── hooks/        # Custom React hooks
├── styles/       # Tailwind configs or custom styles
├── utils/        # Utility functions
├── assets/       # Images, icons, etc.
└── types/        # Global TypeScript types/interfaces
```

## Getting Started

Clone and run the project locally:

```bash
git clone https://github.com/your-username/shopapocalypse.git
cd shopapocalypse
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

Key Implementations
Cached Cart: Cart state is stored and retrieved from localStorage

GSAP Scroll Effects: Entrance animations on key visuals

Framer Motion: Page transitions and UI feedback animations

Mobile-First Design: Fully responsive from small to large screens

## Deployment

Deployed via Netlify with continuous deployment from GitHub.

To deploy your own copy:

Push your code to GitHub

Log in to Netlify

Click “New site from Git”

Connect your repo and configure build settings (e.g., npm run build, output dir: dist)

Click “Deploy Site”

Roadmap / Ideas
Add checkout and order flow

Auth integration (e.g., Firebase Auth or Clerk)

Real product data via CMS or headless backend

Multi-language support

## Acknowledgments

Inspired by the fun of parody projects and the challenge of crafting smooth UI/UX with animation-focused frontend tech.

```

```
