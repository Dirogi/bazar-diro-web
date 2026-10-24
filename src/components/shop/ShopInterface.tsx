import { ROOMS, useShop } from "@/components/shop/shop-provider";
import { CartControl } from "@/components/ui/CartControl";
import { CoinBalance } from "@/components/ui/CoinBalance";
import { NavControl } from "@/components/ui/NavControl";
import { RoomTitle } from "@/components/ui/RoomTitle";

export function ShopInterface({ subtitle, title }: { subtitle: string; title: string }) {
  const { currentRoom, goToPreviousRoom, goToNextRoom, cartItemCount, availableCoins, isCartOpen, toggleCart } = useShop();
  const roomIndex = ROOMS.indexOf(currentRoom);

  return (
    <div className="shop-interface">
      <RoomTitle subtitle={subtitle} title={title} />
      {roomIndex > 0 && <NavControl direction="left" onClick={goToPreviousRoom} />}
      {roomIndex < ROOMS.length - 1 && <NavControl direction="right" onClick={goToNextRoom} />}
      <div className="shop-interface__merchant-controls">
        <CoinBalance coins={availableCoins} />
        <CartControl count={cartItemCount} isOpen={isCartOpen} onClick={toggleCart} />
      </div>
    </div>
  );
}
