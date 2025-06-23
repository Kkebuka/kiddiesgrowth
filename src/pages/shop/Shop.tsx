import React from "react";
import ProductCard from "../../components/ui/ProductCard";
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";

export default function Products() {
  const products = [
    {
      id: 0,
      src: "https://via.placeholder.com/300x200?text=Toy+Car",
      alt: "Toy Car",
      name: "Mini Toy Car",
      description: "A colorful mini car to keep your child engaged.",
      price: 1500,
      option: "Add to Cart",
    },
    {
      id: 1,
      src: "https://via.placeholder.com/300x200?text=Puzzle",
      alt: "Puzzle Game",
      name: "Animal Puzzle",
      description: "Enhances your child’s brain development through play.",
      price: 2200,
      option: "Add to Cart",
    },
    {
      id: 3,
      src: "https://via.placeholder.com/300x200?text=Building+Blocks",
      alt: "Building Blocks",
      name: "Creative Blocks",
      description: "Build and imagine with colorful learning blocks.",
      price: 3500,
      option: "Add to Cart",
    },
    {
      id: 4,
      src: "https://via.placeholder.com/300x200?text=Story+Book",
      alt: "Story Book",
      name: "Fairy Tale Stories",
      description: "Let your child enjoy magical bedtime stories.",
      price: 1800,
      option: "Add to Cart",
    },
    {
      id: 4,
      src: "https://via.placeholder.com/300x200?text=Color+Set",
      alt: "Coloring Set",
      name: "Art & Color Kit",
      description: "Encourages creativity and expression through art.",
      price: 2700,
      option: "Add to Cart",
    },
    {
      id: 5,
      src: "https://via.placeholder.com/300x200?text=Play+Dough",
      alt: "Play Dough",
      name: "Soft Play Dough",
      description: "Fun molding dough for creative fun time.",
      price: 2500,
      option: "Add to Cart",
    },
    {
      id: 6,
      src: "https://via.placeholder.com/300x200?text=Stuffed+Bear",
      alt: "Stuffed Bear",
      name: "Cuddly Teddy Bear",
      description: "Soft and adorable bear for hugging and bonding.",
      price: 3000,
      option: "Add to Cart",
    },
    {
      id: 7,
      src: "https://via.placeholder.com/300x200?text=Flashcards",
      alt: "Flashcards",
      name: "Alphabet Flashcards",
      description: "Perfect for early learning and letter recognition.",
      price: 1600,
      option: "Add to Cart",
    },
    {
      id: 8,
      src: "https://via.placeholder.com/300x200?text=Musical+Toy",
      alt: "Musical Toy",
      name: "Melody Piano",
      description: "Musical fun that develops hearing and motor skills.",
      price: 4200,
      option: "Add to Cart",
    },
    {
      id: 9,
      src: "https://via.placeholder.com/300x200?text=Dress+Up",
      alt: "Dress Up",
      name: "Princess Dress Set",
      description: "Imaginative play with this magical outfit.",
      price: 5000,
      option: "Add to Cart",
    },
    {
      id: 10,
      src: "https://via.placeholder.com/300x200?text=Race+Track",
      alt: "Race Track",
      name: "Racing Track Set",
      description: "Exciting racing for active and curious kids.",
      price: 4500,
      option: "Add to Cart",
    },
    {
      id: 11,

      src: "https://via.placeholder.com/300x200?text=Drawing+Tablet",
      alt: "Drawing Tablet",
      name: "LCD Drawing Tablet",
      description: "Reusable writing and drawing board for creativity.",
      price: 3800,
      option: "Add to Cart",
    },
    {
      id: 12,
      src: "https://via.placeholder.com/300x200?text=Animal+Toys",
      alt: "Animal Toys",
      name: "Wildlife Toy Set",
      description: "Learn about animals through fun role play.",
      price: 3200,
      option: "Add to Cart",
    },
    {
      id: 13,
      src: "https://via.placeholder.com/300x200?text=Robot+Toy",
      alt: "Robot Toy",
      name: "Smart Talking Robot",
      description: "Interactive robot to educate and entertain.",
      price: 6000,
      option: "Add to Cart",
    },
    {
      id: 14,
      src: "https://via.placeholder.com/300x200?text=Train+Set",
      alt: "Train Set",
      name: "Wooden Train Set",
      description: "Classic toy that boosts imagination and coordination.",
      price: 4700,
      option: "Add to Cart",
    },
    {
      id: 15,
      src: "https://via.placeholder.com/300x200?text=Stacking+Toys",
      alt: "Stacking Toys",
      name: "Rainbow Stackers",
      description: "Develops balance and coordination in toddlers.",
      price: 2100,
      option: "Add to Cart",
    },
    {
      id: 16,
      src: "https://via.placeholder.com/300x200?text=Kitchen+Set",
      alt: "Kitchen Set",
      name: "Mini Kitchen Playset",
      description: "Great for imaginative play and role learning.",
      price: 5200,
      option: "Add to Cart",
    },
    {
      id: 17,
      src: "https://via.placeholder.com/300x200?text=Board+Game",
      alt: "Board Game",
      name: "Kids Learning Board",
      description: "Fun board games that teach basic skills.",
      price: 2900,
      option: "Add to Cart",
    },
    {
      id: 18,
      src: "https://via.placeholder.com/300x200?text=Baby+Rattle",
      alt: "Baby Rattle",
      name: "Colorful Baby Rattle",
      description: "Safe rattle toy for sensory development.",
      price: 1400,
      option: "Add to Cart",
    },
  ];

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex justify-end">
        <button className="btn btn-outline flex items-center gap-2">
          <FaFilter />
          Filter
        </button>
      </div>
      <div className="  grid grid-cols-2 gap-3 md:grid-cols-4">
        {products.map((product) => (
          <Link to={`/shop/${product.id}`} key={product?.id}>
            <ProductCard {...product} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="join">
          <button className="join-item btn">1</button>
          <button className="join-item btn btn-active">2</button>
          <button className="join-item btn">3</button>
          <button className="join-item btn">4</button>
        </div>
      </div>
    </div>
  );
}
