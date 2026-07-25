import { useState } from "react";
import {
  FaBell,
  FaCheckCircle,
  FaFolderOpen,
  FaUsers,
} from "react-icons/fa";

import useActivities from "../../hooks/useActivities";

export default function NotificationDropdown() {
  const [open, setOpen] = useState(false);

  const { activities } = useActivities();

  const getIcon = (type) => {
    switch (type) {
      case "project":
        return <FaFolderOpen className="text-blue-600" />;

      case "task":
        return <FaCheckCircle className="text-green-600" />;

      case "team":
        return <FaUsers className="text-purple-600" />;

      default:
        return <FaBell className="text-slate-500" />;
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
      return `${Math.floor(diff / 3600)} hr ago`;

    if (diff < 172800) return "Yesterday";

    return activityTime.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="
          relative
          text-slate-600
          hover:text-blue-600
          transition-all
          duration-200
        "
      >
        <FaBell size={22} />

        {activities.length > 0 && (
          <span
            className="
              absolute
              -top-2
              -right-2
              bg-red-500
              text-white
              rounded-full
              text-xs
              font-semibold
              h-5
              w-5
              flex
              items-center
              justify-center
              shadow
            "
          >
            {activities.length > 9 ? "9+" : activities.length}
          </span>
        )}
      </button>

      {open && (
        <div
          className="
            absolute
            right-0
            mt-4
            w-96
            bg-white
            rounded-2xl
            shadow-2xl
            border
            z-50
            overflow-hidden
          "
        >
          <div className="p-4 border-b bg-slate-50">
            <h2 className="text-lg font-bold text-slate-800">
              Notifications
            </h2>

            <p className="text-sm text-slate-500">
              Recent Activity
            </p>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {activities.length === 0 ? (
              <div className="p-8 text-center">
                <FaBell className="mx-auto text-4xl text-slate-300" />

                <p className="mt-4 text-slate-500">
                  No notifications yet
                </p>
              </div>
            ) : (
              activities.slice(0, 8).map((activity) => (
                <div
                  key={activity.id}
                  className="
                    flex
                    gap-4
                    p-4
                    border-b
                    hover:bg-blue-50
                    transition-all
                    duration-200
                    cursor-pointer
                  "
                >
                  <div
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-slate-100
                      flex
                      items-center
                      justify-center
                    "
                  >
                    {getIcon(activity.type)}
                  </div>

                  <div className="flex-1">
                    <p className="font-medium text-slate-700">
                      {activity.message}
                    </p>

                    <p className="text-xs text-slate-400 mt-1">
                      {formatTime(activity.created_at)}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-3 border-t bg-slate-50 text-center">
            <button
              className="
                text-blue-600
                hover:text-blue-700
                hover:underline
                font-medium
                text-sm
              "
            >
              View All Activities
            </button>
          </div>
        </div>
      )}
    </div>
  );
}