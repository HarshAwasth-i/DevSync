import clsx from "clsx";

const styles = {
  active: `
    bg-green-100
    text-green-700
    border border-green-200

    dark:bg-green-900/30
    dark:text-green-300
    dark:border-green-800
  `,

  completed: `
    bg-green-100
    text-green-700
    border border-green-200

    dark:bg-green-900/30
    dark:text-green-300
    dark:border-green-800
  `,

  pending: `
    bg-yellow-100
    text-yellow-700
    border border-yellow-200

    dark:bg-yellow-900/30
    dark:text-yellow-300
    dark:border-yellow-800
  `,

  "in progress": `
    bg-blue-100
    text-blue-700
    border border-blue-200

    dark:bg-blue-900/30
    dark:text-blue-300
    dark:border-blue-800
  `,

  high: `
    bg-red-100
    text-red-700
    border border-red-200

    dark:bg-red-900/30
    dark:text-red-300
    dark:border-red-800
  `,

  medium: `
    bg-orange-100
    text-orange-700
    border border-orange-200

    dark:bg-orange-900/30
    dark:text-orange-300
    dark:border-orange-800
  `,

  low: `
    bg-emerald-100
    text-emerald-700
    border border-emerald-200

    dark:bg-emerald-900/30
    dark:text-emerald-300
    dark:border-emerald-800
  `,
};

export default function Badge({ text, type }) {
  return (
    <span
      className={clsx(
        `
          inline-flex
          items-center
          justify-center

          px-3
          py-1

          rounded-full

          text-xs
          font-semibold

          capitalize

          transition-colors
          duration-200
        `,
        styles[type?.toLowerCase()] ||
          `
            bg-slate-100
            text-slate-700
            border border-slate-200

            dark:bg-slate-800
            dark:text-slate-300
            dark:border-slate-700
          `
      )}
    >
      {text}
    </span>
  );
}