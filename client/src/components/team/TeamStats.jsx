import { FaUsers, FaLaptopCode, FaUserTie } from "react-icons/fa";

export default function TeamStats({ members }) {
  const total = members.length;

  const developers = members.filter((member) =>
    member.role.toLowerCase().includes("developer")
  ).length;

  const others = total - developers;

  const cards = [
    {
      title: "Total Members",
      value: total,
      icon: <FaUsers />,
      color: "bg-blue-500",
    },
    {
      title: "Developers",
      value: developers,
      icon: <FaLaptopCode />,
      color: "bg-green-500",
    },
    {
      title: "Other Roles",
      value: others,
      icon: <FaUserTie />,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-5 mb-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-md p-5 flex justify-between items-center"
        >
          <div>
            <p className="text-gray-500">
              {card.title}
            </p>

            <h2 className="text-3xl font-bold">
              {card.value}
            </h2>
          </div>

          <div
            className={`${card.color} text-white p-4 rounded-full text-2xl`}
          >
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
}