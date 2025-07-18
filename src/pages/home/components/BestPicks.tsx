import ProductCard from "../../../components/ui/ProductCard";
import { Link } from "react-router-dom";
import { products } from "../../../data/products";

export default function BestPicks() {
  const random8 = products
    .sort(() => 0.5 - Math.random()) // shuffle randomly
    .slice(0, 8); // pick first 5

  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-gray-800 font-semibold text-2xl py-2  text-center">
        Best Pick For the Month
      </h4>

      <div className="  grid grid-cols-2 gap-3  lg:grid-cols-4 ">
        {random8.map((product) => (
          <Link to={`/shop/${product.id}`} key={product?.id}>
            <ProductCard {...product} key={product.id} />
          </Link>
        ))}
      </div>

      <button className="btn btn-secondary btn-sm sm:btn-md"> View More</button>
    </div>
  );
}
