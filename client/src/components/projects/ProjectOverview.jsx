import Card from "../ui/Card";
import Badge from "../ui/Badge";

export default function ProjectOverview({ project }) {
  return (
    <Card>
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
            {project.name}
          </h1>

          <p className="mt-3 text-slate-500 dark:text-slate-400">
            {project.description || "No description available."}
          </p>
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Status
            </p>

            <Badge
              text={project.status}
              type={project.status.toLowerCase()}
            />
          </div>

          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Created
            </p>

            <p className="font-medium text-slate-700 dark:text-slate-200">
              {new Date(project.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}