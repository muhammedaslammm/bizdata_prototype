const ProductlistSidebar = ({ sidebar_content }) => {
  console.log("sidebar_content:", sidebar_content);

  return (
    <div className="w-[20%] bg-white p-6 rounded-[.4rem]">
      {sidebar_content.map((content) => {
        if (content.data) {
          return (
            <div className="flex flex-col gap-[.5rem]">
              <h3 className="text-[1.5rem] capitalize font-medium text-gray-900">
                {content.head}
              </h3>
              <ul className="flex flex-col">
                {content.data.map((d) => (
                  <div className="flex gap-4 items-center">
                    <input type="checkbox" name="" id="" />
                    <li className="text-[1.5rem] text-gray-500 font-medium py-[.3rem] cursor-pointer">
                      {d.name}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ProductlistSidebar;
