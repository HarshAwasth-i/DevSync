import { FaInbox } from "react-icons/fa";

export default function EmptyState({
  title = "Nothing Here",
  message = "There is no data to display.",
  buttonText,
  onButtonClick,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-6">
        <FaInbox className="text-4xl text-slate-500" />
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mb-2">
        {title}
      </h2>

      <p className="text-slate-500 max-w-md mb-6">
        {message}
      </p>

      {buttonText && (
        <button
          onClick={onButtonClick}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}