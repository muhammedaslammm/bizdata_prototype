import laptops from "../../data/laptops";
import monitors from "../../data/monitors";
import projectors from "../../data/projectors";

const getProducts = (filters) => {
  const allproducts = [...laptops, ...monitors, ...projectors];
  const filtered_products = allproducts.filter((product) => {
    return Object.entries(filters).every(([key, value]) => {
      if (key === "category")
        return product.category.some((category) => category.slug === value);
      else {
        return product[key] === value;
      }
    });
  });
  return filtered_products;
};

export default getProducts;
