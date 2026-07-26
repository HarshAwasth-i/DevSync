import ActivityTimeline from "../components/activity/ActivityTimeline";

export default function Activity() {
  return (
    <div className="space-y-8">
      <div className="border-b border-slate-200 dark:border-slate-700 pb-6">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
          Activity Timeline
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Track every action performed across your workspace.
        </p>
      </div>

      <ActivityTimeline />
    </div>
  );
}