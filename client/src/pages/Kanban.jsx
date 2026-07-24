import { useEffect, useMemo, useState } from "react";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";

import api from "../services/api";
import KanbanColumn from "../components/kanban/KanbanColumn";
import TaskCard from "../components/kanban/TaskCard";
import PageHeader from "../components/ui/PageHeader";
import Loader from "../components/ui/Loader";

export default function Kanban() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTask, setActiveTask] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

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

  useEffect(() => {
    fetchTasks();
  }, []);

  const groupedTasks = useMemo(
    () => ({
      Pending: tasks.filter((t) => t.status === "Pending"),
      "In Progress": tasks.filter(
        (t) => t.status === "In Progress"
      ),
      Completed: tasks.filter(
        (t) => t.status === "Completed"
      ),
    }),
    [tasks]
  );

  const handleDragStart = (event) => {
    const task = tasks.find(
      (t) => String(t.id) === String(event.active.id)
    );

    setActiveTask(task);
  };

  const handleDragEnd = async ({ active, over }) => {
    setActiveTask(null);

    if (!over) return;

    const taskId = String(active.id);
    const newStatus = over.id;

    const draggedTask = tasks.find(
      (t) => String(t.id) === taskId
    );

    if (!draggedTask) return;

    if (draggedTask.status === newStatus) return;

    const oldTasks = [...tasks];

    const updated = tasks.map((task) =>
      String(task.id) === taskId
        ? { ...task, status: newStatus }
        : task
    );

    setTasks(updated);

    try {
      await api.patch(`/tasks/${taskId}/status`, {
        status: newStatus,
      });
    } catch (err) {
      console.error(err);
      setTasks(oldTasks);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Kanban Board"
        subtitle="Manage your tasks with drag and drop"
      />

      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <KanbanColumn
            id="Pending"
            title="Todo"
            tasks={groupedTasks.Pending}
          />

          <KanbanColumn
            id="In Progress"
            title="In Progress"
            tasks={groupedTasks["In Progress"]}
          />

          <KanbanColumn
            id="Completed"
            title="Completed"
            tasks={groupedTasks.Completed}
          />
        </div>

        <DragOverlay>
          {activeTask ? (
            <div className="rotate-2 scale-105 opacity-90">
              <TaskCard task={activeTask} />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}