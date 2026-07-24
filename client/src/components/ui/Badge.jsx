export default function Badge({ text, type }) {
  const styles = {
    active: "bg-green-100 text-green-700",

    completed: "bg-blue-100 text-blue-700",

    pending: "bg-yellow-100 text-yellow-700",

    high: "bg-red-100 text-red-700",

    medium: "bg-orange-100 text-orange-700",

    low: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold ${styles[type]}`}
    >
      {text}
    </span>
  );
}