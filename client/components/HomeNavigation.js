import React from "react";

export default function HomeNavigation() {
  return (
    <div className="bg-darkblue w-contain">
      {" "}
      <div className="flex flex-col font-thin p-5 font-Montserrat text-lightgrey">
        <h1 className=" text-3xl  underline my-2 ">MICHEAL ABAY</h1>
        <ul className="text-2xl">
          <li>Home</li>
          <li>Notification</li>
          <li>Judgment</li>
          <li>Sign-Out</li>
        </ul>
      </div>
    </div>
  );
}
