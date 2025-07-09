import type { ProductType } from "../types/types";

export const products: ProductType[] = Array.from(
  { length: 100 },
  (_, index) => {
    const categoryList = [
      "Toys",
      "Books",
      "Clothing",
      "Accessories",
      "Outdoor",
      "Puzzles",
      "Stationery",
      "Electronics",
      "Games",
      "Furniture",
    ];
    const category = categoryList[index % 10];
    return {
      id: index + 1,
      src: `https://via.placeholder.com/150?text=Product+${index + 1}`,
      category,
      name: `${category} Product ${index + 1}`,
      description: `This is a description for ${category} Product ${
        index + 1
      }.`,
      price: Math.floor(Math.random() * 5000) + 1000,
      option: "Buy Now",
    };
  }
);
