import {
  FaEnvelope,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import Card from "../ui/Card";
import Badge from "../ui/Badge";


export default function TeamCard({
  member,
  onEdit,
  onDelete,
}) {

  const initials = member.name
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase();


  return (

    <Card
      className="
      hover:scale-[1.02]
      transition-all
      duration-300
      "
    >

      <div className="flex items-center gap-4">


        <div
          className="
          w-16
          h-16
          rounded-2xl
          bg-blue-600
          text-white
          flex
          items-center
          justify-center
          text-xl
          font-bold
          shadow
          "
        >
          {initials}
        </div>



        <div>

          <h2
            className="
            text-lg
            font-bold
            text-slate-800
            dark:text-white
            "
          >
            {member.name}
          </h2>


          <Badge
            text={member.role}
            type="active"
          />


        </div>


      </div>



      <div
        className="
        mt-5
        flex
        items-center
        gap-3
        text-slate-600
        dark:text-slate-300
        "
      >

        <FaEnvelope />

        <span className="text-sm">
          {member.email}
        </span>

      </div>



      <div className="flex justify-end gap-4 mt-6">


        <button
          onClick={()=>onEdit(member)}
          className="
          p-2
          rounded-lg
          text-blue-600
          hover:bg-blue-100
          dark:hover:bg-slate-700
          transition
          "
        >
          <FaEdit size={18}/>
        </button>



        <button
          onClick={()=>onDelete(member)}
          className="
          p-2
          rounded-lg
          text-red-600
          hover:bg-red-100
          dark:hover:bg-slate-700
          transition
          "
        >
          <FaTrash size={18}/>
        </button>


      </div>


    </Card>

  );
}