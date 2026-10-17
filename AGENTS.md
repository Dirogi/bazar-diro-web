<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Bazar Diro project-specific instructions


## Project overview

Bazar Diro is an interactive fantasy web experience designed as a fictional magical bazaar.

The project is not a real ecommerce website. It is a portfolio project focused on:

- premium visual design
- immersive interaction
- product presentation
- animation
- frontend architecture
- AI-assisted development

The user enters the bazaar from an exterior landing scene, moves through three horizontally connected rooms, explores magical objects, opens product detail overlays, adds items to a fictional cart, and completes a fictional purchase experience.

The three initial rooms are:

1. Wands
2. Grimoires
3. Potions

The project should feel closer to an interactive video-game shop experience than to a conventional ecommerce site.

---

## Main goals

Priorities, in order:

1. Visual quality
2. Immersive interaction
3. Clean reusable frontend structure
4. Performance
5. Responsive adaptation

Do not over-engineer the project.

Avoid unnecessary:

- backend infrastructure
- authentication
- databases
- real payments
- API integrations
- complex state libraries unless genuinely needed

The project should remain primarily frontend-based.

---

## Tech stack

Use:

- Next.js
- TypeScript
- Tailwind CSS
- Motion / Framer Motion
- local TypeScript data files for products

Use React Server Components where appropriate, but interactive shop experiences will require client components.

Do not introduce additional dependencies unless there is a clear reason.

Before adding a package:

1. explain why it is necessary
2. prefer native browser / React / CSS solutions when reasonable
3. avoid packages for very small utilities

---

## Current project structure

Preferred structure:

src/
  app/
  components/
    landing/
    shop/
    rooms/
    products/
    cart/
    ui/
  data/
  types/

public/
  scenes/
  products/
    wands/
    grimoires/
    potions/
  overlays/
  ui/

Do not create unnecessary folders or abstractions.

Keep components focused and reusable.

---

## Core experience

### Landing / exterior

The first screen shows the exterior of Bazar Diro.

The user can enter the shop by clicking the door or an integrated entry control.

Entry transition:

- subtle zoom toward the door
- short fade / darkening
- transition into the first room

After entering, the user arrives directly in:

Room 1 — Wands

---

## Room navigation

Rooms are ordered spatially:

1. Wands
2. Grimoires
3. Potions

Navigation uses left and right arrows.

Direction matters:

- moving to a higher room index = transition toward the right
- moving to a lower room index = transition toward the left

Use a smooth horizontal travelling animation.

Do not use page reloads between rooms.

Do not use separate routes for each room unless there is a strong technical reason.

The preferred model is a single interactive experience controlled by state.

---

## Global shop state

Expected global state includes:

- hasEnteredShop
- currentRoom
- selectedProduct
- cart
- isCartOpen
- isCheckoutOpen
- isPurchaseComplete

Keep state architecture simple.

Use React state / context unless a stronger solution becomes clearly necessary.

Do not introduce Redux, Zustand, or other state libraries without justification.

---

## Rooms

Each room is a full-screen non-scrolling scene.

The room should behave more like a video game screen than a conventional web page.

Each room contains:

1. background scene image
2. interactive product assets layered above the background
3. optional foreground overlays
4. interface layer

Use relative positioning for the room and percentage-based placement for product assets whenever possible.

Avoid relying entirely on hardcoded pixel positions.

---

## Room 1 — Wands

Visual concept:

- elegant old magical wand shop
- dark aged wood
- aged brass
- dark burgundy velvet
- warm cinematic lighting
- prestigious and welcoming

Display:

- 6 wands
- arranged 3 top + 3 bottom
- horizontal orientation
- each wand has a nameplate
- one shared glass overlay sits above the wand assets

Layer order:

1. room background
2. wand assets
3. glass overlay
4. interface

Interaction:

- subtle hover highlight
- click selects wand
- wand zooms forward
- wand rotates from horizontal to vertical
- product detail overlay opens

Closing the detail overlay should reverse the animation and return the wand to its original position.

---

## Room 2 — Grimoires

Visual concept:

- elegant magical library
- dark wood
- aged brass
- burgundy
- parchment
- warm lighting

