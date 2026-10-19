# Development log

## 2026-10-19 - Exterior panel text containment refinement

- Narrowed and repositioned the panel text areas for strict containment: left `21.1% / 43% / 13.9%` and right `79.9% / 42.2% / 14.7%`.
- Replaced browser-controlled phrase wrapping with four explicit block lines per panel and reduced the type to `clamp(0.95rem, 1.25vw, 1.45rem)` at a 1.45 line height.
- Added horizontal clipping and width constraints to protect the painted panel boundaries without adding visual UI.
- Files changed: `src/components/landing/ShopExterior.tsx`, `src/app/globals.css`, `docs/PROJECT_STATUS.md`, and `docs/DEVELOPMENT_LOG.md`.
- Validation: `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `git diff --check`.

## 2026-10-19 - Exterior panel text alignment refinement

- Fine-tuned the centralized burgundy-panel text coordinates after visual review: left `22.3% / 44% / 20%` and right `78.3% / 44% / 20%`.
- Refined the panel text to a 1.48 line height with a restrained shadow for better integration with the painted ornamental areas.
- Files changed: `src/components/landing/ShopExterior.tsx`, `src/app/globals.css`, `docs/PROJECT_STATUS.md`, and `docs/DEVELOPMENT_LOG.md`.
- Validation: `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `git diff --check`.

## 2026-10-19 - Exterior artwork-integrated landing layout

- Repositioned the exterior copy into the existing left and right burgundy artwork panels, removing the conventional lower-left landing layout.
- Moved the `Entrar` control to the central door and styled it as a compact aged-brass cartouche; it continues to share the existing entry action with the invisible door hotspot.
- Centralized percentage coordinates for both panel-copy positions, the entry control, and the door hotspot in `EXTERIOR_LAYOUT` for visual fine-tuning.
- Files changed: `src/components/landing/ShopExterior.tsx`, `src/app/globals.css`, `docs/PROJECT_STATUS.md`, and `docs/DEVELOPMENT_LOG.md`.
- Validation: `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `git diff --check`.

## 2026-10-19 - Exterior landing and entry transition

- Added the full-viewport exterior landing screen, using `/scenes/exterior.webp` as a cover-scaled scene with restrained entry copy and an antique-styled action.
- Added the duplicate-safe Motion entry sequence: a subtle door-focused zoom and darkening complete before `enterShop()` renders the interior shell. Reduced motion shortens the transition and removes the zoom.
- Added a keyboard-accessible invisible door hotspot with centralized percentage-based coordinates, plus a minimal Wands-room shell using `/scenes/wands-room.webp`.
- Replaced the default starter page and styling with full-viewport experience orchestration while retaining the existing `ShopProvider` state architecture.
- Files changed: `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/globals.css`, `src/components/landing/ShopExterior.tsx`, `src/components/shop/ShopExperience.tsx`, `docs/PROJECT_STATUS.md`, and `docs/DEVELOPMENT_LOG.md`.
- Validation: `npm.cmd run lint`, `npx.cmd tsc --noEmit`, `git diff --check`, and `npm.cmd run build`.

## 2026-10-19 - Final WebP asset integration

- Updated all 18 catalog image paths to their final WebP files and removed `.gitkeep` files from populated scene, overlay, and product-asset directories.
- Confirmed the exterior scene, three room scenes, three product-detail backgrounds, and wand glass overlay are present; the asset set is ready for visual implementation.
- Recorded that `canto-de-espejo.webp` has a 1122x1402 portrait canvas requiring alignment review in the future Wands room.
- Files changed: `src/data/wands.ts`, `src/data/grimoires.ts`, `src/data/potions.ts`, `docs/PROJECT_STATUS.md`, and `docs/DEVELOPMENT_LOG.md`.
- Validation: all catalog image paths and required scene/detail/overlay files exist; `npm run lint`, `npx tsc --noEmit`, and `git diff --check`.

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
