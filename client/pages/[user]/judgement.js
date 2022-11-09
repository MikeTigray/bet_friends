import React from "react";
import HomeNavigation from "../../components/HomeNavigation";
import JudgementPage from "../../components/Judgement/JudgementPage";

export default function judgement() {
  return (
    <div className="bg-black text-lightgrey flex min-h-screen">
      <HomeNavigation />
      <JudgementPage />
    </div>
  );
}
