import { useEffect, useState } from "react";
import CategoryContext from "../context/CategoryContext";

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/admin/categories`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        else {
          setCategories(data.categories);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  });
  const value = { categories };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
