import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";
import { notify } from "../utils/toast";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import PageHeader from "../components/ui/PageHeader";

export default function CreateTask() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);

  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "Pending",
    due_date: "",
    project_id: "",
    assigned_to: "",
  });

  useEffect(() => {
    fetchProjects();
    fetchUsers();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await api.get("/projects");
      setProjects(res.data);
    } catch (err) {
      console.error(err);
      notify.error("Failed to load projects.");
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await api.get("/auth/users");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
      notify.error("Failed to load users.");
    }
  };

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/tasks", task);

      notify.success("Task created successfully!");

      navigate("/tasks");
    } catch (err) {
      console.error(err);
      notify.error("Failed to create task.");
    }
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <PageHeader
        title="Create Task"
        subtitle="Add a new task to your project"
      />

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Title */}
        <div>
          <label className="block font-medium mb-2">
            Task Title
          </label>

          <input
            type="text"
            name="title"
            placeholder="Enter task title"
            value={task.title}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-2">
            Description
          </label>

          <textarea
            rows="5"
            name="description"
            placeholder="Enter task description"
            value={task.description}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Priority + Status */}
        <div className="grid md:grid-cols-2 gap-5">

          <div>
            <label className="block font-medium mb-2">
              Priority
            </label>

            <select
              name="priority"
              value={task.priority}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-xl p-3"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-2">
              Status
            </label>

            <select
              name="status"
              value={task.status}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-xl p-3"
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

        </div>

        {/* Due Date + Project */}
        <div className="grid md:grid-cols-2 gap-5">

          <div>
            <label className="block font-medium mb-2">
              Due Date
            </label>

            <input
              type="date"
              name="due_date"
              value={task.due_date}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Project
            </label>

            <select
              name="project_id"
              value={task.project_id}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-xl p-3"
              required
            >
              <option value="">Select Project</option>

              {projects.map((project) => (
                <option
                  key={project.id}
                  value={project.id}
                >
                  {project.name}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Assign User */}
        <div>
          <label className="block font-medium mb-2">
            Assign User
          </label>

          <select
            name="assigned_to"
            value={task.assigned_to}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-xl p-3"
            required
          >
            <option value="">Select User</option>

            {users.map((user) => (
              <option
                key={user.id}
                value={user.id}
              >
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end">
          <Button type="submit">
            Create Task
          </Button>
        </div>

      </form>
    </Card>
  );
}