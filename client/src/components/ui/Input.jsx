import clsx from "clsx";

export default function Input({
  label,
  error,
  className = "",
  ...props
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-semibold text-slate-700">
          {label}
        </label>
      )}

      <input
        {...props}
        className={clsx(
          "w-full rounded-xl border border-slate-300",
          "px-4 py-3",
          "bg-white",
          "transition-all duration-200",
          "outline-none",
          "focus:border-blue-500",
          "focus:ring-4 focus:ring-blue-100",
          error && "border-red-500 focus:ring-red-100",
          className
        )}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}