import Link from "next/link";
import React from "react";
import Header from "../Header";
import JudgementUser from "./JudgementUser";
const judgementUsers = [
  { id: 1, name: "micheal abay", img: "../../images/user1.jpg" },
  { id: 1, name: "welela tesfay", img: "../../images/user1.jpg" },
];

export default function JudgementPage() {
  return (
    <div className="w-[80%] flex flex-col font-thin ">
      <Header>Judgement</Header>
      <div className="text-center text-4xl flex flex-col items-center justify-aroun gap-[9rem] mt-[8rem]">
        <h1>
          YOU'VE BEEN CHOSEN:
          <br /> WHO WON?
        </h1>
        <div className="flex justify-center gap-[11rem]">
          {judgementUsers.map((user) => {
            return (
              <JudgementUser key={user.id} name={user.name} img={user.img} />
            );
          })}
        </div>
        <button className="rounded-md w-[20rem] py-[.8rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-red-600 py-7">
          <Link
            href={{
              pathname: "/user",
            }}
          >
            {" "}
            SUBMIT{" "}
          </Link>
        </button>
      </div>
    </div>
  );
}
