# Development log

## 2026-10-26 - Expanded cart parchment

- Added `ScrollCart`, a reusable Motion-animated parchment panel that uses `cart-scroll.webp` with dynamic HTML/CSS content, a bounded scrolling item list, empty state, removal controls, and the existing derived cart total.
- Connected the semantic `Finalizar compra` action to the existing `openCheckout()` state action; checkout and purchase-confirmation UI remain the next purchase-system step. Updated the persistent cart control with expanded-state accessibility semantics.
- Files changed: `src/components/cart/ScrollCart.tsx`, `src/components/shop/ShopExperience.tsx`, `src/components/ui/CartControl.tsx`, `src/app/globals.css`, `docs/PROJECT_STATUS.md`, and `docs/DEVELOPMENT_LOG.md`.
- Validation: verified `public/ui/cart-scroll.webp` and `public/ui/primary-button.webp`; `npm.cmd run lint`, `npx.cmd tsc --noEmit`, `git diff --check`, and `npm.cmd run build`.

## 2026-10-21 - Wands room alignment

- Integrated the improved Wands room background: central support bars were removed from the artwork, and the brass nameplates were enlarged and cleaned. Visually reviewed and refined the six wand positions against the remaining side supports, including the portrait-canvas Canto de Espejo.
- Files changed: `src/components/rooms/WandRoom.tsx`, `docs/PROJECT_STATUS.md`, and `docs/DEVELOPMENT_LOG.md`; the updated `public/scenes/wands-room.webp` was supplied beforehand.
- Validation: `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `git diff --check`.

## 2026-10-20 - Refine wand support alignment

- Raised the wand placements slightly so they sit visually on the supports instead of covering them.
- Files changed: `src/components/rooms/WandRoom.tsx`, `docs/PROJECT_STATUS.md`, and `docs/DEVELOPMENT_LOG.md`.
- Validation: `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `git diff --check`.

## 2026-10-20 - Remove wand glass overlay

- Removed the provisional glass after visual review: it did not align precisely with the display frame and reduced visual consistency with the other rooms. The asset remains available.
- Files changed: `src/components/rooms/WandRoom.tsx`, `src/app/globals.css`, `docs/PROJECT_STATUS.md`, and `docs/DEVELOPMENT_LOG.md`.
- Validation: `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `git diff --check`.

## 2026-10-20 - Wands room products

- Added six artwork-relative wand controls with hover and keyboard focus, connected to the existing product selection state. Added a provisional, switchable glass foreground for visual review.
- Files changed: `src/components/rooms/WandRoom.tsx`, `src/components/shop/ShopExperience.tsx`, `src/app/globals.css`, `docs/PROJECT_STATUS.md`, and `docs/DEVELOPMENT_LOG.md`.
- Validation: checked the six wand assets and glass asset; `npm.cmd run lint`, `npx.cmd tsc --noEmit`, `git diff --check`, and `npm.cmd run build`.

## 2026-10-20 - Navigation arrow alignment

- Raised both navigation arrows by another 3px using their shared offset in `src/app/globals.css`; updated `docs/PROJECT_STATUS.md`.
- Validation: `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `git diff --check`.

## 2026-10-20 - Persistent interface alignment refinement

- Increased navigation and cart control widths by 12%, raised the navigation arrows by 3px, and moved room subtitles from 28% to 30% of the title frame height.
- Files changed: `src/app/globals.css`, `docs/PROJECT_STATUS.md`, and `docs/DEVELOPMENT_LOG.md`.
- Validation: `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `git diff --check`.

## 2026-10-20 - Persistent room interface

- Added reusable image-framed room title, navigation, and cart controls with HTML text and icons, connected to existing shop state.
- Mapped all three rooms to their titles and backgrounds; room changes are immediate and the cart panel remains unimplemented.
- Files changed: `src/components/ui/RoomTitle.tsx`, `src/components/ui/NavControl.tsx`, `src/components/ui/CartControl.tsx`, `src/components/shop/ShopInterface.tsx`, `src/components/shop/ShopExperience.tsx`, `src/app/globals.css`, `docs/PROJECT_STATUS.md`, and `docs/DEVELOPMENT_LOG.md`.
- Validation: verified referenced assets; `npm.cmd run lint`, `npx.cmd tsc --noEmit`, `git diff --check`, and `npm.cmd run build`.

## 2026-10-20 - Reusable UI assets documented

- Verified the five reusable UI assets in `public/ui/` and documented their intended roles and readiness for integration.
- Recorded that decorative UI is image-based while dynamic text, arrows, and counts must be rendered separately with HTML/CSS.
- Files changed: `docs/PROJECT_STATUS.md` and `docs/DEVELOPMENT_LOG.md`.
- Validation: verified all five asset files; `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `git diff --check`.

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

