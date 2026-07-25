import { FaSearch } from "react-icons/fa";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
}) {
  return (
    <div className="relative mb-6">
      <FaSearch
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-slate-400
          dark:text-slate-500
        "
      />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full

          pl-11
          pr-4
          py-3

          rounded-xl

          border
          border-slate-300
          dark:border-slate-700

          bg-white
          dark:bg-slate-900

          text-slate-800
          dark:text-slate-100

          placeholder:text-slate-400
          dark:placeholder:text-slate-500

          outline-none

          transition-all
          duration-200

          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
          dark:focus:ring-blue-900/40
        "
      />
    </div>
  );
}