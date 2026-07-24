export default function Table({
  columns,
  children,
}) {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-200">
      <table className="w-full">
        <thead className="bg-slate-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="text-left p-4 font-semibold text-gray-700"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>{children}</tbody>
      </table>
    </div>
  );
}