"use client";

import { useShop, type RoomId } from "@/components/shop/shop-provider";
import { ShopInterface } from "@/components/shop/ShopInterface";
import { WandRoom } from "@/components/rooms/WandRoom";

const ROOM_DETAILS: Record<RoomId, { subtitle: string; title: string; scene: string }> = {
  wands: { subtitle: "PRIMER SALÓN", title: "VARITAS", scene: "/scenes/wands-room.webp" },
  grimoires: { subtitle: "SEGUNDO SALÓN", title: "GRIMORIOS", scene: "/scenes/grimoires-room.webp" },
  potions: { subtitle: "TERCER SALÓN", title: "POCIONES", scene: "/scenes/potions-room.webp" },
};

export function ShopExperience() {
  const { currentRoom } = useShop();
  const room = ROOM_DETAILS[currentRoom];

  return (
    <main className="shop-experience" aria-label={`Sala actual: ${room.title}`}>
      <div className="shop-experience__scene" style={{ backgroundImage: `url(${room.scene})` }} aria-hidden="true" />
      {currentRoom === "wands" && <WandRoom />}
      <ShopInterface subtitle={room.subtitle} title={room.title} />
    </main>
  );
}
