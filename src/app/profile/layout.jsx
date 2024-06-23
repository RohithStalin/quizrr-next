// This is the layout for the /profile route
import TopNav from "@/components/TopNav";
import React from "react";

const ProfileLayout = ({ children }) => {
  return (
    <div className="fixed">
      <TopNav />
      <main>{children}</main>
    </div>
  );
};

export default ProfileLayout;
