import React, { useEffect, useState } from "react";

const images = [
  "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
  "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
  "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
  "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
];

const AutoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="carousel w-full">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-item w-full transition-all duration-500 ease-in-out ${
              index === activeIndex ? "block" : "hidden"
            }`}
          >
            <img src={img} className="w-full object-cover h-96" />
          </div>
        ))}
      </div>

      {/* <div className="flex w-full justify-center gap-2 py-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`btn btn-xs ${
              index === activeIndex ? "btn-primary" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {index + 1}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default AutoCarousel;
