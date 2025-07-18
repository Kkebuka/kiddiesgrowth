import React, { useState } from "react";
import type { ProductType } from "../../../types/types";

const AddProduct = () => {
  const [product, setProduct] = useState<Partial<ProductType>>({});
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [mediaPreview, setMediaPreview] = useState<{
    images: string[];
    video?: string;
  }>({
    images: [],
    video: "",
  });

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
    if (e.target.files) {
      const files = Array.from(e.target.files).slice(0, 4);
      setImageFiles(files);

      const previews = files.map((file) => URL.createObjectURL(file));
      setMediaPreview((prev) => ({ ...prev, images: previews }));
    }
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setVideoFile(e.target.files[0]);
      setMediaPreview((prev) => ({
        ...prev,
        video: URL.createObjectURL(e.target.files[0]),
      }));
    }
  };

  const uploadToCloudinary = async () => {
    setUploading(true);
    const uploadedImages: string[] = [];

    for (const file of imageFiles) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", upload_Preset);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloud_Name}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      const optimizedUrl = data.secure_url.replace(
        "/upload/",
        "/upload/q_auto,f_auto/"
      );
      uploadedImages.push(optimizedUrl);
    }

    let videoUrl = "";
    if (videoFile) {
      const formData = new FormData();
      formData.append("file", videoFile);
      formData.append("upload_preset", upload_Preset);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloud_Name}/video/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      videoUrl = data.secure_url;
    }

    setProduct((prev) => ({
      ...prev,
      image: uploadedImages,
      video: videoUrl,
    }));

    setUploading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !product.name ||
      !product.price ||
      !product.category ||
      imageFiles.length === 0
    ) {
      return alert(
        "Please fill all required fields and upload at least 1 image."
      );
    }

    await uploadToCloudinary();

    console.log("🟢 New Product Ready:", product);
    alert(
      "✅ Product uploaded — copy log and paste into `products.ts` if needed."
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow space-y-8">
      <h2 className="text-2xl font-bold text-gray-700">Add New Product</h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
          placeholder="Option (e.g., Size or Color)"
          className="input bg-gray-100 text-gray-800"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          className="textarea bg-gray-100 text-gray-800 md:col-span-2"
          onChange={handleChange}
        />

        <div className="md:col-span-2">
          <label className="font-medium text-gray-600">
            Upload Product Images (max 4)
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="file-input mt-1 w-full bg-gray-100 text-gray-800"
          />
        </div>

        <div className="md:col-span-2">
          <label className="font-medium text-gray-600">
            Upload Product Video (optional)
          </label>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="file-input mt-1 w-full bg-gray-100 text-gray-800"
          />
        </div>

        <button
          type="submit"
          disabled={uploading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded col-span-2"
        >
          {uploading ? "Uploading..." : "Add Product"}
        </button>
      </form>

      {/* ✅ Live Preview Section */}
      <div className="mt-6 space-y-6">
        {mediaPreview.images.length > 0 && (
          <div>
            <p className="font-semibold text-gray-700 mb-2">Image Preview</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {mediaPreview.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Preview ${i}`}
                  className="w-full h-32 object-cover rounded-lg shadow"
                />
              ))}
            </div>
          </div>
        )}

        {mediaPreview.video && (
          <div>
            <p className="font-semibold text-gray-700 mb-2">Video Preview</p>
            <video controls className="w-full rounded-lg shadow-md">
              <source src={mediaPreview.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
