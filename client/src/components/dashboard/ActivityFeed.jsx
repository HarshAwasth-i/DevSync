import {
  FaCheckCircle,
  FaFolderOpen,
  FaUsers,
} from "react-icons/fa";

import Card from "../ui/Card";
import useActivities from "../../hooks/useActivities";

export default function ActivityFeed() {
  const { activities, loading } = useActivities();

  const getIcon = (type) => {
    switch (type) {
      case "project":
        return <FaFolderOpen className="text-blue-600" />;

      case "task":
        return <FaCheckCircle className="text-green-600" />;

      case "team":
        return <FaUsers className="text-purple-600" />;

      default:
        return <FaFolderOpen className="text-slate-600" />;
    }
  };

  const formatTime = (date) => {
    const now = new Date();
    const activityTime = new Date(date);

    const diff = Math.floor((now - activityTime) / 1000);

    if (diff < 60) return "Just now";

    if (diff < 3600)
      return `${Math.floor(diff / 60)} min ago`;

    if (diff < 86400)
      return `${Math.floor(diff / 3600)} hour${
        Math.floor(diff / 3600) > 1 ? "s" : ""
      } ago`;

    if (diff < 172800) return "Yesterday";

    return activityTime.toLocaleDateString();
  };

  if (loading) {
    return (
      <Card>
        <h2 className="text-xl font-bold text-slate-800 mb-5">
          Recent Activity
        </h2>

        <p className="text-gray-500">Loading activities...</p>
      </Card>
    );
  }

  return (
    <Card>
      <h2 className="text-xl font-bold text-slate-800 mb-5">
        Recent Activity
      </h2>

      {activities.length === 0 ? (
        <p className="text-gray-500">No recent activities</p>
      ) : (
        <div className="space-y-5">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center">
                {getIcon(activity.type)}
              </div>

              <div className="flex-1">
                <p className="font-medium text-slate-700">
                  {activity.message}
                </p>

                <p className="text-sm text-slate-400 mt-1">
                  {formatTime(activity.created_at)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}