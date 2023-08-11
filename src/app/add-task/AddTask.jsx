"use client";
import React, { useState } from "react";
import LoginSvg from "@/app/assets/login.svg";
import Image from "next/image";
import { addTask } from "@/services/taskServices";
import { toast } from "react-toastify";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    // this is tempory solution
    userId: "64d26717d817082e7948a628",
  });
  const handleAddTask = async (e) => {
    e.preventDefault();

    console.log(task);
    //validate task
    try {
      const result = await addTask(task);
      console.log(result);
      toast.success("Your task is added !!", {
        position: "top-center",
        theme: "dark",
      });
      setTask({
        title: "",
        content: "",
        status: "none",
      });
    } catch (error) {
      console.log(error);
      toast.error("Task not added !!", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="grid grid-cols-12 ">
      <div className="p-2 col-span-6 col-start-4 ">
        <div className=" flex justify-center">
          <Image src={LoginSvg} height={140} alt="loginimage" />
        </div>
        <h1 className="text-2xl text-center">Add your task !!</h1>

        <form action="#!" onSubmit={handleAddTask}>
          {/* task title */}
          <div className="mt-2">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              className="w-full p-2.5 rounded-md bg-gray-800"
              id="task_title"
              name="task_title"
              onChange={(e) => {
                setTask({
                  ...task,
                  title: e.target.value,
                });
              }}
              value={task.title}
            />
          </div>
          {/* task content */}
          <div className="mt-2">
            <label
              htmlFor="task_content"
              className="block text-sm font-medium mb-2"
            >
              Content
            </label>
            <textarea
              className="w-full p-0.5 rounded-md bg-gray-800"
              id="task_content"
              rows={4}
              name="task_content"
              onChange={(e) => {
                setTask({
                  ...task,
                  content: e.target.value,
                });
              }}
              value={task.content}
            />
          </div>
          {/* task status */}
          <div className="mt-2">
            <label
              htmlFor="task_status"
              className="block  text-sm font-medium mb-2"
            >
              Status
            </label>
            <select
              id="task_status"
              className="w-full p-2.5 rounded-md bg-gray-800"
              name="task_status"
              onChange={(e) => {
                setTask({
                  ...task,
                  status: e.target.value,
                });
              }}
              value={task.status}
            >
              <option value="none" disabled>
                ---Select----
              </option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          {/* button */}
          <div className="mt-4 flex justify-center">
            <button className="bg-purple-500 py-1 px-3 rounded-lg hover:bg-blue-800">
              Add Task
            </button>
            <button className="bg-red-400 py-1 px-3 rounded-lg hover:bg-red-800 ms-4">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
