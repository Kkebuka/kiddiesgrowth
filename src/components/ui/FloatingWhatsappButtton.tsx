// components/FloatingWhatsAppButton.tsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50 group">
      <a
        href="https://api.whatsapp.com/send?phone=2348144858370&text=Hi%20there!%20I%20need%20some%20help%20🙂"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-2 bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <FaWhatsapp className="text-2xl" />

        {/* Tooltip on hover */}
        <span className="absolute right-14 opacity-0 group-hover:opacity-100 bg-gray-800 text-white px-3 py-1 rounded text-sm transition-opacity duration-300">
          Need help?
        </span>
      </a>
    </div>
  );
}
