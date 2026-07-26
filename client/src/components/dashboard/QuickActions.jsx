import {
  FaArrowRight,
  FaFolderPlus,
  FaTasks,
  FaUsers,
  FaColumns,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import Card from "../ui/Card";

export default function QuickActions() {
  const actions = [
    {
      title: "Projects",
      description: "Create and manage projects",
      icon: <FaFolderPlus className="text-2xl text-blue-500" />,
      link: "/projects",
    },
    {
      title: "Tasks",
      description: "Track daily work",
      icon: <FaTasks className="text-2xl text-green-500" />,
      link: "/tasks",
    },
    {
      title: "Teams",
      description: "Manage team members",
      icon: <FaUsers className="text-2xl text-purple-500" />,
      link: "/teams",
    },
    {
      title: "Kanban",
      description: "Visualize workflow",
      icon: <FaColumns className="text-2xl text-orange-500" />,
      link: "/kanban",
    },
  ];

  return (
    <Card>
      <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
        Quick Actions
      </h2>

      <div className="grid gap-4">
        {actions.map((action) => (
          <Link
            key={action.title}
            to={action.link}
            className="
              group
              flex
              items-center
              justify-between

              rounded-2xl
              border
              border-slate-200
              dark:border-slate-700

              p-4

              hover:border-blue-500
              hover:shadow-lg

              transition-all
              duration-300
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  h-12
                  w-12
                  rounded-xl
                  bg-slate-100
                  dark:bg-slate-800

                  flex
                  items-center
                  justify-center
                "
              >
                {action.icon}
              </div>

              <div>
                <h3 className="font-semibold text-slate-800 dark:text-white">
                  {action.title}
                </h3>

                <p className="text-sm text-slate-500">
                  {action.description}
                </p>
              </div>
            </div>

            <FaArrowRight
              className="
                text-slate-400
                group-hover:text-blue-500
                group-hover:translate-x-1
                transition
              "
            />
          </Link>
        ))}
      </div>
    </Card>
  );
}