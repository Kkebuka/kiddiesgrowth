import QuantitySelector from "../../components/cart/QuantitySelector.tsx";
import ProductImageCarousel from "../../components/cart/ProductImageCarousel.tsx";
import { useParams } from "react-router-dom";
import OtherProducts from "./components/OtherProducts.js";
import { products } from "../../data/products.ts";

export default function ProductDetails() {
  const { id } = useParams();
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
  // if (!product) return <div className="p-6 text-red-500">Product not found.</div>;

  return (
    <div className="p-4 w-full ">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Carousel expects an array of images */}
        <ProductImageCarousel images={product?.src || []} />

        <div className="card-body">
          <h2 className="card-title text-xl sm:text-2xl font-semibold">
            {product?.name}
          </h2>

          <div className="card-actions justify-between lg:justify-start items-center mt-4">
            <span className="text-lg font-bold text-green-600">
              ₦{product?.price}
            </span>
            <QuantitySelector />
          </div>
          <h2 className="card-title  sm:text-xl  lg:text-base ">
            Category: {product?.category}
          </h2>
          <div className="flex  gap-4">
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-secondary">Buy Now</button>
          </div>
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
