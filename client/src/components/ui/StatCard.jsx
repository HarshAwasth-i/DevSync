import Card from "./Card";
import clsx from "clsx";

const colors = {
  blue: `
    bg-blue-100
    text-blue-600

    dark:bg-blue-900/30
    dark:text-blue-300
  `,

  green: `
    bg-green-100
    text-green-600

    dark:bg-green-900/30
    dark:text-green-300
  `,

  red: `
    bg-red-100
    text-red-600

    dark:bg-red-900/30
    dark:text-red-300
  `,

  yellow: `
    bg-yellow-100
    text-yellow-600

    dark:bg-yellow-900/30
    dark:text-yellow-300
  `,

  purple: `
    bg-purple-100
    text-purple-600

    dark:bg-purple-900/30
    dark:text-purple-300
  `,
};

export default function StatCard({
  title,
  value,
  icon,
  color = "blue",
  subtitle,
}) {
  return (
    <Card
      className="
        flex
        items-center
        justify-between
        min-h-[130px]
        p-6
      "
    >
      <div>
        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-widest
            text-slate-500
            dark:text-slate-400
          "
        >
          {title}
        </p>

        <h2
          className="
            mt-3
            text-4xl
            font-bold
            text-slate-800
            dark:text-white
          "
        >
          {value}
        </h2>

        {subtitle && (
          <p
            className="
              mt-3
              text-sm
              text-slate-400
              dark:text-slate-500
            "
          >
            {subtitle}
          </p>
        )}
      </div>

      <div
        className={clsx(
          `
            w-16
            h-16

            rounded-2xl

            flex
            items-center
            justify-center

            text-3xl

            shadow-sm

            transition-all
            duration-300

            group-hover:scale-110
          `,
          colors[color]
        )}
      >
        {icon}
      </div>
    </Card>
  );
}