import { Outlet } from "react-router-dom";
const PageContent = ({ title }) => {
  return (
    <div className="page__content w-[90%] mx-auto">
      <h1 className="text-[1.6rem] sm:text-[1.7rem] font-medium py-3 capitalize">
        {title}
      </h1>
      <Outlet />
    </div>
  );
};

export default PageContent;
