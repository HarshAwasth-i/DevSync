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
import TaskStats from "../components/tasks/TaskStats";

import notify from "../utils/notify";

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

      notify.success("Task deleted successfully");
    } catch (err) {
      console.error(err);
      notify.error("Failed to delete task");
    }
  };

  if (loading) return <Loader type="skeleton" rows={8} />;

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

      <div className="mb-8">
        <TaskStats tasks={tasks} />
      </div>

      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tasks..."
      />

      <Table
        columns={[
          "Task",
          "Project",
          "Priority",
          "Due Date",
          "Status",
          "Assigned To",
          "Actions",
        ]}
      >
        {filteredTasks.length === 0 ? (
          <tr>
            <td colSpan={7}>
              <EmptyState
                title="No Tasks Yet"
                message="Create your first task and start tracking your team's progress."
                buttonText="+ New Task"
                onButtonClick={() => navigate("/tasks/create")}
              />
            </td>
          </tr>
        ) : (
          filteredTasks.map((task, index) => (
            <tr
              key={task.id}
              className={`
                border-b
                border-slate-200
                dark:border-slate-700

                transition-all
                duration-200

                hover:bg-blue-50
                dark:hover:bg-slate-800/60

                ${
                  index % 2 === 0
                    ? "bg-white dark:bg-slate-900"
                    : "bg-slate-50 dark:bg-slate-800/40"
                }

                ${
                  task.due_date &&
                  new Date(task.due_date) < new Date() &&
                  task.status !== "Completed"
                    ? "bg-red-50 dark:bg-red-900/20"
                    : ""
                }
              `}
            >
              <td className="px-6 py-4 font-semibold text-slate-800 dark:text-white">
                {task.title}
              </td>

              <td className="px-6 py-4 text-slate-700 dark:text-slate-200">
                {task.projectName}
              </td>

              <td className="px-6 py-4">
                <Badge
                  text={task.priority}
                  type={task.priority}
                />
              </td>

              <td className="px-6 py-4">
                {task.due_date ? (
                  <span
                    className={
                      new Date(task.due_date) < new Date() &&
                      task.status !== "Completed"
                        ? "text-red-600 dark:text-red-400 font-semibold"
                        : "text-slate-600 dark:text-slate-300"
                    }
                  >
                    {new Date(task.due_date).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                ) : (
                  <span className="text-slate-400 dark:text-slate-500">
                    —
                  </span>
                )}
              </td>

              <td className="px-6 py-4">
                <Badge
                  text={task.status}
                  type={task.status}
                />
              </td>

              <td className="px-6 py-4 text-slate-700 dark:text-slate-200">
                {task.assignedTo || "Unassigned"}
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-center gap-5">
                  <Link
                    to={`/tasks/edit/${task.id}`}
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
                      setSelectedTask(task.id);
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