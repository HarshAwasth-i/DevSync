import { useEffect, useState } from "react";
import api from "../services/api";
import StatCard from "../components/dashboard/StatCard";

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

  if (loading) {
    return <h2 className="text-2xl">Loading Dashboard...</h2>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">
        <StatCard
          title="Projects"
          value={stats.projects}
          color="bg-blue-600"
        />

        <StatCard
          title="Completed"
          value={stats.completedTasks}
          color="bg-green-600"
        />

        <StatCard
          title="Pending"
          value={stats.pendingTasks}
          color="bg-yellow-500"
        />

        <StatCard
          title="Team"
          value={stats.teamMembers}
          color="bg-purple-600"
        />
      </div>
    </>
  );
}