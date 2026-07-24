export default function StatCard({
  title,
  value,
  icon,
  color = "blue",
}) {
  const colors = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
    red: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

        </div>

        <div
          className={`h-14 w-14 rounded-xl flex items-center justify-center ${colors[color]}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}