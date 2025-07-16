import ProductCard from "../../components/ui/ProductCard";
import { products } from "../../data/products";
import { FaFilter } from "react-icons/fa";
// import { type ProductType } from "../../types/types";
import { useCart } from "../../hooks/useCart";

export default function Products() {
  const { addToCart } = useCart();

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex justify-end">
        <button className="btn btn-outline flex items-center gap-2">
          <FaFilter />
          Filter
        </button>
      </div>
      <div className="  w-full grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr">
        {products.map((product) => (
          <ProductCard {...product} key={product.id} onAddToCart={addToCart} />
        ))}
      </div>
      <div className="flex justify-center">
        <div className="join">
          <button className="join-item btn">1</button>
          <button className="join-item btn btn-active">2</button>
          <button className="join-item btn">3</button>
          <button className="join-item btn">4</button>
        </div>
      </div>
    </div>
  );
}
