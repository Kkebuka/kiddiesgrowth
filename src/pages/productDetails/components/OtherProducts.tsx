import { products } from "../../../data/products";
import ProductCard from "../../../components/ui/ProductCard";
import { useCart } from "../../../hooks/useCart";
import { useMemo } from "react";

export default function OtherProducts() {
  const { addToCart } = useCart();

  const random4 = useMemo(() => {
    return [...products]
      .sort(() => 0.5 - Math.random()) // shuffle randomly
      .slice(0, 4);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-gray-800 font-semibold text-2xl py-2 text-center">
        Related Products
      </h4>

      <div className="grid grid-cols-2 gap-3 grid-rows-2 md:flex">
        {random4.map((product) => (
          <ProductCard
            key={product.id}
            src={product.src}
            name={product.name}
            price={product.price}
            id={product.id}
            category={product.category}
            option={product.quantity > 0 ? "Add to Cart" : "Sold Out"}
            quantity={product.quantity}
            onAddToCart={() => addToCart(product, 1)}
          />
        ))}
      </div>
    </div>
  );
}
