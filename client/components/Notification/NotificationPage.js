import React from "react";
import Header from "../Header";
import BetNotification from "./BetNotification";
import JudgeNotification from "./JudgeNotification";
const Bets = [
  {
    id: 1,
    name: "Mike",
    img: "../../images/user.jpg",
  },
  {
    id: 2,
    name: "Mike",
    img: "../../images/user.jpg",
  },
  {
    id: 3,
    name: "Mike",
    img: "../../images/user.jpg",
  },
  {
    id: 4,
    name: "Mike",
    img: "../../images/user.jpg",
  },
];
export default function NotificationPage() {
  return (
    <div className="w-[100%] flex flex-col ">
      <Header>Notification</Header>
      <div className="w-[85%] bg-secondaryblue flex flex-col self-center p-7 mt-10 rounded-3xl ">
        <div className="m-10">
          <h1 className="text-7xl tracking-wider ">BETS</h1>{" "}
          <div>
            <ul>
              {Bets.map((user) => {
                return <BetNotification name={user.name} />;
              })}
            </ul>
          </div>
        </div>
        <div className="m-10">
          <h1 className="text-7xl tracking-wider ">Judgement</h1>{" "}
          <div>
            <ul>
              {Bets.map((user) => {
                return <JudgeNotification name={user.name} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
