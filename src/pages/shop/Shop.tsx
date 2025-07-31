import ProductCard from "../../components/ui/ProductCard";
import { products } from "../../data/products";
import { FaFilter } from "react-icons/fa";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";

export default function Products() {
  const { addToCart } = useCart();
  const productsPerPage = 12;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="px-12 pb-8 flex flex-col gap-4">
      <h4 className="text-gray-800 font-semibold font-fredoka text-4xl py-6 text-center">
        All Products
      </h4>
      {/* Filter Button */}
      <div className="flex justify-end">
        <button className="btn btn-outline flex items-center gap-2">
          <FaFilter />
          Filter
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onAddToCart={() => addToCart(product, 1)}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <div className="join">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`join-item btn ${
                currentPage === i + 1 ? "btn-active" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
