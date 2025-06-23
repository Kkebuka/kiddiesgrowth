import React from "react";
import ProductCard from "../../../components/ui/ProductCard";

export default function TopSelling() {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-gray-800 font-semibold text-2xl py-2  text-center">
        Top Products
      </h4>

      <div className="  grid grid-cols-2 gap-3 grid-rows-2 md:flex ">
        <ProductCard
          src={"https://via.placeholder.com/300x200"}
          alt="image"
          name="shoe"
          description="long fnacy shoe"
          price={24}
          option="Buy now"
        />
        <ProductCard
          src={"https://via.placeholder.com/300x200"}
          alt="image"
          name="shoe"
          description="long fnacy shoe"
          price={24}
          option="Buy now"
        />
        <ProductCard
          src={"https://via.placeholder.com/300x200"}
          alt="image"
          name="shoe"
          description="long fnacy shoe"
          price={24}
          option="Buy now"
        />
        <ProductCard
          src={"https://via.placeholder.com/300x200"}
          alt="image"
          name="shoe"
          description="long fnacy shoe"
          price={24}
          option="Buy now"
        />
        <ProductCard
          src={"https://via.placeholder.com/300x200"}
          alt="image"
          name="shoe"
          description="long fnacy shoe"
          price={24}
          option="Buy now"
        />
      </div>

      <button className="btn btn-secondary btn-sm sm:btn-md"> View More</button>
    </div>
  );
}
