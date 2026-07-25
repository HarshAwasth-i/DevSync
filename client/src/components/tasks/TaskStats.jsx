import {
  FaTasks,
  FaCheckCircle,
  FaSpinner,
  FaClock,
  FaExclamationTriangle,
} from "react-icons/fa";

import StatCard from "../ui/StatCard";

export default function TaskStats({ tasks }) {
  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const inProgress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const overdue = tasks.filter((task) => {
    if (!task.due_date || task.status === "Completed") return false;

    return new Date(task.due_date) < new Date();
  }).length;

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5 mb-6">
      <StatCard
        title="Total Tasks"
        value={total}
        icon={<FaTasks />}
        color="blue"
      />

      <StatCard
        title="Completed"
        value={completed}
        icon={<FaCheckCircle />}
        color="green"
      />

      <StatCard
        title="In Progress"
        value={inProgress}
        icon={<FaSpinner />}
        color="yellow"
      />

      <StatCard
        title="Pending"
        value={pending}
        icon={<FaClock />}
        color="purple"
      />

      <StatCard
        title="Overdue"
        value={overdue}
        icon={<FaExclamationTriangle />}
        color="red"
      />
    </div>
  );
}