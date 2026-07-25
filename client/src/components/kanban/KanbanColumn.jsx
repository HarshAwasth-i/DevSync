import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import TaskCard from "./TaskCard";


export default function KanbanColumn({
  id,
  title,
  tasks,
}) {


const {setNodeRef,isOver}=useDroppable({
  id,
});



const columnColors={
  Pending:
  "border-blue-500",

  "In Progress":
  "border-yellow-500",

  Completed:
  "border-green-500",
};



return (

<div

ref={setNodeRef}

className={`
rounded-2xl

border-t-4

${columnColors[id]}


bg-white
dark:bg-slate-900


border
border-slate-200
dark:border-slate-700


shadow-sm


p-4


min-h-[500px]


transition-all


${

isOver

?

"bg-blue-50 dark:bg-slate-800"

:

""

}

`}

>


<div
className="
flex
justify-between
items-center
mb-5
"
>


<h2

className="
text-lg
font-bold

text-slate-800
dark:text-white
"

>

{title}

</h2>



<span

className="
bg-slate-100
dark:bg-slate-800

text-slate-700
dark:text-slate-200

rounded-full

px-3
py-1

text-sm

font-semibold
"

>

{tasks.length}

</span>


</div>



<SortableContext

items={
tasks.map(task=>String(task.id))
}

strategy={verticalListSortingStrategy}

>


<div className="space-y-3">


{
tasks.map(task=>(

<TaskCard
key={task.id}
task={task}
/>

))
}


</div>


</SortableContext>



</div>

);

}