import {
  FaArrowRight,
  FaFolderPlus,
  FaTasks,
  FaUsers,
} from "react-icons/fa";

import {Link} from "react-router-dom";

import Card from "../ui/Card";


export default function QuickActions(){

const actions=[
{
title:"Manage Projects",
icon:<FaFolderPlus className="text-blue-500"/>,
link:"/projects"
},
{
title:"Manage Tasks",
icon:<FaTasks className="text-green-500"/>,
link:"/tasks"
},
{
title:"Manage Team",
icon:<FaUsers className="text-purple-500"/>,
link:"/teams"
}
];


return(

<Card>

<h2
className="
text-xl
font-bold
text-slate-800
dark:text-white
mb-5
"
>
Quick Actions
</h2>


<div className="space-y-3">


{
actions.map(action=>(

<Link
key={action.title}
to={action.link}
className="
flex
items-center
justify-between
p-4
rounded-xl
hover:bg-slate-100
dark:hover:bg-slate-800
transition
"
>

<div className="flex items-center gap-3">

{action.icon}

<span
className="
font-medium
text-slate-700
dark:text-slate-200
"
>
{action.title}
</span>

</div>


<FaArrowRight
className="text-slate-400"
/>


</Link>

))
}


</div>

</Card>

);

}