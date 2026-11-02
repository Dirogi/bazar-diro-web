[Español](README.md) | [English](README.en.md)

# Bazar Diro

Bazar Diro is an original, desktop-first interactive fantasy shop built as a frontend practice and portfolio project. Rather than a conventional ecommerce site, it is a game-like web experience: enter through an animated exterior, travel between magical rooms, and explore a curated collection of fictional objects.

## Features

- Three themed rooms: Wands, Grimoires, and Potions
- 18 original fantasy products with typed catalog data
- Animated shop entry, room exploration, and product-detail views
- Parchment-style cart with a fictional 2,000-coin balance
- Simulated checkout flow with no real transactions
- Custom fantasy interface inspired by antique labels, brass plaques, and parchment
- Reduced-motion support and keyboard-accessible close controls where relevant

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Motion

## Architecture

The experience uses local, typed product data and a small global shop-state layer to coordinate room navigation, product overlays, cart contents, fictional currency, and checkout. Reusable room and detail components are paired with independent placement configurations so each scene can be composed precisely without duplicating interaction logic.

```text
src/
  app/
  components/
  data/
  types/

public/
  scenes/
  products/
  ui/
```

## Live Demo

Live demo: coming soon

## Screenshots

Screenshots will be added after the final deployment.

## Future Improvements

- Interactive 360° product inspection
- Improved mobile responsiveness
- Optional ambient audio

## Disclaimer

Bazar Diro is a personal practice and portfolio project. All products, currency, and purchase interactions are fictional; it is not a real commercial store.
