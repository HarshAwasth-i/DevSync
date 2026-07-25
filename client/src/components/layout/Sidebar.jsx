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
    <aside
      className="
        w-64
        bg-white
        dark:bg-slate-900
        border-r
        border-slate-200
        dark:border-slate-700
        flex
        flex-col
        transition-colors
        duration-300
      "
    >
      {/* Logo */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <h1 className="text-3xl font-bold text-blue-600">
          DevSync
        </h1>

        <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
          Project Management
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-xl
              mb-2
              font-medium
              transition-all
              duration-200

              ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-white"
              }
            `
            }
          >
            <span className="text-lg">
              {item.icon}
            </span>

            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-5 border-t border-slate-200 dark:border-slate-700">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          DevSync v1.0
        </p>
      </div>
    </aside>
  );
}