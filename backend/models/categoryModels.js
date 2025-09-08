import mongoose from "mongoose";
import Product from "./productModels";

const categorySchema = new mongoose.Schema(
  {
    category_name: {
      type: String,
      required: [true, "Category name is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

export default Product;
