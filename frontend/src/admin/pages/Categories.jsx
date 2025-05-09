import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [];
  return categories.length ? (
    <div className="admin_categories"></div>
  ) : (
    <div className="h-[15rem] border border-neutral-300 p-4 rounded-[.3rem] flex flex-col">
      <h2 className="text-[1.3rem] sm:text-[1.5rem] font-medium uppercase">
        Categories are not added
      </h2>
      <p className="text-[1.1rem] sm:text-[1.5rem] text-neutral-600 pt-2">
        Atleast a single category is supposed to be added inorder to add a
        product in this application!
      </p>
      <Link
        className="mt-auto text-[1.1rem] sm:text-[1.3rem] self-start font-medium text-yellow-600 bg-yellow-50 py-2 px-4 capitalize cursor-pointer"
        to="/admin/category-management/form"
      >
        add new category
      </Link>
    </div>
  );
};

export default Categories;
