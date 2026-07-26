import { useAuth } from "../context/AuthContext";

import ProfileCard from "../components/profile/ProfileCard";
import ProfileStats from "../components/profile/ProfileStats";
import RecentActivity from "../components/profile/RecentActivity";

import useDashboardStats from "../hooks/useDashboardStats";

export default function Profile() {
  const { user } = useAuth();

  const { stats, loading } =
    useDashboardStats();

  if (loading) {
    return (
      <div className="text-center py-20">
        Loading Profile...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div className="border-b border-slate-200 dark:border-slate-700 pb-6">
        <h1 className="text-3xl font-bold dark:text-white">
          My Profile
        </h1>

        <p className="text-slate-500 mt-2">
          Manage your DevSync account.
        </p>
      </div>

      <ProfileCard user={user} />

      <ProfileStats
        stats={{
          projects: stats.totalProjects,
          tasks:
            stats.completedTasks +
            stats.pendingTasks,
          teams: stats.teamMembers,
        }}
      />

      <div>
        <h2 className="text-xl font-semibold mb-4 dark:text-white">
          Recent Activity
        </h2>

        <RecentActivity />
      </div>

    </div>
  );
}