import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Breadcrumbs from "../ui/Breadcrumbs";


export default function MainLayout() {

  const [sidebarOpen,setSidebarOpen] = useState(false);


  return (

    <div
      className="
      flex
      h-screen

      bg-slate-100
      dark:bg-slate-950

      transition-colors
      duration-300
      "
    >



      {/* Mobile Overlay */}

      {
        sidebarOpen && (

          <div

            onClick={()=>setSidebarOpen(false)}

            className="
            fixed
            inset-0

            bg-black/40

            z-30

            lg:hidden
            "

          />

        )
      }




      {/* Sidebar */}

      <div

        className={`
        
        fixed
        lg:static

        z-40

        h-full

        transition-transform
        duration-300


        ${
          sidebarOpen
          ?
          "translate-x-0"
          :
          "-translate-x-full lg:translate-x-0"
        }

        `}

      >

        <Sidebar />

      </div>






      {/* Main */}

      <div
        className="
        flex
        flex-col

        flex-1

        min-w-0
        "
      >



        <Navbar
          toggleSidebar={() =>
            setSidebarOpen(!sidebarOpen)
          }
        />




        <main

          className="
          flex-1

          overflow-y-auto

          p-4
          md:p-8

          bg-slate-100
          dark:bg-slate-950

          transition-colors
          duration-300
          "

        >
          <Breadcrumbs />

          <Outlet />

        </main>



      </div>



    </div>

  );

}