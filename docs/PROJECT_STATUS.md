# Project status

Last updated: 2026-10-19

## Current phase

Initial application architecture and product catalog.

## Completed work

- Next.js project initialized with TypeScript, Tailwind CSS, App Router, and Motion.
- Git repository initialized.
- Bazar Diro agent guidance configured in `AGENTS.md`.
- Initial source, asset, and documentation directory structure created.
- Strongly typed product domain model created for wands, grimoires, and potions.
- Local catalog data added for the initial 18 products, with final WebP asset paths.
- Global shop state is available through a typed React Context provider and hook.
- Final visual assets are available: the exterior scene, three room scenes, three product-detail backgrounds, the wand glass overlay, and all 18 product images.
- Exterior landing, animated shop entry, and the initial Wands-room shell are implemented using the existing global shop state.

## Work in progress

- No application feature is currently in progress.

## Next tasks

- Implement the six interactive wand products in the Wands room.
- Add the remaining room navigation and interior interface.

## Current application state

- The root page renders the exterior until `hasEnteredShop` is set, then renders the Wands-room shell.
- `ShopExterior` uses the exterior asset as an immersive, cover-scaled background. Its panel text uses explicit block lines and constrained percentage widths to remain within the artwork's burgundy panels, while the keyboard-accessible invisible door hotspot and `Entrar` cartouche sit over the central door.
- `ShopExperience` provides a minimal Wands-room background and title only; it contains no product, navigation, cart, or detail-overlay implementation.
- The final asset set is complete enough to begin visual implementation. `canto-de-espejo.webp` uses a 1122x1402 portrait canvas, unlike the wider wand canvases, so its alignment needs review when composing the Wands room.

## Known issues

- None known.

## Important notes

- The project is frontend-only and uses fictional commerce interactions.
- Empty feature and asset directories are retained with `.gitkeep` files until content is added.
