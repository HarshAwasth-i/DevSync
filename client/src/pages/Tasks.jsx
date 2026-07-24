import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import api from "../services/api";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import SearchBar from "../components/ui/SearchBar";
import PageHeader from "../components/ui/PageHeader";
import Table from "../components/ui/Table";
import Loader from "../components/ui/Loader";
import EmptyState from "../components/ui/EmptyState";
import ConfirmModal from "../components/ui/ConfirmModal";

export default function Tasks() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [openModal, setOpenModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredTasks(filtered);
  }, [search, tasks]);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
      setFilteredTasks(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedTask) return;

    try {
      await api.delete(`/tasks/${selectedTask}`);

      const updatedTasks = tasks.filter(
        (task) => task.id !== selectedTask
      );

      setTasks(updatedTasks);
      setFilteredTasks(updatedTasks);

      setOpenModal(false);
      setSelectedTask(null);
    } catch (err) {
      console.error(err);
      alert("Failed to delete task");
    }
  };

  if (loading) return <Loader />;

  return (
    <Card>
      <PageHeader
        title="Tasks"
        subtitle="Manage all your project tasks"
        action={
          <Button onClick={() => navigate("/tasks/create")}>
            + New Task
          </Button>
        }
      />

      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Search Tasks..."
      />

      <Table
        columns={[
          "Task",
          "Project",
          "Priority",
          "Status",
          "Assigned To",
          "Actions",
        ]}
      >
        {filteredTasks.length === 0 ? (
          <tr>
            <td colSpan="6">
              <EmptyState message="No Tasks Found" />
            </td>
          </tr>
        ) : (
          filteredTasks.map((task) => (
            <tr
              key={task.id}
              className="border-b hover:bg-slate-50 transition"
            >
              <td className="p-4 font-medium">
                {task.title}
              </td>

              <td className="p-4">
                {task.projectName}
              </td>

              <td className="p-4">
                <Badge
                  text={task.priority}
                  type={task.priority.toLowerCase()}
                />
              </td>

              <td className="p-4">
                <Badge
                  text={task.status}
                  type={task.status.toLowerCase()}
                />
              </td>

              <td className="p-4">
                {task.assignedTo}
              </td>

              <td className="p-4">
                <div className="flex justify-center gap-5">
                  <Link
                    to={`/tasks/edit/${task.id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEdit size={18} />
                  </Link>

                  <button
                    onClick={() => {
                      setSelectedTask(task.id);
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
        title="Delete Task"
        message="Are you sure you want to delete this task?"
        onCancel={() => {
          setOpenModal(false);
          setSelectedTask(null);
        }}
        onConfirm={handleDelete}
      />
    </Card>
  );
}