export function NavControl({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
  return (
    <button type="button" className={`nav-control nav-control--${direction}`} onClick={onClick}
      aria-label={direction === "left" ? "Ir a la sala anterior" : "Ir a la sala siguiente"}>
      <span aria-hidden="true">{direction === "left" ? "←" : "→"}</span>
    </button>
  );
}
