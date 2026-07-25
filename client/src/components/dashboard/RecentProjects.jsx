import Card from "../ui/Card";

export default function RecentProjects({ projects = [] }) {
  return (
    <Card>
      <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-5">
        Recent Projects
      </h2>

      {projects.length === 0 ? (
        <p className="text-slate-400">
          No projects found.
        </p>
      ) : (
        <div className="space-y-5">
          {projects.slice(0, 4).map((project) => (
            <div key={project.id}>

              <div className="flex justify-between mb-2">

                <span className="font-medium text-slate-700 dark:text-slate-200">
                  {project.name}
                </span>

                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {project.progress || 0}%
                </span>

              </div>


              <div className="
                h-2
                rounded-full
                bg-slate-200
                dark:bg-slate-700
                overflow-hidden
              ">
                <div
                  className="
                    h-full
                    bg-blue-600
                    rounded-full
                    transition-all
                    duration-500
                  "
                  style={{
                    width: `${project.progress || 0}%`,
                  }}
                />
              </div>

            </div>
          ))}
        </div>
      )}
    </Card>
  );
}