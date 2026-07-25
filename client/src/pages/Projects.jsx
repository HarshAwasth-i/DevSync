import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

import api from "../services/api";
import { notify } from "../utils/toast";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import PageHeader from "../components/ui/PageHeader";
import SearchBar from "../components/ui/SearchBar";
import Table from "../components/ui/Table";
import Loader from "../components/ui/Loader";
import EmptyState from "../components/ui/EmptyState";
import ConfirmModal from "../components/ui/ConfirmModal";

import ProjectStats from "../components/projects/ProjectStats";

export default function Projects() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

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
      notify.error("Failed to load projects.");
    } finally {
      setLoading(false);
    }
  };

const handleDelete = async () => {
  if (!selectedProject) return;

  try {
    setDeleteLoading(true);

    notify.info("Deleting project...");

    await api.delete(`/projects/${selectedProject}`);

    const updatedProjects = projects.filter(
      (project) => project.id !== selectedProject
    );

    setProjects(updatedProjects);
    setFilteredProjects(updatedProjects);

    notify.success("Project deleted successfully!");

    setOpenModal(false);
    setSelectedProject(null);
  } catch (err) {
    console.error(err);

    notify.error(
      err.response?.data?.message ||
      "Failed to delete project."
    );
  } finally {
    setDeleteLoading(false);
  }
};

  if (loading) return <Loader type="skeleton" rows={6} />;

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

    <div className="mb-8">
      <ProjectStats projects={projects} />
    </div>

    <SearchBar
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search projects..."
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
          <td colSpan={5}>
            <EmptyState
              title="No Projects Yet"
              message="Create your first project to start collaborating with your team."
              buttonText="+ New Project"
              onButtonClick={() => navigate("/projects/create")}
            />
          </td>
        </tr>
      ) : (
        filteredProjects.map((project, index) => (
          <tr
            key={project.id}
            className={`
              border-b
              border-slate-200
              dark:border-slate-700

              transition-colors
              duration-200

              hover:bg-slate-100
              dark:hover:bg-slate-800

              ${
                index % 2 === 0
                  ? "bg-white dark:bg-slate-900"
                  : "bg-slate-50 dark:bg-slate-800/40"
              }
            `}
          >
            <td className="px-6 py-4 font-semibold text-slate-800 dark:text-white">
              {project.name}
            </td>

            <td className="px-6 py-4">
              <Badge
                text={project.status}
                type={project.status}
              />
            </td>

            <td className="px-6 py-4 text-slate-700 dark:text-slate-300">
              {project.createdBy}
            </td>

            <td className="px-6 py-4 text-slate-700 dark:text-slate-300">
              {new Date(project.created_at).toLocaleDateString()}
            </td>

            <td className="px-6 py-4">
              <div className="flex justify-center gap-5">
                <Link
                  to={`/projects/edit/${project.id}`}
                  className="
                    text-blue-600
                    dark:text-blue-400
                    hover:text-blue-800
                    dark:hover:text-blue-300
                    transition-colors
                  "
                >
                  <FaEdit size={18} />
                </Link>

                <button
                  onClick={() => {
                    setSelectedProject(project.id);
                    setOpenModal(true);
                  }}
                  className="
                    text-red-600
                    dark:text-red-400
                    hover:text-red-800
                    dark:hover:text-red-300
                    transition-colors
                  "
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
      message="Are you sure you want to delete this project? This action cannot be undone."
      onCancel={() => {
        if (deleteLoading) return;

        setOpenModal(false);
        setSelectedProject(null);
      }}
      onConfirm={handleDelete}
      loading={deleteLoading}
    />
  </Card>
);
}