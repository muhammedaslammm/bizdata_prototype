import { useContext } from "react";
import categories from "../../data/categories";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../contexts";
import { toast } from "sonner";

const Header = ({ state }) => {
  const { pathname } = useLocation();
  const [page] = pathname.split("/").filter(Boolean);
  const navigate = useNavigate();
  const { logoutUser } = useContext(UserContext);

  const handleUser = async () => {
    if (!state) navigate("/register/sign-up");
    else {
      const response = await logoutUser();
      if (response) toast.success("user logged out");
      else toast.error("user logging out failed");
    }
  };

  return (
    <header className="bg-neutral-50">
      {page === "home" ? (
        <div className="bg-[#283ea8] text-white text-center text-[1.6rem] font-medium py-3">
          All new projectors and laptops are out here in the store. grab now !
        </div>
      ) : (
        <></>
      )}

      <header className="header">
        <Link to={`/home`}>
          {" "}
          <div
            className="logo--header"
            style={{ fontFamily: "Special Gothic Expanded One,sans-serif" }}
          >
            prototype
          </div>
        </Link>
        <search className="flex items-center space-x-3">
          <input
            type="search"
            placeholder="Search for products..."
            className="w-[38rem] h-[3.6rem] px-4 py-2 text-[1.5rem] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
          <button className="h-[3.6rem] w-[3.6rem] bg-[#283ea8] text-white rounded-md hover:bg-cyan-700 transition-colors duration-300 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[1.8rem] w-[1.8rem]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </button>
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

            <li
              className="capitalize cursor-pointer"
              onClick={() => handleUser()}
            >
              {state ? "logout" : "sign in"}
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
                  {category.slug === "home" ? (
                    <Link>{category.name}</Link>
                  ) : (
                    <>{category.name}</>
                  )}
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
