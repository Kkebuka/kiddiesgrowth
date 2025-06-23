import { useState } from "react";

export default function ProductImageCarousel({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Main Image */}
      <div className="aspect-w-1 aspect-h-1 mb-4 border rounded overflow-hidden">
        <img
          src={images[selectedIndex]}
          alt={`Product image ${selectedIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-300"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex space-x-2 overflow-x-auto">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`w-20 h-20 rounded overflow-hidden border-2 ${
              idx === selectedIndex ? "border-green-500" : "border-transparent"
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
