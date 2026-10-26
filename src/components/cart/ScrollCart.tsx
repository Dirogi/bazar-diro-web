"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { useShop } from "@/components/shop/shop-provider";

export function ScrollCart() {
  const { cart, cartTotal, closeCart, isCartOpen, openCheckout, removeFromCart } = useShop();
  const panelRef = useRef<HTMLElement>(null);
  const closeCartRef = useRef(closeCart);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    closeCartRef.current = closeCart;
  }, [closeCart]);

  function returnFocusToControl() {
    requestAnimationFrame(() => document.getElementById("cart-control")?.focus());
  }

  function handleClose() {
    closeCart();
    returnFocusToControl();
  }

  useEffect(() => {
    if (!isCartOpen) return;

    panelRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeCartRef.current();
        returnFocusToControl();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCartOpen]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.aside
          ref={panelRef}
          id="scroll-cart"
          className="scroll-cart"
          aria-labelledby="scroll-cart__title"
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scaleY: 0.92, y: -8 }}
          animate={{ opacity: 1, scaleY: 1, y: 0 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scaleY: 0.92, y: -8 }}
          transition={{ duration: reducedMotion ? 0.01 : 0.32, ease: "easeOut" }}
          tabIndex={-1}
        >
          <h2 id="scroll-cart__title" className="scroll-cart__title">Carrito</h2>
          <button className="scroll-cart__close" type="button" onClick={handleClose} aria-label="Cerrar carrito">×</button>

          {cart.length > 0 ? (
            <ul className="scroll-cart__items" aria-label="Productos en el carrito">
              {cart.map((product) => (
                <li className="scroll-cart__item" key={product.id}>
                  <div>
                    <p className="scroll-cart__item-name">{product.name}</p>
                    <p className="scroll-cart__item-category">{product.categoryLabel}</p>
                  </div>
                  <span className="scroll-cart__item-price">{product.price} monedas</span>
                  <button className="scroll-cart__remove" type="button" onClick={() => removeFromCart(product.id)} aria-label={`Quitar ${product.name} del carrito`}>×</button>
                </li>
              ))}
            </ul>
          ) : <p className="scroll-cart__empty">El carrito está vacío</p>}

          <p className="scroll-cart__total">Total: <strong>{cartTotal} monedas</strong></p>
          <button className="scroll-cart__checkout" type="button" onClick={openCheckout} disabled={cart.length === 0}>Finalizar compra</button>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
