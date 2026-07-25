import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

import {
  FaSignOutAlt,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import NotificationDropdown from "./NotificationDropdown";

export default function Navbar() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const { darkMode, toggleTheme } = useTheme();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header
      className="
        h-16
        bg-white
        dark:bg-slate-900
        border-b
        dark:border-slate-700
        shadow-sm
        flex
        items-center
        justify-between
        px-8
        transition-colors
        duration-300
      "
    >
      {/* Left Section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Welcome back 👋
        </h1>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Manage your projects efficiently
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <NotificationDropdown />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="
            p-2
            rounded-full
            text-gray-600
            dark:text-gray-300
            hover:bg-gray-100
            dark:hover:bg-slate-800
            hover:text-blue-600
            transition-all
            duration-200
          "
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>

        {/* User Info */}
        <div className="text-right">
          <p className="font-semibold text-gray-800 dark:text-white">
            {user?.name}
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Developer
          </p>
        </div>

        {/* Logout */}
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
            rounded-lg
            transition
          "
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </header>
  );
}