import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

import {
  FaSignOutAlt,
  FaMoon,
  FaSun,
  FaBars,
} from "react-icons/fa";

import NotificationDropdown from "./NotificationDropdown";


export default function Navbar({
  toggleSidebar
}) {


  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const {
    darkMode,
    toggleTheme
  } = useTheme();



  const handleLogout = () => {

    logout();

    navigate("/login");

  };



  const initials = user?.name
    ?.split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase();



  return (

    <header

      className="
        h-16

        bg-white
        dark:bg-slate-950

        border-b
        border-slate-200
        dark:border-slate-800

        shadow-sm

        flex
        items-center
        justify-between

        px-4
        md:px-8

        transition-all
        duration-300
      "

    >



      {/* Left Section */}

      <div
        className="
          flex
          items-center
          gap-4
        "
      >



        {/* Mobile Menu Button */}

        <button

          onClick={toggleSidebar}

          className="
            lg:hidden

            text-slate-700
            dark:text-white

            text-xl

            hover:text-blue-600

            transition
          "

        >

          <FaBars />

        </button>





        <div>

          <h1

            className="
              text-xl
              md:text-2xl

              font-bold

              text-slate-800
              dark:text-white
            "

          >

            Welcome back 👋

          </h1>



          <p

            className="
              hidden
              sm:block

              text-sm

              text-slate-500
              dark:text-slate-400
            "

          >

            Manage your projects efficiently

          </p>


        </div>


      </div>






      {/* Right Section */}


      <div

        className="
          flex
          items-center

          gap-3
          md:gap-5
        "

      >




        {/* Notifications */}

        <NotificationDropdown />






        {/* Theme Button */}

        <button

          onClick={toggleTheme}

          className="
            w-10
            h-10

            rounded-xl

            flex
            items-center
            justify-center


            bg-slate-100
            dark:bg-slate-800


            text-slate-600
            dark:text-yellow-400


            hover:scale-105

            transition
          "

        >

          {
            darkMode
            ?
            <FaSun />
            :
            <FaMoon />
          }


        </button>







        {/* User */}

        <div

          className="
            hidden
            sm:flex

            items-center
            gap-3
          "

        >


          <div

            className="
              w-10
              h-10

              rounded-full

              bg-blue-600

              text-white

              flex
              items-center
              justify-center

              font-bold
            "

          >

            {initials || "U"}

          </div>



          <div>

            <p

              className="
                font-semibold

                text-slate-800
                dark:text-white
              "

            >

              {user?.name || "User"}

            </p>



            <p

              className="
                text-xs

                text-slate-500
                dark:text-slate-400
              "

            >

              Developer

            </p>


          </div>


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

            px-3
            md:px-4

            py-2

            rounded-xl

            transition-all

            hover:shadow-lg
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