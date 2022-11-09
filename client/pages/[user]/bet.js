import React from "react";
import BetPage from "../../components/BetPage";
import HomeNavigation from "../../components/HomeNavigation";
import UserPage from "../../components/UserPage";

export default function bet() {
  return (
    <div className="bg-black text-lightgrey flex h-screen">
      <HomeNavigation />
      <BetPage />
    </div>
  );
}
