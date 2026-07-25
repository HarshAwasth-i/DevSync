export default function UpcomingDeadlines({tasks}) {

  const upcoming=[...tasks]
    .filter(task=>task.due_date)
    .sort(
      (a,b)=>
      new Date(a.due_date)-new Date(b.due_date)
    )
    .slice(0,5);



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
        Upcoming Deadlines
      </h2>



      {
        upcoming.length===0 ?

        <p className="text-slate-500">
          No upcoming deadlines 🎉
        </p>


        :

        <div className="space-y-4">

        {
          upcoming.map(task=>(

            <div
              key={task.id}
              className="
              flex
              justify-between
              items-center
              border-b
              border-slate-200
              dark:border-slate-700
              pb-3
              "
            >

              <div>

                <h3
                  className="
                  font-semibold
                  text-slate-800
                  dark:text-white
                  "
                >
                  {task.title}
                </h3>


                <p
                  className="
                  text-sm
                  text-slate-500
                  "
                >
                  {task.projectName}
                </p>

              </div>


              <span
                className="
                px-3
                py-1
                rounded-full
                text-sm
                bg-red-100
                text-red-700
                "
              >
                {new Date(task.due_date)
                .toLocaleDateString()}
              </span>


            </div>

          ))
        }

        </div>
      }

    </div>

  );
}