## 2026-10-21 - Individual wand placement refinement

- Refined individual wand widths and horizontal positions around the existing layout, including the portrait-canvas Canto de Espejo; retained the existing vertical positions and interaction behavior.
- Files changed: `src/components/rooms/WandRoom.tsx`, `docs/PROJECT_STATUS.md`, and `docs/DEVELOPMENT_LOG.md`.
- Validation: `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `git diff --check`.

## 2026-10-22 - Approved wand placement baseline

- Recorded the improved Wands background, with central support bars removed and brass nameplates enlarged and cleaned. The six wand positions were manually fine-tuned in-browser; their current values are visually approved for this stage. The next task is adding wand names to the brass nameplates.
- Inspected `src/components/rooms/WandRoom.tsx`, its typed product data, selection state, styles, and scene integration. Updated `docs/PROJECT_STATUS.md` and `docs/DEVELOPMENT_LOG.md` without changing the room or placements.
- Validation: `npm.cmd run lint`, `npx.cmd tsc --noEmit`, `git diff --check`, and `npm.cmd run build`.

## 2026-10-22 - Wand nameplate labels

- Added the six wand names as decorative text on the physical brass nameplates, dynamically sourced from the typed product data. The manually approved wand placement values remain unchanged.
- Files changed: `src/components/rooms/WandRoom.tsx`, `src/app/globals.css`, `docs/PROJECT_STATUS.md`, and `docs/DEVELOPMENT_LOG.md`.
- Validation: `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `git diff --check`.

## 2026-10-22 - Wand nameplate typography

- Increased the shared wand label size and weight, darkened the text, and restrained tracking in `src/app/globals.css`; placements and interactions remain unchanged.
- Updated `docs/PROJECT_STATUS.md` and `docs/DEVELOPMENT_LOG.md`. Validation: `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `git diff --check`.

## 2026-10-22 - Wand detail interaction

- Added a reusable product overlay and wand-specific detail presentation using `wand-details.webp`, animated selection and return, dynamic product fields, and the existing duplicate-safe cart action. Turnaround remains postponed.
- Files changed: `src/components/products/ProductOverlay.tsx`, `src/components/products/WandDetail.tsx`, `src/components/rooms/WandRoom.tsx`, `src/components/shop/ShopExperience.tsx`, `src/app/globals.css`, `docs/PROJECT_STATUS.md`, and `docs/DEVELOPMENT_LOG.md`.
- Validation: verified the detail, button, and six wand assets; `npm.cmd run lint`, `npx.cmd tsc --noEmit`, `git diff --check`, and `npm.cmd run build`.

## 2026-10-22 - Independent wand detail placement

- Added per-wand detail positioning in `src/components/products/WandDetail.tsx`, independent of room placement, while retaining the existing animation and cart behavior.
- Updated `docs/PROJECT_STATUS.md` and `docs/DEVELOPMENT_LOG.md`. Validation: `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `git diff --check`.

## 2026-10-22 - Varita Sombría detail scale

- Reduced only Varita Sombría's detail scale to 0.74 in `src/components/products/WandDetail.tsx`, keeping its center and room placement unchanged.
- Updated `docs/PROJECT_STATUS.md` and `docs/DEVELOPMENT_LOG.md`. Validation: `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `git diff --check`.

## 2026-10-22 - Varita Sombría final detail size

- Reduced Varita Sombría's detail scale from 0.74 to 0.666 in `src/components/products/WandDetail.tsx`, retaining its position and rotation.
- Updated `docs/PROJECT_STATUS.md` and `docs/DEVELOPMENT_LOG.md`. Validation: `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `git diff --check`.

