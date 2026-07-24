import Card from "./Card";
import clsx from "clsx";

const colors = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  red: "bg-red-100 text-red-600",
  yellow: "bg-yellow-100 text-yellow-600",
  purple: "bg-purple-100 text-purple-600",
};

export default function StatCard({
  title,
  value,
  icon,
  color = "blue",
  subtitle,
}) {
  return (
    <Card className="flex items-center justify-between">
      <div>
        <p className="text-sm text-slate-500 font-medium">
          {title}
        </p>

        <h2 className="text-3xl font-bold text-slate-800 mt-1">
          {value}
        </h2>

        {subtitle && (
          <p className="text-sm text-slate-400 mt-2">
            {subtitle}
          </p>
        )}
      </div>

      <div
        className={clsx(
          "w-14 h-14 rounded-2xl flex items-center justify-center text-2xl",
          colors[color]
        )}
      >
        {icon}
      </div>
    </Card>
  );
}