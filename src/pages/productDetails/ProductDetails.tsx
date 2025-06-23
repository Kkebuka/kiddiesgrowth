import QuantitySelector from "../../components/cart/QuantitySelector.tsx";
import ProductImageCarousel from "../../components/cart/ProductImageCarousel.tsx";

export default function ProductDetails() {
  const product = {
    id: 13,
    src: ["https://via.placeholder.com/300x200?text=Robot+Toy"], // Make this an array for carousel compatibility
    alt: "Robot Toy",
    name: "Smart Talking Robot",
    longDescription: "Interactive robot to educate and entertain.",
    price: 6000,
    option: "Add to Cart",
  };

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
    <div className="p-4 w-full bg-red-100">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Carousel expects an array of images */}
        <ProductImageCarousel images={product.src} />

        <div className="card-body">
          <h2 className="card-title text-xl sm:text-2xl font-semibold">
            {product.name}
          </h2>

          <div className="card-actions justify-between items-center mt-4">
            <span className="text-lg font-bold text-green-600">
              ₦{product.price}
            </span>
            <QuantitySelector />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-medium">Description</h2>
        <p className="text-gray-700 mt-2">{product.longDescription}</p>
      </div>
    </div>
  );
}
