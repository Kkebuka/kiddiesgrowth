import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function CategoryCard({
  name,
  image,
  productCount,
}: CategoryProps) {
  return (
    <Link
      to={`/category/${name}`}
      className="group card w-full bg-base-100 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
    >
      {/* Image */}
      <figure className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </figure>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
        <div className="text-white space-y-2">
          <h3 className="text-xl font-bold font-fredoka group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm font-inter opacity-90">
            {productCount} products
          </p>
          <div className="flex items-center space-x-2 text-sm font-inter font-medium">
            <span>Shop Now</span>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* Hover border effect */}
      <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-primary/30 transition-colors duration-300 pointer-events-none"></div>
    </Link>
  );
}
