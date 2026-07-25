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
      name:"Dashboard",
      path:"/dashboard",
      icon:<FaHome />,
    },

    {
      name:"Projects",
      path:"/projects",
      icon:<FaFolderOpen />,
    },

    {
      name:"Tasks",
      path:"/tasks",
      icon:<FaTasks />,
    },

    {
      name:"Kanban",
      path:"/kanban",
      icon:<FaColumns />,
    },

    {
      name:"Teams",
      path:"/teams",
      icon:<FaUsers />,
    },
  ];


  return (

    <aside
      className="
      w-64
      min-h-screen

      bg-white
      dark:bg-slate-950

      border-r
      border-slate-200
      dark:border-slate-800

      flex
      flex-col

      transition-all
      duration-300
      "
    >


      {/* BRAND */}

      <div
        className="
        p-6

        border-b
        border-slate-200
        dark:border-slate-800
        "
      >

        <h1
          className="
          text-3xl
          font-extrabold

          bg-gradient-to-r
          from-blue-500
          to-purple-600

          bg-clip-text
          text-transparent
          "
        >
          DevSync
        </h1>


        <p
          className="
          text-sm
          mt-2

          text-slate-500
          dark:text-slate-400
          "
        >
          Project Management
        </p>


      </div>



      {/* MENU */}

      <nav className="flex-1 p-4">


        {menuItems.map((item)=>(

          <NavLink

          key={item.name}

          to={item.path}


          className={({isActive})=>

          `
          group

          flex
          items-center
          gap-3

          px-4
          py-3

          mb-2

          rounded-xl

          font-medium

          transition-all
          duration-300


          ${
            isActive

            ?

            `
            bg-blue-600
            text-white
            shadow-lg
            shadow-blue-500/30

            translate-x-1
            `

            :

            `
            text-slate-600
            dark:text-slate-300

            hover:bg-slate-100
            dark:hover:bg-slate-800

            hover:text-blue-600
            dark:hover:text-white
            `
          }

          `
          }


          >

          <span
            className="
            text-lg

            transition-transform
            duration-300

            group-hover:scale-110
            "
          >
            {item.icon}
          </span>


          <span>
            {item.name}
          </span>


          </NavLink>


        ))}


      </nav>




      {/* FOOTER */}

      <div
        className="
        p-5

        border-t
        border-slate-200
        dark:border-slate-800
        "
      >

        <div
          className="
          text-xs

          text-slate-400
          dark:text-slate-500
          "
        >
          DevSync
        </div>


        <p
          className="
          text-sm
          font-medium

          text-slate-600
          dark:text-slate-300
          mt-1
          "
        >
          Version 1.0
        </p>


      </div>


    </aside>

  );
}