import CategoryCard from "../../components/ui/CategoryCard";
// import { type CategoryProps } from "../../types/types";
import { categories } from "../../data/categories";

export default function Categories() {
  // const categories: CategoryProps[] = [
  //   {
  //     name: "Electronics",
  //     image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03",
  //     productCount: 125,
  //   },
  //   {
  //     name: "Clothing",
  //     image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
  //     productCount: 89,
  //   },
  //   {
  //     name: "Home & Garden",
  //     image: "https://images.unsplash.com/photo-1583845112203-454c6c0c1c1f",
  //     productCount: 76,
  //   },
  //   {
  //     name: "Books",
  //     image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
  //     productCount: 215,
  //   },
  //   {
  //     name: "Sports",
  //     image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
  //     productCount: 42,
  //   },
  //   {
  //     name: "Beauty",
  //     image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  //     productCount: 58,
  //   },
  //   {
  //     name: "Toys",
  //     image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8",
  //     productCount: 37,
  //   },
  //   {
  //     name: "Furniture",
  //     image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
  //     productCount: 29,
  //   },
  //   {
  //     name: "Jewelry",
  //     image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
  //     productCount: 63,
  //   },
  //   {
  //     name: "Automotive",
  //     image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e",
  //     productCount: 51,
  //   },
  //   {
  //     name: "Pet Supplies",
  //     image: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80",
  //     productCount: 84,
  //   },
  //   {
  //     name: "Music",
  //     image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
  //     productCount: 112,
  //   },
  //   {
  //     name: "Art",
  //     image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5",
  //     productCount: 23,
  //   },
  //   {
  //     name: "Food & Beverage",
  //     image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
  //     productCount: 156,
  //   },
  //   {
  //     name: "Health",
  //     image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
  //     productCount: 72,
  //   },
  //   {
  //     name: "Baby",
  //     image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
  //     productCount: 45,
  //   },
  //   {
  //     name: "Office Supplies",
  //     image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  //     productCount: 68,
  //   },
  //   {
  //     name: "Outdoor",
  //     image: "https://images.unsplash.com/photo-1536514498073-50e69d39c6cf",
  //     productCount: 39,
  //   },
  //   {
  //     name: "Gaming",
  //     image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
  //     productCount: 94,
  //   },
  //   {
  //     name: "Collectibles",
  //     image: "https://images.unsplash.com/photo-1562887284-ebf843b5a0a3",
  //     // productCount is optional, so omitted for this item
  //   },
  // ];
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
