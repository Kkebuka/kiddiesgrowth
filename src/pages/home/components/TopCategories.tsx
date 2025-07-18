import CategoryCard from "../../../components/ui/CategoryCard";
import { categories } from "../../../data/categories";

export default function TopCategories() {
  const topFive = categories.slice(0, 5);
  return (
    <div className="shadow-md  lg:block">
      <h4 className="text-gray-800 font-semibold text-2xl py-2 text-center">
        Top Categories
      </h4>
      <div className="flex overflow-x-auto gap-4 scrollbar-hide">
        {topFive?.map((category, index) => (
          <div key={index} className="min-w-[200px] flex-1 shrink-0">
            <CategoryCard
              image={category.image}
              name={category.name}
              productCount={category.productCount}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
