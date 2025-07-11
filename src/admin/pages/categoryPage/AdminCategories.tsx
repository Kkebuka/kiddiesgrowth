import React, { useState } from "react";
import { FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";

const cloud_Name = "your_cloud_name"; // 🔁 Replace with your Cloudinary cloud name
const upload_Preset = "your_upload_preset"; // 🔁 Replace with your upload preset

type CategoryType = {
  id: number;
  name: string;
  image: string;
  productCount: number;
};

const initialCategories: CategoryType[] = [
  {
    id: 1,
    name: "Toys",
    image: "https://via.placeholder.com/80",
    productCount: 8,
  },
  {
    id: 2,
    name: "Books",
    image: "https://via.placeholder.com/80",
    productCount: 5,
  },
];

const AdminCategories = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [searchTerm, setSearchTerm] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  // 🖼 Handle file change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setImageFile(e.target.files[0]);
  };

  // ☁ Upload to Cloudinary
  const uploadToCloudinary = async () => {
    if (!imageFile) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", upload_Preset);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_Name}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    setImageUrl(data?.secure_url);
    setUploading(false);
  };

  // ➕ Add category to list
  const handleAddCategory = () => {
    if (!newCategory.trim() || !imageUrl) return;

    const exists = categories.find(
      (cat) => cat.name.toLowerCase() === newCategory.toLowerCase()
    );
    if (exists) return alert("Category already exists");

    const newCat = {
      id: categories.length + 1,
      name: newCategory,
      image: imageUrl,
      productCount: 0,
    };

    setCategories([newCat, ...categories]);
    setNewCategory("");
    setImageUrl("");
    setImageFile(null);
    setShowAddForm(false);
  };

  const filtered = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

      {/* Search */}
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

      {/* Category Table */}
      <div className="overflow-x-auto bg-white rounded shadow-md">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-200 text-gray-700 uppercase text-xs">
            <tr>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Name</th>
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
                  <td className="py-2 px-4">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                  </td>
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
      {showAddForm && (
        <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 h-4/6  ">
            <input
              type="text"
              placeholder="Category name"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded w-full text-sm"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border text-gray-700 px-3 py-2 rounded text-sm"
            />
            <button
              onClick={uploadToCloudinary}
              disabled={uploading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
            >
              {uploading ? "Uploading..." : "Upload Image"}
            </button>

            {imageUrl && (
              <img
                src={imageUrl}
                alt="Uploaded preview"
                className="h-20 rounded object-cover"
              />
            )}

            <button
              onClick={handleAddCategory}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm"
            >
              Save Category
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCategories;
