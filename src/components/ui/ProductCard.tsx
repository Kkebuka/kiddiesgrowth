import React from "react";
import { type ProductType } from "../../types/types";

function ProductCard({
  src,
  alt,
  name,
  description,
  price,
  option,
}: ProductType) {
  return (
    <div className="card w-full bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={src} alt={alt} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-base sm:text-lg line-clamp-2 h-[48px] ">
          {name}
        </h2>
        {/* I could category here */}
        <p className="text-sm sm:text-base line-clamp-3 h-[60px]">
          {description}
        </p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-lg font-bold text-primary">₦{price}</span>
          {option && (
            <button className="btn btn-primary btn-sm sm:btn-md">
              {option}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
