import React, { createContext, useState, useEffect } from "react";
import type { CartItemType, ProductType } from "../types/types";
import { loadCart, saveCart } from "../utils/storage";
import { showSuccess, showInfo } from "../utils/toast";

type CartContextType = {
  cart: CartItemType[];
  addToCart: (product: ProductType, quantity: number) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const storedCart = loadCart();
    setCart(storedCart);
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      saveCart(cart); // ✅ Will only run after first load is complete
    }
  }, [cart, initialized]);

  const addToCart = (product: ProductType, quantity: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        showInfo("Item has been added already");
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      console.log(prev);
      showSuccess("Added successfully");
      return [...prev, { ...product, quantity: quantity }];
    });
  };

  const increaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