Display:

- 6 grimoires
- arranged 3 top + 3 bottom
- front cover visible
- each has a nameplate

Interaction:

- subtle hover
- click makes grimoire move forward
- slight zoom / rotation
- grimoire detail overlay opens

No glass overlay is required.

---

## Room 3 — Potions

Visual concept:

- premium magical apothecary
- dark aged wood
- aged brass
- burgundy backing
- glass reflections
- warm cinematic lighting
- subtle alchemical props

Display:

- 6 potion bottles
- arranged 3 top + 3 bottom
- each bottle sits on a pedestal / support
- each has a nameplate

Interaction:

- subtle hover
- click moves potion forward
- zoom into potion detail overlay

---

## Product detail overlays

All product detail screens are overlays above the current room.

The room should remain visible behind the overlay:

- darkened
- optionally slightly blurred
- never replaced by a separate page

Use a reusable detail overlay architecture.

The right information panel should be reusable.

The left visual presentation changes by product type.

### Wands

Left area:

- tarot-card-inspired frame
- wand displayed vertically
- potential turnaround interaction later

Fields:

- Nombre
- Rareza
- Materiales
- Longitud
- Afinidad mágica
- Precio

### Grimoires

Left area:

- parchment / illuminated manuscript inspired display
- grimoire shown prominently
- designed to support front / spine / back turnaround later

Fields:

- Nombre
- Rareza
- Encuadernación y materiales
- Extensión
- Afinidad mágica
- Precio

### Potions

Left area:

- elegant vitrine / showcase
- minimal ornamentation
- subtle pedestal
- potion remains the clear visual focus
- supports turnaround later

Fields:

- Nombre
- Rareza
- Ingredientes
- Efecto
- Precio

Each overlay includes:

- close control
- main "Adquirir" action

---

## Product turnaround

Turnaround is a secondary enhancement.

Do NOT make it a blocker for the first working version.

MVP behavior:

- static high-quality product image

Later enhancement:

- frame sequence or pre-rendered turnaround
- controlled by horizontal drag
- user can inspect front / side / back

Load turnaround assets only when required.

Do not preload all frames for all products.

---

## Shopping cart

There is no separate cart page.

The cart is integrated into the global shop interface.

The cart control is always visible inside the shop.

When clicked:

- a parchment panel unfolds from the cart icon
- it shows purchased / added products
- the parchment folds back when closed

Animation should feel like a scroll or parchment unrolling.

Keep the cart compact and readable.

Cart item fields may include:

- product name
- category
- price
- remove action

Below the parchment there is a button:

"Finalizar compra"

The cart should visually belong to Bazar Diro and must not look like a modern ecommerce drawer.

---

## Checkout flow

Clicking "Finalizar compra" opens a central overlay.

The checkout is fictional.

Show:

- selected products
- total number of items
- total fictional price
- button to continue shopping
- button to confirm purchase

After confirmation:

Show a final message such as:

"Gracias por visitar Bazar Diro."

The experience then provides:

"Volver al inicio"

Reset should:

- clear cart
- close all overlays
- reset current room to Wands
- return to the exterior screen

Prefer resetting application state over forcing a browser reload.

---

## UI visual language

The interface must not look like a modern SaaS UI.

Primary inspiration:

- antique product labels
- magical shop tags
- brass plaques
- apothecary labels
- parchment panels
- decorative cartouches
- medallions
- seals

Core palette:

- dark burgundy
- dark warm brown
- aged brass
- soft antique gold
- parchment
- cream

Avoid:

- neon colors
- bright modern gradients
- glassmorphism
- generic SaaS cards
- oversized rounded rectangles
- excessive blue celestial styling

---

## UI component families

Prefer reusing these visual families:

### Cartouche
Used for:

- room titles
- important labels
- main actions

### Medallion / badge
Used for:

- rarity
- counters
- small icon controls

### Hanging tag / plaque
Used for:

- product nameplates
- small labels

### Parchment panel
Used for:

- cart
- checkout
- messages

---

## Global interface

Inside the shop, the main persistent interface includes:

- room title at the top center
- left navigation arrow
- right navigation arrow
- cart control in the upper-right area

