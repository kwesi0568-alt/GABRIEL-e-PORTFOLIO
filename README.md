# GABRIEL e-PORTFOLIO

Public portfolio for **Gabriel Atta**, HSE Engineer based in Dubai. One editorial page: selected site work, a short biography, capabilities, credentials, and a contact note. Built as a record of the work, not a brochure.

Open to HSE leadership roles.

| | |
|---|---|
| Role | HSE Engineer |
| Location | Dubai, UAE |
| Email | [gatta9707@gmail.com](mailto:gatta9707@gmail.com) |
| Phone | [+971 54 319 1697](tel:+971543191697) |
| CV | [`public/gabriel-atta-cv.pdf`](public/gabriel-atta-cv.pdf) |
| Repository | [kwesi0568-alt/GABRIEL-e-PORTFOLIO](https://github.com/kwesi0568-alt/GABRIEL-e-PORTFOLIO) |

## What the page does

The site is a single route (`/`) with smooth in-page navigation. The header stays fixed; on small screens it opens a full-screen menu.

| Section | Anchor | What it shows |
|---|---|---|
| Hero | `#top` | Name, role, Dubai, and the practice line: ISO 45001, permit-to-work, and RAMS for workforces above 400. |
| Selected work | `#work` | Six project cards. Filter chips: All, Governance, High-rise, Digital, Systems. On desktop, hover reveals a short description. On small screens the description is always visible. |
| About | `#about` | Portrait, biography, and four figures: zero LTIs (24+ months), 98% third-party audit compliance, 40% fewer repeat incidents after root-cause analysis, and a 400+ peak workforce. CV download. |
| Capabilities | `#skills` | Eight disciplines, from HSE governance through safety systems. |
| Credentials | `#credentials` | NEBOSH IGC, OSHA 30-Hour, Khalifa University HSE Engineering, UC Davis process safety, and the Google Project Management Certificate. Psychology degree in progress (expected 2029). |
| A note | `#contact` | Email, phone, and a form. |
| Footer | — | Index, practice areas, studio, and colophon. |

### Selected work

Content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts).

| Project | Category | Years | Where |
|---|---|---|---|
| Steel & Facade Programme | Governance | 2025 | HSE Officer, German Steel Contracting |
| Digital Safety Stack | Digital | 2025 | HSE Officer, German Steel Contracting |
| High-rise Residential | High-rise | 2022–25 | Safety Officer, Evan Lim Penta |
| High-risk RAMS | High-rise | 2022–25 | Safety Officer, Evan Lim Penta |
| Permit-to-Work | Systems | 2025 | HSE Officer, German Steel Contracting |
| Lifting & Cranes | Systems | 2022–25 | Safety Officer, Evan Lim Penta |

### Contact form

The form does not send email and has no server. It checks the fields in the browser, then stores the note in `localStorage` under the key `atta-notes`.

- Name must be at least 2 characters.
- Email must look like an address.
- Message must be at least 16 characters.
- Intent is one of: a role, a project, or a hello.

A successful submit replaces the form with a thank-you state. Use the email and phone links for a message that should actually arrive.

## Stack

- [TanStack Start](https://tanstack.com/start) and TanStack Router on React 19
- Vite 8, TypeScript
- Tailwind CSS v4 (design tokens in [`src/styles.css`](src/styles.css))
- Radix Slot, `class-variance-authority`, and `lucide-react` for controls and icons
- Fraunces (display) and Figtree (text), loaded from Google Fonts

The visual system is warm paper (`#F3EEE6`), ink (`#171411`), and a forest teal accent (`#2A5C50`). Corners stay sharp. Motion is short and respects `prefers-reduced-motion`.

Share-card identity is [`src/lib/og/site.json`](src/lib/og/site.json) plus [`public/og.jpg`](public/og.jpg) (1200×630) and [`public/favicon.svg`](public/favicon.svg).

## Requirements

- Node.js 22
- npm

## Run locally

```bash
npm install
npm run dev
```

The dev server listens on `http://127.0.0.1:8080` and on all interfaces (`0.0.0.0:8080`).

Production build and a local preview of that build:

```bash
npm run build
npm run preview
```

`npm run build` also runs the database migration script. With no `DATABASE_URL` set, that step skips. This portfolio does not use a database. The contact note stays in the browser.

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Dev server on port 8080 |
| `npm run build` | Production build |
| `npm run preview` | Serve the production build |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |
| `npm run format` | Prettier write |
| `npm test` | Script tests and a small set of library tests |

## Project layout

```
src/
  routes/            TanStack Start routes (the page is routes/index.tsx)
  components/        Header, hero, work grid, about, skills, credentials, contact, footer
  components/ui/     Button, input, label, textarea
  data/portfolio.ts  Name, contact, projects, skills, credentials, stats
  styles.css         Tailwind theme: color, type, spacing
  lib/og/site.json   Share-card title
public/
  images/            Project photographs and portrait
  gabriel-atta-cv.pdf
  og.jpg
  favicon.svg
```

## Editing the site

Almost all copy is data, not markup.

1. Open [`src/data/portfolio.ts`](src/data/portfolio.ts).
2. Change `SITE` for name, email, phone, location, or the hero line.
3. Add or edit an entry in `PROJECTS`. `category` must be `Governance`, `High-rise`, `Digital`, or `Systems`. Put the image in `public/images/` and point `image` at it (for example `/images/steel.jpg`).
4. Edit `SKILLS`, `CREDENTIALS`, or `STATS` the same way.
5. Navigation labels are the `NAV` array. Each `href` must match a section `id`.

Replace the portrait at `public/images/portrait.jpg` and the CV at `public/gabriel-atta-cv.pdf` without renaming them, or update the paths in `SITE` and the about section if you do.

## Deploy

The production build targets Vercel (`vite build` emits `.vercel/output`). Connect this repository to a Vercel project and use:

- Install command: `npm install`
- Build command: `npm run build`

Do not commit `node_modules`, `.vercel`, or local screenshots. Those are already in [`.gitignore`](.gitignore).

`@tanstack/react-start` is pinned to the patched 1.168 line (1.168.60 or newer) because earlier 1.168 releases are affected by [CVE-2026-102989](https://tanstack.com/blog/tanstack-start-security-update-cve-2026-102989).

## License

No license is granted by default. Ask before reusing the copy, photographs, portrait, or CV.
