# State of Youth — Digital Inclusion Nepal

A modern, responsive, production-ready website for the **State of Youth – Digital Inclusion Nepal** chapter: a youth-led nonprofit helping young people and underserved communities across Nepal gain digital skills, confidence and opportunity.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4** and **Framer Motion**.

## Getting Started

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

Other scripts:

```bash
pnpm build    # production build (static export of all pages)
pnpm start    # serve the production build
pnpm lint     # eslint
```

## Pages

| Route         | Description                                              |
| ------------- | -------------------------------------------------------- |
| `/`           | Home — hero, stats, mission, programs, SDGs, impact, testimonials, gallery |
| `/about`      | Who we are, mission, vision, approach, activity timeline |
| `/programs`   | Six programs with expandable "read more" cards           |
| `/sdg-focus`  | Alignment with UN SDGs 4, 8, 9, 10                       |
| `/events`     | Upcoming & past events (tabbed)                          |
| `/members`    | Chapter leader highlight (Bikash) + team grid            |
| `/resources`  | Training materials, toolkits, downloads, external links  |
| `/contact`    | Contact form (client-validated), info, map, socials      |

## Project Structure

```
src/
├── app/           # routes, layout, globals.css (design tokens), sitemap, robots
├── components/
│   ├── layout/    # Header (+ mobile nav), Footer, Container
│   ├── ui/        # Button, Badge, SectionHeading, CountUp, SocialIcon
│   ├── motion/    # Reveal, Stagger (Framer Motion wrappers)
│   └── sections/  # Hero, StatsBand, ProgramGrid, SDGGrid, EventsList, etc.
├── data/          # Typed content — single source of truth (edit here)
├── lib/           # cn() util, shared motion variants
└── types/         # shared TypeScript interfaces
```

## Editing content

All content lives in typed files under `src/data/` — edit these, no component changes needed:

- `programs.ts`, `sdgs.ts`, `events.ts`, `resources.ts` — card content
- `members.ts` — chapter leader + team roles (append real members as the chapter grows)
- `stats.ts`, `testimonials.ts`, `partners.ts` — supporting content
- `site.ts`, `navigation.ts` — brand info, contact, nav links
- `images.ts` — maps the chapter's real program photos in `public/gallery/`

## Design system

Brand tokens (colors, fonts, radii, shadows) are defined once in `src/app/globals.css` via Tailwind v4's `@theme` block. Primary `#0066CC`, Secondary `#00AEEF`, Accent `#00C896`.

## Notes

- **Photos** in `public/gallery/` are the chapter's authentic "Digital Literacy Program — Enabling Digitalization in the Musahar Community" images.
- **Contact & newsletter forms** are client-validated UI (no backend). To make them live, add a Next.js Route Handler (e.g. `src/app/api/contact/route.ts`) and post to it from `ContactForm.tsx` / `Newsletter.tsx`.
- **Accessibility & SEO**: semantic landmarks, focus states, reduced-motion support, per-page metadata, JSON-LD, `sitemap.xml`, `robots.txt`.
