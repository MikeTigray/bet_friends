import React from "react";
import Header from "../Header";
const judgementUsers = [
  { id: 1, name: "micheal abay", img: "../../images/user1.jpg" },
];

export default function JudgementPage() {
  return (
    <div className="w-[80%] flex flex-col font-thin">
      <Header>Judgement</Header>
      <div className="text-center text-4xl">
        <h1>
          YOU'VE BEEN CHOSEN:
          <br /> WHO WON?
        </h1>
      </div>
    </div>
  );
}
