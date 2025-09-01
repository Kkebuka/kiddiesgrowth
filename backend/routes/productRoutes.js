import express from "express";
import {
  getProductById,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productControllers";

const router = express.Router();
router.get("/", getProducts);
router.get("/:id", getProductById);
router.get("/", updateProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
