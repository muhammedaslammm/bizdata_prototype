import { Link } from "react-router-dom";

const Sidebar = ({ content }) => {
  return (
    <div className="admin__sidebar fixed bottom-0 w-full sm:static sm:border-t sm:border-neutral-600 bg-neutral-900">
      <ul className="flex gap-8 w-[90%] mx-auto">
        {content.map((c) => (
          <Link
            className="text-white text-[1.6rem] sm:text-[1.7rem] font-medium py-4"
            to={`/admin/${c.slug}`}
          >
            {c.sub_title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
