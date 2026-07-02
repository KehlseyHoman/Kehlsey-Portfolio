# Kehlsey Homan -Portfolio

A React 19 + TypeScript + Vite portfolio site, built with React Router (multi-page)
and styled with a soft blue/purple/teal/pink design system.

## Pages

- **Home** -hero intro, "Recent builds" (featured apps pulled from `projects.ts`),
  and an interactive tech stack breakdown
- **Projects** -full project list, apps and client sites
- **About** -bio and photos
- **Contact** -direct links plus a Netlify-powered contact form

## Structure

- `src/pages/` -Home, Projects, About, Contact
- `src/components/Nav`, `src/components/Footer` -site chrome
- `src/components/ProjectCard/` -the "stat bar" signature element used on project cards
- `src/components/TechFlow/` -interactive, expandable breakdown of core tech (React, Angular,
  TypeScript, Spring Boot, Java, SQL/PostgreSQL) shown on the Home page
- `src/data/projects.ts` -edit this file to add/update/remove projects (apps vs. client sites)
- `src/assets/` -profile photo (`kehlsey-profile.jpg`) and About page photos (`assets/about/`)
- `src/index.css` -design tokens (colors, fonts, spacing) -change these to retheme the whole site

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build & lint

```bash
npm run build    # tsc -b && vite build
npm run lint      # oxlint
npm run preview   # preview the production build locally
```

## Deploy to Netlify

1. Push this folder to a GitHub repo
2. Go to https://app.netlify.com → "Add new site" → "Import an existing project"
3. Connect the repo. Build settings should auto-detect:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy. Netlify will auto-detect the contact form (already wired with
   `data-netlify="true"`, a honeypot field, and a hidden static input for
   build-time detection) -submissions will show up in Site settings → Forms,
   and can be forwarded to your email from there.
5. Optional: add a custom domain in Site settings → Domain management.

## Current projects

Sourced from `src/data/projects.ts`:

- **Offerwatch** -full-stack SaaS job application tracker (Angular, Spring Boot,
  PostgreSQL/Supabase, deployed on Railway) -live demo + GitHub linked
- **Shelved** -native iOS social reading app (SwiftUI, Firebase Auth, AWS
  Amplify) -learning project, shelved unfinished, GitHub linked
- **Kitchen Designs by Wendy** -freelance client marketing site (WordPress,
  Cloudflare, AWS Lightsail)
- **Twin Bay Stoneworks** -freelance client marketing site (WordPress,
  Cloudflare, AWS Lightsail)

## Notes

- `src/components/StackMatch/` contains only `.bak` files from an earlier
  iteration -it isn't imported anywhere and can be deleted if you don't plan
  to revisit it.
- Hatchling Fitness isn't listed yet since it's not built or on GitHub -add
  it to `src/data/projects.ts` once it's live.
