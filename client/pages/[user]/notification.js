import React from "react";
import HomeNavigation from "../../components/HomeNavigation";
import NotificationPage from "../../components/Notification/NotificationPage";

export default function notification() {
  return (
    <div className="bg-black  text-lightgrey flex min-h-screen">
      <HomeNavigation />
      <NotificationPage />
    </div>
  );
}
