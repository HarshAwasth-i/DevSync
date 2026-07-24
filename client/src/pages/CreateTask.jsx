import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

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
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await api.get("/auth/users");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
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

      alert("Task created successfully!");

      navigate("/tasks");
    } catch (err) {
      console.error(err);
      alert("Failed to create task");
    }
  };

  return (
    <div className="max-w-3xl bg-white p-6 rounded-xl shadow">

      <h1 className="text-3xl font-bold mb-6">
        Create Task
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={task.title}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={task.description}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
          rows="5"
        />

        <select
          name="priority"
          value={task.priority}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <input
          type="date"
          name="due_date"
          value={task.due_date}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <select
          name="project_id"
          value={task.project_id}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
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

        <select
          name="assigned_to"
          value={task.assigned_to}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
          required
        >
          <option value="">Assign User</option>

          {users.map((user) => (
            <option
              key={user.id}
              value={user.id}
            >
              {user.name}
            </option>
          ))}
        </select>

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Create Task
        </button>

      </form>

    </div>
  );
}