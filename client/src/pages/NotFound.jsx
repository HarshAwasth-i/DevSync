import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-slate-50
      dark:bg-slate-950
      px-6
    "
    >
      <div className="text-center max-w-lg">
        <div
          className="
          mx-auto
          w-24
          h-24
          rounded-full
          bg-red-100
          dark:bg-red-900/30
          flex
          items-center
          justify-center
          mb-8
        "
        >
          <FaExclamationTriangle className="text-5xl text-red-500" />
        </div>

        <h1 className="text-6xl font-extrabold text-slate-800 dark:text-white">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-slate-800 dark:text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-500 dark:text-slate-400">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/dashboard"
          className="
          inline-flex
          items-center
          gap-2
          mt-8
          px-6
          py-3
          rounded-xl
          bg-blue-600
          hover:bg-blue-700
          text-white
          font-semibold
          transition
        "
        >
          <FaArrowLeft />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}