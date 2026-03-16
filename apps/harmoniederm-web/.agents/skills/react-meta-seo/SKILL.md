---
name: react-meta-seo
description: Enforces consistent SEO tags using react-meta-seo (React 19). Use on every new/updated page to set title, description, canonical, Open Graph, Twitter Card, robots, and JSON-LD (schema-dts). Applies especially to Next.js App Router pages in apps/harmoniederm-web.
user-invocable: false
---

# react-meta-seo (HarmonieDerm)

This skill makes Claude **always implement SEO head tags** via `react-meta-seo` (React 19 native hoisting) whenever it creates or edits pages.

> Docs: `https://react-meta-seo.vercel.app/docs`

## Current Project Context (assumptions)

- App lives in `apps/harmoniederm-web` (Next.js App Router, React 19).
- Dependencies already present: `react-meta-seo`, `schema-dts`.

## Core Rule (always)

Whenever you create or modify any route page (typically `app/**/page.tsx`) you MUST:

1. Add **one** `<Title>` for the page.
2. Add **one** `<Meta name="description" ...>` with a human, conversion-friendly summary.
3. Add **one** canonical `<Link rel="canonical" href="...">` when the route is indexable.
4. Add OpenGraph + Twitter tags (either explicit components or equivalent `Meta` tags).
5. Add JSON-LD with `schema-dts` (`<Schema ... />`) for pages that represent a clinic/service/article.

## Critical Rules (do not break)

1. **No duplicates**
   - Avoid multiple `<Title>` or repeated `description` meta tags in the same render tree.
   - “Last one wins” for titles; search engines may ignore duplicates for meta tags.

2. **Absolute URLs required**
   - `canonical`, `og:image`, `og:url`, `twitter:image` must be absolute (include `https://...`).

3. **Metadata must be SSR-safe**
   - Do not compute tags from client-only state or `window`.
   - If a value depends on environment (hostname), prefer a single server-safe constant (e.g. from env).

4. **RSC compatibility**
   - Keep SEO components in Server Components when possible (pages/layouts) to ensure SSR output.

5. **Indexing rules**
   - Production, public pages: index/follow by default.
   - Draft/beta/internal pages: set `<Robots index={false} follow={false} />` (or appropriate).

## Preferred Components (use these)

Use these exports from `react-meta-seo`:

- `Title` — page title
- `Meta` — meta tags (name/property/httpEquiv/charset)
- `Link` — canonical, alternate, icons, etc.
- `OpenGraph` — required OG fields enforced (title, type, image, url)
- `TwitterCard` — twitter tags
- `Robots` — `index/follow` + advanced directives
- `Schema` and (if you adopt them) `SchemaPresets` — JSON-LD

Use `schema-dts` types for JSON-LD shape safety.

## Page Template (minimum)

Every indexable page must include at least:

```tsx
import { Link, Meta, OpenGraph, Title, TwitterCard } from "react-meta-seo";

export default function Page() {
  return (
    <>
      <Title>{/* Page Title */}</Title>
      <Meta name="description" content={/* 140–160 chars */} />
      <Link rel="canonical" href={/* absolute URL */} />

      <OpenGraph
        title={/* page title */}
        type="website"
        url={/* absolute URL */}
        image={/* absolute OG image URL */}
        description={/* optional but recommended */}
        siteName="HarmonieDerm"
        locale="es_PE"
      />

      <TwitterCard
        card="summary_large_image"
        title={/* page title */}
        description={/* optional */}
        image={/* absolute image URL */}
      />

      {/* page content */}
    </>
  );
}
```

## JSON-LD Rules (structured data)

Use `<Schema />` for pages where it helps Google show rich results:

- **Home / clinic**: `MedicalBusiness` or `LocalBusiness` (whichever best matches)
- **Treatment pages**: `Service` (and optionally `FAQPage` if there is a real FAQ section)
- **Blog posts**: `Article`

Guidelines:

- Always include `@context: "https://schema.org"`.
- Prefer stable identifiers/URLs.
- Do not promise medical outcomes; keep copy factual and compliant.

## Canonical / URL Strategy

Define a single “site origin” (e.g. `https://harmoniederm.pe`) and always build:

- `canonical`: `${origin}${pathname}`
- `og:url`: same as canonical

Never include UTM params in canonical.

## When NOT to use this skill

- If the user explicitly asks to use Next.js `metadata` API instead of `react-meta-seo`.
- If you are building a pure client-only SPA route that is intentionally not indexed (rare here).

## Verification Checklist (before you say “done”)

- Page has exactly one title.
- Description exists and matches page intent (not placeholder).
- Canonical is absolute and correct.
- OG has required fields and absolute image.
- Twitter card uses `summary_large_image` unless asked otherwise.
- Robots directives match the page (indexable vs non-indexable).
- JSON-LD is valid for the page type and uses `schema-dts` typings.

