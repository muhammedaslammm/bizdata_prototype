import { useEffect, useState } from "react";
import { CategoryContext } from "../contexts";
import brandCategories from "../data/brandCategories";

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchcategories = async () => {
      const response = await fetch(
        `https://bizdata-prototype.onrender.com/api/categories`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const data = await response.json();
      if (!response.ok) console.log(data.error);
      else setCategories(data.categories);
    };
    fetchcategories();
  }, []);

  const addCategory = async (category) => {
    try {
      const response = await fetch(
        `https://bizdata-prototype.onrender.com/api/categories`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(category),
        }
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      else {
        const new_categories = [...categories, data.category];
        setCategories(new_categories);
        return { success: true, message: data.message };
      }
    } catch (error) {
      console.error(error.message);
      return { success: false, message: error.message };
    }
  };

  const getBrandCategories = () => {
    try {
      const value = true;
      if (value) return { success: true, categories: brandCategories };
      else {
        throw new Error("failed to get branded categories");
      }
    } catch (error) {
      return { success: false, message: "fetch failed" };
    }
  };

  

  const values = { categories, addCategory, getBrandCategories };

  return (
    <CategoryContext.Provider value={values}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
