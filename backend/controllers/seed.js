import mongoose from "mongoose";
import Product from "./models/productModel.js"; // adjust the path

// 10 sample products (same as I gave earlier)
const products = [
  {
    name: "Colorful Building Blocks",
    description: "Set of 50 interlocking blocks to boost creativity.",
    price: 29.99,
    category: "Toys",
    src: "https://example.com/images/blocks.jpg",
    offer: 10,
    option: "Age 3+",
    quantity: 100,
  },
  {
    name: "Kids Educational Tablet",
    description: "Preloaded with fun learning apps for math and reading.",
    price: 89.99,
    category: "Electronics",
    src: "https://example.com/images/tablet.jpg",
    offer: 15,
    option: "Color: Blue",
    quantity: 50,
  },
  // ... (rest of the 8 products here)
];

// For testing bulk dummy data
// run npm seed.js

const seedData = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/kiddiesgrowth"); // or your Atlas URI

    // Optional: Clear existing products before seeding
    await Product.deleteMany();

    // Insert all at once
    await Product.insertMany(products);

    console.log("✅ Products seeded successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error seeding products:", error);
    process.exit(1);
  }
};

seedData();
