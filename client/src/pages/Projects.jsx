import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import api from "../services/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    const filtered = projects.filter((project) =>
      project.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProjects(filtered);
  }, [search, projects]);

  const fetchProjects = async () => {
    try {
      const res = await api.get("/projects");
      setProjects(res.data);
      setFilteredProjects(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/projects/${id}`);

      const updatedProjects = projects.filter(
        (project) => project.id !== id
      );

      setProjects(updatedProjects);
      setFilteredProjects(updatedProjects);

      alert("Project deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to delete project");
    }
  };

  if (loading) {
    return (
      <h2 className="text-2xl font-semibold">
        Loading Projects...
      </h2>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">
            Projects
          </h1>

          <p className="text-gray-500">
            Manage all your projects
          </p>
        </div>

        <Link
          to="/projects/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition"
        >
          + New Project
        </Link>
      </div>

      <input
        type="text"
        placeholder="🔍 Search Projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>

            <tr className="bg-gray-100">

              <th className="text-left p-4">Project</th>

              <th className="text-left p-4">Status</th>

              <th className="text-left p-4">Created By</th>

              <th className="text-left p-4">Created At</th>

              <th className="text-center p-4">Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredProjects.length === 0 ? (
              <tr>

                <td
                  colSpan="5"
                  className="text-center py-10 text-gray-500"
                >
                  No Projects Found
                </td>

              </tr>
            ) : (
              filteredProjects.map((project) => (

                <tr
                  key={project.id}
                  className="border-b hover:bg-gray-50 transition"
                >

                  <td className="p-4 font-medium">
                    {project.name}
                  </td>

                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold
                        ${
                          project.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : project.status === "Completed"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                    >
                      {project.status}
                    </span>

                  </td>

                  <td className="p-4">
                    {project.createdBy}
                  </td>

                  <td className="p-4">
                    {new Date(
                      project.created_at
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-4">

                    <div className="flex justify-center gap-5">

                    <Link
  to={`/projects/edit/${project.id}`}
  className="text-blue-600 hover:text-blue-800"
>
  <FaEdit size={18} />
</Link>

                      <button
                        onClick={() =>
                          handleDelete(project.id)
                        }
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash size={18} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}