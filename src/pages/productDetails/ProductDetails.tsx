import { useState } from "react";
import QuantitySelector from "../../components/cart/QuantitySelector.tsx";
import ProductImageCarousel from "../../components/cart/ProductImageCarousel.tsx";
import { useParams } from "react-router-dom";
import OtherProducts from "./components/OtherProducts.js";
import { products } from "../../data/products.ts";
import { useCart } from "../../hooks/useCart.ts";
import PriceTag from "../../components/ui/PriceTag.tsx";
import type { color } from "chart.js/helpers";

export default function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (product) => product.id.toString() === id?.toString()
  );

  // const {id} = useParams()
  // This method involves both global and direct fetch if not showed
  //  useEffect(() => {
  //   // First, try to find in global store
  //   const found = products.find((p) => p.id.toString() === id);
  //   if (found) {
  //     setProduct(found);
  //     setLoading(false);
  //   } else {
  //     // Fallback: fetch from backend
  //     fetchProductById(id)
  //       .then((res) => setProduct(res))
  //       .catch((err) => console.error("Error loading product:", err))
  //       .finally(() => setLoading(false));
  //   }
  // }, [id, products]);

  // if (loading) return <div className="p-6">Loading...</div>;

  if (!product)
    return <div className="p-6 text-red-500">Product not found.</div>;

  return (
    <div className="p-4  lg:mx-12 ">
      <div className="flex flex-col md:flex-row lg:justify-between gap-6">
        {/* Carousel expects an array of images */}
        <ProductImageCarousel images={product?.src || []} />

        <div className="flex-1">
          <h3 className="text-3xl font-bold font-fredoka  transition-colors">
            {product?.name}
          </h3>
          <h2 className="card-title  sm:text-xl  text-gray-500 lg:text-base ">
            Category: {product?.category}
          </h2>

          <div className="card-actions justify-between lg:justify-start items-center mt-4">
            <PriceTag amount={product?.price} color={"text-primary"} />
          </div>
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

          <div className="flex  ">
            <button
              onClick={() => {
                if (product) addToCart(product, quantity);
              }}
              className="btn btn-primary w-full"
            >
              Add to Cart
            </button>
          </div>
          <h2 className="mt-6 sm:text-xl  lg:text-base ">
            For bulk order, please call 08144858370
          </h2>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex gap-4">
          <h2 className="textsm:text-lg font-medium lg:text-2xl ">
            Description
          </h2>
          <h2 className="sm:text-lg font-medium lg:text-2xl ">Review</h2>
        </div>

        <p className="text-gray-700 mt-2">{product?.description}</p>
      </div>
      <OtherProducts />
    </div>
  );
}
