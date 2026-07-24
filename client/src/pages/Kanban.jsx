import { useEffect, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import api from "../services/api";

import PageHeader from "../components/ui/PageHeader";
import Loader from "../components/ui/Loader";
import KanbanColumn from "../components/kanban/KanbanColumn";

export default function Kanban() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDragEnd = async (event) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id;

    // Do nothing if dropped in the same column
    const draggedTask = tasks.find((task) => task.id === taskId);

    if (!draggedTask || draggedTask.status === newStatus) return;

    try {
      await api.patch(`/tasks/${taskId}/status`, {
        status: newStatus,
      });

      // Refresh tasks after update
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <Loader />;

  const todo = tasks.filter(
    (task) => task.status === "Pending"
  );

  const inProgress = tasks.filter(
    (task) => task.status === "In Progress"
  );

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  );

  return (
    <>
      <PageHeader
        title="Kanban Board"
        subtitle="Drag and drop tasks to update their status"
      />

      <DndContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <KanbanColumn
            id="Pending"
            title="Todo"
            icon="📋"
            tasks={todo}
          />

          <KanbanColumn
            id="In Progress"
            title="In Progress"
            icon="🚀"
            tasks={inProgress}
          />

          <KanbanColumn
            id="Completed"
            title="Completed"
            icon="✅"
            tasks={completed}
          />
        </div>
      </DndContext>
    </>
  );
}