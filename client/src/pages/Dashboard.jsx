import PageHeader from "../components/ui/PageHeader";
import Loader from "../components/ui/Loader";

import DashboardStats from "../components/dashboard/DashboardStats";
import TaskStatusChart from "../components/dashboard/TaskStatusChart";
import ProjectProgressChart from "../components/dashboard/ProjectProgressChart";
import UpcomingDeadlines from "../components/dashboard/UpcomingDeadlines";

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
        title="Dashboard"
        subtitle="Track your projects, tasks and productivity"
      />

      {/* Statistics */}
      <DashboardStats
    stats={stats}
/>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <TaskStatusChart tasks={tasks} />

        <ProjectProgressChart tasks={tasks} />
      </div>

      {/* Upcoming Deadlines */}
      <UpcomingDeadlines tasks={tasks} />
    </div>
  );
}