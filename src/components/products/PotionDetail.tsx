"use client";

import { motion } from "motion/react";
import { useShop } from "@/components/shop/shop-provider";
import type { DetailChildren } from "@/components/products/ProductOverlay";
import type { PotionProduct, Rarity } from "@/types/product";

const RARITY_LABELS: Record<Rarity, string> = {
  common: "Común",
  unusual: "Inusual",
  rare: "Rara",
  exceptional: "Excepcional",
};

type PotionDetailPlacement = {
  left: number;
  top: number;
  width: number;
  scale: number;
  rotation?: number;
};

// These values are intentionally independent from the room display positions.
export const POTION_DETAIL_PLACEMENTS: Record<string, PotionDetailPlacement> = {
  "parlamento-de-luciernagas": { left: 32.2, top: 51.5, width: 28.5, scale: 0.6 },
  "manto-del-solsticio": { left: 32.1, top: 50.3, width: 28, scale: 0.6 },
  "paso-sin-orilla": { left: 32.1, top: 50, width: 28, scale: 0.55 },
  "candela-del-cerrajero-dormido": { left: 32.2, top: 51, width: 27.5, scale: 0.6 },
  "tinta-del-testigo-quieto": { left: 32.1, top: 52, width: 28, scale: 0.6 },
  "nudo-del-regreso": { left: 32.3, top: 51.7, width: 28, scale: 0.6 },
};

const DEFAULT_POTION_DETAIL_PLACEMENT: PotionDetailPlacement = { left: 31.4, top: 52, width: 28, scale: 0.7 };

export function PotionDetail({ product, sourceRect, closing, duration, reducedMotion, onFinished, children }: DetailChildren & {
  product: PotionProduct;
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
  const placement = POTION_DETAIL_PLACEMENTS[product.id] ?? DEFAULT_POTION_DETAIL_PLACEMENT;
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
        className="potion-detail__bottle"
        style={{ left: `${placement.left}%`, top: `${placement.top}%`, width: `${placement.width}%`, backgroundImage: `url(${product.image})` }}
        initial={reducedMotion ? { ...target, opacity: 0 } : origin}
        animate={{ ...(closing && !reducedMotion ? origin : target), opacity: closing && reducedMotion ? 0 : 1 }}
        transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={onFinished}
        aria-hidden="true"
      />
      <motion.div className="potion-detail__content" initial={{ opacity: 0 }} animate={{ opacity: closing ? 0 : 1 }} transition={{ duration: duration * 0.7 }}>
        <dl>
          <div className="potion-detail__value potion-detail__value--name"><dt className="sr-only">Nombre</dt><dd>{product.name}</dd></div>
          <div className="potion-detail__value potion-detail__value--rarity"><dt className="sr-only">Rareza</dt><dd>{RARITY_LABELS[product.rarity]}</dd></div>
          <div className="potion-detail__value potion-detail__value--ingredients"><dt className="sr-only">Ingredientes</dt><dd>{product.ingredients}</dd></div>
          <div className="potion-detail__value potion-detail__value--effect"><dt className="sr-only">Efecto</dt><dd>{product.effect}</dd></div>
          <div className="potion-detail__value potion-detail__value--price"><dt className="sr-only">Precio</dt><dd>{product.price} monedas</dd></div>
        </dl>
        <button className="potion-detail__acquire" type="button" disabled={acquired || closing} onClick={() => {
          if (canAfford(product)) addToCart(product);
          else showInsufficientFundsNotice();
        }}>{acquired ? "Adquirido" : "Adquirir"}</button>
        {children}
      </motion.div>
    </>
  );
}
