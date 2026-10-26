export function CartControl({ count, isOpen, onClick }: { count: number; isOpen: boolean; onClick: () => void }) {
  return (
    <button id="cart-control" type="button" className="cart-control" onClick={onClick}
      aria-label={`${isOpen ? "Cerrar carrito" : "Abrir carrito"}, ${count} artículos`} aria-controls="scroll-cart" aria-expanded={isOpen}>
      <span className="cart-control__content" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 4h2l2.2 10.2h10.9L20 7H6" />
          <circle cx="9" cy="18.5" r="1.2" /><circle cx="17" cy="18.5" r="1.2" />
        </svg>
        <span>{count}</span>
      </span>
    </button>
  );
}
