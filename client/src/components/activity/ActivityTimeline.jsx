import Card from "../ui/Card";
import useActivities from "../../hooks/useActivities";
import ActivityGroup from "./ActivityGroup";

export default function ActivityTimeline() {
  const { activities, loading } = useActivities();

  if (loading) {
    return (
      <Card>
        <div className="py-12 text-center text-slate-500 dark:text-slate-400">
          Loading activity...
        </div>
      </Card>
    );
  }

  const groupedActivities = {};

  activities.forEach((activity) => {
    const date = new Date(activity.created_at);

    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    let key;

    if (date.toDateString() === today.toDateString()) {
      key = "Today";
    } else if (date.toDateString() === yesterday.toDateString()) {
      key = "Yesterday";
    } else {
      key = date.toLocaleDateString([], {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    }

    if (!groupedActivities[key]) {
      groupedActivities[key] = [];
    }

    groupedActivities[key].push(activity);
  });

  return (
    <Card>
      <div className="space-y-12">
        {Object.keys(groupedActivities).length === 0 ? (
          <div className="py-16 text-center">
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200">
              No Activity Yet
            </h3>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Start creating projects and tasks to see your workspace history.
            </p>
          </div>
        ) : (
          Object.entries(groupedActivities).map(([title, items]) => (
            <ActivityGroup
              key={title}
              title={title}
              activities={items}
            />
          ))
        )}
      </div>
    </Card>
  );
}