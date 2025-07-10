import ProductCard from "../../../components/ui/ProductCard";
import { type ProductType } from "../../../types/types";
import { Link } from "react-router-dom";

export default function BestPicks() {
  const products: ProductType[] = [
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1585386959984-a415522e3f1c",
      alt: "Smart Watch",
      name: "Smart Fitness Watch",
      description: "Track your workouts, heart rate, and notifications",
      price: 8999,
      option: "Buy Now",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1610465299995-2551e9b9fc00",
      alt: "Gaming Headset",
      name: "Surround Sound Gaming Headset",
      description: "Noise-cancelling with RGB lighting",
      price: 10999,
      option: "Buy Now",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      alt: "Bluetooth Speaker",
      name: "Portable Bluetooth Speaker",
      description: "10-hour battery life with waterproof design",
      price: 4999,
      option: "Buy Now",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      alt: "Instant Camera",
      name: "Instant Print Camera",
      description: "Capture and print your moments on the go",
      price: 7499,
      option: "Buy Now",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1582034981591-6cd9b7430a02",
      alt: "Electric Toothbrush",
      name: "Sonic Electric Toothbrush",
      description: "Whitening mode and 30-day battery life",
      price: 2999,
      option: "Buy Now",
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-gray-800 font-semibold text-2xl py-2  text-center">
        Best Pick For the Month
      </h4>

      <div className="  grid grid-cols-2 gap-3  lg:grid-cols-4 ">
        {products.map((product) => (
          <Link to={`/shop/${product.id}`} key={product?.id}>
            <ProductCard {...product} key={product.id} />
          </Link>
        ))}
      </div>

      <button className="btn btn-secondary btn-sm sm:btn-md"> View More</button>
    </div>
  );
}
