"use client";

import { motion } from "motion/react";
import { useShop } from "@/components/shop/shop-provider";
import type { DetailChildren } from "@/components/products/ProductOverlay";
import type { GrimoireProduct, Rarity } from "@/types/product";

const RARITY_LABELS: Record<Rarity, string> = {
  common: "Común",
  unusual: "Inusual",
  rare: "Rara",
  exceptional: "Excepcional",
};

type GrimoireDetailPlacement = {
  left: number;
  top: number;
  width: number;
  scale: number;
  rotation?: number;
};

// These values are intentionally independent from the room display positions.
export const GRIMOIRE_DETAIL_PLACEMENTS: Record<string, GrimoireDetailPlacement> = {
  "atlas-de-las-mareas-silentes": { left: 32.4, top: 46.5, width: 29.5, scale: 0.65 },
  "bestiario-de-la-zarpa-de-ambar": { left: 32.4, top: 46.5, width: 29.5, scale: 0.6 },
  "cantico-de-brasa-y-vendaval": { left: 32.4, top: 46.5, width: 29.5, scale: 0.6 },
  "tratado-del-laton-despierto": { left: 32.4, top: 46.5, width: 29.5, scale: 0.6 },
  "herbario-de-la-savia-serena": { left: 32.4, top: 46.5, width: 29.5, scale: 0.6 },
  "cartografia-del-umbral-plegado": { left: 32.4, top: 46.5, width: 29.5, scale: 0.6 },
};

const DEFAULT_GRIMOIRE_DETAIL_PLACEMENT: GrimoireDetailPlacement = {
  left: 31.4,
  top: 48.4,
  width: 29.3,
  scale: 0.9,
};

export function GrimoireDetail({ product, sourceRect, closing, duration, reducedMotion, onFinished, children }: DetailChildren & {
  product: GrimoireProduct;
  sourceRect: DOMRect;
  closing: boolean;
  duration: number;
  reducedMotion: boolean;
  onFinished: () => void;
}) {
  const { addToCart, canAfford, isInCart, showInsufficientFundsNotice } = useShop();
  const acquired = isInCart(product.id);
  const stageWidth = Math.max(window.innerWidth, window.innerHeight * 1672 / 941);
  const stageHeight = stageWidth * 941 / 1672;
  const stageLeft = (window.innerWidth - stageWidth) / 2;
  const stageTop = (window.innerHeight - stageHeight) / 2;
  const placement = GRIMOIRE_DETAIL_PLACEMENTS[product.id] ?? DEFAULT_GRIMOIRE_DETAIL_PLACEMENT;
  const origin = {
    x: sourceRect.left + sourceRect.width / 2 - (stageLeft + stageWidth * placement.left / 100),
    y: sourceRect.top + sourceRect.height / 2 - (stageTop + stageHeight * placement.top / 100),
    scale: sourceRect.width / (stageWidth * placement.width / 100),
    rotate: 0,
  };
  const target = { x: 0, y: 0, scale: placement.scale, rotate: placement.rotation ?? 0 };

  return (
    <>
      <motion.div
        className="grimoire-detail__book"
        style={{ left: `${placement.left}%`, top: `${placement.top}%`, width: `${placement.width}%`, backgroundImage: `url(${product.image})` }}
        initial={reducedMotion ? { ...target, opacity: 0 } : origin}
        animate={{ ...(closing && !reducedMotion ? origin : target), opacity: closing && reducedMotion ? 0 : 1 }}
        transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={onFinished}
        aria-hidden="true"
      />
      <motion.div className="grimoire-detail__content" initial={{ opacity: 0 }} animate={{ opacity: closing ? 0 : 1 }} transition={{ duration: duration * 0.7 }}>
        <dl>
          <div className="grimoire-detail__value grimoire-detail__value--name"><dt className="sr-only">Nombre</dt><dd>{product.name}</dd></div>
          <div className="grimoire-detail__value grimoire-detail__value--rarity"><dt className="sr-only">Rareza</dt><dd>{RARITY_LABELS[product.rarity]}</dd></div>
          <div className="grimoire-detail__value grimoire-detail__value--materials"><dt className="sr-only">Encuadernación y materiales</dt><dd>{product.bindingMaterials}</dd></div>
          <div className="grimoire-detail__value grimoire-detail__value--pages"><dt className="sr-only">Extensión</dt><dd>{product.pages} páginas</dd></div>
          <div className="grimoire-detail__value grimoire-detail__value--affinity"><dt className="sr-only">Afinidad mágica</dt><dd>{product.affinity}</dd></div>
          <div className="grimoire-detail__value grimoire-detail__value--price"><dt className="sr-only">Precio</dt><dd>{product.price} monedas</dd></div>
        </dl>
        <button className="grimoire-detail__acquire" type="button" disabled={acquired || closing} onClick={() => {
          if (canAfford(product)) addToCart(product);
          else showInsufficientFundsNotice();
        }}>{acquired ? "Adquirido" : "Adquirir"}</button>
        {children}
      </motion.div>
    </>
  );
}
