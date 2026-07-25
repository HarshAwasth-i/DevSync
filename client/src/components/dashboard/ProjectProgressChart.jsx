import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";


export default function ProjectProgressChart({tasks}) {

  const grouped={};


  tasks.forEach((task)=>{

    if(!grouped[task.projectName]){

      grouped[task.projectName]={
        project:task.projectName,
        completed:0,
      };

    }


    if(task.status==="Completed"){
      grouped[task.projectName].completed++;
    }

  });


  const data=Object.values(grouped);


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
      p-6
      "
    >

      <h2
        className="
        text-lg
        font-bold
        text-slate-800
        dark:text-white
        mb-5
        "
      >
        Completed Tasks by Project
      </h2>


      <ResponsiveContainer width="100%" height={320}>

        <BarChart data={data}>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#334155"
          />


          <XAxis
            dataKey="project"
            stroke="#94a3b8"
          />


          <YAxis
            allowDecimals={false}
            stroke="#94a3b8"
          />


          <Tooltip
            contentStyle={{
              backgroundColor:"#0f172a",
              border:"none",
              borderRadius:"10px",
              color:"#fff"
            }}
          />


          <Bar
            dataKey="completed"
            fill="#3B82F6"
            radius={[8,8,0,0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );
}