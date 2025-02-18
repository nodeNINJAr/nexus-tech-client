import React from "react";
import { format } from "date-fns";
import useAuth from "../hooks/useAuth";

const Greeting = () => {
    const {user} = useAuth();
  // Get the current date and time
  const now = new Date();
  const currentTime = format(now, "h:mm a");
  const taskCount = 2; // Replace with actual task count

  // Determine the appropriate greeting based on the time of day
  const getGreeting = () => {
    const hours = now.getHours();
    if (hours >= 5 && hours < 12) return "Good morning";
    if (hours >= 12 && hours < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="w-full mx-auto flex flex-wrap justify-between items-center p-4 bg-white dark:bg-gray-900 gap-4 rounded-xl mb-10">
      {/* Left Side: Greeting and Task Notification */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 font-exo2">
          {`${getGreeting()}, ${user?.displayName}!`}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">
          {user?.email==="suzume99@gmail.com" ? "Hey Admin , Pay The Employee First":`You have ${{taskCount} }tasks pending.`}
        </p>
      </div>

      {/* Right Side: Current Time */}
      <div className="space-x-2">
        <span className="text-gray-600 dark:text-gray-400 font-exo2 text-start md:text-end block font-medium">Current time</span>
        <div className="flex justify-start items-center gap-2">
          <span className="text-3xl font-exo2 font-semibold text-gray-800 dark:text-white text-left block -ml-2">
            {currentTime}
          </span>
          <button
            type="button"
            className="p-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 text-gray-600 dark:text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Greeting;