import { useDroppable } from "@dnd-kit/core";

import Card from "../ui/Card";
import TaskCard from "./TaskCard";

export default function KanbanColumn({
  id,
  title,
  icon,
  tasks,
}) {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <Card>

      <h2 className="text-xl font-bold mb-5">
        {icon} {title} ({tasks.length})
      </h2>

      <div
        ref={setNodeRef}
        className="min-h-[500px]"
      >
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))}
      </div>

    </Card>
  );
}