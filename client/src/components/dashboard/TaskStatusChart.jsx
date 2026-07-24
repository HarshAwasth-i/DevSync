import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#3B82F6", "#F59E0B", "#10B981"];

export default function TaskStatusChart({ tasks }) {
  const data = [
    {
      name: "Pending",
      value: tasks.filter((t) => t.status === "Pending").length,
    },
    {
      name: "In Progress",
      value: tasks.filter((t) => t.status === "In Progress").length,
    },
    {
      name: "Completed",
      value: tasks.filter((t) => t.status === "Completed").length,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-lg font-bold mb-4">
        Task Status Overview
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={110}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}