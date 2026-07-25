import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../services/api";

import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Loader from "../components/ui/Loader";
import PageHeader from "../components/ui/PageHeader";


export default function TaskDetails() {

  const { id } = useParams();

  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchTask();
  }, []);


  const fetchTask = async () => {

    try {

      const res = await api.get(`/tasks/${id}`);

      setTask(res.data);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }

  };


  if (loading) {
    return <Loader />;
  }


  if (!task) {
    return (
      <p className="text-slate-500">
        Task not found
      </p>
    );
  }


  return (

    <div className="space-y-6">


      <PageHeader
        title={task.title}
        subtitle="Task details and information"
      />



      <Card>


        <div className="flex justify-between items-start gap-5">


          <div>

            <h2 className="
              text-2xl 
              font-bold
              text-slate-800
              dark:text-white
            ">
              {task.title}
            </h2>


            <p className="
              mt-3
              text-slate-600
              dark:text-slate-300
            ">
              {
                task.description ||
                "No description provided."
              }
            </p>


          </div>



          <Badge
            text={task.status}
            type={task.status?.toLowerCase()}
          />


        </div>





        <div className="
          grid
          md:grid-cols-2
          gap-6
          mt-8
        ">


          <InfoItem
            label="Priority"
            value={task.priority}
          />


          <InfoItem
            label="Assigned To"
            value={task.assignedTo || "Unassigned"}
          />


          <InfoItem
            label="Project"
            value={task.projectName || "No Project"}
          />


          <InfoItem
            label="Due Date"
            value={
              task.due_date
              ? new Date(task.due_date)
                  .toLocaleDateString()
              : "No deadline"
            }
          />


          <InfoItem
            label="Created At"
            value={
              new Date(task.created_at)
              .toLocaleDateString()
            }
          />


        </div>


      </Card>





      <div className="
        grid
        md:grid-cols-2
        gap-6
      ">


        <Card>

          <h2 className="
            text-xl
            font-bold
            mb-4
          ">
            Status
          </h2>


          <Badge
            text={task.status}
            type={task.status?.toLowerCase()}
          />

        </Card>





        <Card>

          <h2 className="
            text-xl
            font-bold
            mb-4
          ">
            Priority
          </h2>


          <Badge
            text={task.priority}
            type={task.priority?.toLowerCase()}
          />

        </Card>


      </div>


    </div>

  );
}





function InfoItem({ label, value }) {

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
        mt-1
        font-semibold
        text-slate-800
        dark:text-white
      ">
        {value}
      </p>


    </div>

  );

}