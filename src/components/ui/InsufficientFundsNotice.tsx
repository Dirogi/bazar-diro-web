"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect } from "react";

export function InsufficientFundsNotice({ visible, onDismiss }: { visible: boolean; onDismiss: () => void }) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!visible) return;

    const timeout = window.setTimeout(onDismiss, 2300);
    return () => window.clearTimeout(timeout);
  }, [onDismiss, visible]);

  return (
    <div className="insufficient-funds-notice__region">
      <AnimatePresence>
        {visible && (
          <motion.p
            className="insufficient-funds-notice"
            role="status"
            aria-live="polite"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
            transition={{ duration: reducedMotion ? 0.01 : 0.2, ease: "easeOut" }}
          >
            No tienes suficientes monedas
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
