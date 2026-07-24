export default function Select({
  label,
  name,
  value,
  onChange,
  children,
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-semibold text-gray-700">
          {label}
        </label>
      )}

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {children}
      </select>
    </div>
  );
}