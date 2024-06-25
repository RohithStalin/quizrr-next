import PageError from "@/components/PageError";
import React from "react";

const page = () => {
  return (
    <div className="mt-12 mx-24">
      <div>
        <h1 className="font-medium text-3xl">Error Analysis</h1>
        <p className="text-xs text-gray-400 font-normal">
          REVISIT QUESTIONS WHICH YOU EITHER ATTEMPTED INCORRECTLY OR DIDN'T
          ATTEMPT IN THE PAPER
        </p>
        <div className="flex p-4 border-b border-orange-400">
          <img
            className="text-orange-700"
            src="https://cdn.quizrr.in/web-assets/analysis-v3/subjects/chemistry.svg"
            alt="chemistry logo"
          />
          <h1 className="font-semibold text-2xl text-orange-400 pl-2">
            Chemistry
          </h1>
        </div>
        <PageError className="md:grid grid-cols-4" />
      </div>

      <div>
        <div className="flex p-4 border-b border-orange-500">
          <img
            className="text-orange-700"
            src="https://cdn.quizrr.in/web-assets/analysis-v3/subjects/logical-reasoning.svg"
            alt="Englishlogo"
          />
          <h1 className="font-semibold text-2xl text-orange-500 pl-2">
            English and Logical Reasoning
          </h1>
        </div>
        <PageError className="md:grid grid-cols-4" />
      </div>
      <div>
        <div className="flex p-4 border-b border-blue-500">
          <img
            className="text-blue-600"
            src="https://cdn.quizrr.in/web-assets/analysis-v3/subjects/maths.svg"
            alt="maths logo"
          />
          <h1 className="font-semibold text-2xl text-blue-400 pl-2">
            Mathematics
          </h1>
        </div>
        <PageError className="md:grid grid-cols-4" />
      </div>
      <div>
        <div className="flex p-4 border-b border-green-500">
          <img
            className="text-green-600"
            src="https://cdn.quizrr.in/web-assets/analysis-v3/subjects/physics.svg"
            alt="Physics Logo"
          />
          <h1 className="font-semibold text-2xl text-green-500 pl-2">
            Physics
          </h1>
        </div>
        <PageError className="md:grid grid-cols-4" />
      </div>
    </div>
  );
};

export default page;
