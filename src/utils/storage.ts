import type { CartItemType } from "../types/types";

export const loadCart = (): CartItemType[] => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.log("could not get data", e);
    return [];
  }
};

export const saveCart = (cart: CartItemType[]) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (e) {
    console.error("Could not save cart:", e);
  }
};
