export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    danger:
      "bg-red-500 hover:bg-red-600 text-white",

    secondary:
      "bg-gray-200 hover:bg-gray-300 text-gray-800",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-5 py-2.5 rounded-xl transition font-medium ${styles[variant]}`}
    >
      {children}
    </button>
  );
}