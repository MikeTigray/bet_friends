import Link from "next/link";
import React from "react";
import LeaderboardUsers from "./LeaderboardUsers";

const users = [
  {
    id: 1,
    image: "../images/user1.jpg",
    name: "welela leake",
    bets: 20,
    judge: 13,
    points: 4599,
  },
  {
    id: 2,
    image: "../images/user1.jpg",
    name: "welela leake",
    bets: 20,
    judge: 13,
    points: 4599,
  },
  {
    id: 3,
    image: "../images/user1.jpg",
    name: "welela leake",
    bets: 20,
    judge: 13,
    points: 4599,
  },
  {
    id: 4,
    image: "../images/user1.jpg",
    name: "welela leake",
    bets: 20,
    judge: 13,
    points: 4599,
  },
  {
    id: 5,
    image: "../images/user1.jpg",
    name: "welela leake",
    bets: 20,
    judge: 13,
    points: 4599,
  },
];
export default function UserPage() {
  return (
    <div className="min-w-[80%] flex flex-col font-thin">
      {" "}
      <div className="flex justify-between mt-[4.3rem]  ml-[5rem] ">
        <h1 className="text-7xl tracking-wider ">WELCOME, MIKE</h1>
        <div className="bg-coin text-4xl flex gap-4 items-center mr-6  rounded-2xl py-3 px-6 self-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-coin"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
          </svg>
          2000
        </div>
      </div>
      <div className="text-center text-6xl flex flex-col items-center gap-10 my-[9rem]">
        WHAT'S ON YOUR MIND?
        <button className="rounded-md w-[35rem] py-9 text-8xl bg-gradient-to-r from-blue-600 via-indigo-600 to-red-600">
          <Link
            href={{
              pathname: "/user/bet",
            }}
          >
            {" "}
            BET{" "}
          </Link>
        </button>
      </div>
      <div className="bg-secondaryblue w-[85%] self-center rounded-3xl">
        <h1 className="text-4xl my-9  mx-7"> TOP OF THE LEADERBOARD</h1>
        <ul className="flex justify-between mx-[3rem] text-2xl my-9 ">
          <li>USERS</li>
          <li>BETS</li>
          <li>JUDGE</li>
          <li>POINTS</li>
        </ul>
        {users.map((user) => {
          return (
            <LeaderboardUsers
              key={user.id}
              img={user.image}
              name={user.name}
              bets={user.bets}
              judge={user.judge}
              points={user.points}
            />
          );
        })}
      </div>
    </div>
  );
}
