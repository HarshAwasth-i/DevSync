import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-10">
        DevSync
      </h2>

      <nav className="flex flex-col gap-4">
        <Link to="/dashboard">Dashboard</Link>

        <Link to="/projects">Projects</Link>

        <Link to="/tasks">Tasks</Link>

        <Link to="/teams">Teams</Link>
      </nav>
    </aside>
  );
}