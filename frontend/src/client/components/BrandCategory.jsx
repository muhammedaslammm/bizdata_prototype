import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../contexts";

const BrandCategory = () => {
  const [brandCategories, setBrandCategories] = useState();
  const { getBrandCategories } = useContext(CategoryContext);
  useEffect(() => {
    const getcategories = async () => {
      const { categories } = getBrandCategories();
      console.log("categories:", categories);
      const image = new Image();
      image.src = categories[1].image_url;
      image.onload = () => console.log(image.width);
      setBrandCategories(categories);
    };
    getcategories();
  }, []);

  return (
    <section className="categories w-[90%] mx-auto my-12 flex gap-8 ">
      {brandCategories ? (
        brandCategories.map((category) => (
          <div className="relative w-[50rem] h-[50rem] flex bg-white border border-neutral-100 rounded-[2rem] overflow-hidden">
            <div className="left h-full w-7/12 flex flex-col justify-between p-8">
              <div className="top">
                <p className="text-[1.5rem] font-medium">{category.brand}</p>
                <h2 className="text-[3rem] font-semibold leading-[3.5rem] uppercase mt-[3rem]">
                  {category.title}
                </h2>
              </div>
              <div className="bottom flex flex-col gap-[2rem]">
                <p className="text-[2rem] font-medium">
                  {category.discount_note}
                </p>
                <button className="text-[1.6rem] text-white self-start bg-black py-[.5rem] px-[1rem] rounded-[.3rem] capitalize cursor-pointer">
                  shop now
                </button>
              </div>
            </div>
            <div
              className="right w-5/12 h-full "
              style={{
                backgroundImage: `linear-gradient(to right, ${category.linear_gradient_from}, ${category.linear_gradient_to})`,
              }}
            >
              <img
                src={category.image_url}
                alt="image"
                className="absolute -right-[20rem] "
              />
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </section>
  );
};

export default BrandCategory;
