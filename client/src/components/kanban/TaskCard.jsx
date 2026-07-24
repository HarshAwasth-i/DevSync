import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FaFlag } from "react-icons/fa";

export default function TaskCard({ task }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: task.id,
    data: {
      task,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const priorityColor = {
    High: "text-red-500",
    Medium: "text-yellow-500",
    Low: "text-green-500",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white rounded-xl border shadow-sm p-4 mb-3 cursor-grab hover:shadow-lg transition"
    >
      <h3 className="font-semibold">
        {task.title}
      </h3>

      <p className="text-sm text-gray-500 mt-1">
        {task.projectName}
      </p>

      <div className="flex justify-between mt-4">

        <span className={priorityColor[task.priority]}>
          <FaFlag className="inline mr-1" />
          {task.priority}
        </span>

        <span className="bg-slate-100 px-2 py-1 rounded-full text-xs">
          {task.assignedTo}
        </span>

      </div>
    </div>
  );
}