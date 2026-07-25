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
        <label
          className="
            block
            text-sm
            font-semibold
            text-slate-700
            dark:text-slate-300
          "
        >
          {label}
        </label>
      )}

      <input
        {...props}
        className={clsx(
          `
            w-full

            rounded-xl

            border
            border-slate-300
            dark:border-slate-700

            px-4
            py-3

            bg-white
            dark:bg-slate-900

            text-slate-800
            dark:text-slate-100

            placeholder:text-slate-400
            dark:placeholder:text-slate-500

            outline-none

            transition-all
            duration-200

            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
            dark:focus:ring-blue-900/40
          `,
          error &&
            `
            border-red-500
            focus:ring-red-100
            dark:focus:ring-red-900/40
          `,
          className
        )}
      />

      {error && (
        <p className="text-sm text-red-500 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}