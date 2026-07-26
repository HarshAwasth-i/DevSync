import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

import {
  FaSignOutAlt,
  FaMoon,
  FaSun,
  FaBars,
  FaSearch,
} from "react-icons/fa";

import NotificationDropdown from "./NotificationDropdown";

export default function Navbar({ toggleSidebar }) {
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const { darkMode, toggleTheme } = useTheme();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const initials =
    user?.name
      ?.split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase() || "U";

  return (
    <header
      className="
      h-16
      bg-white
      dark:bg-slate-950
      border-b
      border-slate-200
      dark:border-slate-800
      px-4
      lg:px-8
      flex
      items-center
      justify-between
      gap-6
    "
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-xl"
        >
          <FaBars />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
            D
          </div>

          <div>
            <h1 className="font-bold text-xl dark:text-white">
              DevSync
            </h1>

            <p className="hidden sm:block text-xs text-slate-500">
              Project Management Workspace
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="hidden lg:flex flex-1 max-w-md relative">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />

        <input
          type="text"
          placeholder="Search..."
          className="
          w-full
          pl-10
          pr-4
          py-2.5
          rounded-xl
          border
          border-slate-200
          dark:border-slate-700
          bg-slate-50
          dark:bg-slate-900
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <NotificationDropdown />

        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <Link
          to="/profile"
          className="
          hidden
          sm:flex
          items-center
          gap-3
          hover:bg-slate-100
          dark:hover:bg-slate-800
          px-2
          py-2
          rounded-xl
          transition
        "
        >
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            {initials}
          </div>

          <div>
            <p className="font-semibold dark:text-white">
              {user?.name}
            </p>

            <p className="text-xs text-slate-500">
              Software Developer
            </p>
          </div>
        </Link>

        <button
          onClick={handleLogout}
          className="
          flex
          items-center
          gap-2
          bg-red-500
          hover:bg-red-600
          text-white
          px-4
          py-2
          rounded-xl
        "
        >
          <FaSignOutAlt />

          <span className="hidden md:block">
            Logout
          </span>
        </button>
      </div>
    </header>
  );
}