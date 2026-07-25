export default function PageHeader({
  title,
  subtitle,
  action,
}) {
  return (
    <div
      className="
        flex
        flex-col
        md:flex-row
        md:items-center
        md:justify-between
        gap-4
        mb-8
      "
    >
      <div>
        <h1
          className="
            text-4xl
            font-bold
            text-slate-800
            dark:text-white
            tracking-tight
          "
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="
              mt-2
              text-slate-500
              dark:text-slate-400
              text-base
            "
          >
            {subtitle}
          </p>
        )}
      </div>

      {action && (
        <div className="flex items-center">
          {action}
        </div>
      )}
    </div>
  );
}