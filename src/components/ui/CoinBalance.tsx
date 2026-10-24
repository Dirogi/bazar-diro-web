export function CoinBalance({ coins }: { coins: number }) {
  const formattedCoins = new Intl.NumberFormat("es-ES").format(coins);

  return (
    <p className="coin-balance" aria-label={`Monedas disponibles: ${formattedCoins}`}>
      <span className="coin-balance__content" aria-hidden="true">
        <span className="coin-balance__symbol">◉</span>
        <span>{formattedCoins}</span>
      </span>
    </p>
  );
}
