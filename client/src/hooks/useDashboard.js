import { useEffect, useState } from "react";
import api from "../services/api";

export default function useDashboard() {
  const [stats, setStats] = useState(null);
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const [statsRes, projectsRes, tasksRes] =
        await Promise.all([
          api.get("/dashboard/stats"),
          api.get("/projects"),
          api.get("/tasks"),
        ]);

      setStats(statsRes.data);
      setProjects(projectsRes.data);
      setTasks(tasksRes.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return {
    stats,
    projects,
    tasks,
    loading,
  };
}