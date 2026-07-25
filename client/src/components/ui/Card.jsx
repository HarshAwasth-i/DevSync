import clsx from "clsx";

export default function Card({
  children,
  className = "",
  hover = true,
  padding = "p-6",
}) {
  return (
    <div
      className={clsx(
        `
          bg-white
          dark:bg-slate-900

          border
          border-slate-200
          dark:border-slate-700

          rounded-2xl

          shadow-sm
          dark:shadow-black/20

          transition-all
          duration-300
        `,
        hover &&
          `
          hover:-translate-y-1
          hover:shadow-xl
          dark:hover:shadow-black/40
        `,
        padding,
        className
      )}
    >
      {children}
    </div>
  );
}