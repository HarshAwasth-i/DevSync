import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function ProjectProgressChart({ tasks }) {
  const grouped = {};

  tasks.forEach((task) => {
    if (!grouped[task.projectName]) {
      grouped[task.projectName] = {
        project: task.projectName,
        completed: 0,
      };
    }

    if (task.status === "Completed") {
      grouped[task.projectName].completed++;
    }
  });

  const data = Object.values(grouped);

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-lg font-bold mb-4">
        Completed Tasks by Project
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="project" />

          <YAxis allowDecimals={false} />

          <Tooltip />

          <Bar
            dataKey="completed"
            fill="#3B82F6"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}