## 2026-10-22 - Varita Sombría detail position

- Adjusted only Varita Sombría's detail position in `src/components/products/WandDetail.tsx`, keeping its size and rotation unchanged.
- Updated `docs/PROJECT_STATUS.md` and `docs/DEVELOPMENT_LOG.md`. Validation: `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `git diff --check`.

## 2026-10-24 - Approved wand detail placement baseline

- Confirmed that all six detail-view wand placements were manually fine-tuned in-browser and are visually approved for this stage. The per-wand detail values in `src/components/products/WandDetail.tsx` remain independent from the approved room placements in `src/components/rooms/WandRoom.tsx`; no room placement was changed.
- Updated `docs/PROJECT_STATUS.md` and `docs/DEVELOPMENT_LOG.md` only. The next development task can proceed without further wand positioning work.
- Validation: `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `git diff --check`.

# 2026-10-24 - Fictional currency constraint

- Added a 2,000-coin derived balance to the existing shop context, an affordability check before adding from wand details, and a temporary Motion notification for insufficient funds.
- Added a merchant-style coin indicator beside the cart; cart removal and reset restore funds automatically because no balance is stored separately.
- Files changed: `src/components/shop/shop-provider.tsx`, `src/components/shop/ShopExperience.tsx`, `src/components/shop/ShopInterface.tsx`, `src/components/products/WandDetail.tsx`, `src/components/ui/CoinBalance.tsx`, `src/components/ui/InsufficientFundsNotice.tsx`, `src/app/globals.css`, `docs/PROJECT_STATUS.md`, `docs/DECISIONS.md`, and `docs/DEVELOPMENT_LOG.md`.
- Validation: `npm.cmd run lint`, `npx.cmd tsc --noEmit`, `git diff --check`, and `npm.cmd run build`.

## 2026-10-24 - Cart and coin horizontal alignment

- Moved the persistent merchant-control group right by a centralized responsive offset (`22.4px`–`31.92px`) so the cart center aligns with the right navigation-control column; its `top` and dimensions are unchanged.
- The coin indicator moves with that group, retaining its existing gap to the cart and avoiding the central scene trim.
- Files changed: `src/app/globals.css`, `docs/PROJECT_STATUS.md`, and `docs/DEVELOPMENT_LOG.md`.
- Validation: `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `git diff --check`.

## 2026-10-24 - Coin indicator horizontal refinement

- Moved only the coin indicator right by a centralized responsive `4px`–`6px` transform, retaining its height, appearance, value, and separation from the fixed cart control.
- Files changed: `src/app/globals.css`, `docs/PROJECT_STATUS.md`, and `docs/DEVELOPMENT_LOG.md`.
- Validation: `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `git diff --check`.

## 2026-10-24 - Final coin display asset

- Replaced the temporary CSS coin plaque with the reusable `public/ui/coin-display.webp` frame; the Spanish-formatted balance and existing coin symbol remain dynamic HTML with the existing accessible label.
- Files changed: `src/components/ui/CoinBalance.tsx`, `src/app/globals.css`, `docs/PROJECT_STATUS.md`, and `docs/DEVELOPMENT_LOG.md`.
- Validation: verified `public/ui/coin-display.webp`; `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `git diff --check`.

## 2026-10-24 - Coin display rightward refinement

- Updated only the coin display's centralized horizontal transform from `clamp(4px, 0.3vw, 6px)` to `1.25vw`; cart positioning, sizing, gap, and all behavior remain unchanged.
- Files changed: `src/app/globals.css`, `docs/PROJECT_STATUS.md`, and `docs/DEVELOPMENT_LOG.md`.
- Validation: `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `git diff --check`.

## 2026-10-24 - Approved coin display placement baseline

- Confirmed the final reusable `coin-display.webp` is integrated and its dynamic Spanish-formatted amount continues to receive the derived `availableCoins` value.
- Recorded the manually fine-tuned, visually approved `3.05vw` coin-display offset. The coin transform remains independent from the cart control, whose positioning was not changed.
- Files changed: `docs/PROJECT_STATUS.md` and `docs/DEVELOPMENT_LOG.md`.
- Validation: `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `git diff --check`.
