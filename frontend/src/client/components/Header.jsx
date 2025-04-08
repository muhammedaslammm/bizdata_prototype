import categories from "../../data/categories";

const Header = () => {
  return (
    <header className="bg-white">
      <header className=" flex justify-between items-center w-[90%] mx-auto py-[.8rem]">
        <div className="logo text-neutral-800 font-semibold text-[2.4rem] uppercase">
          prototype
        </div>
        <search>
          <input type="search" name="" id="" />
        </search>
        <nav>
          <ul className="options flex gap-[2.8rem] text-[1.65rem] font-medium text-neutral-800">
            <li className="capitalize cursor-pointer">cart</li>
            <li className="capitalize cursor-pointer">whishlist</li>
            <li className="capitalize cursor-pointer">profile</li>
            <li className="capitalize cursor-pointer">sign up</li>
          </ul>
        </nav>
      </header>
      <nav className="bg-neutral-700">
        <ul className="flex text-[1.3rem] w-[90%] mx-auto  text-white">
          {categories.map(function (category) {
            return (
              <li className="uppercase text-[1.55rem] py-[.58rem] px-4 cursor-pointer hover:bg-sky-700">
                {category.name}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
