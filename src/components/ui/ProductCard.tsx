import React from "react";

type ProductType = {
  src: string;
  alt: string;
  name: string;
  description: string;
  price: number;
  option: string;
};

function ProductCard({
  src,
  alt,
  name,
  description,
  price,
  option,
}: ProductType) {
  return (
    <div className="card w-full sm:w-80 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={src} alt={alt} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-base sm:text-lg">{name}</h2>
        <p className="text-sm sm:text-base">{description}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-lg font-bold text-primary">N{price}</span>
          <button className="btn btn-primary btn-sm sm:btn-md">{option}</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
