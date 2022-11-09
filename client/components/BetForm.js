import Link from "next/link";
import React from "react";

export default function BetForm() {
  return (
    <div className="flex justify-center items-center">
      {" "}
      <form className="flex items-center flex-col gap-[6rem] p-[5rem] text-2xl ">
        <input
          className=" bg-transparent placeholder-lightgrey border-lightgrey  border-b-2 w-[52rem] "
          placeholder="Name"
        />
        <input
          className=" bg-transparent placeholder-lightgrey border-lightgrey border-b-2  w-[52rem] "
          placeholder="Description"
        />
        <input
          className=" bg-transparent placeholder-lightgrey border-lightgrey border-b-2  w-[52rem]"
          placeholder="Points"
        />
        <div>
          <h1> WHO YOU WANT TO BET WITH?</h1>
        </div>
        <button className="rounded-md w-[15rem] py-[.8rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-red-600">
          <Link
            href={{
              pathname: "/user",
            }}
          >
            {" "}
            Sign In{" "}
          </Link>
        </button>
      </form>
    </div>
  );
}
