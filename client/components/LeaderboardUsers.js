import React from "react";

export default function LeaderboardUsers(props) {
  return (
    <div className="py-5 m-7 bg-[#010A39]">
      <ul className="flex justify-between text-4xl">
        <li className="flex gap-4">
          {/* <img src={require(`${props.img}`)} alt="user" /> */}
          {props.name}
        </li>
        <li>{props.bets}</li>
        <li>{props.judge}</li>
        <li>{props.points}</li>
      </ul>
    </div>
  );
}
