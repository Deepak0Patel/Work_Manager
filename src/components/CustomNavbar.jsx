"use client";
import React from "react";
import Link from "next/link";
const CustomNavbar = () => {
  return (
    <nav className=" bg-purple-600 text-white h-16 py-2 px-5 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl font-semibold">
          <Link href="/"> Work Manager</Link>
        </h1>
      </div>
      <div>
        <ul className=" flex space-x-5 ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/add-task">Add Task</Link>
          </li>
          <li>
            <Link href="/show-task">Show Task</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className=" flex space-x-3">
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/signup">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
