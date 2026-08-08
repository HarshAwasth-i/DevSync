import { Link } from "react-router-dom";

import {
  FolderKanban,
  CheckCircle,
  Kanban,
  ChartNoAxesCombined,
  Users,
  ShieldCheck
} from "lucide-react";


export default function Home() {


const features = [
{
title:"Project Management",
icon: FolderKanban,
desc:"Organize software projects with a powerful and intuitive workspace."
},
{
title:"Task Tracking",
icon: CheckCircle,
desc:"Create, assign and monitor tasks with complete progress visibility."
},
{
title:"Kanban Workflow",
icon: Kanban,
desc:"Drag and drop tasks across workflow stages effortlessly."
},
{
title:"Analytics Dashboard",
icon: ChartNoAxesCombined,
desc:"Understand productivity with project insights and statistics."
},
{
title:"Team Collaboration",
icon: Users,
desc:"Manage responsibilities and collaborate with your team."
},
{
title:"Secure Authentication",
icon: ShieldCheck,
desc:"JWT based authentication with protected application routes."
}
];


const tech=[
"React",
"Node.js",
"Express",
"MySQL",
"JWT",
"Tailwind CSS",
"Railway",
"Render",
"Vercel"
];



return (

<div className="
min-h-screen
bg-gradient-to-b
from-slate-50
via-white
to-slate-100
text-slate-900
">



{/* NAVBAR */}

<nav className="
sticky top-0 z-50
bg-white/80
backdrop-blur-xl
border-b
">


<div className="
max-w-7xl mx-auto px-6 py-4
flex justify-between items-center
">


<div className="flex items-center gap-3">


<div className="
w-10 h-10
rounded-xl
bg-gradient-to-br from-blue-600 to-indigo-600
text-white
flex items-center justify-center
font-black text-xl
">
D
</div>


<div>

<h1 className="text-xl font-black">
Dev<span className="text-blue-600">Sync</span>
</h1>

<p className="text-xs text-gray-500">
Project Workspace
</p>

</div>


</div>




<div className="
hidden md:flex gap-10
text-gray-600 font-medium
">


<a href="#features" className="hover:text-blue-600">
Features
</a>


<a href="#tech" className="hover:text-blue-600">
Tech Stack
</a>


<a
href="https://github.com/HarshAwasth-i"
target="_blank"
rel="noreferrer"
className="hover:text-blue-600"
>
GitHub
</a>


</div>



<Link
to="/login"
className="
bg-gradient-to-r
from-blue-600
to-indigo-600
text-white
px-7 py-3
rounded-xl
font-semibold
shadow-lg
"
>

Login →

</Link>



</div>

</nav>





{/* HERO */}


<section className="
relative
max-w-7xl mx-auto
px-6
pt-20
pb-32
grid
lg:grid-cols-[1fr_1.2fr]
gap-10
items-center
">


<div>


<span className="
bg-blue-100
text-blue-700
px-5 py-2
rounded-full
font-semibold
">

🚀 Full Stack Project Management Platform

</span>



<h1 className="
mt-8
text-5xl lg:text-6xl
font-black
leading-tight
">


Manage Projects.

<br/>

Build Faster.

<br/>


<span className="
bg-gradient-to-r
from-blue-600
to-indigo-600
text-transparent
bg-clip-text
">

Ship Better.

</span>


</h1>




<p className="
mt-8
text-lg
lg:text-xl
text-slate-600
leading-8
max-w-lg
">

DevSync helps developers and teams organize projects,
manage tasks, collaborate efficiently and track progress
through dashboard analytics and Kanban workflow.

</p>




<div className="flex gap-5 mt-10">


<Link
to="/login"
className="
bg-blue-600
text-white
px-8 py-3.5
rounded-xl
font-bold
shadow-lg
"
>
Get Started →
</Link>



<a
href="https://github.com/HarshAwasth-i"
target="_blank"
rel="noreferrer"
className="
border
border-gray-300
px-8 py-3.5
rounded-xl
font-bold
bg-white
"
>
View GitHub
</a>


</div>


</div>






<div className="
relative
group
lg:mr-0
">


{/* Glow */}

<div className="
absolute
inset-0
bg-blue-500
blur-3xl
opacity-20
rounded-full
">
</div>



{/* Dashboard Image */}

<div className="
relative
rounded-3xl
overflow-hidden
border
border-slate-800
shadow-2xl
bg-slate-950
p-2
">


<img
src="/dashboard-preview.png"
alt="DevSync Dashboard"
className="
rounded-2xl
w-full
h-auto
"
/>


</div>


</div>


</section>






{/* STATS */}


<section className="
max-w-7xl mx-auto
px-6 pb-24
">


<div className="
grid
grid-cols-2
md:grid-cols-4
gap-6
">


{
[
{
number:"3+",
label:"Projects Built"
},
{
number:"10+",
label:"Core Features"
},
{
number:"8+",
label:"Technology Modules"
},
{
number:"100%",
label:"Responsive Design"
}

].map(item=>(


<div
key={item.label}
className="
bg-white
rounded-3xl
p-8
border
border-slate-200
shadow-sm
hover:shadow-xl
hover:-translate-y-2
transition-all
text-center
"
>


<h2 className="
text-5xl
font-black
text-blue-600
">

{item.number}

</h2>


<p className="mt-3 text-gray-600">
{item.label}
</p>


</div>


))

}


</div>


</section>







{/* FEATURES */}


<section
id="features"
className="
max-w-7xl
mx-auto
px-6
py-28
">


<h2 className="
text-4xl
md:text-5xl
font-black
tracking-tight
text-center
mb-16
">

Why Choose DevSync?

</h2>



<div className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
">


{features.map(item=>{


const Icon=item.icon;


return(

<div
key={item.title}
className="
bg-white
rounded-3xl
p-10
min-h-[260px]
border
border-slate-200
shadow-sm
hover:shadow-xl
hover:-translate-y-2
transition-all
duration-300
"
>


<div className="
w-14 h-14
rounded-2xl
bg-blue-100
flex items-center justify-center
text-blue-600
">

<Icon size={30}/>

</div>


<h3 className="
text-xl
font-bold
mt-6
">

{item.title}

</h3>


<p className="
mt-3
text-gray-600
">

{item.desc}

</p>


</div>


)

})}


</div>


</section>






{/* HOW IT WORKS */}

<section className="
py-24
bg-white
">


<h2 className="
text-5xl
font-black
text-center
mb-16
text-slate-900
">

How DevSync Works

</h2>



<div className="
max-w-6xl
mx-auto
px-6
relative
">


{/* Connecting Line */}

<div className="
hidden
md:block
absolute
top-16
left-20
right-20
h-1
bg-blue-100
">
</div>



<div className="
grid
md:grid-cols-4
gap-8
relative
">


{
[
{
step:"01",
title:"Create Project",
desc:"Create your workspace and define project goals."
},
{
step:"02",
title:"Add Tasks",
desc:"Break projects into tasks and assign responsibilities."
},
{
step:"03",
title:"Track Progress",
desc:"Monitor tasks using dashboard and Kanban boards."
},
{
step:"04",
title:"Ship Faster",
desc:"Complete work efficiently with better collaboration."
}

].map((item)=>(


<div
key={item.step}
className="
text-center
"
>


<div className="
mx-auto
w-20
h-20
rounded-full
bg-blue-600
text-white
flex
items-center
justify-center
text-3xl
font-black
relative
z-10
shadow-lg
">

{item.step}

</div>



<h3 className="
mt-6
text-xl
font-bold
text-slate-900
">

{item.title}

</h3>



<p className="
mt-3
text-slate-600
leading-6
">

{item.desc}

</p>



</div>


))

}


</div>


</div>


</section>







{/* TECH */}


<section id="tech" className="py-20">


<h2 className="
text-4xl
md:text-5xl
font-black
tracking-tight
text-center
mb-12
">

Built With

</h2>


<div className="
flex flex-wrap
justify-center
gap-5
">


{
tech.map(t=>(

<span
key={t}
className="
bg-blue-100
text-blue-700
px-6 py-3
rounded-full
font-semibold
"
>

{t}

</span>

))

}


</div>


</section>







{/* CTA */}

<section className="py-24 px-6">


<div className="
max-w-6xl
mx-auto
rounded-3xl
bg-gradient-to-r
from-blue-600
via-indigo-600
to-purple-600
text-white
text-center
p-16
shadow-2xl
">


<h2 className="
text-4xl
md:text-5xl
font-black
tracking-tight
">

Ready to Transform Your Workflow?

</h2>



<p className="
mt-5
text-lg
text-blue-100
">

Manage projects, track tasks and collaborate
better with DevSync.

</p>



<Link
to="/login"
className="
inline-block
mt-10
bg-white
text-blue-700
px-10
py-4
rounded-xl
font-bold
hover:scale-105
transition
shadow-lg
"
>

Launch DevSync →

</Link>


</div>


</section>





{/* FOOTER */}


<footer className="
bg-slate-950
text-gray-300
py-12
">


<div className="
max-w-7xl
mx-auto
px-6
flex
flex-col
md:flex-row
justify-between
gap-8
">


<div>

<h2 className="
text-3xl
font-black
text-white
">

DevSync

</h2>


<p className="
mt-2
text-gray-400
">

A modern project management workspace
for developers.

</p>


</div>




<div className="
flex
gap-8
">


<a
href="https://github.com/HarshAwasth-i"
target="_blank"
rel="noreferrer"
className="hover:text-white"
>
GitHub
</a>



<a
href="https://linkedin.com"
target="_blank"
rel="noreferrer"
className="hover:text-white"
>
LinkedIn
</a>



<Link
to="/login"
className="hover:text-white"
>
Login
</Link>


</div>




<p className="text-gray-500">

© 2026 Harsh Awasthi

</p>



</div>


</footer>



</div>


)

}