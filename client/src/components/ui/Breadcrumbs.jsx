import { Link, useLocation } from "react-router-dom";

const nameMap = {
  dashboard: "Dashboard",
  projects: "Projects",
  tasks: "Tasks",
  teams: "Teams",
  create: "Create",
};

export default function Breadcrumbs() {
  const location = useLocation();

  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="flex items-center flex-wrap gap-2 mb-2 text-sm">
      {paths.map((path, index) => {
        const url = "/" + paths.slice(0, index + 1).join("/");

        const isLast = index === paths.length - 1;

        const isId = !isNaN(path);

        const label = isId
          ? "Details"
          : nameMap[path] ||
            path.charAt(0).toUpperCase() + path.slice(1);

        return (
          <div key={url} className="flex items-center gap-2">
            {index !== 0 && (
              <span className="text-slate-400">/</span>
            )}

            {isLast ? (
              <span className="font-semibold text-slate-800 dark:text-white">
                {label}
              </span>
            ) : (
              <Link
                to={url}
                className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition"
              >
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}