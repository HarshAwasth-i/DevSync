import StatCard from "../ui/StatCard";
import {
  FaFolder,
  FaTasks,
  FaCheckCircle,
  FaClock,
  FaUsers,
} from "react-icons/fa";

export default function DashboardStats({
  stats,
}) {
 return (
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
    <StatCard
      title="Projects"
      value={stats.projects}
      icon={<FaFolder />}
    />

    <StatCard
      title="Completed"
      value={stats.completedTasks}
      icon={<FaCheckCircle />}
    />

    <StatCard
      title="Pending"
      value={stats.pendingTasks}
      icon={<FaClock />}
    />

    <StatCard
      title="Team Members"
      value={stats.teamMembers}
      icon={<FaUsers />}
    />
  </div>
);
}