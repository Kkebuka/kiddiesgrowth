import express from "express";
import {
  getCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController";
import { protect, admin } from "../middleware/authMiddleware";
const router = express.Router();

router.get("/", getCategory);
router.get("/:id", getCategoryById);
router.post("/", protect, admin, createCategory);
router.put("/:id", protect, admin, updateCategory);
router.delete("/:id", protect, admin, deleteCategory);

export default router;
