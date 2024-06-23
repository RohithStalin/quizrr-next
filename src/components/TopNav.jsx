"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopNav = () => {
  const [activelink, setActiveLink] = useState("");
  const pathname = usePathname();

  const handleClick = (path) => {
    setActiveLink(path);
  };

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <div className="flex w-full  justify-between mx-7">
      <div className="flex justify-between items-center mx-7 mt-4">
        <div className="flex flex-col gap-3 mb-7 border-b">
          <span className="text-xs">OVERVIEW</span>
          <h1 className="text-2xl font-semibold">Account</h1>
          <div className="flex gap-3">
            <span
              className={`${
                isActive("/profile") ? "border-b border-blue-600" : ""
              }`}
            >
              <Link onClick={() => handleClick("/profile")} href="/profile">
                Profile
              </Link>
            </span>
            <span
              className={`${
                isActive("/profile/settings") ? "border-b border-blue-600" : ""
              }`}
            >
              <Link
                onClick={() => handleClick("/profile/settings")}
                href="/profile/settings"
              >
                Settings
              </Link>
            </span>
            <span
              className={`${
                isActive("/profile/preparation")
                  ? "border-b border-blue-600"
                  : ""
              }`}
            >
              <Link
                onClick={() => handleClick("/profile/preparation")}
                href="/profile/preparation"
              >
                Preparation Details
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div>
        <button className="bg-blue-500 text-white p-2 rounded-lg m-7 text-sm">
          Logout
        </button>
      </div>
    </div>
  );
};

export default TopNav;
