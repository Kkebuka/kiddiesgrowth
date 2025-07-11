import React, { useEffect, useState } from "react";
import type { ProductType } from "../../../types/types"; // Adjust based on path

const AddProduct = () => {
  const [product, setProduct] = useState<Partial<ProductType>>({});
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const cloud_Name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const upload_Preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === "price" || name === "offer" ? +value : value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setImageFile(e.target.files[0]);
  };

  const uploadToCloudinary = async () => {
    if (!imageFile) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", upload_Preset); // Replace with your own preset

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_Name}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    setProduct((prev) => ({ ...prev, src: data?.secure_url }));
    setUploading(false);
    console.log(product);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product.name || !product.price || !product.category || !imageFile)
      return alert("Fill all required fields");

    await uploadToCloudinary();
    console.log("New Product Ready to Add:", product);

    // For now: copy this log and manually paste into products.ts
    alert("Product ready — copy console output and paste into products.ts");
  };

  useEffect(() => {
    console.log(product);
  }, [product]);
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md space-y-6">
      <h2 className="text-xl font-bold text-gray-700">Add New Product</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          name="name"
          type="text"
          placeholder="Product Name"
          className="input bg-gray-100 text-gray-800"
          onChange={handleChange}
        />
        <input
          name="category"
          type="text"
          placeholder="Category"
          className="input bg-gray-100 text-gray-800"
          onChange={handleChange}
        />
        <input
          name="price"
          type="number"
          placeholder="Price (₦)"
          className="input bg-gray-100 text-gray-800"
          onChange={handleChange}
        />
        <input
          name="offer"
          type="number"
          placeholder="Offer (%)"
          className="input bg-gray-100 text-gray-800"
          onChange={handleChange}
        />
        <input
          name="option"
          type="text"
          placeholder="Option (size/color)"
          className="input bg-gray-100 text-gray-800"
          onChange={handleChange}
        />
        <input
          name="description"
          placeholder="Description"
          className="input bg-gray-100 text-gray-800"
          onChange={handleChange}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className=" input col-span-2 bg-gray-100 text-gray-800"
        />

        <button
          type="submit"
          disabled={uploading}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded col-span-2"
        >
          {uploading ? "Uploading..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
