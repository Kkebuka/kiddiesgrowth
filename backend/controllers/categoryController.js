import Category from "../models/categoryModels";

const getCategory = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

const getCategoryById = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category)
      return res.status(404).json({ message: "Catgory not found" });
    res.json(category);
  } catch (err) {
    next(err);
  }
};

const createCategory = async (req, res, next) => {
  try {
    const { category_name } = req.body;
    const caegory = new Category({
      category_name,
    });
    const savedCategory = await category.save();
    res.status(201).json(savedCategory);
  } catch (err) {
    next(err);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!category)
      return res.status(404).json({ message: "Category not found" });
    res.json(category);
  } catch (err) {
    next(err);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category)
      return res.status(404).json({ message: "Catgory not found" });
  } catch (err) {
    next(err);
  }
};

export {
  createCategory,
  deleteCategory,
  getCategory,
  getCategoryById,
  updateCategory,
};
