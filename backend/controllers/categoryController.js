import Category from "../models/categoryModel.js";

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    console.log("categories:", categories);
    if (!categories.length)
      return res
        .status(204)
        .json({ success: true, message: "no category available", categories });
    return res
      .status(200)
      .json({ success: true, message: "categories available", categories });
  } catch (error) {
    res.status(500).json({ status: false, message: message.error });
  }
};

export const addCategory = async (req, res) => {
  try {
    const { categoryName, attributes } = req.body;
    const new_category = new Category({
      category_name: categoryName,
      attributes,
    });
    const category = await new_category.save();
    res
      .status(200)
      .json({ success: true, message: "category added", category });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
