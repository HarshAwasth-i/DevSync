export default function Loader({
  type = "spinner",
  rows = 5,
}) {
  if (type === "skeleton") {
    return (
      <div className="animate-pulse space-y-4">
        {Array.from({ length: rows }).map((_, index) => (
          <div
            key={index}
            className="h-14 rounded-xl bg-slate-200"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center py-20">
      <div className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}