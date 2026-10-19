"use client";

import { ShopExterior } from "@/components/landing/ShopExterior";
import { ShopExperience } from "@/components/shop/ShopExperience";
import { useShop } from "@/components/shop/shop-provider";

export default function Home() {
  const { hasEnteredShop } = useShop();

  return hasEnteredShop ? <ShopExperience /> : <ShopExterior />;
}
