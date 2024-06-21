import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuFileText } from "react-icons/lu";

const Page = () => {
  return (
    <div className=" m-7 ">
      <h1 className="font-medium text-blue-500 text-2xl mb-1">
        Good Evening, G Pritiranjan!
      </h1>
      <p className="text-gray-400 font-medium text-xl">
        Welcome back! All the best because #PaperPhodnaHai
      </p>
      <h1 className="text-2xl font-medium mb-5 mt-5">Your test series</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="flex items-center w-full h-24 bg-white border border-gray-300 rounded-lg shadow-md p-4 space-x-4 m-4">
          <img
            className="h-12 w-12 object-contain"
            src="https://cdn.quizrr.in/web-assets/icons/exams/jee-main.png"
            alt="logo"
          />
          <div className="flex-1 overflow-hidden">
            <p className="font-semibold text-sm text-gray-700">
              JEE Main 2025 Full Test Series
            </p>
          </div>
          <IoIosArrowRoundForward className="text-gray-700 h-6 w-6" />
        </div>
        <div className="flex items-center w-full h-24 bg-white border border-gray-300 rounded-lg shadow-md p-4 space-x-4 m-4">
          <img
            className="h-12 w-12 object-contain"
            src="https://cdn.quizrr.in/web-assets/icons/exams/jee-main.png"
            alt="logo"
          />
          <div className="flex-1 overflow-hidden">
            <p className="font-semibold text-sm text-gray-700 ">
              JEE Main 2025 Chapter-wise Test Series
            </p>
          </div>
          <IoIosArrowRoundForward className="text-gray-700 h-6 w-6" />
        </div>
        <div className="flex items-center w-full h-24 bg-white border border-gray-300 rounded-lg shadow-md p-4 space-x-4 m-4">
          <img
            className="h-12 w-12 object-contain"
            src="https://cdn.quizrr.in/web-assets/icons/exams/bitsat.png"
            alt="logo"
          />
          <div className="flex-1 overflow-hidden">
            <p className="font-semibold text-sm text-gray-700 ">
              BITSAT 2024 Full Test Series
            </p>
          </div>
          <IoIosArrowRoundForward className="text-gray-700 h-6 w-6" />
        </div>
        <div className="flex items-center w-full h-24 bg-white border border-gray-300 rounded-lg shadow-md p-4 space-x-4 m-4">
          <img
            className="h-12 w-12 object-contain"
            src="https://cdn.quizrr.in/web-assets/icons/exams/bitsat.png"
            alt="logo"
          />
          <div className="flex-1 overflow-hidden">
            <p className="font-semibold text-sm text-gray-700 ">
              BITSAT 2024 Full Test Series (MiniPack)
            </p>
          </div>
          <IoIosArrowRoundForward className="text-gray-700 h-6 w-6" />
        </div>
        <div className="flex items-center text-sm w-full h-24 bg-white border border-gray-300 rounded-lg shadow-md p-4 space-x-4 m-4">
          <img
            className="h-12 w-12 object-contain"
            src="https://cdn.quizrr.in/web-assets/icons/exams/bitsat.png"
            alt="logo"
          />
          <div className="flex-1 overflow-hidden">
            <p className="font-semibold text-sm text-gray-700 ">
              BITSAT 2024 Chapter-wise Test Series
            </p>
          </div>
          <IoIosArrowRoundForward className="text-gray-700 h-6 w-6" />
        </div>
      </div>
      <h1 className="font-medium text-2xl my-7">Explore Other Test Series</h1>
      <div className="card max-w-xs bg-white border border-gray-200 rounded-lg shadow-md p-4">
        <img
          className="w-full h-auto rounded-t-lg"
          src="https://cdn.quizrr.in/web-assets/img/pack_banners/viteee_2024_test_series.png"
          alt="Image"
        />
        <ul className="list-none space-y-2 p-8">
          <li className="flex items-center p-1">
            <LuFileText />
            <svg
              className="w-5 h-5 text-gray-500 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            Download Schedule
          </li>
          <li className="flex ">
            <span className=" mr-2">✓</span>5 VITEEE, 3 MET, 2 SMRJEEE Mocks
          </li>
          <li className="flex ">
            <span className=" mr-2">✓</span>
            15 VITEEE PYQs as Mocks (2008 - 2023)
          </li>
          <li className="flex">
            <span className="0 mr-2">✓</span>
            15 Page In-Depth Analysis
          </li>
        </ul>
        <button className="text-blue-500 mr-20 ml-3">View Tests</button>
        <button className="text-red-500 border border-solid p-2 rounded-lg border-red-500">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Page;
