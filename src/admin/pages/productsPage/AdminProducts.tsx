import React, { useState } from "react";
import type { ProductType } from "../../../types/types";
import { products } from "../../../data/products";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Products</h2>
        <Link to="/admin/add-product">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 cursor-pointer py-2 rounded shadow">
            + Add Product
          </button>
        </Link>
      </div>

      {/* Filters Section */}
      <div className="flex flex-col md:flex-row items-start lg:justify-between md:items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name or category..."
          className="w-full md:w-1/2 border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 rounded text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="w-full md:w-1/4 border border-gray-300 px-3 bg-gray-50 text-gray-700  py-2 rounded text-sm"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto bg-white rounded shadow-md">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-200 text-gray-700 uppercase text-xs">
            <tr>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Price (₦)</th>
              <th className="py-3 px-4">Offer (%)</th>
              <th className="py-3 px-4">Option</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-6 text-gray-500">
                  No products found.
                </td>
              </tr>
            ) : (
              filteredProducts.map((product: ProductType) => (
                <tr key={product.id} className="border-t hover:bg-gray-50">
                  <td className="py-2 px-4">
                    <img
                      src={product.src}
                      alt={product.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                  </td>
                  <td className="py-2 px-4 font-medium text-gray-800">
                    {product.name}
                  </td>
                  <td className="py-2 px-4 text-gray-600">
                    {product.category}
                  </td>
                  <td className="py-2 px-4 text-gray-800 font-semibold">
                    {product.price.toLocaleString()}
                  </td>
                  <td className="py-2 px-4 text-gray-600">
                    {product.offer ?? "-"}
                  </td>
                  <td className="py-2 px-4 text-blue-600">{product.option}</td>
                  <td className="py-2 px-4 text-center space-x-2">
                    <button className="text-green-600 hover:text-green-800">
                      <FiEdit2 />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;
