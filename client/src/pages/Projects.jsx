import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import api from "../services/api";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import PageHeader from "../components/ui/PageHeader";
import SearchBar from "../components/ui/SearchBar";
import Table from "../components/ui/Table";
import Loader from "../components/ui/Loader";
import EmptyState from "../components/ui/EmptyState";
import ConfirmModal from "../components/ui/ConfirmModal";

export default function Projects() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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

  const handleDelete = async () => {
    if (!selectedProject) return;

    try {
      await api.delete(`/projects/${selectedProject}`);

      const updatedProjects = projects.filter(
        (project) => project.id !== selectedProject
      );

      setProjects(updatedProjects);
      setFilteredProjects(updatedProjects);

      setOpenModal(false);
      setSelectedProject(null);
    } catch (err) {
      console.error(err);
      alert("Failed to delete project");
    }
  };

  if (loading) return <Loader />;

  return (
    <Card>
      <PageHeader
        title="Projects"
        subtitle="Manage all your projects"
        action={
          <Button onClick={() => navigate("/projects/create")}>
            + New Project
          </Button>
        }
      />

      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Search Projects..."
      />

      <Table
        columns={[
          "Project",
          "Status",
          "Created By",
          "Created At",
          "Actions",
        ]}
      >
        {filteredProjects.length === 0 ? (
          <tr>
            <td colSpan="5">
              <EmptyState message="No Projects Found" />
            </td>
          </tr>
        ) : (
          filteredProjects.map((project) => (
            <tr
              key={project.id}
              className="border-b hover:bg-slate-50 transition"
            >
              <td className="p-4 font-medium">{project.name}</td>

              <td className="p-4">
                <Badge
                  text={project.status}
                  type={project.status.toLowerCase()}
                />
              </td>

              <td className="p-4">{project.createdBy}</td>

              <td className="p-4">
                {new Date(project.created_at).toLocaleDateString()}
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
                    onClick={() => {
                      setSelectedProject(project.id);
                      setOpenModal(true);
                    }}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))
        )}
      </Table>

      <ConfirmModal
        open={openModal}
        title="Delete Project"
        message="Are you sure you want to delete this project?"
        onCancel={() => {
          setOpenModal(false);
          setSelectedProject(null);
        }}
        onConfirm={handleDelete}
      />
    </Card>
  );
}