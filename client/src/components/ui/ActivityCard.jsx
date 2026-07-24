export default function ActivityCard({
  title,
  subtitle,
  time,
}) {
  return (
    <div className="flex items-center justify-between border-b py-4">

      <div>

        <h3 className="font-semibold text-gray-800">
          {title}
        </h3>

        <p className="text-sm text-gray-500">
          {subtitle}
        </p>

      </div>

      <span className="text-sm text-gray-400">
        {time}
      </span>

    </div>
  );
}