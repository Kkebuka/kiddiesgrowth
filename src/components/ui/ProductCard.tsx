import React from "react";
import { type ProductType } from "../../types/types";
import { Link, useNavigate } from "react-router-dom";

function ProductCard({
  id,
  src,
  alt,
  name,
  description,
  price,
  option,
}: ProductType) {
  const navigate = useNavigate();

  const handleBuyNow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // 🔥 Prevents parent click
    // Optionally: Add to cart logic here
    navigate(`/cart`); // 🔄 Or wherever "Buy Now" should go
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl mx-auto hover:shadow-md transition">
      <Link to={`/shop/${id}`}>
        <figure>
          <img
            src={`${src}?w=500&h=500&auto=format&fit=crop`} // 🌟 Optimized
            alt={alt}
            loading="lazy"
            className="w-full h-48 object-cover"
          />
        </figure>
      </Link>

      <div className="card-body">
        <h2 className="card-title text-base sm:text-lg line-clamp-2 h-[48px]">
          <Link to={`/shop/${id}`} className="hover:underline">
            {name}
          </Link>
        </h2>
        {/* I could make this category */}
        <p className="text-sm sm:text-base line-clamp-3 h-[60px]">
          {description}
        </p>

        <div className="card-actions justify-between items-center mt-4">
          <span className="text-lg font-bold text-primary">₦{price}</span>

          {option && (
            <button
              onClick={handleBuyNow}
              className="btn btn-primary btn-sm sm:btn-md"
            >
              {option}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
