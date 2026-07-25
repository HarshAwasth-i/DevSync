import { FaInbox } from "react-icons/fa";
import Button from "./Button";

export default function EmptyState({
  title = "Nothing Here",
  message = "There is no data to display.",
  buttonText,
  onButtonClick,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      <div
        className="
          w-24
          h-24

          rounded-full

          bg-slate-100
          dark:bg-slate-800

          flex
          items-center
          justify-center

          mb-6

          shadow-sm
        "
      >
        <FaInbox
          className="
            text-4xl
            text-slate-500
            dark:text-slate-400
          "
        />
      </div>

      <h2
        className="
          text-2xl
          font-bold
          text-slate-800
          dark:text-white
          mb-2
        "
      >
        {title}
      </h2>

      <p
        className="
          max-w-md
          text-slate-500
          dark:text-slate-400
          leading-relaxed
          mb-8
        "
      >
        {message}
      </p>

      {buttonText && (
        <Button onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </div>
  );
}