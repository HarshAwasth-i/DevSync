import {
  FaArrowRight,
  FaFolderPlus,
  FaTasks,
  FaUsers,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import Card from "../ui/Card";

export default function QuickActions() {
  const actions = [
    {
      title: "Manage Projects",
      icon: <FaFolderPlus className="text-blue-600" />,
      link: "/projects",
    },
    {
      title: "Manage Tasks",
      icon: <FaTasks className="text-green-600" />,
      link: "/tasks",
    },
    {
      title: "Manage Team",
      icon: <FaUsers className="text-purple-600" />,
      link: "/teams",
    },
  ];

  return (
    <Card>
      <h2 className="text-xl font-bold text-slate-800 mb-5">
        Quick Actions
      </h2>

      <div className="space-y-3">
        {actions.map((action) => (
          <Link
            key={action.title}
            to={action.link}
            className="flex items-center justify-between rounded-xl p-4 hover:bg-slate-100 transition"
          >
            <div className="flex items-center gap-3">
              {action.icon}
              <span>{action.title}</span>
            </div>

            <FaArrowRight className="text-slate-400" />
          </Link>
        ))}
      </div>
    </Card>
  );
}