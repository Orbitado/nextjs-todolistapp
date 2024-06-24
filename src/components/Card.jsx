import React from "react";

const Card = ({ tasks }) => {
  return (
    <div className="mx-auto flex flex-col justify-center items-center align-middle w-[calc(100%-512px)] h-[calc(100vh-12rem)]">
      <ul>
        {tasks.map((task) => (
          <li
            key={task._id}
            className="flex flex-col flex-wrap shadow-xl p-4 my-6"
          >
            <div class="flex justify-between">
              <label
                class="mt-px font-light text-gray-700 cursor-pointer select-none"
                htmlFor={task._id}
              >
                <div>
                  <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    {task.title}
                  </p>
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                    {task.description}
                  </p>
                </div>
              </label>
              <label
                class="relative flex items-center p-3 -mt-5 rounded-full cursor-pointer"
                htmlFor={task._id}
              >
                <input
                  type="checkbox"
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-700 hover:before:opacity-10"
                  id={task.id}
                />
                <span class="absolute text-white transition-opacity opacity-10 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
