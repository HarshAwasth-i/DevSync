import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function CreateProject() {
  const navigate = useNavigate();

  const [project, setProject] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = JSON.parse(localStorage.getItem("user"));

      await api.post("/projects", {
        ...project,
        created_by: user.id,
      });

      alert("Project Created Successfully!");

      navigate("/projects");
    } catch (err) {
      console.error(err);
      alert("Failed to create project");
    }
  };

  return (
    <div className="max-w-2xl bg-white p-8 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6">
        Create Project
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          className="w-full border p-3 rounded-lg mb-4"
          placeholder="Project Name"
          name="name"
          value={project.name}
          onChange={handleChange}
        />

        <textarea
          className="w-full border p-3 rounded-lg mb-4"
          rows="5"
          placeholder="Project Description"
          name="description"
          value={project.description}
          onChange={handleChange}
        />

        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Create Project
        </button>
      </form>
    </div>
  );
}