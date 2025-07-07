import React, { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1603354350266-a8de3496163b?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1701984401340-62ac0a8ab4b8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1746210545841-46444743d2d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNoaWxkcmVuJTIwdG95c3xlbnwwfDB8MHx8fDA%3D",
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
