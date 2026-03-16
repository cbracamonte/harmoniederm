# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

HarmonieDerm is a dermatology and aesthetic medicine clinic website — an SEO-optimized informational marketing site targeting local search in Trujillo, Peru. Phase 1 is purely informational (no auth, no booking, no CRM). Architecture must support future phases (booking, CRM, marketing automation).

## Commands

All commands run from `apps/harmoniederm-web/`:

```bash
pnpm dev          # Dev server with Turbopack on http://localhost:3000
pnpm build        # Production build with Turbopack
pnpm lint         # ESLint (Next.js core-web-vitals + TypeScript rules)
pnpm start        # Serve production build
pnpm dev:webpack  # Webpack fallback for compatibility checks
```

**Pre-PR gate:** `pnpm lint` + `pnpm build` must pass. No test framework configured yet — add tests as `*.test.ts(x)` colocated with source or under `app/__tests__/`.

## Architecture

**Monorepo** with pnpm workspaces, currently one app: `apps/harmoniederm-web` (Next.js 16 + App Router).

**Routing pattern:** Next.js App Router file-based routing. Treatment pages follow `/treatments/[slug]`. Local SEO slugs target city: `/facial-harmonization-trujillo`, `/rhinomodeling-trujillo`.

**Styling:** Tailwind CSS v4 via `globals.css` (`@import "tailwindcss"`). CSS custom properties defined there handle light/dark mode via `prefers-color-scheme`.

**Imports:** Use `@/*` path alias (maps to `apps/harmoniederm-web/`) for project-root imports.

## Coding Style

- TypeScript strict mode; `.ts`/`.tsx` files only
- 2-space indentation, double quotes
- PascalCase component names; Next.js conventions for route files (`page.tsx`, `layout.tsx`)
- Tailwind classes grouped by layout/spacing/visual intent

## SEO Requirements

Every page must have:
- Optimized `<title>` and `<meta name="description">` via Next.js metadata API
- Semantic HTML with proper heading hierarchy (H1 → H2 → H3)
- `alt` tags on all images; optimized URLs
- Each treatment gets its own dedicated page under `/treatments/[slug]`

## Key Content Areas

- **Flagship treatments** (primary marketing pillars): Facial Harmonization, Rhinomodeling
- **Secondary treatments**: Dermapen, skin rejuvenation, dark circles, hyaluronic acid
- **Planned sections**: Home, About, Treatments, Before & After, Blog, Contact (WhatsApp + location)

## Secrets & Environment

Use `.env.local` for all local development values. `.env*` files are gitignored. Never commit secrets.
