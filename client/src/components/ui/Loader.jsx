export default function Loader({
  type = "spinner",
  rows = 5,
}) {
  if (type === "skeleton") {
    return (
      <div className="space-y-4 animate-pulse">
        {Array.from({ length: rows }).map((_, index) => (
          <div
            key={index}
            className="
              h-14
              rounded-xl

              bg-slate-200
              dark:bg-slate-800

              border
              border-slate-100
              dark:border-slate-700

              transition-colors
            "
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center py-20">
      <div
        className="
          h-12
          w-12

          rounded-full

          border-[5px]
          border-blue-500
          border-t-transparent

          animate-spin

          shadow-md
        "
      />
    </div>
  );
}