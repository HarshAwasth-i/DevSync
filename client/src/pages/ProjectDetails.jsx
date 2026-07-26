import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import api from "../services/api";

import Loader from "../components/ui/Loader";
import Button from "../components/ui/Button";

import ProjectOverview from "../components/projects/ProjectOverview";
import ProjectStatsCards from "../components/projects/ProjectStatsCards";
import ProjectTaskTable from "../components/projects/ProjectTaskTable";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProject();
  }, [id]);

  const fetchProject = async () => {
    try {
      const [projectRes, taskRes] = await Promise.all([
        api.get(`/projects/${id}`),
        api.get(`/projects/${id}/tasks`),
      ]);

      setProject(projectRes.data);
      setTasks(taskRes.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader type="spinner" />;
  }

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold dark:text-white">
          Project not found
        </h2>

        <Button
          className="mt-6"
          onClick={() => navigate("/projects")}
        >
          Back to Projects
        </Button>
      </div>
    );
  }

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completed / tasks.length) * 100);

  return (
    <div className="space-y-8">
      {/* Top Buttons */}
      <div className="flex justify-between items-center">
        <Button
          variant="secondary"
          onClick={() => navigate("/projects")}
        >
          ← Back
        </Button>

        <Button
          onClick={() =>
            navigate("/tasks/create")
          }
        >
          + Add Task
        </Button>
      </div>

      {/* Project Info */}
      <ProjectOverview project={project} />

      {/* Statistics */}
      <ProjectStatsCards tasks={tasks} />

      {/* Progress */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-6 transition-colors">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold dark:text-white">
            Project Progress
          </h2>

          <span className="font-bold text-blue-600">
            {progress}%
          </span>
        </div>

        <div className="w-full h-4 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      {/* Tasks */}
      <div>
        <h2 className="text-2xl font-bold mb-5 dark:text-white">
          Project Tasks
        </h2>

        <ProjectTaskTable tasks={tasks} />
      </div>
    </div>
  );
}