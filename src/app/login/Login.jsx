"use client";
import { login } from "@/services/userService";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginSubmitted = async (e) => {
    e.preventDefault();
    console.log(loginData);
    if (loginData.email.trim() === "" || loginData.password.trim() === "") {
      toast.info("invalid data !!", {
        position: "top-center",
      });
      return;
    }
    // valid Data
    // Login

    try {
      const result = await login(loginData);
      console.log(result);
      toast.success("logged in", {
        position: "top-center",
      });

      // redirect
      router.push("/profile/user");
    } catch (error) {
      toast.error("failed to login", {
        position: "top-center",
      });
      console.log(error);
    }
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 ">
        <div className=" flex justify-center mt-3 "></div>
        <h1 className="text-xl text-center">Login here</h1>
        <form action="" onSubmit={loginSubmitted}>
          {/* email  */}
          <div className="mt-1">
            <label
              htmlFor="user_email"
              className=" block text-sm font-medium mb-1 ps-3"
            >
              E-mail
            </label>
            <input
              type="email"
              className="w-full p-2.5 rounded-md bg-gray-800"
              placeholder="Enter here"
              id="user_email"
              name="user_email"
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              value={loginData.email}
            />
          </div>
          {/* password  */}
          <div className="mt-1">
            <label
              htmlFor="user_password"
              className=" block text-sm font-medium mb-1 ps-3"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full p-2.5 rounded-md bg-gray-800"
              placeholder="Enter here"
              id="user_password"
              name="user_password"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              value={loginData.password}
            />
          </div>
          <div className="mt-1 text-center">
            <button className="px-2 py-1 bg-purple-600 rounded hover:bg-purple-400">
              Login
            </button>
            <button className=" px-2 py-1 bg-red-600 ms-3 rounded hover:bg-red-400">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
