# Syed Farhan Ali — Portfolio

A premium, dark-themed portfolio site for an AI/ML engineer. Built with
**Vite + React + TailwindCSS + Framer Motion**, designed to feel like the kind
of site you'd see from a senior AI researcher or technical founder — not a
template.

## Live preview

Once deployed, link it here.

## Stack

- **React 18** + **Vite 5** — fast dev, near-instant HMR, lean production builds
- **TailwindCSS 3** — utility-first styling with a small custom theme layer
- **Framer Motion 11** — viewport-triggered reveals, scroll-aware nav, micro-interactions
- **lucide-react** — clean, consistent iconography

> Why Vite over Next.js: this is a static marketing site with no SSR/SSG
> requirements. Vite ships less, builds faster, and deploys identically to any
> static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages). The component
> code is framework-portable — if you ever want to move to Next.js later,
> drop the `src/sections` and `src/components` folders into an `app/page.jsx`
> and you're done.

## Project structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Nav.jsx              # Sticky / glass top nav
│   │   └── Primitives.jsx       # Reveal, Eyebrow, Tag, StatusDot
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Work.jsx             # Featured case studies
│   │   ├── Skills.jsx
│   │   ├── Journey.jsx          # Timeline
│   │   ├── GitHubSection.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── content.js           # All copy & project data lives here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Installation

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Production build
npm run build

# 4. Preview the production build locally
npm run preview
```

Node 18+ is recommended.

## Editing content

**Don't edit individual JSX files for copy changes.** All site content lives in
one place:

```
src/data/content.js
```

This file is structured into:

- `PROFILE` — name, role, links, email, location
- `ABOUT` — long-form bio paragraphs + highlight grid
- `SKILLS` — skill groups (renders as cards)
- `PROJECTS` — featured case studies (the heavy ones with problem / approach / outcomes)
- `SECONDARY_PROJECTS` — supporting repos shown as chips
- `JOURNEY` — timeline entries
- `GITHUB` — public-profile stats and language distribution

Edit a string here, save, and the site updates everywhere it's used.

## Deployment

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

Vercel auto-detects Vite and deploys with sensible defaults.

### Netlify

```
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Cloudflare Pages / GitHub Pages

Build command: `npm run build`  ·  Output directory: `dist`

For GitHub Pages, set the `base` option in `vite.config.js`:

```js
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

## Environment variables

None required. The site is fully static. If you later add a contact-form
backend or analytics, follow Vite's convention — variables prefixed with
`VITE_` become available on `import.meta.env`.

## Performance & SEO

- All fonts are loaded via `<link rel="preconnect">` to reduce TTFB
- Open Graph + Twitter Card meta tags pre-filled in `index.html`
- Single-page app, no client routing overhead
- Build output: ~95 KB gzip JS + ~12 KB gzip CSS (well within mobile budgets)

## Suggested future improvements

1. **Real GitHub data** — fetch live commit counts and star totals from the GitHub
   REST API at build time and bake them into `content.js`. Today the
   contribution heatmap is a deterministic visual; an API call would make it
   accurate.

2. **MDX project pages** — promote each featured project to its own
   case-study page at `/work/[slug]` with an extended writeup, screenshots,
   and an architecture diagram.

3. **Contact form** — wire the contact section to a service like Resend or
   Formspree so messages land in the inbox without leaving the site.

4. **Theme switcher** — add a light theme. The CSS variables are already in
   place; only a few `:root[data-theme="light"]` overrides are needed.

5. **Analytics** — Plausible or Vercel Analytics for visitor insight without
   the cookie banner overhead.

6. **OG image generator** — generate a per-page Open Graph image from the
   project data at build time (vercel/og or satori).

7. **Blog** — add a small `/notes` section for shorter technical posts to
   demonstrate writing alongside building.
