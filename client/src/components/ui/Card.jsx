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
        "bg-white border border-slate-200 rounded-2xl",
        "shadow-sm transition-all duration-300",
        hover && "hover:-translate-y-1 hover:shadow-xl",
        padding,
        className
      )}
    >
      {children}
    </div>
  );
}