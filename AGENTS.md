# Repository Guidelines

## Project Structure & Module Organization
This repository currently contains one app at `apps/harmoniederm-web`.
- `app/`: Next.js App Router entrypoints (`layout.tsx`, `page.tsx`) and global styles.
- `public/`: static assets (SVGs, icons) served from `/`.
- Root config files in the app: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`.
- `pnpm-workspace.yaml` exists for workspace tooling, but only one package is present today.

## Build, Test, and Development Commands
Run commands from `apps/harmoniederm-web`.
- `pnpm dev`: start local dev server with Turbopack on `http://localhost:3000`.
- `pnpm build`: production build with Turbopack.
- `pnpm start`: serve the production build.
- `pnpm lint`: run ESLint (Next.js core-web-vitals + TypeScript rules).
- `pnpm dev:webpack` / `pnpm build:webpack`: webpack fallback for compatibility checks.

## Coding Style & Naming Conventions
- Language: TypeScript + React (`.ts` / `.tsx`) with strict compiler settings.
- Indentation: 2 spaces; prefer double quotes, matching existing files.
- Components: PascalCase function/component names; route files follow Next.js conventions (`page.tsx`, `layout.tsx`).
- Imports: use `@/*` alias from `tsconfig.json` for project-root imports when helpful.
- Styling: Tailwind CSS v4 in `globals.css`; keep utility classes readable and grouped by layout/spacing/visual intent.

## Testing Guidelines
No test framework is configured yet.
- Minimum pre-PR quality gate: `pnpm lint` and a successful `pnpm build`.
- When adding tests, colocate as `*.test.ts(x)` near source or under `app/__tests__/` and document the new command in `package.json`.

## Commit & Pull Request Guidelines
Git history currently has only an initial scaffold commit, so no strict convention is established yet.
- Use short, imperative commit subjects (example: `Add hero section copy`).
- Keep commits focused and atomic.
- PRs should include: purpose, key changes, verification steps, and screenshots/GIFs for UI updates.
- Link related issue(s) when available and note follow-up tasks explicitly.

## Security & Configuration Tips
- Do not commit secrets. `.env*` is ignored by default.
- Use `.env.local` for local development values.
- Keep generated folders (`.next/`, `build/`, `coverage/`) out of commits.
