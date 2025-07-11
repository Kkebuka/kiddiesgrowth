import React, { useState } from "react";
import { FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";

const initialCategories = [
  { id: 1, name: "Toys", productCount: 8 },
  { id: 2, name: "Books", productCount: 5 },
  { id: 3, name: "Clothing", productCount: 12 },
];

const AdminCategories = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [searchTerm, setSearchTerm] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const filtered = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddCategory = () => {
    if (!newCategory.trim()) return;
    const exists = categories.find(
      (cat) => cat.name.toLowerCase() === newCategory.toLowerCase()
    );
    if (exists) return alert("Category already exists");

    const newCat = {
      id: categories.length + 1,
      name: newCategory,
      productCount: 0,
    };

    setCategories([newCat, ...categories]);
    setNewCategory("");
    setShowAddForm(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Categories</h2>
        <button
          onClick={() => setShowAddForm((prev) => !prev)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow inline-flex items-center gap-2"
        >
          <FiPlus /> Add Category
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search category..."
          className="w-full sm:w-1/2 border border-gray-300 px-4 py-2 rounded text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Add Category Form */}
      {showAddForm && (
        <div className="mb-4 bg-white p-4 rounded shadow-md w-full sm:w-1/2">
          <input
            type="text"
            placeholder="New category name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded w-full text-sm"
          />
          <button
            onClick={handleAddCategory}
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
          >
            Save Category
          </button>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded shadow-md">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-200 text-gray-700 uppercase text-xs">
            <tr>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Category Name</th>
              <th className="py-3 px-4">Products</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-6 text-gray-500">
                  No categories found.
                </td>
              </tr>
            ) : (
              filtered.map((cat) => (
                <tr key={cat.id} className="border-t hover:bg-gray-50">
                  <td className="py-2 px-4">{cat.id}</td>
                  <td className="py-2 px-4 font-medium text-gray-800">
                    {cat.name}
                  </td>
                  <td className="py-2 px-4 text-gray-600">
                    {cat.productCount}
                  </td>
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

export default AdminCategories;
