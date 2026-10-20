import { ROOMS, useShop } from "@/components/shop/shop-provider";
import { CartControl } from "@/components/ui/CartControl";
import { NavControl } from "@/components/ui/NavControl";
import { RoomTitle } from "@/components/ui/RoomTitle";

export function ShopInterface({ subtitle, title }: { subtitle: string; title: string }) {
  const { currentRoom, goToPreviousRoom, goToNextRoom, cartItemCount, isCartOpen, toggleCart } = useShop();
  const roomIndex = ROOMS.indexOf(currentRoom);

  return (
    <div className="shop-interface">
      <RoomTitle subtitle={subtitle} title={title} />
      {roomIndex > 0 && <NavControl direction="left" onClick={goToPreviousRoom} />}
      {roomIndex < ROOMS.length - 1 && <NavControl direction="right" onClick={goToNextRoom} />}
      <CartControl count={cartItemCount} isOpen={isCartOpen} onClick={toggleCart} />
    </div>
  );
}
