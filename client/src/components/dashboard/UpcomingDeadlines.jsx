import {
  FaCalendarAlt,
  FaExclamationCircle,
  FaCheckCircle,
} from "react-icons/fa";

import Card from "../ui/Card";

export default function UpcomingDeadlines({ tasks }) {
  const upcoming = [...tasks]
    .filter((task) => task.due_date)
    .sort(
      (a, b) =>
        new Date(a.due_date) - new Date(b.due_date)
    )
    .slice(0, 5);

  const getStatus = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const due = new Date(date);
    due.setHours(0, 0, 0, 0);

    const diff =
      (due - today) / (1000 * 60 * 60 * 24);

    if (diff < 0) {
      return {
        text: "Overdue",
        icon: (
          <FaExclamationCircle className="text-red-500" />
        ),
        badge:
          "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
      };
    }

    if (diff === 0) {
      return {
        text: "Today",
        icon: (
          <FaCalendarAlt className="text-yellow-500" />
        ),
        badge:
          "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
      };
    }

    return {
      text: "Upcoming",
      icon: (
        <FaCheckCircle className="text-green-500" />
      ),
      badge:
        "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    };
  };

  return (
    <Card>
      <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
        Upcoming Deadlines
      </h2>

      {upcoming.length === 0 ? (
        <div className="py-10 text-center text-slate-500">
          🎉 No upcoming deadlines.
        </div>
      ) : (
        <div className="space-y-4">
          {upcoming.map((task) => {
            const status = getStatus(task.due_date);

            return (
              <div
                key={task.id}
                className="
                  flex
                  items-center
                  justify-between

                  rounded-xl

                  border
                  border-slate-200
                  dark:border-slate-700

                  p-4

                  hover:shadow-md
                  transition
                "
              >
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-white">
                    {task.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {task.projectName}
                  </p>
                </div>

                <div className="text-right">
                  <div
                    className={`
                      inline-flex
                      items-center
                      gap-2

                      px-3
                      py-1

                      rounded-full
                      text-sm
                      font-medium

                      ${status.badge}
                    `}
                  >
                    {status.icon}
                    {status.text}
                  </div>

                  <p className="mt-2 text-sm text-slate-500">
                    {new Date(
                      task.due_date
                    ).toLocaleDateString()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}