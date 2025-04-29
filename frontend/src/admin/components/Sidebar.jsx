import { Link } from "react-router-dom";
import sidebarContent from "../data/sidebarContent";

const Sidebar = () => {
  return (
    <div className="admin__sidebar fixed bottom-0 w-full bg-neutral-900">
      <ul className="flex gap-8 w-[90%] mx-auto">
        {sidebarContent.map((e) => (
          <Link
            className="text-white text-[1.6rem] font-medium py-4"
            to={`/admin/${e.slug}`}
          >
            {e.sub_title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
