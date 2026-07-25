import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function CreateProject() {
  const navigate = useNavigate();

  const [project, setProject] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = JSON.parse(localStorage.getItem("user"));

      await api.post("/projects", {
        ...project,
        created_by: user.id,
      });

      alert("Project Created Successfully!");

      navigate("/projects");
    } catch (err) {
      console.error(err);
      alert("Failed to create project");
    }
  };

  return (
    <div
      className="
        max-w-2xl
        bg-white
        dark:bg-slate-900
        border
        border-slate-200
        dark:border-slate-700
        p-8
        rounded-2xl
        shadow-lg
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
        Create Project
      </h1>


      <form onSubmit={handleSubmit}>

        <input
          className="
            w-full
            border
            border-slate-300
            dark:border-slate-700
            bg-white
            dark:bg-slate-800
            text-slate-800
            dark:text-white
            placeholder:text-slate-400
            rounded-xl
            p-3
            mb-4
            outline-none
            focus:ring-4
            focus:ring-blue-100
            dark:focus:ring-blue-900
          "
          placeholder="Project Name"
          name="name"
          value={project.name}
          onChange={handleChange}
          required
        />


        <textarea
          className="
            w-full
            border
            border-slate-300
            dark:border-slate-700
            bg-white
            dark:bg-slate-800
            text-slate-800
            dark:text-white
            placeholder:text-slate-400
            rounded-xl
            p-3
            mb-4
            outline-none
            focus:ring-4
            focus:ring-blue-100
            dark:focus:ring-blue-900
          "
          rows="5"
          placeholder="Project Description"
          name="description"
          value={project.description}
          onChange={handleChange}
        />


        <button
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
          Create Project
        </button>

      </form>

    </div>
  );
}