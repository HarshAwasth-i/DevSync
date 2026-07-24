import PageHeader from "../components/ui/PageHeader";
import Loader from "../components/ui/Loader";
import Button from "../components/ui/Button";

import DashboardStats from "../components/dashboard/DashboardStats";
import TaskStatusChart from "../components/dashboard/TaskStatusChart";
import ProjectProgressChart from "../components/dashboard/ProjectProgressChart";
import UpcomingDeadlines from "../components/dashboard/UpcomingDeadlines";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import RecentProjects from "../components/dashboard/RecentProjects";
import QuickActions from "../components/dashboard/QuickActions";

import useDashboard from "../hooks/useDashboard";

export default function Dashboard() {
  const {
    stats,
    projects,
    tasks,
    loading,
  } = useDashboard();

  if (loading) return <Loader type="spinner" />;

  return (
    <div className="space-y-8">
      <PageHeader
        title="Welcome Back 👋"
        subtitle="Manage your projects and stay productive."
        action={<Button>+ New Project</Button>}
      />

      {/* Statistics */}
      <DashboardStats stats={stats} />

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <TaskStatusChart tasks={tasks} />
        <ProjectProgressChart tasks={tasks} />
      </div>

      {/* Widgets */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        <div className="xl:col-span-2">
          <RecentProjects projects={projects} />
        </div>

        <QuickActions />

      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <UpcomingDeadlines tasks={tasks} />

        <ActivityFeed />

      </div>
    </div>
  );
}