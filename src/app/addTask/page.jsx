import React from "react";

const addTask = () => {
  return (
    <div className="w-full flex flex-col justify-center align-middle mt-10">
      <form className="bg-white justify-center w-[calc(100%-16px)] mx-auto shadow-xl px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="Task Name"
          >
            Task Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Task Name"
            type="text"
            placeholder="Task Name"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="Description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="Description"
            type="text"
            rows={10}
            placeholder="Please choose a description for your task..."
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default addTask;
