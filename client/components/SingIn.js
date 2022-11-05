import Image from "next/image";
import signin from "../images/Signin.jpg";
import React from "react";

export default function SingIn() {
  return (
    <div className="bg-black h-fit flex items-center justify-center pt-[15rem]">
      <div className="bg-gradient-to-r from-red-600 via-indigo-600 to-blue-600 h-content rounded-[25px] flex justify-between">
        <div>
          {" "}
          <form>
            <h1>Get Started</h1> <input />
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
