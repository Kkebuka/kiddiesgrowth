import React, { createContext, useState, useEffect } from "react";
import type { CartItemType, ProductType } from "../types/types";
import { loadCart, saveCart } from "../utils/storage";

type CartContextType = {
  cart: CartItemType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  useEffect(() => {
    const storedCart = loadCart();
    setCart(storedCart);
  }, []);

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const addToCart = (product: ProductType) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
