import categories from "../../data/categories";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-neutral-50">
      <header className=" flex justify-between items-center w-[90%] mx-auto py-[.8rem]">
        <Link to={`/home`}>
          {" "}
          <div className="logo text-neutral-800 font-semibold text-[2.4rem] uppercase">
            prototype
          </div>
        </Link>
        <search>
          <input type="search" name="" id="" />
        </search>
        <nav>
          <ul className="options flex gap-[2.8rem] text-[1.65rem] font-medium text-neutral-800">
            <Link to={`/cart`} className="capitalize cursor-pointer">
              cart
            </Link>
            <Link to={`/wishlist`} className="capitalize cursor-pointer">
              wishlist
            </Link>
            <Link to={`/profile`} className="capitalize cursor-pointer">
              profile
            </Link>
            
            <li className="capitalize cursor-pointer">sign up</li>
          </ul>
        </nav>
      </header>
      <nav className="bg-neutral-700">
        <ul className="flex text-[1.3rem] w-[90%] mx-auto text-white">
          {/*category is looped using an array method, map()*/}
          {categories.map(function (category) {
            return (
              <div className="relative group">
                <div className="uppercase text-[1.55rem] py-[.58rem] px-4 cursor-pointer hover:bg-sky-700">
                  {category.name}
                </div>
                {category.sub_categories ? (
                  <div className="absolute flex flex-col flex-wrap bg-white w-[70rem] h-[30rem] py-4 px-6 opacity-0 pointer-events-none translate-y-[1.5rem] group-hover:opacity-100 group-hover:translate-y-0 duration-200 ease-out group-hover:pointer-events-auto">
                    {category.sub_categories.map((subcategory) => (
                      <div className="text-[1.4rem] mb-[1rem]">
                        <div className="text-black font-medium capitalize cursor-pointer">
                          {subcategory.name}
                        </div>
                        {subcategory.sub_categories ? (
                          <ul className="flex flex-col">
                            {subcategory.sub_categories.map((subcategories) => (
                              <Link
                                className="text-gray-500 hover:text-gray-800 capitalize cursor-pointer"
                                to={`/products/${subcategories.name}`}
                                onClick={() => window.alert("hey")}
                              >
                                {subcategories.name}
                              </Link>
                            ))}
                          </ul>
                        ) : (
                          <></>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
