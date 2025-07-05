import React from "react";
import ProductCard from "../../../components/ui/ProductCard";
import { type ProductType } from "../../../types/types";
import { Link } from "react-router-dom";

export default function TopSelling() {
  const products: ProductType[] = [
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      alt: "Running Shoes",
      name: "Performance Running Shoes",
      description: "Lightweight shoes with responsive cushioning",
      price: 12999,
      option: "Buy Now",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      alt: "Wireless Earbuds",
      name: "True Wireless Earbuds",
      description: "Fitness ",
      price: 5999,
      option: "Buy Now",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      alt: "Running Shoes",
      name: "Performance Running Shoes",
      description: "Lightweight shoes with responsive cushioning",
      price: 12999,
      option: "Buy Now",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
      alt: "Coffee Maker",
      name: "Premium Coffee Machine",
      description: "Programmable 12-cup coffee maker with thermal carafe",
      price: 15999,
      option: "Buy Now",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1560343090-f0409e92791a",
      alt: "Backpack",
      name: "Travel Backpack",
      description: "Water-resistant backpack with USB charging port",
      price: 4599,
      option: "Buy Now",
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-gray-800 font-semibold text-2xl py-2  text-center">
        Top Products
      </h4>

      <div className="  grid grid-cols-2 gap-3  grid-cols-5 ">
        {products.map((product) => (
          <Link to={`/shop/${product.id}`} key={product?.id}>
            <ProductCard {...product} key={product.id} />
          </Link>
        ))}
      </div>

      <button className="btn btn-secondary btn-sm sm:btn-md"> View More</button>
    </div>
  );
}
