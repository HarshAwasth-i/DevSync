import ActivityItem from "./ActivityItem";

export default function ActivityGroup({ title, activities }) {
  return (
    <section>
      <h2 className="mb-8 text-xl font-bold text-slate-800 dark:text-white">
        {title}
      </h2>

      {activities.map((activity, index) => (
        <ActivityItem
          key={activity.id}
          activity={activity}
          isLast={index === activities.length - 1}
        />
      ))}
    </section>
  );
}