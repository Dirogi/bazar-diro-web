"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/types/product";

export const ROOMS = ["wands", "grimoires", "potions"] as const;
export const INITIAL_COINS = 2000;

export type RoomId = (typeof ROOMS)[number];

interface ShopContextValue {
  hasEnteredShop: boolean;
  currentRoom: RoomId;
  selectedProduct: Product | null;
  cart: Product[];
  isCartOpen: boolean;
  isCheckoutOpen: boolean;
  isPurchaseComplete: boolean;
  cartItemCount: number;
  cartTotal: number;
  initialCoins: number;
  availableCoins: number;
  isInsufficientFundsNoticeVisible: boolean;
  enterShop: () => void;
  returnToExterior: () => void;
  setCurrentRoom: (room: RoomId) => void;
  goToNextRoom: () => void;
  goToPreviousRoom: () => void;
  selectProduct: (product: Product) => void;
  closeProductDetail: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  isInCart: (productId: string) => boolean;
  canAfford: (product: Product) => boolean;
  showInsufficientFundsNotice: () => void;
  clearInsufficientFundsNotice: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  openCheckout: () => void;
  closeCheckout: () => void;
  confirmPurchase: () => void;
  resetExperience: () => void;
}

const ShopContext = createContext<ShopContextValue | null>(null);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [hasEnteredShop, setHasEnteredShop] = useState(false);
  const [currentRoom, setCurrentRoom] = useState<RoomId>("wands");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isPurchaseComplete, setIsPurchaseComplete] = useState(false);
  const [isInsufficientFundsNoticeVisible, setIsInsufficientFundsNoticeVisible] = useState(false);

  const enterShop = useCallback(() => {
    setHasEnteredShop(true);
    setCurrentRoom("wands");
    setSelectedProduct(null);
    setIsCartOpen(false);
    setIsCheckoutOpen(false);
    setIsPurchaseComplete(false);
    setIsInsufficientFundsNoticeVisible(false);
  }, []);

  const returnToExterior = useCallback(() => {
    setHasEnteredShop(false);
    setSelectedProduct(null);
    setIsCartOpen(false);
    setIsCheckoutOpen(false);
    setIsInsufficientFundsNoticeVisible(false);
  }, []);

  const goToNextRoom = useCallback(() => {
    setCurrentRoom((room) => ROOMS[ROOMS.indexOf(room) + 1] ?? room);
  }, []);

  const goToPreviousRoom = useCallback(() => {
    setCurrentRoom((room) => ROOMS[ROOMS.indexOf(room) - 1] ?? room);
  }, []);

  const addToCart = useCallback((product: Product) => {
    setCart((items) => {
      if (items.some((item) => item.id === product.id)) return items;

      const total = items.reduce((sum, item) => sum + item.price, 0);
      return product.price <= INITIAL_COINS - total ? [...items, product] : items;
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart((items) => items.filter((item) => item.id !== productId));
  }, []);

  const resetExperience = useCallback(() => {
    setHasEnteredShop(false);
    setCurrentRoom("wands");
    setSelectedProduct(null);
    setCart([]);
    setIsCartOpen(false);
    setIsCheckoutOpen(false);
    setIsPurchaseComplete(false);
    setIsInsufficientFundsNoticeVisible(false);
  }, []);

  const value = useMemo<ShopContextValue>(() => {
    const cartItemCount = cart.length;
    const cartTotal = cart.reduce((total, product) => total + product.price, 0);
    const availableCoins = Math.max(0, INITIAL_COINS - cartTotal);

    return {
      hasEnteredShop,
      currentRoom,
      selectedProduct,
      cart,
      isCartOpen,
      isCheckoutOpen,
      isPurchaseComplete,
      cartItemCount,
      cartTotal,
      initialCoins: INITIAL_COINS,
      availableCoins,
      isInsufficientFundsNoticeVisible,
      enterShop,
      returnToExterior,
      setCurrentRoom,
      goToNextRoom,
      goToPreviousRoom,
      selectProduct: setSelectedProduct,
      closeProductDetail: () => setSelectedProduct(null),
      addToCart,
      removeFromCart,
      isInCart: (productId) => cart.some((product) => product.id === productId),
      canAfford: (product) => product.price <= availableCoins,
      showInsufficientFundsNotice: () => setIsInsufficientFundsNoticeVisible(true),
      clearInsufficientFundsNotice: () => setIsInsufficientFundsNoticeVisible(false),
      toggleCart: () => setIsCartOpen((isOpen) => !isOpen),
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      openCheckout: () => {
        setIsCartOpen(false);
        setIsCheckoutOpen(true);
      },
      closeCheckout: () => setIsCheckoutOpen(false),
      confirmPurchase: () => {
        setSelectedProduct(null);
        setIsCartOpen(false);
        setIsCheckoutOpen(false);
        setIsPurchaseComplete(true);
      },
      resetExperience,
    };
  }, [
    addToCart,
    cart,
    currentRoom,
    enterShop,
    goToNextRoom,
    goToPreviousRoom,
    hasEnteredShop,
    isCartOpen,
    isCheckoutOpen,
    isPurchaseComplete,
    isInsufficientFundsNoticeVisible,
    removeFromCart,
    resetExperience,
    returnToExterior,
    selectedProduct,
  ]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("useShop must be used within a ShopProvider.");
  }

  return context;
}
