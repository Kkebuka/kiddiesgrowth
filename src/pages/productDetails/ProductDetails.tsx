import React from "react";
import QuantitySelector from "../../components/cart/QuantitySelector.tsx";
import ProductImageCarousel from "../../components/cart/ProductImageCarousel.tsx";
import { useParams } from "react-router-dom";

type DetailsType = {
  productId: number;
  imageLink: string[];
  name: string;
  longDescription: string;
  price: number;
};

export default function ProductDetails({
  // productId,
  imageLink,
  name,
  longDescription,
  price,
}: DetailsType) {
  const { id } = useParams();

  return (
    <div className="p-4 w-full h-full bg-red-400">
      <div className="flex flex-col md:flex-row">
        <ProductImageCarousel images={imageLink} />
        <div className="card-body">
          <h2 className="card-title text-base sm:text-lg">{name}</h2>

          <div className="card-actions justify-between items-center mt-4">
            <span className="text-lg font-bold text-primary">N{price}</span>
            <QuantitySelector />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg">Description</h2>
        <h3 className="">{longDescription}</h3>
      </div>
    </div>
  );
}
