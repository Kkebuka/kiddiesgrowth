import type { ProductType } from "../types/types";

export const products: ProductType[] = [
  {
    id: 1,
    src: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    ],
    category: "Electronics",
    name: "Wireless Headphones",
    description:
      "Noise-cancelling wireless headphones with 30-hour battery life",
    offer: 15,
    price: 199.99,
    option: "Black",
  },
  {
    id: 2,
    src: [
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwbWFrZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlJTIwbWFrZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    ],
    category: "Home & Kitchen",
    name: "Smart Coffee Maker",
    description: "Programmable coffee maker with smartphone control",
    price: 89.99,
  },
  {
    id: 3,
    src: [
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    ],
    category: "Fashion",
    name: "Men's Running Shoes",
    offer: 30,
    price: 79.99,
    option: "Size 10",
  },
];
