import Image from "next/image";
import signin from "../images/Signin.jpg";
import React from "react";

export default function SingIn() {
  return (
    <div className="bg-black h-fit flex items-center justify-center pt-[15rem]">
      <div className="bg-gradient-to-r from-red-600 via-indigo-600 to-blue-600 h-content rounded-[25px] flex justify-between">
        <div>
          {" "}
          <form className="flex items-center flex-col gap-[3rem] p-[5rem]">
            <h1 className="text-7xl">Get Started</h1>
            <input placeholder="Name" />
            <input placeholder="Email" />
            <input placeholder="Password" />
            <button className="text-black rounded-md w-[15rem] py-[.8rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-red-600">
              Sign In
            </button>
          </form>
        </div>
        <div className="h-content max-h-[100%]">
          <Image
            className="max-h-[100%] "
            src={signin}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}
