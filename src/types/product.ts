export type ProductType = "wand" | "grimoire" | "potion";

export type Rarity = "common" | "unusual" | "rare" | "exceptional";

export interface BaseProduct {
  id: string;
  type: ProductType;
  name: string;
  rarity: Rarity;
  price: number;
  image: string;
  categoryLabel: string;
}

export interface WandProduct extends BaseProduct {
  type: "wand";
  materials: string;
  length: string;
  affinity: string;
}

export interface GrimoireProduct extends BaseProduct {
  type: "grimoire";
  bindingMaterials: string;
  pages: number;
  affinity: string;
}

export interface PotionProduct extends BaseProduct {
  type: "potion";
  ingredients: string;
  effect: string;
}

export type Product = WandProduct | GrimoireProduct | PotionProduct;
