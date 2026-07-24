import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

export default function EditTask() {
  const { id } = useParams();
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
    fetchTask();
    fetchProjects();
    fetchUsers();
  }, []);

  const fetchTask = async () => {
    const res = await api.get(`/tasks/${id}`);
    setTask(res.data);
  };

  const fetchProjects = async () => {
    const res = await api.get("/projects");
    setProjects(res.data);
  };

  const fetchUsers = async () => {
    const res = await api.get("/auth/users");
    setUsers(res.data);
  };

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.put(`/tasks/${id}`, task);

    alert("Task Updated Successfully!");

    navigate("/tasks");
  };

  return (
    <div className="max-w-3xl bg-white p-6 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6">
        Edit Task
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <textarea
          rows="5"
          name="description"
          value={task.description}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
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
          value={task.due_date?.split("T")[0] || ""}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <select
          name="project_id"
          value={task.project_id}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        >
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>

        <select
          name="assigned_to"
          value={task.assigned_to}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        >
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Update Task
        </button>

      </form>
    </div>
  );
}