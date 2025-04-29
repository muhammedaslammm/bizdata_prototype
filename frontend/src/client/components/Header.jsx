import categories from "../../data/categories";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = ({ state }) => {
  const { pathname } = useLocation();
  const [page] = pathname.split("/").filter(Boolean);

  return (
    <header className="bg-neutral-50">
      {page === "home" ? (
        <div className="bg-cyan-600 text-white text-center text-[1.6rem] font-medium py-3">
          All new projectors and laptops are out here in the store. grab now !
        </div>
      ) : (
        <></>
      )}

      <header className=" flex justify-between items-center w-[90%] mx-auto py-[.8rem]">
        <Link to={`/home`}>
          {" "}
          <div
            className="logo text-cyan-700 font-semibold text-[2.4rem] uppercase"
            style={{ fontFamily: "Special Gothic Expanded One,sans-serif" }}
          >
            prototype
          </div>
        </Link>
        <search>
          <input type="search" name="" id="" />
        </search>
        <nav>
          <ul className="options flex gap-[2.8rem] text-[1.85rem] font-medium text-neutral-800">
            <Link to={`/cart`} className="capitalize cursor-pointer">
              cart
            </Link>
            <Link to={`/wishlist`} className="capitalize cursor-pointer">
              wishlist
            </Link>
            <Link to={`/profile`} className="capitalize cursor-pointer">
              profile
            </Link>

            <li className="capitalize cursor-pointer">
              {state ? "sign out" : "sign in"}
            </li>
          </ul>
        </nav>
      </header>
      <nav className="bg-neutral-800">
        <ul className="flex w-[90%] mx-auto text-white">
          {/*category is looped using an array method, map()*/}
          {categories.map(function (category) {
            return (
              <div className="relative group">
                <div className="uppercase text-[1.7rem] py-[.9rem] px-4 cursor-pointer hover:bg-cyan-800">
                  {category.name}
                </div>
                {category.sub_categories ? (
                  <div className="absolute border border-neutral-200 flex flex-col flex-wrap bg-white w-[70rem] h-[30rem] py-4 px-6 opacity-0 pointer-events-none translate-y-[1.5rem] group-hover:opacity-100 group-hover:translate-y-0 duration-200 ease-out group-hover:pointer-events-auto z-100">
                    {category.sub_categories.map((sub_category) => (
                      <div className="text-[1.7rem] mb-[1rem]  flex flex-col gap-[.8rem]">
                        <div className="text-black font-medium  capitalize cursor-pointer">
                          {sub_category.name}
                        </div>
                        {sub_category.sub_categories ? (
                          <ul className="flex flex-col gap-[.5rem]">
                            {sub_category.sub_categories.map(
                              (sub_category_2) => (
                                <Link
                                  className="text-gray-500 hover:text-gray-800 capitalize cursor-pointer"
                                  to={`/${category.slug}/${sub_category.slug}/${sub_category_2.slug}`}
                                >
                                  {sub_category_2.name}
                                </Link>
                              )
                            )}
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
