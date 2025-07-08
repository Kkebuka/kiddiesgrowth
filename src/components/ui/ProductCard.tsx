import React from "react";
import { type ProductType } from "../../types/types";
import { Link } from "react-router-dom";
// import { MdOutlineAddChart } from "react-icons/md";

type ProductCardProps = ProductType & {
  onAddToCart?: (product: ProductType) => void;
};

function ProductCard({
  id,
  src,
  category,
  name,
  description,
  price,
  option,
  onAddToCart,
}: ProductCardProps) {
  // const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent navigating when button is clicked
    if (onAddToCart) {
      onAddToCart({ id, src, category, name, description, price, option });
    }
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl mx-auto hover:shadow-md transition">
      <Link to={`/shop/${id}`}>
        <figure>
          <img
            src={`${src}?w=500&h=500&auto=format&fit=crop`} // 🌟 Optimized
            alt={name}
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
              onClick={handleAddToCart}
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
