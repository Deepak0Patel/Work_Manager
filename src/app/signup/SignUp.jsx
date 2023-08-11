"use client";
import React, { useState } from "react";
import signup from "@/app/assets/signup.svg";
import Image from "next/image";
import { set } from "mongoose";
import { toast } from "react-toastify";
import { signUp } from "@/services/userService";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL:
      "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png",
  });

  const doSignUp = async (e) => {
    e.preventDefault();

    if (data.name.trim() === "" || data.name === null) {
      toast.warning("Name is required !!", {
        position: "top-right",
      });
      return;
    } else if (data.password.trim() === "" || data.password === null) {
      toast.warning("password is required !!", {
        position: "top-center",
      });
      return;
    }

    //form submit
    try {
      const result = await signUp(data);
      console.log(result);
      toast.success("User is register", {
        position: "top-center",
      });
      setData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL:
          "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png",
      });
    } catch (error) {
      console.log(error);
      toast.error("Signup Error !!" + error.response.data.massage, {
        position: "top-center",
      });
    }
  };

  const resetForm = (e) => {
    e.preventDefault();
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileURL:
        "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png",
    });
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 ">
        <div className=" flex justify-center mt-3 ">
          <Image src={signup} height={140} alt="signup" />
        </div>
        <div className=" ">
          <h1 className="text-xl text-center">Sign up here</h1>
          <form action="#!" className="mt-2">
            {/* name  */}
            <div className="mt-1">
              <label
                htmlFor="user_name"
                className=" block text-sm font-medium mb-1 ps-3"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full p-2.5 rounded-md bg-gray-800"
                placeholder="Enter here"
                id="user_name"
                name="user_name"
                onChange={(e) => setData({ ...data, name: e.target.value })}
                value={data.name}
              />
            </div>
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
                onChange={(e) => setData({ ...data, email: e.target.value })}
                value={data.email}
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
                onChange={(e) => setData({ ...data, password: e.target.value })}
                value={data.password}
              />
            </div>
            {/* about  */}
            <div className="mt-1">
              <label
                htmlFor="user_about"
                className=" block text-sm font-medium mb-1 ps-3"
              >
                About
              </label>
              <textarea
                className="w-full p-2.5 rounded-md bg-gray-800"
                placeholder="Enter here"
                id="user_about"
                rows={2}
                name="user_about"
                onChange={(e) => setData({ ...data, about: e.target.value })}
                value={data.about}
              ></textarea>
            </div>
            <div className="mt-1 text-center">
              <button
                onClick={doSignUp}
                className="px-2 py-1 bg-purple-600 rounded hover:bg-purple-400"
              >
                Signup
              </button>
              <button
                onClick={resetForm}
                className=" px-2 py-1 bg-red-600 ms-3 rounded hover:bg-red-400"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
