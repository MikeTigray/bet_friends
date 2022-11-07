import React from "react";
import HomeNavigation from "../../components/HomeNavigation";

export default function index() {
  return (
    <div className="bg-black h-screen flex">
      <HomeNavigation />
      <div className="bg-slate-50"> top</div>
    </div>
  );
}
