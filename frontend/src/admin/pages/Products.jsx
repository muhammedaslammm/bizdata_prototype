import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  return products.length ? (
    <div className="products"></div>
  ) : (
    <div className="h-[15rem] border border-neutral-300 p-4 rounded-[.3rem] flex flex-col">
      <h3 className="text-[1.3rem] sm:text-[1.5rem] font-medium uppercase">
        no products added
      </h3>
      <p className="text-[1.1rem] sm:text-[1.5rem] text-neutral-600 pt-2">
        Add the first product to start selling from the prototype application!
      </p>
      <button className="mt-auto text-[1.1rem] sm:text-[1.3rem] self-start font-medium text-red-600 bg-red-50 py-2 px-4 capitalize cursor-pointer">
        add product
      </button>
    </div>
  );
};

export default Products;
