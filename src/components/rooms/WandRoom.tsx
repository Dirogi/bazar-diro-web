"use client";

import { useShop } from "@/components/shop/shop-provider";
import { wands } from "@/data/wands";

// Positions are percentages of the 1672 × 941 room artwork, aligned to the side supports.
const WAND_PLACEMENTS: Record<string, { left: string; top: string; width: string }> = {
  "varita-sombria": { left: "32.4%", top: "36.4%", width: "11.0%" },
  "musgo-cambiante": { left: "49.8%", top: "36.4%", width: "10.6%" },
  "aguja-del-alba": { left: "67.5%", top: "36.6%", width: "11.5%" },
  "laurel-de-la-botica": { left: "32.4%", top: "54.6%", width: "11.3%" },
  "vigilia-fosil": { left: "49.9%", top: "54.6%", width: "10.65%" },
  "canto-de-espejo": { left: "67.55%", top: "54.7%", width: "11.1%" },
};

export function WandRoom() {
  const { selectProduct } = useShop();

  return (
    <div className="wand-room">
      {wands.map((wand) => (
        <button
          key={wand.id}
          type="button"
          className="wand-room__product"
          style={{ ...WAND_PLACEMENTS[wand.id], backgroundImage: `url(${wand.image})` }}
          aria-label={`Ver detalles de ${wand.name}`}
          onClick={() => selectProduct(wand)}
        />
      ))}
    </div>
  );
}
