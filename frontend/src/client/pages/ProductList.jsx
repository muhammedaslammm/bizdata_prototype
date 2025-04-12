import { useLocation } from "react-router-dom";
import BreadCrumps from "../components/BreadCrumps";
import ProductlistSidebar from "../components/ProductlistSidebar";
import ProductlistBody from "../components/ProductlistBody";
import getCategories from "../utils/getCategories";
import { useEffect, useState } from "react";
import getProducts from "../utils/getProducts";
import getBanner from "../utils/getBanner";

const ProductList = () => {
  const [filters, setFilters] = useState({});
  const [products, setProducts] = useState([]);

  const { pathname } = useLocation();
  const path_segments = pathname.split("/").filter(Boolean);
  const slug = path_segments[path_segments.length - 1];
  const categories = getCategories(path_segments);
  const banner = getBanner(slug);
  const sidebar_content = [categories];

  useEffect(() => {
    setFilters((prevFilter) => ({
      ...prevFilter,
      category: slug,
    }));
  }, [slug]);

  useEffect(() => {
    const filteredProducts = getProducts(filters);
    setProducts(filteredProducts);
  }, [filters]);

  return (
    <div className="product-list w-[90%] mx-auto my-4">
      <BreadCrumps path_segments={path_segments} />
      <div className="flex gap-6 my-2">
        <ProductlistSidebar sidebar_content={sidebar_content} />
        <ProductlistBody slug={slug} products={products} image={banner.image} />
      </div>
    </div>
  );
};

export default ProductList;
