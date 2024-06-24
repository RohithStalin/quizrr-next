import React from "react";
import Toggle from "../../../components/Toggle.jsx";

const page = () => {
  return (
    <div className="w-[70vw] mx-12 bg-gray-100 rounded-2xl shadow-lg overflow-hidden p-6">
      <div className="flex justify-between mb-5 ">
        <h2 className="flex flex-col text-lg font-semibold">
          Dark Mode{" "}
          <span className="text-sm font-normal">
            Color scheme of your Quizrr app
          </span>
        </h2>
        <Toggle />
      </div>
      <div className="flex justify-between mb-5">
        <h2 className="flex flex-col text-lg font-semibold">
          Important Emails{" "}
          <span className="text-sm font-normal">
            Receive emails related to your purchased packs like upcoming test,
            result declaration etc.
          </span>
        </h2>
        <Toggle />
      </div>
      <div className="flex justify-between mb-5 ">
        <h2 className="flex flex-col text-lg font-semibold">
          Generic Emails{" "}
          <span className="text-sm font-normal">
            Receive emails of new test series, discounts etc.
          </span>
        </h2>
        <Toggle />
      </div>
      <div className="flex justify-between mb-5 ">
        <h2 className="flex flex-col text-lg font-semibold">
          Important Push Notificationse{" "}
          <span className="text-sm font-normal">
            Receive notifications related to your purchased packs like upcoming
            test, result declaration etc.
          </span>
        </h2>
        <Toggle />
      </div>
      <div className="flex justify-between mb-5 ">
        <h2 className="flex flex-col text-lg font-semibold">
          Generic Push Notifications{" "}
          <span className="text-sm font-normal">
            Receive notifications of new test series, discounts etc.
          </span>
        </h2>
        <Toggle />
      </div>
      <div className="flex justify-between mb-5 ">
        <h2 className="flex flex-col text-lg font-semibold">
          Disable Predicted Percentile/Rank{" "}
          <span className="text-sm font-normal">
            On disabling this option, we won&apos;t show you your predicted
            percentile or rank wherever applicable.
          </span>
        </h2>
        <Toggle />
      </div>
    </div>
  );
};

export default page;
