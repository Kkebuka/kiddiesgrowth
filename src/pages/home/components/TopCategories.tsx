import React from "react";
import CategoryCard from "../../../components/ui/CategoryCard";
import { type CategoryProps } from "../../../types/types";

export default function TopCategories() {
  const categories: CategoryProps[] = [
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03",
      productCount: 125,
    },
    {
      name: "Clothing",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
      productCount: 89,
    },
    {
      name: "Home & Garden",
      image: "https://images.unsplash.com/photo-1583845112203-454c6c0c1c1f",
      productCount: 76,
    },
    {
      name: "Books",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      productCount: 215,
    },
    {
      name: "Sports",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
      productCount: 42,
    },
  ];
  return (
    <div className="shadow-md  sm:hidden lg:block">
      <h4 className="text-gray-800 font-semibold text-2xl py-2 text-center">
        Top Categories
      </h4>
      <div className="w-full grid grid-cols-5 overflow-scroll gap-2 ">
        {categories?.map((category, index) => (
          <CategoryCard
            image={category.image}
            name={category.name}
            productCount={category.productCount}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
