import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaFolderOpen,
} from "react-icons/fa";

import Card from "../ui/Card";

export default function RecentProjects({ projects = [] }) {
  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">
          Recent Projects
        </h2>

        <Link
          to="/projects"
          className="
            text-blue-600
            hover:underline
            text-sm
            font-medium
          "
        >
          View All
        </Link>
      </div>

      {projects.length === 0 ? (
        <div className="py-12 text-center">
          <FaFolderOpen
            className="
              mx-auto
              text-4xl
              text-slate-300
              dark:text-slate-700
            "
          />

          <p className="mt-4 text-slate-500">
            No projects available.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {projects.slice(0, 5).map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="
                block

                rounded-2xl
                border
                border-slate-200
                dark:border-slate-700

                p-5

                hover:border-blue-500
                hover:shadow-lg

                transition-all
                duration-300
              "
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-slate-800 dark:text-white">
                  {project.name}
                </h3>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-500">
                    {project.progress || 0}%
                  </span>

                  <FaArrowRight className="text-slate-400" />
                </div>
              </div>

              <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <div
                  className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-blue-500
                    to-indigo-500

                    transition-all
                    duration-700
                  "
                  style={{
                    width: `${project.progress || 0}%`,
                  }}
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </Card>
  );
}