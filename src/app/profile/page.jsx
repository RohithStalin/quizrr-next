import React from "react";

const Page = () => {
  return (
    <div className="mx-12 ml-28">
      <div className="w-[150%] h-auto border-red-700 border-spacing-4 shadow-md rounded-md">
        <div className="flex justify-between items-center p-2 py-4 border-b">
          <div className=" flex justify-start items-center gap-2 p-2 w-[15%]">
            <img
              className="w-10 h-10 p-1 rounded-full"
              src="https://lh3.googleusercontent.com/a-/AOh14GgEqkeSnJ9F3Ey5XI3oVoSXEvT6ha8M2jH2DtmJig=s96-c"
              alt="logo-g"
            />
            <span className="text-[10px]">
              G Pritiranjan gpritiranjan.das@gmail.com +917978849212 Arunachal
              Pradesh, India, 560039.
            </span>
          </div>
          <div>
            <button className="bg-blue-500 text-white  rounded-md text-sm p-2">
              Edit profile
            </button>
          </div>
        </div>
        <span className="block w-[98%] border-b border-gray-300 ml-2"></span>
        <div className="flex justify-between text-sm items-center p-2 py-4">
          <span className="">Engineering</span>
          <span>goal</span>
        </div>
        <span className="block w-[98%] border-b border-gray-300 ml-2"></span>
        <div className="flex justify-between items-center p-2 text-sm py-4">
          <span>Engineering</span>
          <span>goal</span>
        </div>
        <span className="block w-[98%] border-b border-gray-300 ml-2"></span>
        <div className="flex justify-between items-center p-2 text-sm py-4">
          <span className="">Engineering</span>
          <span>goal</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
