export default function UpcomingDeadlines({ tasks }) {
  const upcoming = [...tasks]
    .filter((task) => task.due_date)
    .sort(
      (a, b) => new Date(a.due_date) - new Date(b.due_date)
    )
    .slice(0, 5);

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-lg font-bold mb-5">
        Upcoming Deadlines
      </h2>

      {upcoming.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No upcoming deadlines 🎉
        </div>
      ) : (
        <div className="space-y-4">
          {upcoming.map((task) => {
            const dueDate = new Date(task.due_date);
            const today = new Date();

            // Ignore time portion for accurate day difference
            dueDate.setHours(0, 0, 0, 0);
            today.setHours(0, 0, 0, 0);

            const diff = Math.ceil(
              (dueDate - today) / (1000 * 60 * 60 * 24)
            );

            let badgeClass = "";
            let badgeText = "";

            if (diff < 0) {
              badgeClass = "bg-red-100 text-red-700";
              badgeText = "Overdue";
            } else if (diff === 0) {
              badgeClass = "bg-orange-100 text-orange-700";
              badgeText = "Today";
            } else if (diff <= 2) {
              badgeClass = "bg-yellow-100 text-yellow-700";
              badgeText = `${diff} day${diff > 1 ? "s" : ""} left`;
            } else {
              badgeClass = "bg-green-100 text-green-700";
              badgeText = dueDate.toLocaleDateString();
            }

            return (
              <div
                key={task.id}
                className="flex items-center justify-between border-b last:border-none pb-3"
              >
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {task.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {task.projectName}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${badgeClass}`}
                >
                  {badgeText}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}