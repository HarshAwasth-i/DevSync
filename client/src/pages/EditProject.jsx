import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

export default function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState({
    name: "",
    description: "",
    status: "Active",
  });

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    try {
      const res = await api.get(`/projects/${id}`);
      setProject(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load project");
    }
  };

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/projects/${id}`, {
        name: project.name,
        description: project.description,
        status: project.status,
      });

      alert("Project updated successfully!");
      navigate("/projects");
    } catch (err) {
      console.error(err);
      alert("Failed to update project");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow rounded-xl p-6">
      <h1 className="text-3xl font-bold mb-6">Edit Project</h1>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label className="block mb-2 font-semibold">
            Project Name
          </label>

          <input
            type="text"
            name="name"
            value={project.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Description
          </label>

          <textarea
            name="description"
            rows="5"
            value={project.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Status
          </label>

          <select
            name="status"
            value={project.status}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Active</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Update Project
        </button>

      </form>
    </div>
  );
}