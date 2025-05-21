import categories from "../../data/categories";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = ({ state }) => {
  const { pathname } = useLocation();
  const [page] = pathname.split("/").filter(Boolean);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-50 overflow-hidden">
      {/* Top announcement banner */}
      {page === "home" && (
        <div className="bg-cyan-600 text-white text-center text-[1.4rem] sm:text-[1.6rem] font-medium py-2 sm:py-3">
          All new projectors and laptops are out here in the store. Grab now!
        </div>
      )}

      {/* Header main container */}
      <div className="w-[90%] mx-auto py-3">
        {/* MOBILE VIEW */}
        <div className="sm:hidden">
          {/* Logo and hamburger */}
          <div className="flex justify-between items-center">
            <Link to="/home">
              <div
                className="text-cyan-700 font-semibold text-[2rem] uppercase"
                style={{ fontFamily: "Special Gothic Expanded One,sans-serif" }}
              >
                prototype
              </div>
            </Link>
            <button
              className="text-cyan-700 text-3xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          </div>

          {/* Mobile search bar */}
          <div className="mt-3 flex items-center space-x-3">
            <input
              type="search"
              placeholder="Search for products..."
              className="w-full h-[3rem] px-4 py-2 text-[1.2rem] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
            <button className="h-[3rem] w-[3rem] bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors duration-300 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[1.4rem] w-[1.4rem]"
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
          </div>

          {/* Mobile menu links */}
          {mobileMenuOpen && (
            <nav className="mt-4">
              <ul className="flex flex-col gap-3 text-[1.5rem] font-medium text-neutral-800">
                <Link to="/cart">cart</Link>
                <Link to="/wishlist">wishlist</Link>
                <Link to="/profile">profile</Link>
                <li>{state ? "sign out" : "sign in"}</li>
              </ul>
            </nav>
          )}
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden sm:flex flex-wrap justify-between items-center gap-4">
          {/* Logo */}
          <Link to="/home">
            <div
              className="text-cyan-700 font-semibold text-[2.4rem] uppercase"
              style={{ fontFamily: "Special Gothic Expanded One,sans-serif" }}
            >
              prototype
            </div>
          </Link>

          {/* Search bar */}
          <div className="hidden sm:flex items-center space-x-3 flex-grow max-w-[40rem]">
            <input
              type="search"
              placeholder="Search for products..."
              className="w-full h-[3.6rem] px-4 py-2 text-[1.4rem] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
            <button className="h-[3.6rem] w-[3.6rem] bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors duration-300 flex items-center justify-center">
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
          </div>

          {/* Navigation links */}
          <nav>
            <ul className="flex gap-[2rem] text-[1.7rem] font-medium text-neutral-800 flex-wrap">
              <Link to="/cart" className="capitalize">
                cart
              </Link>
              <Link to="/wishlist" className="capitalize">
                wishlist
              </Link>
              <Link to="/profile" className="capitalize">
                profile
              </Link>
              <li className="capitalize cursor-pointer">
                {state ? "sign out" : "sign in"}
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Categories Navigation */}
      <nav className="bg-neutral-800 overflow-x-auto">
        <ul className="flex w-full mx-auto text-white text-sm sm:text-base whitespace-nowrap justify-center sm:justify-start">
          {(window.innerWidth < 640
            ? categories.filter((c) =>
                ["mobile", "laptop", "television"].includes(c.slug)
              )
            : categories
          ).map((category) => (
            <div key={category.slug} className="relative group">
              <div className="uppercase text-[1.4rem] sm:text-[1.7rem] py-3 px-4 cursor-pointer hover:bg-cyan-800">
                {category.slug === "home" ? (
                  <Link>{category.name}</Link>
                ) : (
                  <>{category.name}</>
                )}
              </div>

              {category.sub_categories && (
                <div className="absolute border border-neutral-200 flex flex-col flex-wrap bg-white w-[70rem] h-[30rem] py-4 px-6 opacity-0 pointer-events-none translate-y-[1.5rem] group-hover:opacity-100 group-hover:translate-y-0 duration-200 ease-out group-hover:pointer-events-auto z-50">
                  {category.sub_categories.map((sub_category) => (
                    <div
                      key={sub_category.slug}
                      className="text-[1.5rem] mb-4 flex flex-col gap-2"
                    >
                      <div className="text-black font-medium capitalize cursor-pointer">
                        {sub_category.name}
                      </div>
                      {sub_category.sub_categories && (
                        <ul className="flex flex-col gap-1">
                          {sub_category.sub_categories.map((sub_category_2) => (
                            <Link
                              key={sub_category_2.slug}
                              to={`/${category.slug}/${sub_category.slug}/${sub_category_2.slug}`}
                              className="text-gray-500 hover:text-gray-800 capitalize cursor-pointer"
                            >
                              {sub_category_2.name}
                            </Link>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
