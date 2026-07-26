import StatCard from "../ui/StatCard";

import {
  FaFolderOpen,
  FaTasks,
  FaUsers,
} from "react-icons/fa";

export default function ProfileStats({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard
        title="Projects"
        value={stats.projects}
        icon={<FaFolderOpen />}
      />

      <StatCard
        title="Tasks"
        value={stats.tasks}
        icon={<FaTasks />}
      />

      <StatCard
        title="Team Members"
        value={stats.teams}
        icon={<FaUsers />}
      />
    </div>
  );
}