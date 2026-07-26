import ActivityFeed from "../dashboard/ActivityFeed";

export default function RecentActivity() {
  return (
    <ActivityFeed
      compact
      limit={5}
    />
  );
}