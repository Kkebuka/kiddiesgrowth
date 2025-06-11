import React from "react";

function ProductCard() {
  return (
    <div className="card w-full sm:w-80 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img
          src="https://via.placeholder.com/300x200"
          alt="Product"
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-base sm:text-lg">Product Name</h2>
        <p className="text-sm sm:text-base">
          This is a short product description.
        </p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-lg font-bold text-primary">$29.99</span>
          <button className="btn btn-primary btn-sm sm:btn-md">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
