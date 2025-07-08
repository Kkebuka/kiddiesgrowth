import React from "react";
import ProductCard from "../../components/ui/ProductCard";

import { FaFilter } from "react-icons/fa";
import { type ProductType } from "../../types/types";

export default function Products() {
  const products: ProductType[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
      category: "Wireless Bluetooth Headphones",
      name: "Wireless Headphones",
      description:
        "Noise-cancelling over-ear headphones with 30hr battery life",
      price: 14999,
      option: "Add to Cart",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      category: "Smart Watch",
      name: "Smart Watch Pro",
      description: "Fitness tracker with heart rate monitor and GPS",
      price: 8999,
      option: "Buy Now",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      category: "Wireless Earbuds",
      name: "True Wireless Earbuds",
      description: "Fitness ",
      price: 5999,
      option: "Buy Now",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      category: "Running Shoes",
      name: "Performance Running Shoes",
      description: "Lightweight shoes with responsive cushioning",
      price: 12999,
      option: "Buy Now",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
      category: "Coffee Maker",
      name: "Premium Coffee Machine",
      description: "Programmable 12-cup coffee maker with thermal carafe",
      price: 15999,
      option: "Buy Now",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1560343090-f0409e92791a",
      category: "Backpack",
      name: "Travel Backpack",
      description: "Water-resistant backpack with USB charging port",
      price: 4599,
      option: "Buy Now",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
      category: "Sunglasses",
      name: "Polarized Sunglasses",
      price: 3499,
      option: "Buy Now",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      category: "Vintage Camera",
      name: "Film Camera",
      description: "35mm film camera with vintage lens",
      price: 24999,
      option: "Pre-order",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
      category: "Perfume Bottle",
      name: "Luxury Eau de Parfum",
      description: "100ml bottle of signature fragrance",
      price: 8999,
      option: "Buy Now",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
      category: "Notebook Set",
      name: "Premium Notebook Set",
      price: 2499,
      option: "Buy Now",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1594035910387-fea47794261f",
      category: "Yoga Mat",
      name: "Eco-Friendly Yoga Mat",
      description: "Non-slip mat made from natural materials",
      price: 3999,
      option: "Buy Now",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba",
      category: "Drone",
      name: "4K Camera Drone",
      description: "Foldable drone with 30-minute flight time",
      price: 29999,
      option: "Buy Now",
    },
  ];

  const addToCart = (product) => {};

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex justify-end">
        <button className="btn btn-outline flex items-center gap-2">
          <FaFilter />
          Filter
        </button>
      </div>
      <div className="  w-full grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr">
        {products.map((product) => (
          <ProductCard {...product} key={product.id} onAddToCart={addToCart} />
        ))}
      </div>
      <div className="flex justify-center">
        <div className="join">
          <button className="join-item btn">1</button>
          <button className="join-item btn btn-active">2</button>
          <button className="join-item btn">3</button>
          <button className="join-item btn">4</button>
        </div>
      </div>
    </div>
  );
}
