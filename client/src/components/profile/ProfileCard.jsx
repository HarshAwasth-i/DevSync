import { FaUserCircle, FaEnvelope, FaCode } from "react-icons/fa";

export default function ProfileCard({ user }) {
  return (
    <div
      className="
        bg-white
        dark:bg-slate-900
        border
        border-slate-200
        dark:border-slate-700
        rounded-2xl
        shadow-sm
        p-8
      "
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <FaUserCircle
          size={120}
          className="text-blue-500"
        />

        <div className="flex-1">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
            {user?.name}
          </h2>

          <div className="flex items-center gap-2 mt-3 text-slate-500 dark:text-slate-400">
            <FaCode />
            <span>Software Developer</span>
          </div>

          <div className="flex items-center gap-2 mt-2 text-slate-500 dark:text-slate-400">
            <FaEnvelope />
            <span>{user?.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}