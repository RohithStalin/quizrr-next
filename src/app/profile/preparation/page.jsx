import React from "react";
import { LuPen } from "react-icons/lu";

const pageprep = () => {
  return (
    <div className="max-w-3xl  bg-gray-100 rounded-2xl shadow-lg overflow-hidden p-4 mx-7">
      <div className="max-w-md mx-auto  rounded-xl shadow-md overflow-hidden md:max-w-2xl m-2 p-4 bg-green-100">
        <h2 className="my-2">
          Please fill the details so that we can help you better in your
          preparation journey!
        </h2>
        <button className="flex gap-2 items-center bg-green-600 rounded-md p-2  text-white">
          <span>
            <LuPen />
          </span>
          Fill Details
        </button>
      </div>
    </div>
  );
};

export default pageprep;
