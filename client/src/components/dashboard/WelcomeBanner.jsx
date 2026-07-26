import {
  FaFolderPlus,
  FaPlus,
  FaFolderOpen,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import Card from "../ui/Card";
import Button from "../ui/Button";

export default function WelcomeBanner({ stats }) {
  const navigate = useNavigate();

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        {/* Left */}
        <div className="flex-1">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {today}
          </p>

          <h1 className="mt-2 text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white">
            Welcome back 👋
          </h1>

          <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-2xl">
            You currently have{" "}
            <span className="font-semibold text-slate-700 dark:text-white">
              {stats.projects}
            </span>{" "}
            active projects,
            <span className="font-semibold text-yellow-600">
              {" "}
              {stats.pendingTasks} pending tasks
            </span>
            , and
            <span className="font-semibold text-green-600">
              {" "}
              {stats.completedTasks} completed tasks
            </span>
            .
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <FaFolderOpen />
              <span>{stats.projects} Projects</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">
              <FaClock />
              <span>{stats.pendingTasks} Pending</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
              <FaCheckCircle />
              <span>{stats.completedTasks} Completed</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Button onClick={() => navigate("/projects")}>
            <FaFolderPlus />
            <span className="ml-2">New Project</span>
          </Button>

          <Button
            variant="secondary"
            onClick={() => navigate("/tasks")}
          >
            <FaPlus />
            <span className="ml-2">New Task</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}