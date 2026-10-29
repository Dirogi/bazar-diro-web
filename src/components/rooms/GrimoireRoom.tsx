"use client";

import { useShop } from "@/components/shop/shop-provider";
import { grimoires } from "@/data/grimoires";

type GrimoirePlacement = {
  left: string;
  top: string;
  width: string;
  label: { left: string; top: string; width: string; height: string, long?: boolean };
};

// Positions are percentages of the 1672 × 941 room artwork, aligned to the six book stands.
const GRIMOIRE_PLACEMENTS: Record<string, GrimoirePlacement> = {
  "atlas-de-las-mareas-silentes": {
    left: "30.5%", top: "30.1%", width: "11.1%",
    label: { left: "29.8%", top: "44.9%", width: "7%", height: "4.4%",long: true },
  },
  "bestiario-de-la-zarpa-de-ambar": {
    left: "50%", top: "29.8%", width: "10.7%",
    label: { left: "50%", top: "44.9%", width: "7%", height: "4.4%", long: true },
  },
  "cantico-de-brasa-y-vendaval": {
    left: "69.5%", top: "30.2%", width: "11%",
    label: { left: "69.9%", top: "44.9%", width: "7%", height: "4.4%",long: true },
  },
  "tratado-del-laton-despierto": {
    left: "30.1%", top: "64.7%", width: "11.0%",
    label: { left: "29.2%", top: "80.7%", width: "7%", height: "4.4%", long: true },
  },
  "herbario-de-la-savia-serena": {
    left: "50%", top: "64.8%", width: "11.0%",
    label: { left: "50%", top: "80.7%", width: "7%", height: "4.4%", long: true },
  },
  "cartografia-del-umbral-plegado": {
    left: "69.6%", top: "65.3%", width: "10.6%",
    label: { left: "69.9%", top: "80.7%", width: "7%", height: "4.4%", long: true },
  },
};

export function GrimoireRoom({ onSelect }: { onSelect: (element: HTMLButtonElement) => void }) {
  const { selectProduct, selectedProduct } = useShop();

  return (
    <div className="grimoire-room">
      {grimoires.map((grimoire) => {
        const placement = GRIMOIRE_PLACEMENTS[grimoire.id];

        return (
          <button
            key={grimoire.id}
            type="button"
            className="grimoire-room__product"
            style={{ left: placement.left, top: placement.top, width: placement.width, backgroundImage: `url(${grimoire.image})` }}
            aria-label={`Ver detalles de ${grimoire.name}`}
            aria-pressed={selectedProduct?.id === grimoire.id}
            onClick={(event) => { onSelect(event.currentTarget); selectProduct(grimoire); }}
          />
        );
      })}
      {grimoires.map((grimoire) => {
        const { label: { left, top, width, height, long } } = GRIMOIRE_PLACEMENTS[grimoire.id];

        return (
          <span
              key={grimoire.id}
              className={`grimoire-room__nameplate${long ? " grimoire-room__nameplate--long" : ""}`}
              style={{ left, top, width, height }}
              aria-hidden="true"
            >
              <span className="grimoire-room__nameplate-text">
                {grimoire.name}
              </span>
            </span>
        );
      })}
    </div>
  );
}
