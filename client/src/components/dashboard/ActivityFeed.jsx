import { FaCheckCircle, FaFolderOpen, FaUsers } from "react-icons/fa";
import Card from "../ui/Card";

export default function ActivityFeed() {
  const activities = [
    {
      id: 1,
      icon: <FaFolderOpen className="text-blue-600" />,
      title: "API Management project created",
      time: "2 hours ago",
    },
    {
      id: 2,
      icon: <FaCheckCircle className="text-green-600" />,
      title: "Login module completed",
      time: "5 hours ago",
    },
    {
      id: 3,
      icon: <FaUsers className="text-purple-600" />,
      title: "Rahul joined the team",
      time: "Yesterday",
    },
  ];

  return (
    <Card>
      <h2 className="text-xl font-bold text-slate-800 mb-5">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center">
              {activity.icon}
            </div>

            <div className="flex-1">
              <p className="font-medium text-slate-700">
                {activity.title}
              </p>

              <p className="text-sm text-slate-400 mt-1">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}