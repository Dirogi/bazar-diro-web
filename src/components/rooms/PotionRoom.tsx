"use client";

import { useShop } from "@/components/shop/shop-provider";
import { potions } from "@/data/potions";
import type { CSSProperties } from "react";

type PotionPlacement = {
  left: string;
  top: string;
  width: string;
  scale?: number;
  rotation?: number;
  label: { left: string; top: string; width: string; height: string };
};

// Positions are percentages of the 1672 × 941 room artwork, aligned to the six display niches.
export const POTION_PLACEMENTS: Record<string, PotionPlacement> = {
  "parlamento-de-luciernagas": {
    left: "32.4%", top: "28.2%", width: "10.7%", scale: 0.7,
    label: { left: "32.4%", top: "41.7%", width: "10.1%", height: "3.9%" },
  },
  "manto-del-solsticio": {
    left: "50%", top: "27.5%", width: "10.5%", scale: 0.7,
    label: { left: "50%", top: "41.9%", width: "10.1%", height: "3.9%" },
  },
  "paso-sin-orilla": {
    left: "67.6%", top: "26.6%", width: "10.4%", scale: 0.7,
    label: { left: "67.6%", top: "41.9%", width: "10.1%", height: "3.9%" },
  },
  "candela-del-cerrajero-dormido": {
    left: "32.4%", top: "58.7%", width: "10.3%", scale: 0.7,
    label: { left: "32.4%", top: "73.4%", width: "10.1%", height: "3.9%" },
  },
  "tinta-del-testigo-quieto": {
    left: "50%", top: "59.5%", width: "10.4%", scale: 0.7,
    label: { left: "50%", top: "73.4%", width: "10.1%", height: "3.9%" },
  },
  "nudo-del-regreso": {
    left: "67.6%", top: "59.2%", width: "10.5%", scale: 0.7,
    label: { left: "67.6%", top: "73.4%", width: "10.1%", height: "3.9%" },
  },
};

export function PotionRoom({ onSelect }: { onSelect: (element: HTMLButtonElement) => void }) {
  const { selectProduct, selectedProduct } = useShop();

  return (
    <div className="potion-room">
      {potions.map((potion) => {
        const placement = POTION_PLACEMENTS[potion.id];

        return (
          <button
            key={potion.id}
            type="button"
            className="potion-room__product"
            style={{
              left: placement.left,
              top: placement.top,
              width: placement.width,
              backgroundImage: `url(${potion.image})`,
              "--potion-scale": placement.scale ?? 1,
              "--potion-rotation": `${placement.rotation ?? 0}deg`,
            } as CSSProperties}
            aria-label={`Ver detalles de ${potion.name}`}
            aria-pressed={selectedProduct?.id === potion.id}
            onClick={(event) => { onSelect(event.currentTarget); selectProduct(potion); }}
          />
        );
      })}
      {potions.map((potion) => {
        const { left, top, width, height } = POTION_PLACEMENTS[potion.id].label;

        return (
          <span key={potion.id} className="potion-room__nameplate" style={{ left, top, width, height }} aria-hidden="true">
            <span className="potion-room__nameplate-text">{potion.name}</span>
          </span>
        );
      })}
    </div>
  );
}
