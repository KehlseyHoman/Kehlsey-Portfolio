# Kehlsey Homan — Portfolio

A React + TypeScript + Vite portfolio site, built with React Router (multi-page)
and styled with a soft blue/purple/teal/pink design system.

## Structure

- `src/pages/` — Home, Projects, About, Contact
- `src/components/` — Nav, Footer, ProjectCard (the "stat bar" signature element)
- `src/data/projects.ts` — edit this file to add/update/remove projects (apps vs. client sites)
- `src/assets/kehlsey-profile.jpg` — profile photo used on the About page
- `src/index.css` — design tokens (colors, fonts, spacing) — change these to retheme the whole site

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Deploy to Netlify

1. Push this folder to a GitHub repo
2. Go to https://app.netlify.com → "Add new site" → "Import an existing project"
3. Connect the repo. Build settings should auto-detect:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy. Netlify will auto-detect the contact form (already wired with
   `data-netlify="true"` and a hidden static form for build-time detection) —
   submissions will show up in Site settings → Forms, and can be forwarded to
   your email from there.
5. Optional: add a custom domain in Site settings → Domain management.

## Notes

- The "Shelved" project links to your GitHub profile rather than a specific
  repo — update `src/data/projects.ts` with the exact repo URL if you want a
  direct link.
- Hatchling Fitness isn't listed yet since it's not built or on GitHub —
  add it to `src/data/projects.ts` once it's live.
