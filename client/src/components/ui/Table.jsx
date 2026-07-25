export default function Table({
  columns,
  children,
}) {
  return (
    <div
      className="
        overflow-x-auto

        rounded-2xl

        border
        border-slate-200
        dark:border-slate-700

        bg-white
        dark:bg-slate-900

        shadow-sm
      "
    >
      <table className="w-full border-collapse">
        <thead
          className="
            sticky
            top-0

            bg-slate-50
            dark:bg-slate-800

            border-b
            border-slate-200
            dark:border-slate-700
          "
        >
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="
                  px-6
                  py-4

                  text-left

                  text-sm
                  font-semibold
                  uppercase
                  tracking-wide

                  text-slate-600
                  dark:text-slate-300
                "
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody
          className="
            divide-y
            divide-slate-200
            dark:divide-slate-700
          "
        >
          {children}
        </tbody>
      </table>
    </div>
  );
}