import React from "react";
import CategoryCard from "../../../components/ui/CategoryCard";

export default function TopCategories() {
  return (
    <div className="shadow-md  md:hidden">
      <h4 className="text-gray-800 font-semibold text-2xl py-2 text-center">
        Top Categories
      </h4>
      <div className="w-full flex overflow-x-auto gap-2 whitespace-nowrap">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
}
