"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { useShop } from "@/components/shop/shop-provider";

function focusCartControl() {
  requestAnimationFrame(() => document.getElementById("cart-control")?.focus());
}

export function PurchaseFlow() {
  const { cart, cartTotal, closeCheckout, confirmPurchase, isCheckoutOpen, isPurchaseComplete, resetExperience } = useShop();
  const confirmButtonRef = useRef<HTMLButtonElement>(null);
  const returnButtonRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();
  const duration = reducedMotion ? 0.01 : 0.25;

  useEffect(() => {
    if (!isCheckoutOpen) return;

    confirmButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeCheckout();
        focusCartControl();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeCheckout, isCheckoutOpen]);

  useEffect(() => {
    if (isPurchaseComplete) returnButtonRef.current?.focus();
  }, [isPurchaseComplete]);

  function trapCheckoutFocus(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab") return;

    const buttons = event.currentTarget.querySelectorAll<HTMLButtonElement>("button:not(:disabled)");
    const first = buttons[0];
    const last = buttons[buttons.length - 1];
    if (!first || !last) return;

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <AnimatePresence>
      {isCheckoutOpen && (
        <motion.div className="purchase-flow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration }}>
          <div className="purchase-flow__shade" aria-hidden="true" />
          <div className="purchase-flow__checkout-frame">
            <div className="purchase-flow__aura" aria-hidden="true" />
            <div className="purchase-flow__flame" aria-hidden="true" />
            <motion.section
              className="purchase-flow__panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="checkout-title"
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration, ease: "easeOut" }}
              onKeyDown={trapCheckoutFocus}
            >
              <p className="purchase-flow__eyebrow">Libro mayor del bazar</p>
              <h2 id="checkout-title">Resumen de compra</h2>
              <ul className="purchase-flow__items" aria-label="Productos seleccionados">
                {cart.map((product) => (
                  <li key={product.id}>
                    <span>{product.name}</span>
                    <strong>{product.price} monedas</strong>
                  </li>
                ))}
              </ul>
              <p className="purchase-flow__total">Total: <strong>{cartTotal} monedas</strong></p>
              <div className="purchase-flow__actions">
                <button ref={confirmButtonRef} className="purchase-flow__confirm" type="button" onClick={confirmPurchase}>Confirmar compra</button>
                <button className="purchase-flow__continue" type="button" onClick={() => { closeCheckout(); focusCartControl(); }}>Seguir viendo</button>
              </div>
            </motion.section>
          </div>
        </motion.div>
      )}

      {isPurchaseComplete && (
        <motion.div className="purchase-flow purchase-flow--complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration }}>
          <div className="purchase-flow__shade" aria-hidden="true" />
          <motion.section
            className="purchase-flow__panel purchase-flow__panel--complete"
            role="status"
            aria-labelledby="purchase-complete-title"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration, ease: "easeOut" }}
          >
            <p className="purchase-flow__eyebrow">Registro completado</p>
            <h2 id="purchase-complete-title">Gracias por visitar Bazar Diro</h2>
            <p className="purchase-flow__message">Tu selección ha quedado registrada en el libro del bazar.</p>
            <p className="purchase-flow__farewell">Que tus próximos viajes te conduzcan de nuevo hasta aquí.</p>
            <button ref={returnButtonRef} className="purchase-flow__confirm purchase-flow__return" type="button" onClick={resetExperience}>Volver al inicio</button>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
