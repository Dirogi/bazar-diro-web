"use client";

import { useShop, type RoomId } from "@/components/shop/shop-provider";
import { ShopInterface } from "@/components/shop/ShopInterface";
import { WandRoom } from "@/components/rooms/WandRoom";
import { ProductOverlay } from "@/components/products/ProductOverlay";
import { InsufficientFundsNotice } from "@/components/ui/InsufficientFundsNotice";
import { ScrollCart } from "@/components/cart/ScrollCart";
import { PurchaseFlow } from "@/components/shop/PurchaseFlow";
import { useState } from "react";

const ROOM_DETAILS: Record<RoomId, { subtitle: string; title: string; scene: string }> = {
  wands: { subtitle: "PRIMER SALÓN", title: "VARITAS", scene: "/scenes/wands-room.webp" },
  grimoires: { subtitle: "SEGUNDO SALÓN", title: "GRIMORIOS", scene: "/scenes/grimoires-room.webp" },
  potions: { subtitle: "TERCER SALÓN", title: "POCIONES", scene: "/scenes/potions-room.webp" },
};

export function ShopExperience() {
  const { currentRoom, selectedProduct, isInsufficientFundsNoticeVisible, clearInsufficientFundsNotice } = useShop();
  const [source, setSource] = useState<{ element: HTMLButtonElement; rect: DOMRect } | null>(null);
  const room = ROOM_DETAILS[currentRoom];

  return (
    <main className="shop-experience" aria-label={`Sala actual: ${room.title}`}>
      <div className="shop-experience__scene" style={{ backgroundImage: `url(${room.scene})` }} aria-hidden="true" />
      <div inert={!!selectedProduct}>
        {currentRoom === "wands" && <WandRoom onSelect={(element) => setSource({ element, rect: element.getBoundingClientRect() })} />}
        <ShopInterface subtitle={room.subtitle} title={room.title} />
      </div>
      <ScrollCart />
      <PurchaseFlow />
      {selectedProduct?.type === "wand" && source && <ProductOverlay product={selectedProduct} source={source} />}
      <InsufficientFundsNotice visible={isInsufficientFundsNoticeVisible} onDismiss={clearInsufficientFundsNotice} />
    </main>
  );
}
