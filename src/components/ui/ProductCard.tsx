import React from "react";
import { type ProductType } from "../../types/types";
import { Link } from "react-router-dom";
// import { MdOutlineAddChart } from "react-icons/md";
import { getOptimizedImage } from "../../utils/cloudinary";
import Ratings from "../../pages/productDetails/components/Ratings";
import PriceTag from "./PriceTag";

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
  offer,
}: ProductCardProps) {
  // const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent navigating when button is clicked
    if (onAddToCart) {
      console.log("click initiated");
      onAddToCart({
        id,
        src,
        category,
        name,
        description,
        price,
        option,
        quantity: 1,
        offer,
      });
    }
  };

  const optimizedSrc = getOptimizedImage(src[0]);

  return (
    <div className="card w-full bg-base-100 shadow-xl mx-auto hover:shadow-md transition">
      <Link to={`/shop/${id}`}>
        <figure>
          <img
            src={optimizedSrc} // 🌟 Optimized
            alt={name}
            loading="lazy"
            className="w-full h-48 object-cover"
          />
        </figure>
      </Link>

      <div className="card-body">
        <h2 className="card-title text-base sm:text-lg line-clamp-2   ">
          <Link to={`/shop/${id}`} className="hover:underline font-fredoka">
            {name}
          </Link>
        </h2>
        {/* I could make this category */}
        <div className="">
          <p className="text-xs w-fit px-2 bg-info text-base-100 py-1 rounded-md ">
            {category}
          </p>
        </div>
        <Ratings rating={4.5} />
        <div className="card-actions justify-between items-center ">
          <div className="flex gap-2 items-center">
            <PriceTag amount={price} />
            <h3 className="text-gray-500 line-through"> ₦{offer}</h3>
          </div>

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
