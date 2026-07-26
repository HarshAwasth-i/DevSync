import { useEffect, useRef, useState } from "react";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

import ActivityFeed from "../dashboard/ActivityFeed";
import useActivities from "../../hooks/useActivities";

export default function NotificationDropdown() {
  const [open, setOpen] = useState(false);

  const { activities } = useActivities();

  const dropdownRef = useRef(null);
  

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <div
      className="relative"
      ref={dropdownRef}
    >
      <button
        onClick={() => setOpen(!open)}
        className="
          relative
          w-10
          h-10

          rounded-xl

          flex
          items-center
          justify-center

          bg-slate-100
          dark:bg-slate-800

          hover:scale-105

          transition
        "
      >
        <FaBell className="text-lg" />

        {activities.length > 0 && (
          <span
            className="
              absolute
              -top-1
              -right-1

              min-w-[20px]
              h-5

              px-1

              rounded-full

              bg-red-500

              text-white
              text-[10px]
              font-bold

              flex
              items-center
              justify-center
            "
          >
            {activities.length}
          </span>
        )}
      </button>

      <div
        className={`
          absolute
          right-0
          mt-3

          w-[92vw] sm:w-[380px]

          rounded-2xl

          bg-white
          dark:bg-slate-900

          border
          border-slate-200
          dark:border-slate-700

          shadow-2xl

          z-50

          transition-all
          duration-300

          ${
            open
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-2 invisible"
          }
        `}
      >
        <div
          className="
            p-5

            border-b
            border-slate-200
            dark:border-slate-700
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
            Notifications
          </h2>
        </div>

        <div className="max-h-96 overflow-y-auto">
          <ActivityFeed
            compact
            limit={5}
          />
        </div>

        <Link
          to="/activity"
          onClick={() => setOpen(false)}
          className="
            block

            p-4

            text-center

            font-semibold

            text-blue-600

            hover:bg-slate-50
            dark:hover:bg-slate-800

            transition
          "
        >
          View All Activity →
        </Link>
      </div>
    </div>
  );
}