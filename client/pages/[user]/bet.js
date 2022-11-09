import React from "react";
import BetPage from "../../components/Bet/BetPage";
import HomeNavigation from "../../components/HomeNavigation";

export default function bet() {
  return (
    <div className="bg-black text-lightgrey flex min-h-screen">
      <HomeNavigation />
      <BetPage />
    </div>
  );
}
