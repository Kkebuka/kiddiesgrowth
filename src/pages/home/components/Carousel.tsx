import React, { useEffect, useState } from "react";
import carousel from "../../../assets/images/Login.jpg";

const images = [
  carousel,

  "https://images.unsplash.com/photo-1725404780773-f8f4808c19c8?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            <img
              src={img}
              className="w-full object-cover h-96"
              loading="lazy"
            />
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
