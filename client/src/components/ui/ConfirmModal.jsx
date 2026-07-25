import { useEffect } from "react";
import Button from "./Button";

export default function ConfirmModal({
  open,
  title,
  message,
  onCancel,
  onConfirm,
  loading = false,
}) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && !loading) {
        onCancel();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () =>
      document.removeEventListener("keydown", handleKeyDown);
  }, [open, loading, onCancel]);

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        flex
        items-center
        justify-center

        bg-black/50
        backdrop-blur-sm

        animate-fade-in
      "
      onClick={!loading ? onCancel : undefined}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-[420px]
          max-w-[92%]

          rounded-2xl

          bg-white
          dark:bg-slate-900

          border
          border-slate-200
          dark:border-slate-700

          shadow-2xl

          p-7
        "
      >
        <h2
          className="
            text-2xl
            font-bold

            text-slate-800
            dark:text-white
          "
        >
          {title}
        </h2>

        <p
          className="
            mt-3
            mb-8

            leading-relaxed

            text-slate-500
            dark:text-slate-400
          "
        >
          {message}
        </p>

        <div className="flex justify-end gap-3">
          <Button
            variant="secondary"
            onClick={onCancel}
            disabled={loading}
          >
            Cancel
          </Button>

          <Button
            variant="danger"
            onClick={onConfirm}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </div>
    </div>
  );
}