import Link from "next/link";
import React from "react";
import BetUsers from "./BetUsers";
const betOption = [
  { id: 1, name: "Micheal Abay", img: "user1.jpg" },
  { id: 2, name: "Micheal Abay", img: "user1.jpg" },
  { id: 3, name: "Micheal Abay", img: "user1.jpg" },
  { id: 4, name: "Micheal Abay", img: "user1.jpg" },
  { id: 5, name: "Micheal Abay", img: "user1.jpg" },
];
const baseUrl = "../../images/";
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
        <div className="flex flex-col items-center gap-8">
          <h1> WHO YOU WANT TO BET WITH?</h1>
          <ul className="flex gap-8">
            {betOption.map((user) => {
              return (
                <BetUsers
                  key={user.id}
                  img={baseUrl + user.img}
                  name={user.name}
                />
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col items-center gap-8">
          <h1> WHO YOU WANT THE JUDGE TO BE?</h1>
          <ul className="flex gap-8">
            {betOption.map((user) => {
              return (
                <BetUsers
                  key={user.id}
                  img={baseUrl + user.img}
                  name={user.name}
                />
              );
            })}
          </ul>
        </div>
        <button className="rounded-md w-[15rem] py-[.8rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-red-600">
          <Link
            href={{
              pathname: "/user",
            }}
          >
            {" "}
            BET{" "}
          </Link>
        </button>
      </form>
    </div>
  );
}
