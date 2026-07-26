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
          relative
          overflow-hidden

          rounded-2xl

          bg-white/90
          dark:bg-slate-900/90

          backdrop-blur-sm

          border
          border-slate-200
          dark:border-slate-700

          shadow-sm
          dark:shadow-black/20

          transition-all
          duration-300
        `,
        hover &&
          `
            hover:-translate-y-1
            hover:shadow-2xl
            hover:border-blue-200
            dark:hover:border-slate-600
          `,
        padding,
        className
      )}
    >
      {children}
    </div>
  );
}