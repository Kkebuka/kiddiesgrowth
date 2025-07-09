import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import ProductCard from "../../components/ui/ProductCard";
import { useCart } from "../../hooks/useCart";

export default function CategoryProducts() {
  const { addToCart } = useCart();
  const { categoryName } = useParams();

  const filtered = products.filter(
    (item) => item.category.toLowerCase() === categoryName.toLowerCase()
  );
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{categoryName} Products</h2>
      <div className="  w-full grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr">
        {filtered.map((product) => (
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
