import StatCard from "../ui/StatCard";
import {
  FaFolder,
  FaCheckCircle,
  FaClock,
  FaUsers,
} from "react-icons/fa";

export default function DashboardStats({ stats }) {
  const cards = [
    {
      title: "Projects",
      value: stats.projects,
      icon: <FaFolder />,
      color: "blue",
      subtitle: "Active workspaces",
    },
    {
      title: "Completed",
      value: stats.completedTasks,
      icon: <FaCheckCircle />,
      color: "green",
      subtitle: "Tasks finished",
    },
    {
      title: "Pending",
      value: stats.pendingTasks,
      icon: <FaClock />,
      color: "yellow",
      subtitle: "Need attention",
    },
    {
      title: "Team Members",
      value: stats.teamMembers,
      icon: <FaUsers />,
      color: "purple",
      subtitle: "Active collaborators",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
      {cards.map((card) => (
        <StatCard
          key={card.title}
          title={card.title}
          value={card.value}
          icon={card.icon}
          color={card.color}
          subtitle={card.subtitle}
        />
      ))}
    </div>
  );
}