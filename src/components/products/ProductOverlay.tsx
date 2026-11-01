"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useShop } from "@/components/shop/shop-provider";
import { WandDetail } from "@/components/products/WandDetail";
import { GrimoireDetail } from "@/components/products/GrimoireDetail";
import { PotionDetail } from "@/components/products/PotionDetail";
import type { GrimoireProduct, PotionProduct, WandProduct } from "@/types/product";

type DetailProduct = WandProduct | GrimoireProduct | PotionProduct;
type ProductSource = { element: HTMLButtonElement; rect: DOMRect };

export function ProductOverlay({ product, source, onClosed }: { product: DetailProduct; source: ProductSource; onClosed: () => void }) {
  const { closeProductDetail } = useShop();
  const [closing, setClosing] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const duration = reducedMotion ? 0.01 : 0.65;

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  function finishClosing() {
    if (!closing) return;
    closeProductDetail();
    onClosed();
    requestAnimationFrame(() => {
      if (source.element.isConnected) source.element.focus();
    });
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      setClosing(true);
    }
    if (event.key === "Tab") {
      const buttons = dialogRef.current?.querySelectorAll<HTMLButtonElement>("button:not(:disabled)");
      if (!buttons?.length) return;
      const first = buttons[0];
      const last = buttons[buttons.length - 1];
      if (!dialogRef.current?.contains(document.activeElement)) { event.preventDefault(); first.focus(); }
      else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  }

  return (
    <div className="product-overlay" ref={dialogRef} role="dialog" aria-modal="true" aria-label={`Detalles de ${product.name}`} onKeyDown={handleKeyDown}>
      <motion.div className={`product-overlay__shade product-overlay__shade--${product.type}`} initial={{ opacity: 0 }} animate={{ opacity: closing ? 0 : 1 }} transition={{ duration }} />
      <div className="product-overlay__stage">
        <motion.div className={`product-overlay__art product-overlay__art--${product.type}`} initial={{ opacity: 0 }} animate={{ opacity: closing ? 0 : 1 }} transition={{ duration }} />
        {product.type === "wand" ? (
          <WandDetail product={product} sourceRect={source.rect} closing={closing} duration={duration} reducedMotion={!!reducedMotion} onFinished={finishClosing}>
            <button ref={closeRef} className="product-overlay__close" type="button" aria-label="Cerrar detalles" onClick={() => setClosing(true)} disabled={closing} />
          </WandDetail>
        ) : product.type === "grimoire" ? (
          <GrimoireDetail product={product} sourceRect={source.rect} closing={closing} duration={duration} reducedMotion={!!reducedMotion} onFinished={finishClosing}>
            <button ref={closeRef} className="product-overlay__close product-overlay__close--grimoire" type="button" aria-label="Cerrar detalles" onClick={() => setClosing(true)} disabled={closing} />
          </GrimoireDetail>
        ) : (
          <PotionDetail product={product} sourceRect={source.rect} closing={closing} duration={duration} reducedMotion={!!reducedMotion} onFinished={finishClosing}>
            <button ref={closeRef} className="product-overlay__close product-overlay__close--potion" type="button" aria-label="Cerrar detalles" onClick={() => setClosing(true)} disabled={closing} />
          </PotionDetail>
        )}
      </div>
    </div>
  );
}

export type DetailChildren = { children: ReactNode };
