import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import api from "../services/api";

import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Loader from "../components/ui/Loader";
import PageHeader from "../components/ui/PageHeader";


export default function ProjectDetails() {

  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);



  useEffect(() => {
    fetchProjectDetails();
  }, []);



  const fetchProjectDetails = async () => {

    try {

      const projectRes = await api.get(
        `/projects/${id}`
      );


      const tasksRes = await api.get(
        "/tasks"
      );


      setProject(projectRes.data);


      const projectTasks = tasksRes.data.filter(
        (task) =>
          task.project_id === Number(id)
      );


      setTasks(projectTasks);


    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }

  };




  if (loading)
    return <Loader />;




  if (!project)
    return (
      <p className="text-slate-500">
        Project not found
      </p>
    );





  const completedTasks = tasks.filter(
    (task) =>
      task.status === "Completed"
  ).length;


  const progress =
    tasks.length === 0
      ? 0
      :
      Math.round(
        (completedTasks / tasks.length) * 100
      );





  return (

    <div className="space-y-6">


      <PageHeader

        title={project.name}

        subtitle="Project details and tasks"

      />




      {/* Project Information */}

      <Card>


        <div className="
          flex
          justify-between
          items-start
          gap-5
        ">


          <div>

            <h2 className="
              text-2xl
              font-bold
              text-slate-800
              dark:text-white
            ">
              {project.name}
            </h2>


            <p className="
              mt-3
              text-slate-600
              dark:text-slate-300
            ">
              {
                project.description ||
                "No description available."
              }
            </p>


          </div>



          <Badge

            text={project.status}

            type={
              project.status?.toLowerCase()
            }

          />


        </div>





        <div className="
          mt-8
          grid
          md:grid-cols-3
          gap-6
        ">


          <InfoItem
            label="Created By"
            value={project.createdBy}
          />


          <InfoItem
            label="Created At"
            value={
              new Date(
                project.created_at
              ).toLocaleDateString()
            }
          />


          <InfoItem
            label="Total Tasks"
            value={tasks.length}
          />


        </div>



      </Card>





      {/* Progress */}

      <Card>


        <div className="flex justify-between mb-3">

          <h2 className="text-xl font-bold">
            Project Progress
          </h2>


          <span className="font-semibold">
            {progress}%
          </span>


        </div>



        <div className="
          h-3
          bg-slate-200
          rounded-full
          overflow-hidden
        ">

          <div

            className="
              h-full
              bg-blue-600
              transition-all
            "

            style={{
              width:`${progress}%`
            }}

          />

        </div>


      </Card>





      {/* Tasks */}

      <Card>


        <h2 className="
          text-xl
          font-bold
          mb-5
        ">
          Project Tasks
        </h2>




        {
          tasks.length === 0 ?

          (

            <p className="text-slate-500">
              No tasks available.
            </p>

          )

          :

          (

          <div className="space-y-4">

            {
              tasks.map((task)=>(

                <div

                  key={task.id}

                  className="
                    flex
                    justify-between
                    items-center
                    border-b
                    pb-3
                  "

                >


                  <div>

                    <Link

                      to={`/tasks/${task.id}`}

                      className="
                        font-semibold
                        text-blue-600
                        hover:underline
                      "

                    >

                      {task.title}

                    </Link>


                    <p className="
                      text-sm
                      text-slate-500
                    ">
                      {task.assignedTo}
                    </p>


                  </div>



                  <Badge

                    text={task.status}

                    type={
                      task.status.toLowerCase()
                    }

                  />


                </div>

              ))
            }


          </div>

          )

        }


      </Card>


    </div>

  );

}





function InfoItem({
  label,
  value
}) {

  return (

    <div>

      <p className="
        text-sm
        text-slate-500
        dark:text-slate-400
      ">
        {label}
      </p>


      <p className="
        font-semibold
        mt-1
        text-slate-800
        dark:text-white
      ">
        {value || "N/A"}
      </p>


    </div>

  );

}