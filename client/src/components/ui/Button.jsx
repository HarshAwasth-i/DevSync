import clsx from "clsx";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}) {
  const variants = {
    primary: `
      bg-blue-600
      text-white
      hover:bg-blue-700
      shadow-sm
      hover:shadow-lg
    `,

    secondary: `
      bg-slate-100
      dark:bg-slate-800

      text-slate-700
      dark:text-slate-200

      hover:bg-slate-200
      dark:hover:bg-slate-700

      border
      border-slate-200
      dark:border-slate-700
    `,

    success: `
      bg-green-600
      text-white
      hover:bg-green-700
    `,

    danger: `
      bg-red-600
      text-white
      hover:bg-red-700
    `,

    outline: `
      border
      border-slate-300
      dark:border-slate-600

      text-slate-700
      dark:text-slate-200

      hover:bg-slate-100
      dark:hover:bg-slate-800
    `,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        `
          inline-flex
          items-center
          justify-center

          px-5
          py-2.5

          rounded-xl
          font-semibold

          transition-all
          duration-300

          disabled:opacity-50
          disabled:cursor-not-allowed
          disabled:hover:shadow-none
        `,
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
}