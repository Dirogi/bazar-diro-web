# Development log

## 2026-10-18 — Product domain model and catalog

- Added reusable TypeScript product types, including a shared base type, category-specific extensions, and the rarity union.
- Added typed local catalogs for six wands, six grimoires, and six potions with stable IDs and placeholder image paths.
- Files changed: `src/types/product.ts`, `src/data/wands.ts`, `src/data/grimoires.ts`, `src/data/potions.ts`, and `docs/PROJECT_STATUS.md`.
- Validation: `npm run lint` and `npx tsc --noEmit`.

## 2026-10-17 — Initial project foundation

- Set up the Next.js project with TypeScript, Tailwind CSS, and the App Router.
- Installed Motion and initialized Git.
- Configured `AGENTS.md` with Next.js and Bazar Diro guidance.
- Created the initial source, public-asset, and shared-documentation directory structure.
- Files changed: `src/components/`, `src/data/`, `src/types/`, `public/scenes/`, `public/products/`, `public/overlays/`, `public/ui/`, and `docs/`.
- Validation: inspected the resulting project tree; no application code or dependencies were changed.

## 2026-10-18 - Global shop state architecture

- Added `ShopProvider` and `useShop` with typed room navigation, product selection, cart operations, checkout state, purchase state, and complete reset behavior.
- Wrapped App Router content with the client provider while retaining the root layout as a Server Component.
- Files changed: `src/components/shop/shop-provider.tsx`, `src/app/layout.tsx`, `docs/PROJECT_STATUS.md`, `docs/DECISIONS.md`, and `docs/DEVELOPMENT_LOG.md`.
- Validation: `npm run lint`, `npx tsc --noEmit`, and `git diff --check`.
