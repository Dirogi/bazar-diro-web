"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useShop } from "@/components/shop/shop-provider";

const EXTERIOR_LAYOUT = {
  leftPanelText: {
    left: "21.1%",
    top: "43%",
    width: "13.9%",
  },
  rightPanelText: {
    left: "79.9%",
    top: "42.2%",
    width: "14.7%",
  },
  enterControl: {
    left: "50%",
    top: "67%",
  },
  doorHotspot: {
    left: "40.5%",
    top: "25%",
    width: "19%",
    height: "59%",
  },
} as const;

export function ShopExterior() {
  const { enterShop } = useShop();
  const shouldReduceMotion = useReducedMotion();
  const [isEntering, setIsEntering] = useState(false);
  const transitionDuration = shouldReduceMotion ? 0.2 : 1;

  const handleEnter = () => {
    if (!isEntering) {
      setIsEntering(true);
    }
  };

  return (
    <main className="shop-exterior" aria-busy={isEntering}>
      <motion.div
        aria-hidden="true"
        className="shop-exterior__scene"
        animate={isEntering ? { scale: shouldReduceMotion ? 1 : 1.08 } : { scale: 1 }}
        transition={{ duration: transitionDuration, ease: [0.22, 0.61, 0.36, 1] }}
        onAnimationComplete={() => {
          if (isEntering) {
            enterShop();
          }
        }}
      />
      <motion.div
        aria-hidden="true"
        className="shop-exterior__shade"
        animate={{ opacity: isEntering ? 0.82 : 0.16 }}
        transition={{ duration: transitionDuration, ease: [0.22, 0.61, 0.36, 1] }}
      />

      <h1 className="sr-only">Bazar Diro</h1>
      <button
        type="button"
        className="shop-exterior__door-hotspot"
        style={EXTERIOR_LAYOUT.doorHotspot}
        onClick={handleEnter}
        disabled={isEntering}
        aria-label="Entrar al Bazar Diro por la puerta principal"
      />

      <p
        className="shop-exterior__panel-copy shop-exterior__panel-copy--left"
        style={EXTERIOR_LAYOUT.leftPanelText}
      >
        <span>Objetos extraordinarios</span>
        <span>para viajeros,</span>
        <span>estudiosos y curiosos</span>
        <span>de lo imposible.</span>
      </p>
      <p
        className="shop-exterior__panel-copy shop-exterior__panel-copy--right"
        style={EXTERIOR_LAYOUT.rightPanelText}
      >
        <span>Cruza el umbral</span>
        <span>y descubre</span>
        <span>las colecciones</span>
        <span>del bazar.</span>
      </p>
      <button
        type="button"
        className="shop-exterior__entry-control"
        style={EXTERIOR_LAYOUT.enterControl}
        onClick={handleEnter}
        disabled={isEntering}
      >
        {isEntering ? "Abriendo…" : "Entrar"}
      </button>
    </main>
  );
}
