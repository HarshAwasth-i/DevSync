import Button from "./Button";

export default function DeleteModal({
  open,
  title,
  message,
  onCancel,
  onConfirm,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-[420px] p-6 animate-fade-in">
        <h2 className="text-2xl font-bold mb-3">
          {title}
        </h2>

        <p className="text-gray-600 mb-8">
          {message}
        </p>

        <div className="flex justify-end gap-3">
          <Button
            onClick={onCancel}
            className="bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            Cancel
          </Button>

          <Button
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}