import CategoryCard from "../../components/ui/CategoryCard";
// import { type CategoryProps } from "../../types/types";
import { categories } from "../../data/categories";

export default function Categories() {
  return (
    <div className="p-4">
      <h4 className="text-gray-800 font-semibold text-2xl py-2 text-center">
        Categories
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {categories?.map((category, index) => (
          <CategoryCard
            image={category.image}
            name={category.name}
            productCount={category.productCount}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
