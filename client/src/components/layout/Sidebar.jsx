import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaFolderOpen,
  FaTasks,
  FaUsers,
  FaColumns,
} from "react-icons/fa";

export default function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <FaFolderOpen />,
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: <FaTasks />,
    },
    {
      name: "Kanban",
      path: "/kanban",
      icon: <FaColumns />,
    },
    {
      name: "Teams",
      path: "/teams",
      icon: <FaUsers />,
    },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col">

      <div className="p-6 border-b border-slate-700">
        <h1 className="text-3xl font-bold text-blue-400">
          DevSync
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          Project Management
        </p>
      </div>

      <nav className="flex-1 p-4">

        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all
              ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}

      </nav>

      <div className="p-5 border-t border-slate-700 text-gray-400 text-sm">
        DevSync v1.0
      </div>

    </aside>
  );
}