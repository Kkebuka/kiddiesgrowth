import express from "express";

const router = express.Router();

router.get("/", getCategory);
router.get("/:id", getCategoryById);
router.post;
