import {
  FaUsers,
  FaLaptopCode,
  FaUserTie,
} from "react-icons/fa";

import StatCard from "../ui/StatCard";


export default function TeamStats({members}) {


const total = members.length;


const developers = members.filter(
(member)=>
member.role
.toLowerCase()
.includes("developer")
).length;


const others = total - developers;



const cards=[

{
title:"Total Members",
value:total,
icon:<FaUsers/>,
color:"blue",
subtitle:"Team members"
},


{
title:"Developers",
value:developers,
icon:<FaLaptopCode/>,
color:"green",
subtitle:"Engineering team"
},


{
title:"Other Roles",
value:others,
icon:<FaUserTie/>,
color:"purple",
subtitle:"Supporting roles"
}

];



return (

<div
className="
grid
grid-cols-1
md:grid-cols-3
gap-6
mb-8
"
>

{
cards.map(card=>(

<StatCard
key={card.title}
title={card.title}
value={card.value}
icon={card.icon}
color={card.color}
subtitle={card.subtitle}
/>

))
}

</div>

);

}