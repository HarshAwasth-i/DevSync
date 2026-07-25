import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

export default function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState({
    name: "",
    description: "",
    status: "Active",
  });

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    try {
      const res = await api.get(`/projects/${id}`);
      setProject(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load project");
    }
  };

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/projects/${id}`, {
        name: project.name,
        description: project.description,
        status: project.status,
      });

      alert("Project updated successfully!");
      navigate("/projects");

    } catch (err) {
      console.error(err);
      alert("Failed to update project");
    }
  };

  return (
    <div
      className="
        max-w-2xl
        mx-auto
        bg-white
        dark:bg-slate-900
        border
        border-slate-200
        dark:border-slate-700
        shadow-lg
        rounded-2xl
        p-6
        transition-colors
        duration-300
      "
    >

      <h1
        className="
          text-3xl
          font-bold
          mb-6
          text-slate-800
          dark:text-white
        "
      >
        Edit Project
      </h1>


      <form onSubmit={handleSubmit} className="space-y-5">


        <div>
          <label
            className="
              block
              mb-2
              font-semibold
              text-slate-700
              dark:text-slate-200
            "
          >
            Project Name
          </label>

          <input
            type="text"
            name="name"
            value={project.name}
            onChange={handleChange}
            className="
              w-full
              border
              border-slate-300
              dark:border-slate-700
              bg-white
              dark:bg-slate-800
              text-slate-800
              dark:text-white
              rounded-xl
              p-3
              outline-none
              focus:ring-4
              focus:ring-blue-100
              dark:focus:ring-blue-900
            "
            required
          />
        </div>



        <div>
          <label
            className="
              block
              mb-2
              font-semibold
              text-slate-700
              dark:text-slate-200
            "
          >
            Description
          </label>

          <textarea
            name="description"
            rows="5"
            value={project.description}
            onChange={handleChange}
            className="
              w-full
              border
              border-slate-300
              dark:border-slate-700
              bg-white
              dark:bg-slate-800
              text-slate-800
              dark:text-white
              rounded-xl
              p-3
              outline-none
              focus:ring-4
              focus:ring-blue-100
              dark:focus:ring-blue-900
            "
          />
        </div>



        <div>
          <label
            className="
              block
              mb-2
              font-semibold
              text-slate-700
              dark:text-slate-200
            "
          >
            Status
          </label>

          <select
            name="status"
            value={project.status}
            onChange={handleChange}
            className="
              w-full
              border
              border-slate-300
              dark:border-slate-700
              bg-white
              dark:bg-slate-800
              text-slate-800
              dark:text-white
              rounded-xl
              p-3
              outline-none
              focus:ring-4
              focus:ring-blue-100
              dark:focus:ring-blue-900
            "
          >
            <option>Active</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>



        <button
          type="submit"
          className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-6
            py-3
            rounded-xl
            font-semibold
            transition-all
            duration-300
            shadow-md
            hover:shadow-lg
          "
        >
          Update Project
        </button>


      </form>

    </div>
  );
}