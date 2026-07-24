import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import TaskCard from "./TaskCard";

export default function KanbanColumn({
  id,
  title,
  tasks,
}) {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  const columnColors = {
    Pending: "border-blue-500",
    "In Progress": "border-yellow-500",
    Completed: "border-green-500",
  };

  return (
    <div
      ref={setNodeRef}
      className={`bg-gray-50 rounded-xl border-t-4 ${
        columnColors[id]
      } shadow-sm p-4 min-h-[500px] transition-all ${
        isOver ? "bg-blue-50" : ""
      }`}
    >
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-bold">
          {title}
        </h2>

        <span className="bg-white rounded-full px-3 py-1 text-sm font-semibold shadow">
          {tasks.length}
        </span>
      </div>

      <SortableContext
        items={tasks.map((task) => String(task.id))}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-3">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
            />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}