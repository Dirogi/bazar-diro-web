"use client";

import { useShop } from "@/components/shop/shop-provider";

export function ShopExperience() {
  const { currentRoom } = useShop();
  const roomTitle = currentRoom === "wands" ? "Varitas" : "Próximamente";

  return (
    <main className="shop-experience" aria-label={`Sala actual: ${roomTitle}`}>
      <div className="shop-experience__scene" aria-hidden="true" />
      <header className="shop-experience__title">
        <p>Primer salón</p>
        <h1>{roomTitle}</h1>
      </header>
    </main>
  );
}
