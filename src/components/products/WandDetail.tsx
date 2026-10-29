"use client";

import { motion } from "motion/react";
import { useShop } from "@/components/shop/shop-provider";
import type { Rarity, WandProduct } from "@/types/product";
import type { DetailChildren } from "@/components/products/ProductOverlay";

const RARITY_LABELS: Record<Rarity, string> = { common: "Común", unusual: "Inusual", rare: "Rara", exceptional: "Excepcional" };

// Detail positions are independent of the approved placements in the room.
// Coordinates and width are percentages of the detail artwork; rotation is in degrees.
const WAND_DETAIL_PLACEMENTS: Record<string, { left: number; top: number; width: number; rotation: number; scale: number }> = {
  "varita-sombria": { left: 31.05, top: 48.5, width: 38.8, rotation: -89.5, scale: 0.666 },
  "musgo-cambiante": { left: 30.8, top: 48.2, width: 31.5, rotation: -90, scale: 0.820 },
  "aguja-del-alba": { left: 31.1, top: 48.5, width: 39.2, rotation: -90, scale: 0.7 },
  "laurel-de-la-botica": { left: 31.35, top: 49.1, width: 38.5, rotation: -88.5, scale: 0.7 },
  "vigilia-fosil": { left: 31.1, top: 48.8, width: 38.9, rotation: -89, scale: 0.7 },
  "canto-de-espejo": { left: 31.3, top: 48, width: 38.3, rotation: -90, scale: 0.7 },
};
const DEFAULT_WAND_DETAIL_PLACEMENT = { left: 31.2, top: 49, width: 39, rotation: -90, scale: 1 };

export function WandDetail({ product, sourceRect, closing, duration, reducedMotion, onFinished, children }: DetailChildren & {
  product: WandProduct; sourceRect: DOMRect; closing: boolean; duration: number; reducedMotion: boolean; onFinished: () => void;
}) {
  const { addToCart, canAfford, isInCart, showInsufficientFundsNotice } = useShop();
  const acquired = isInCart(product.id);
  const stageWidth = Math.max(window.innerWidth, window.innerHeight * 1672 / 941);
  const stageHeight = stageWidth * 941 / 1672;
  const stageLeft = (window.innerWidth - stageWidth) / 2;
  const stageTop = (window.innerHeight - stageHeight) / 2;
  const placement = WAND_DETAIL_PLACEMENTS[product.id] ?? DEFAULT_WAND_DETAIL_PLACEMENT;
  const origin = {
    x: sourceRect.left + sourceRect.width / 2 - (stageLeft + stageWidth * placement.left / 100),
    y: sourceRect.top + sourceRect.height / 2 - (stageTop + stageHeight * placement.top / 100),
    scale: sourceRect.width / (stageWidth * placement.width / 100), rotate: 0,
  };
  const target = { x: 0, y: 0, scale: placement.scale, rotate: placement.rotation };

  return (
    <>
      <motion.div className="wand-detail__wand" style={{ left: `${placement.left}%`, top: `${placement.top}%`, width: `${placement.width}%`, backgroundImage: `url(${product.image})` }}
        initial={reducedMotion ? { ...target, opacity: 0 } : origin} animate={{ ...(closing && !reducedMotion ? origin : target), opacity: closing && reducedMotion ? 0 : 1 }}
        transition={{ duration, ease: [0.22, 1, 0.36, 1] }} onAnimationComplete={onFinished} aria-hidden="true" />
      <motion.div className="wand-detail__content" initial={{ opacity: 0 }} animate={{ opacity: closing ? 0 : 1 }} transition={{ duration: duration * 0.7 }}>
        <dl>
          <div className="wand-detail__value wand-detail__value--name"><dt className="sr-only">Nombre</dt><dd>{product.name}</dd></div>
          <div className="wand-detail__value wand-detail__value--rarity"><dt className="sr-only">Rareza</dt><dd>{RARITY_LABELS[product.rarity]}</dd></div>
          <div className="wand-detail__value wand-detail__value--materials"><dt className="sr-only">Materiales</dt><dd>{product.materials}</dd></div>
          <div className="wand-detail__value wand-detail__value--length"><dt className="sr-only">Longitud</dt><dd>{product.length}</dd></div>
          <div className="wand-detail__value wand-detail__value--affinity"><dt className="sr-only">Afinidad mágica</dt><dd>{product.affinity}</dd></div>
          <div className="wand-detail__value wand-detail__value--price"><dt className="sr-only">Precio</dt><dd>{product.price} monedas</dd></div>
        </dl>
        <button className="wand-detail__acquire" type="button" disabled={acquired || closing} onClick={() => {
          if (canAfford(product)) addToCart(product);
          else showInsufficientFundsNotice();
        }}>{acquired ? "Adquirido" : "Adquirir"}</button>
        {children}
      </motion.div>
    </>
  );
}
