import { FaFolderOpen, FaCheckCircle, FaClock, FaSpinner } from "react-icons/fa";

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

  const cards = [
    {
      title: "Total Projects",
      value: total,
      icon: <FaFolderOpen />,
      color: "bg-blue-500",
    },
    {
      title: "Active",
      value: active,
      icon: <FaSpinner />,
      color: "bg-green-500",
    },
    {
      title: "Completed",
      value: completed,
      icon: <FaCheckCircle />,
      color: "bg-purple-500",
    },
    {
      title: "Pending",
      value: pending,
      icon: <FaClock />,
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-5 mb-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center"
        >
          <div>
            <p className="text-gray-500 text-sm">
              {card.title}
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {card.value}
            </h2>
          </div>

          <div
            className={`${card.color} text-white p-4 rounded-full text-2xl`}
          >
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
}