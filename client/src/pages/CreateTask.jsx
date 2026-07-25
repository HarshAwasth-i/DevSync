import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";
import { notify } from "../utils/toast";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import PageHeader from "../components/ui/PageHeader";


export default function CreateTask() {

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
    fetchProjects();
    fetchUsers();
  },[]);



  const fetchProjects = async()=>{

    try{

      const res = await api.get("/projects");
      setProjects(res.data);

    }
    catch(err){

      console.error(err);
      notify.error("Failed to load projects.");

    }

  };



  const fetchUsers = async()=>{

    try{

      const res = await api.get("/auth/users");
      setUsers(res.data);

    }
    catch(err){

      console.error(err);
      notify.error("Failed to load users.");

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

      await api.post("/tasks",task);

      notify.success("Task created successfully!");

      navigate("/tasks");

    }
    catch(err){

      console.error(err);
      notify.error("Failed to create task.");

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

    placeholder:text-slate-400

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

    <Card className="max-w-4xl mx-auto">

      <PageHeader
        title="Create Task"
        subtitle="Add a new task to your project"
      />



      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >


        {/* Title */}

        <div>

          <label className={labelClass}>
            Task Title
          </label>


          <input

            type="text"

            name="title"

            placeholder="Enter task title"

            value={task.title}

            onChange={handleChange}

            className={inputClass}

            required

          />

        </div>





        {/* Description */}

        <div>

          <label className={labelClass}>
            Description
          </label>


          <textarea

            rows="5"

            name="description"

            placeholder="Enter task description"

            value={task.description}

            onChange={handleChange}

            className={inputClass}

          />


        </div>






        {/* Priority + Status */}

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







        {/* Due Date + Project */}

        <div className="grid md:grid-cols-2 gap-5">


          <div>


            <label className={labelClass}>
              Due Date
            </label>


            <input

              type="date"

              name="due_date"

              value={task.due_date}

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

              required

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


        </div>








        {/* Assign User */}

        <div>


          <label className={labelClass}>
            Assign User
          </label>



          <select

            name="assigned_to"

            value={task.assigned_to}

            onChange={handleChange}

            className={inputClass}

            required

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






        <div className="flex justify-end">


          <Button type="submit">
            Create Task
          </Button>


        </div>



      </form>


    </Card>

  );

}