# Project status

Last updated: 2026-10-24

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
- A reusable persistent room interface displays the room title, available navigation controls, and cart count using the UI assets.
- The improved Wands room background removes the central support bars and enlarges and cleans the empty brass nameplates. The six wand positions were manually fine-tuned in-browser and their current placement values are visually approved for this stage; no glass overlay is rendered.
- The six brass nameplates display decorative wand names dynamically from the product data, with larger, darker serif typography; the approved placement values remain unchanged.
- Wand selection opens a reusable product overlay using `wand-details.webp`, with animated wand movement, dynamic details, and the existing cart action. Turnaround remains postponed.
- All six wand detail-view placements were manually fine-tuned in-browser and are visually approved for this stage. Their per-product detail values remain centralized in `WandDetail.tsx`, independent from the approved Wands-room placements in `WandRoom.tsx`; no room placement was changed during detail refinement.
- The reusable UI asset set is available in `public/ui/` and ready for integration:
  - `room-title.webp`: room title frame with a small subtitle zone and a larger main title zone.
  - `nav-control.webp`: side navigation frame; its directional arrow is rendered separately.
  - `cart-control.webp`: closed cart control and merchant-style cart anchor.
  - `cart-scroll.webp`: expandable parchment panel for the open cart.
  - `primary-button.webp`: decorative frame for primary actions such as Adquirir and Finalizar compra.

## Work in progress

- No application feature is currently in progress.

## Next tasks

- Add directional room transitions and the remaining interior interactions.
- Wand detail positioning requires no further work before the next development task.

## Current application state

- The root page renders the exterior until `hasEnteredShop` is set, then renders the current room.
- `ShopExterior` uses the exterior asset as an immersive, cover-scaled background. Its panel text uses explicit block lines and constrained percentage widths to remain within the artwork's burgundy panels, while the keyboard-accessible invisible door hotspot and `Entrar` cartouche sit over the central door.
- `ShopExperience` maps the current room to its background and title; the persistent interface navigates instantly between rooms using global state. The Wands room uses centralized, individually refined artwork-relative product placements and opens a wand detail overlay through `selectedProduct`. The cart control toggles cart state and displays its count, but the cart panel is not implemented.
- Persistent interface sizing and alignment are adjustable through CSS variables: navigation and cart frames are scaled up, navigation arrows use a -6px vertical offset, and room subtitles sit lower within their labels.
- `canto-de-espejo.webp` uses a 1122x1402 portrait canvas; its image remains centered and sized by width within the wand control, and its placement was visually reviewed with the other wands.
- The provisional wand glass was intentionally removed after visual review because it did not align precisely with the display frame and reduced consistency with the other rooms. The asset remains in `public/overlays/`.

## Known issues

- None known.

## Important notes

- The project is frontend-only and uses fictional commerce interactions.
- UI decorative assets are image-based. Render dynamic room titles, arrows, cart counts, button labels, and product text separately with HTML/CSS; do not bake dynamic text into the images.
- Empty feature and asset directories are retained with `.gitkeep` files until content is added.
