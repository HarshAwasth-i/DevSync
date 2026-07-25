import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function MainLayout() {
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
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <main
          className="
            flex-1
            overflow-y-auto
            p-8
            bg-slate-100
            dark:bg-slate-950
            transition-colors
            duration-300
          "
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}