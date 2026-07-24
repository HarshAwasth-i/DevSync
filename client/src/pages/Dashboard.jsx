import { useEffect, useState } from "react";
import {
  FaFolderOpen,
  FaCheckCircle,
  FaClock,
  FaUsers,
} from "react-icons/fa";

import api from "../services/api";

import Card from "../components/ui/Card";
import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";
import Loader from "../components/ui/Loader";
import ActivityCard from "../components/ui/ActivityCard";

export default function Dashboard() {
  const [stats, setStats] = useState({
    projects: 0,
    completedTasks: 0,
    pendingTasks: 0,
    teamMembers: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await api.get("/dashboard/stats");
      setStats(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Track your projects and team progress"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Projects"
          value={stats.projects}
          icon={<FaFolderOpen size={26} />}
          color="blue"
        />

        <StatCard
          title="Completed Tasks"
          value={stats.completedTasks}
          icon={<FaCheckCircle size={26} />}
          color="green"
        />

        <StatCard
          title="Pending Tasks"
          value={stats.pendingTasks}
          icon={<FaClock size={26} />}
          color="yellow"
        />

        <StatCard
          title="Team Members"
          value={stats.teamMembers}
          icon={<FaUsers size={26} />}
          color="red"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-xl font-bold mb-5">
            Recent Activity
          </h2>

          <ActivityCard
            title="Project Created"
            subtitle="Website Redesign"
            time="2 hours ago"
          />

          <ActivityCard
            title="Task Completed"
            subtitle="Login Module"
            time="5 hours ago"
          />

          <ActivityCard
            title="New Member Added"
            subtitle="John Doe"
            time="Yesterday"
          />
        </Card>

        <Card>
          <h2 className="text-xl font-bold mb-5">
            Upcoming Tasks
          </h2>

          <ActivityCard
            title="Finish Dashboard UI"
            subtitle="Priority: High"
            time="Today"
          />

          <ActivityCard
            title="Deploy Backend"
            subtitle="Priority: Medium"
            time="Tomorrow"
          />

          <ActivityCard
            title="Prepare Demo"
            subtitle="Priority: Low"
            time="Friday"
          />
        </Card>
      </div>
    </>
  );
}