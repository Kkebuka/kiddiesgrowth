import { type CategoryProps } from "../../types/types";

export default function CategoryCard({
  name,
  image,
  productCount,
}: CategoryProps) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
      <figure className="px-4 pt-4">
        <img
          src={image}
          alt={name}
          className="rounded-xl h-32 w-full object-cover"
          loading="lazy"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-lg font-semibold">{name}</h2>
        {productCount !== undefined && (
          <p className="text-sm text-gray-500">{productCount} products</p>
        )}
      </div>
    </div>
  );
}
