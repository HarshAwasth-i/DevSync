import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import api from "../services/api";


export default function EditTask() {

  const { id } = useParams();
  const navigate = useNavigate();


  const [projects,setProjects] = useState([]);
  const [users,setUsers] = useState([]);



  const [task,setTask] = useState({
    title:"",
    description:"",
    priority:"Medium",
    status:"Pending",
    due_date:"",
    project_id:"",
    assigned_to:"",
  });



  useEffect(()=>{

    fetchTask();
    fetchProjects();
    fetchUsers();

  },[]);



  const fetchTask = async()=>{

    try{

      const res = await api.get(`/tasks/${id}`);

      setTask(res.data);

    }
    catch(err){

      console.error(err);

    }

  };



  const fetchProjects = async()=>{

    try{

      const res = await api.get("/projects");

      setProjects(res.data);

    }
    catch(err){

      console.error(err);

    }

  };



  const fetchUsers = async()=>{

    try{

      const res = await api.get("/auth/users");

      setUsers(res.data);

    }
    catch(err){

      console.error(err);

    }

  };



  const handleChange=(e)=>{

    setTask({
      ...task,
      [e.target.name]:e.target.value,
    });

  };



  const handleSubmit=async(e)=>{

    e.preventDefault();


    try{

      await api.put(`/tasks/${id}`,task);


      alert("Task Updated Successfully!");


      navigate("/tasks");


    }
    catch(err){

      console.error(err);

      alert("Failed to update task");

    }

  };




  const inputClass = `
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
  `;



  const labelClass = `
    block
    mb-2

    font-medium

    text-slate-700
    dark:text-slate-200
  `;



  return (

    <div

      className="
      max-w-3xl
      mx-auto

      bg-white
      dark:bg-slate-900

      border
      border-slate-200
      dark:border-slate-700

      rounded-2xl

      shadow-lg

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

        Edit Task

      </h1>




      <form

      onSubmit={handleSubmit}

      className="space-y-5"

      >




        <div>

          <label className={labelClass}>
            Task Title
          </label>


          <input

          type="text"

          name="title"

          value={task.title}

          onChange={handleChange}

          className={inputClass}

          />

        </div>






        <div>

          <label className={labelClass}>
            Description
          </label>


          <textarea

          rows="5"

          name="description"

          value={task.description}

          onChange={handleChange}

          className={inputClass}

          />


        </div>






        <div className="grid md:grid-cols-2 gap-5">


          <div>

            <label className={labelClass}>
              Priority
            </label>


            <select

            name="priority"

            value={task.priority}

            onChange={handleChange}

            className={inputClass}

            >

              <option>Low</option>

              <option>Medium</option>

              <option>High</option>


            </select>


          </div>






          <div>

            <label className={labelClass}>
              Status
            </label>


            <select

            name="status"

            value={task.status}

            onChange={handleChange}

            className={inputClass}

            >

              <option>Pending</option>

              <option>In Progress</option>

              <option>Completed</option>


            </select>


          </div>


        </div>








        <div>

          <label className={labelClass}>
            Due Date
          </label>


          <input

          type="date"

          name="due_date"

          value={
            task.due_date?.split("T")[0] || ""
          }

          onChange={handleChange}

          className={inputClass}

          />

        </div>








        <div>

          <label className={labelClass}>
            Project
          </label>


          <select

          name="project_id"

          value={task.project_id}

          onChange={handleChange}

          className={inputClass}

          >

            <option value="">
              Select Project
            </option>


            {
              projects.map(project=>(

                <option
                key={project.id}
                value={project.id}
                >

                  {project.name}

                </option>

              ))
            }


          </select>


        </div>








        <div>

          <label className={labelClass}>
            Assign User
          </label>


          <select

          name="assigned_to"

          value={task.assigned_to}

          onChange={handleChange}

          className={inputClass}

          >

            <option value="">
              Select User
            </option>


            {
              users.map(user=>(

                <option
                key={user.id}
                value={user.id}
                >

                  {user.name}

                </option>

              ))
            }


          </select>


        </div>







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

        shadow-md

        hover:shadow-lg
        "

        >

          Update Task

        </button>




      </form>


    </div>

  );
}