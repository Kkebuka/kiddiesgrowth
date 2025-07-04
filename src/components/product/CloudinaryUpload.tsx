// CloudinaryUpload.tsx
import React, { useState } from "react";

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

const CloudinaryUpload: React.FC = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    setUploading(true);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      setPreviewUrl(data.secure_url); // this is the image URL
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="file-input file-input-bordered w-full max-w-sm"
      />

      {uploading && <p className="text-blue-500">Uploading...</p>}

      {previewUrl && (
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-600">Uploaded Image:</p>
          <img
            src={previewUrl}
            alt="Uploaded"
            className="mt-2 rounded-lg shadow-md w-64 h-auto"
          />
        </div>
      )}
    </div>
  );
};

export default CloudinaryUpload;
