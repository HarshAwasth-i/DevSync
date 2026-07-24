import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaBell, FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="h-16 bg-white shadow-sm border-b flex items-center justify-between px-8">

      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome back 👋
        </h1>

        <p className="text-sm text-gray-500">
          Manage your projects efficiently
        </p>
      </div>

      <div className="flex items-center gap-6">

        <button className="relative text-gray-600 hover:text-blue-600">

          <FaBell size={20} />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            3
          </span>

        </button>

        <div className="text-right">

          <p className="font-semibold">
            {user?.name}
          </p>

          <p className="text-sm text-gray-500">
            Developer
          </p>

        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </header>
  );
}