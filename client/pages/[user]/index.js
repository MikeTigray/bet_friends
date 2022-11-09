import React from "react";
import HomeNavigation from "../../components/HomeNavigation";
import UserPage from "../../components/UserPage";

export default function index() {
  return (
    <div className="bg-black  text-lightgrey flex">
      <HomeNavigation />
      <UserPage />
    </div>
  );
}
