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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/home"); // Default to home

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (path) => {
    setActiveLink(path);
    setIsOpen(false); // Close navbar on link click (optional)
  };

  return (
    <div className="bg-white flex flex-col items-start p-4 md:p-8 m-3 md:w-64 w-20 border-r border-gray-500">
      <div className="flex flex-col items-center border-b border-gray-500 pb-4 w-full">
        <Link href="/home" onClick={() => handleClick("/home")} className="">
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
      <div className="md:hidden w-full flex justify-end">
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
        } md:block mt-8 md:mt-12 w-full`}
      >
        <ul className="flex flex-col w-full gap-5">
          <li
            className={`flex items-center p-2 gap-2 text-gray-400 hover:text-purple-900 ${
              activeLink === "/home" ? "text-purple-900" : ""
            }`}
          >
            <Link
              onClick={() => handleClick("/home")}
              className="flex items-center w-full"
              href="/home"
            >
              <CiHome className="h-7 w-7" />
              <span className="uppercase text-sm md:inline hidden">Home</span>
            </Link>
          </li>
          <li
            className={`flex items-center p-2 gap-2 text-gray-400 hover:text-purple-900 ${
              activeLink === "/packs" ? "text-purple-900" : ""
            }`}
          >
            <Link
              onClick={() => handleClick("/packs")}
              className="flex items-center w-full"
              href="/packs"
            >
              <LuBook className="h-7 w-7" />
              <span className="uppercase text-sm md:inline hidden">Packs</span>
            </Link>
          </li>
          <li
            className={`flex items-center p-2 gap-2 text-gray-400 hover:text-purple-900 ${
              activeLink === "/notebooks" ? "text-purple-900" : ""
            }`}
          >
            <Link
              onClick={() => handleClick("/notebooks")}
              className="flex items-center w-full"
              href="/notebooks"
            >
              <BiBookmark className="h-7 w-7" />
              <span className="uppercase text-sm md:inline hidden">
                Notebooks
              </span>
            </Link>
          </li>
          <li
            className={`flex items-center p-2 gap-2 text-gray-400 hover:text-purple-900 ${
              activeLink === "/errors" ? "text-purple-900" : ""
            }`}
          >
            <Link
              onClick={() => handleClick("/errors")}
              className="flex items-center w-full"
              href="/errors"
            >
              <BiError className="h-7 w-7" />
              <span className="uppercase text-sm md:inline hidden">Errors</span>
            </Link>
          </li>
          <li
            className={`flex items-center p-2 gap-2 text-gray-400 hover:text-purple-900 ${
              activeLink === "/profile" ? "text-purple-900" : ""
            }`}
          >
            <Link
              onClick={() => handleClick("/profile")}
              className="flex items-center w-full"
              href="/profile"
            >
              <RxPerson className="h-7 w-7" />
              <span className="uppercase text-sm md:inline hidden">
                Profile
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