Keep UI visually restrained.

Products and room environments must remain the primary visual focus.

---

## Animation principles

Animations should be:

- smooth
- elegant
- readable
- restrained
- slightly cinematic

Avoid:

- playful bounce animations
- exaggerated elastic effects
- excessive particles
- constant motion

Suggested room transition duration:

approximately 0.8–1.0 seconds

Respect prefers-reduced-motion where reasonable.

---

## Product hover behavior

Use subtle effects only:

- small scale increase
- slight brightness increase
- soft magical glow
- optional nameplate highlight

Hover must never be necessary to understand that an element is interactive.

Clickable products should also work clearly by tap.

---

## Product data

Store product definitions in local TypeScript files.

Examples:

data/
  wands.ts
  grimoires.ts
  potions.ts

Use consistent product IDs.

All products should have:

- id
- type
- name
- rarity
- price
- image

Type-specific properties should remain strongly typed.

---

## Product collection

### Wands

1. Varita Sombría
2. Musgo Cambiante
3. Aguja del Alba
4. Laurel de la Botica
5. Vigilia Fósil
6. Canto de Espejo

### Grimoires

1. Atlas de las Mareas Silentes
2. Bestiario de la Zarpa de Ámbar
3. Cántico de Brasa y Vendaval
4. Tratado del Latón Despierto
5. Herbario de la Savia Serena
6. Cartografía del Umbral Plegado

### Potions

1. Parlamento de Luciérnagas
2. Manto del Solsticio
3. Paso sin Orilla
4. Candela del Cerrajero Dormido
5. Tinta del Testigo Quieto
6. Nudo del Regreso

---

## Performance

This project is image-heavy.

Important:

- optimize room backgrounds as WebP/AVIF when appropriate
- use transparent WebP/PNG for product assets
- avoid loading unnecessary assets
- lazy-load secondary content
- do not preload every turnaround frame
- keep animations GPU-friendly
- avoid huge uncompressed images

Use Next.js image tooling where it makes sense, but do not force it where it complicates precise absolute layout unnecessarily.

---

## Responsive strategy

Primary design target:

Desktop.

Reference composition:

1920x1080

First make the desktop experience excellent.

Then adapt to:

- 1440px
- 1366px
- tablet
- mobile

Do not let mobile requirements compromise the initial desktop art direction.

On smaller devices, alternative layouts are acceptable.

---

## Accessibility

Maintain basic accessibility even though the project is highly visual.

Interactive objects should:

- be keyboard reachable where practical
- have accessible labels
- have visible focus states
- not rely only on color
- support click/tap

Buttons should use semantic button elements.

Images should have sensible alt text where appropriate.

---

## Coding rules

- TypeScript only
- avoid `any`
- prefer small reusable components
- do not create abstractions before they are needed
- keep visual constants centralized where useful
- avoid duplicated room logic
- comment only when logic is not obvious
- keep code readable for a junior developer

Before implementing a major feature:

1. inspect existing code
2. explain the proposed change
3. avoid rewriting unrelated files
4. preserve existing functionality
5. run lint/type checks when appropriate

---

## Agent collaboration rules

This repository may be modified by both Codex and Claude Code.

Before making changes:

1. read this file
2. inspect the current repository state
3. inspect recent changes
4. do not assume previous agent context
5. do not rewrite working architecture without explaining why

Never make large unrelated refactors unless explicitly requested.

If another agent has already implemented a feature:

- extend it
- do not replace it unnecessarily

Do not work concurrently on the same files with another agent.

Prefer completing one coherent task at a time.

---

## Git workflow

Before large changes:

- inspect `git status`

After a successful milestone:

- ensure project builds
- ensure lint/type checks pass when relevant
- commit changes

Keep commits focused and descriptive.

Example:

`feat: add animated room navigation`

Do not bundle unrelated changes into the same commit.

---

## Development philosophy

The project should feel visually ambitious but technically manageable.

When choosing between:

A. a complex technique that slightly improves visuals

and

B. a simpler technique that looks almost as good

prefer B unless the complex technique provides a meaningful portfolio benefit.

The goal is to finish a polished experience, not build the most technically complex version possible.