import { FaEnvelope, FaEdit, FaTrash } from "react-icons/fa";
import Card from "../ui/Card";

export default function TeamCard({
  member,
  onEdit,
  onDelete,
}) {
  const initials = member.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <Card>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
          {initials}
        </div>

        <div>
          <h2 className="text-lg font-bold">
            {member.name}
          </h2>

          <p className="text-gray-500">
            {member.role}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 text-gray-600">
        <FaEnvelope />

        <span>{member.email}</span>
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button
          onClick={() => onEdit(member)}
          className="text-blue-600 hover:text-blue-800"
        >
          <FaEdit />
        </button>

        <button
          onClick={() => onDelete(member)}
          className="text-red-600 hover:text-red-800"
        >
          <FaTrash />
        </button>
      </div>
    </Card>
  );
}