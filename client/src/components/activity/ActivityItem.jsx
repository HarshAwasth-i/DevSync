import {
  FaCheckCircle,
  FaFolderOpen,
  FaUsers,
} from "react-icons/fa";

export default function ActivityItem({ activity, isLast }) {
  const getConfig = () => {
    switch (activity.type) {
      case "project":
        return {
          icon: <FaFolderOpen />,
          badge: "PROJECT",
          iconBg: "bg-blue-100 dark:bg-blue-900/30",
          iconColor: "text-blue-600 dark:text-blue-400",
          badgeColor:
            "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
        };

      case "task":
        return {
          icon: <FaCheckCircle />,
          badge: "TASK",
          iconBg: "bg-green-100 dark:bg-green-900/30",
          iconColor: "text-green-600 dark:text-green-400",
          badgeColor:
            "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
        };

      case "team":
        return {
          icon: <FaUsers />,
          badge: "TEAM",
          iconBg: "bg-purple-100 dark:bg-purple-900/30",
          iconColor: "text-purple-600 dark:text-purple-400",
          badgeColor:
            "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
        };

      default:
        return {
          icon: <FaFolderOpen />,
          badge: "OTHER",
          iconBg: "bg-slate-100 dark:bg-slate-800",
          iconColor: "text-slate-600 dark:text-slate-300",
          badgeColor:
            "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
        };
    }
  };

  const config = getConfig();

  const formatTime = () => {
    const created = new Date(activity.created_at);

    return created.toLocaleString([], {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="relative flex gap-5">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div
          className={`
            h-12
            w-12
            rounded-full
            flex
            items-center
            justify-center
            shadow-md
            ${config.iconBg}
            ${config.iconColor}
          `}
        >
          {config.icon}
        </div>

        {!isLast && (
          <div className="w-0.5 flex-1 bg-slate-200 dark:bg-slate-700 mt-2" />
        )}
      </div>

      {/* Card */}
      <div
        className="
          flex-1
          mb-6
          rounded-xl
          border
          border-slate-200
          dark:border-slate-700
          bg-white
          dark:bg-slate-900
          p-5
          shadow-sm
          hover:shadow-lg
          hover:-translate-y-1
          transition-all
          duration-300
        "
      >
        <div className="flex items-center justify-between flex-wrap gap-3">
          <span
            className={`
              px-3
              py-1
              rounded-full
              text-xs
              font-semibold
              tracking-wide
              ${config.badgeColor}
            `}
          >
            {config.badge}
          </span>

          <span className="text-sm text-slate-500 dark:text-slate-400">
            {formatTime()}
          </span>
        </div>

        <p className="mt-4 text-slate-800 dark:text-white font-medium leading-7">
          {activity.message}
        </p>
      </div>
    </div>
  );
}