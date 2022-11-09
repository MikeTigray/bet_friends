import Link from "next/link";
import React from "react";
import Header from "./Header";
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
      <Header>WELCOME,MIKE</Header>
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
