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
  {
    id: 4,
    src: [
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9mZmljZSUyMGNoYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    ],
    category: "Furniture",
    name: "Modern Office Chair",
    description: "Ergonomic office chair with lumbar support",
    price: 249.99,
  },
  {
    id: 5,
    src: [
      "https://images.unsplash.com/photo-1594782915055-7aafbcd0f8a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG95JTIwYmxvY2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    ],
    category: "Toys",
    name: "Building Blocks Set",
    description: "200-piece educational building blocks for kids",
    offer: 20,
    price: 39.99,
  },
  {
    id: 6,
    src: [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2VydW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    ],
    category: "Beauty",
    name: "Vitamin C Serum",
    description: "Anti-aging facial serum with vitamin C and hyaluronic acid",
    price: 29.99,
    option: "30ml",
  },
  {
    id: 7,
    src: [
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    ],
    category: "Sports",
    name: "Yoga Mat",
    description: "Non-slip eco-friendly yoga mat",
    price: 34.99,
  },
  {
    id: 8,
    src: [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    ],
    category: "Books",
    name: "Bestseller Novel",
    offer: 10,
    price: 14.99,
    option: "Hardcover",
  },
  {
    id: 9,
    src: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    ],
    category: "Electronics",
    name: "Portable Bluetooth Speaker",
    description: "Waterproof speaker with 20-hour playtime",
    price: 59.99,
  },
  {
    id: 10,
    src: [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlyJTIwZnJ5ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWlyJTIwZnJ5ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    ],
    category: "Home & Kitchen",
    name: "Air Fryer",
    description: "Digital air fryer with 5.8QT capacity",
    offer: 25,
    price: 119.99,
  },
];
