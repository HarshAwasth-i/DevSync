import {
  FaFolderOpen,
  FaCheckCircle,
  FaClock,
  FaSpinner,
} from "react-icons/fa";

import StatCard from "../ui/StatCard";

export default function ProjectStats({ projects }) {
  const total = projects.length;

  const completed = projects.filter(
    (p) => p.status?.toLowerCase() === "completed"
  ).length;

  const active = projects.filter(
    (p) => p.status?.toLowerCase() === "active"
  ).length;

  const pending = projects.filter(
    (p) => p.status?.toLowerCase() === "pending"
  ).length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      <StatCard
        title="Total Projects"
        value={total}
        icon={<FaFolderOpen />}
        color="blue"
      />

      <StatCard
        title="Active"
        value={active}
        icon={<FaSpinner className="animate-spin" />}
        color="green"
      />

      <StatCard
        title="Completed"
        value={completed}
        icon={<FaCheckCircle />}
        color="purple"
      />

      <StatCard
        title="Pending"
        value={pending}
        icon={<FaClock />}
        color="yellow"
      />
    </div>
  );
}