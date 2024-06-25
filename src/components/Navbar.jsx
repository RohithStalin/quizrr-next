"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CiHome } from "react-icons/ci";
import { BiBookmark } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";
import { BiError } from "react-icons/bi";
import { LuBook } from "react-icons/lu";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { LuBell } from "react-icons/lu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (path) => {
    setActiveLink(path);
    setIsOpen(false);
  };

  return (
    <div className="bg-white flex flex-col items-start md:w-40 w-20 border-r border-gray-200 h-full fixed">
      <div className="flex flex-col items-center border-b border-gray-200 pb-4 w-full ">
        <Link
          href="/home"
          onClick={() => handleClick("/home")}
          className="flex flex-col items-center"
        >
          <img
            className="h-10 w-11"
            src="https://frontend-git-feat-new-onboarding-scoremarks-technologies.vercel.app/assets/img/brand-icon.svg"
            alt="Quizrr logo"
          />
          <h3 className="text-gray-700 font-medium text-center md:block hidden">
            Beta
          </h3>
        </Link>
      </div>
      <div className="md:hidden w-full flex justify-end p-2">
        <button onClick={toggleNavbar} className="text-gray-700">
          {isOpen ? (
            <IoClose className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>
      </div>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:block mt-2 md:mt-5 w-full`}
      >
        <ul className="flex flex-col w-full space-y-1 ">
          {[
            { path: "/home", label: "Home", Icon: CiHome },
            { path: "/packs", label: "Packs", Icon: LuBook },
            { path: "/notebooks", label: "Notebooks", Icon: BiBookmark },
            { path: "/errors", label: "Errors", Icon: BiError },
            { path: "/profile", label: "Profile", Icon: RxPerson },
          ].map(({ path, label, Icon }) => (
            <li
              key={path}
              className={`flex items-center justify-start p-2 text-gray-400 hover:text-purple-900 ${
                activeLink === path
                  ? "text-purple-900 border-l-4 border-blue-800 bg-gray-100"
                  : ""
              }`}
            >
              <Link
                href={path}
                onClick={() => handleClick(path)}
                className="flex items-center w-full space-x-2"
              >
                <Icon className="h-7 w-7" />
                <span className="uppercase text-[10px] md:inline hidden">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col items-center mt-28 space-y-4 pt-4 border-t border-gray-200">
          <li className="p-2">
            <LuBell className="h-5 w-5 text-gray-700 " />
          </li>
          <li>
            <img
              src="https://lh3.googleusercontent.com/a-/AOh14GgEqkeSnJ9F3Ey5XI3oVoSXEvT6ha8M2jH2DtmJig=s96-c"
              alt="G logo"
              className="w-8 h-8  rounded-full"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
