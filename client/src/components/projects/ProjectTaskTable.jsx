import { Link } from "react-router-dom";

import Table from "../ui/Table";
import Badge from "../ui/Badge";
import EmptyState from "../ui/EmptyState";

export default function ProjectTaskTable({ tasks = [] }) {
  if (tasks.length === 0) {
    return (
      <EmptyState
        title="No Tasks"
        message="This project doesn't have any tasks yet."
      />
    );
  }

  return (
    <Table
      columns={[
        "Task",
        "Priority",
        "Status",
        "Assigned To",
        "Due Date",
      ]}
    >
      {tasks.map((task) => (
        <tr
          key={task.id}
          className="
            border-b
            border-slate-200
            dark:border-slate-700
            hover:bg-slate-100
            dark:hover:bg-slate-800
            transition
          "
        >
          <td className="p-4">
            <Link
              to={`/tasks/${task.id}`}
              className="
                font-semibold
                text-blue-600
                hover:underline
                dark:text-blue-400
              "
            >
              {task.title}
            </Link>
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

          <td className="p-4 text-slate-700 dark:text-slate-300">
            {task.assignedTo || "-"}
          </td>

          <td className="p-4 text-slate-700 dark:text-slate-300">
            {task.due_date
              ? new Date(task.due_date).toLocaleDateString()
              : "-"}
          </td>
        </tr>
      ))}
    </Table>
  );
}