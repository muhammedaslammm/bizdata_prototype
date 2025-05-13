import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    category_name: { type: String, required: true },
    attributes: [
      {
        label: { type: String, required: true },
        field_type: { type: String, required: true },
        options: [String],
      },
    ],
  },
  { timestamps: true }
);

const Category = mongoose.model("category", CategorySchema);

export default Category;
