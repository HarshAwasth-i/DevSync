import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  FaFolderOpen,
  FaUser,
  FaFlag,
  FaCalendarAlt,
} from "react-icons/fa";

export default function TaskCard({ task }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: String(task.id),
    data: {
      task,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.35 : 1,
  };

  const priorityColor = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white rounded-xl border border-gray-200 shadow p-4 mb-3 cursor-grab active:cursor-grabbing hover:shadow-lg transition"
    >
      <h3 className="font-semibold text-gray-800">
        {task.title}
      </h3>

      <div className="mt-3 space-y-2 text-sm text-gray-500">

        <div className="flex items-center gap-2">
          <FaFolderOpen />
          {task.projectName}
        </div>

        <div className="flex items-center gap-2">
          <FaUser />
          {task.assignedTo || "Unassigned"}
        </div>

        {task.due_date && (
          <div className="flex items-center gap-2">
            <FaCalendarAlt />
            {new Date(task.due_date).toLocaleDateString()}
          </div>
        )}
      </div>

      <span
        className={`inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-full text-xs font-medium ${
          priorityColor[task.priority]
        }`}
      >
        <FaFlag />
        {task.priority}
      </span>
    </div>
  );
}