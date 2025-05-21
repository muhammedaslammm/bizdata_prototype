import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CategoryContext } from "../../contexts";
import { formatDistanceToNow, parseISO } from "date-fns";

const Categories = () => {
  const { categories } = useContext(CategoryContext);
  const navigate = useNavigate();
  console.log(categories);

  return categories.length ? (
    <div className="admin_categories flex flex-col gap-4 w-full md:w-[70%] mt-2">
      <div className="flex justify-between items-center border border-neutral-300 p-4 rounded-[.5rem]">
        <p className="text-[1.7rem]">
          Adding more categories with variant products attracts our customers.
        </p>
        <button
          className="bg-black text-white text-[1.2rem] font-medium py-[.5rem] px-[.7rem] rounded-[.3rem] cursor-pointer capitalize self-start"
          onClick={() => navigate("/admin/category-management/form")}
        >
          +add category
        </button>
      </div>

      <table className="">
        <thead>
          <tr className="text-[1.6rem]">
            <th className="font-medium capitalize text-start p-2.5 border border-neutral-300">
              sl no
            </th>
            <th className="font-medium capitalize text-start p-2.5 border border-neutral-300">
              category name
            </th>
            <th className="font-medium capitalize text-start p-2.5 border border-neutral-300">
              created
            </th>
            <th className="font-medium capitalize text-start p-2.5 border border-neutral-300">
              updated
            </th>
            <th className="font-medium capitalize text-start p-2.5 border border-neutral-300">
              control
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr className="text-[1.6rem]">
              <td className="border border-neutral-300 p-3">{index + 1}</td>
              <td className="border border-neutral-300 p-3">
                {category.category_name}
              </td>
              <td className="border border-neutral-300 p-3">
                {formatDistanceToNow(parseISO(category.createdAt), {
                  addSuffix: true,
                })}
              </td>
              <td className="border border-neutral-300 p-3">
                {formatDistanceToNow(parseISO(category.updatedAt), {
                  addSuffix: true,
                })}
              </td>
              <td className="border border-neutral-300 p-3 text-center">
                <button className="text-[1.3rem] border border-neutral-500 font-medium  py-[.3rem] px-[.7rem] rounded-[.2rem] capitalize cursor-pointer transition hover:bg-neutral-100 ">
                  manage
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="h-[15rem] border border-neutral-300 md:w-[85%] p-4 rounded-[.3rem] flex flex-col">
      <h2 className="text-[1.3rem] sm:text-[1.5rem] lg:text-[1.7rem] font-medium uppercase">
        Categories are not added
      </h2>
      <p className="text-[1.1rem] sm:text-[1.5rem] lg:text-[1.7rem] text-neutral-600 pt-2">
        Atleast a single category is supposed to be added inorder to add a
        product in this application!
      </p>
      <Link
        className="mt-auto text-[1.1rem] sm:text-[1.3rem] lg:text-[1.5rem] self-start font-medium text-yellow-600 bg-yellow-50 py-2 px-4 capitalize cursor-pointer"
        to="/admin/category-management/form"
      >
        add new category
      </Link>
    </div>
  );
};

export default Categories;
