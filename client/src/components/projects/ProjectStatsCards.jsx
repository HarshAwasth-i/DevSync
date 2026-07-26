import StatCard from "../ui/StatCard";
import {
  FaTasks,
  FaClock,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";

export default function ProjectStatsCards({ tasks = [] }) {
  const total = tasks.length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const inProgress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const cards = [
    {
      title: "Total Tasks",
      value: total,
      icon: <FaTasks />,
      color: "blue",
      subtitle: "All project tasks",
    },
    {
      title: "Pending",
      value: pending,
      icon: <FaClock />,
      color: "yellow",
      subtitle: "Waiting to start",
    },
    {
      title: "In Progress",
      value: inProgress,
      icon: <FaSpinner />,
      color: "purple",
      subtitle: "Currently active",
    },
    {
      title: "Completed",
      value: completed,
      icon: <FaCheckCircle />,
      color: "green",
      subtitle: "Finished tasks",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
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