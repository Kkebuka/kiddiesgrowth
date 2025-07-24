import ProductCard from "../../../components/ui/ProductCard";
import { products } from "../../../data/products";
import { useMemo } from "react";
import { useCart } from "../../../hooks/useCart";
import { Link } from "react-router-dom";

export default function BestPicks() {
  const { addToCart } = useCart();
  const random8 = useMemo(() => {
    return products
      .sort(() => 0.5 - Math.random()) // shuffle randomly
      .slice(0, 8); // pick first 5
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-gray-800 font-semibold text-2xl py-2  text-center">
        Best Pick For the Month
      </h4>

      <div className="  grid grid-cols-2 gap-3  lg:grid-cols-4 ">
        {random8.map((product) => (
          // <Link to={`/shop/${product.id}`} key={product?.id}>
          <ProductCard
            {...product}
            key={product.id}
            onAddToCart={() => addToCart(product, 1)}
          />
          // </Link>
        ))}
      </div>

      <Link to="/shop">
        <button className="btn w-full btn-secondary btn-sm sm:btn-md">
          {" "}
          View All
        </button>
      </Link>
    </div>
  );
}
