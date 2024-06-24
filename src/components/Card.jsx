import React from "react";
import { Card } from "antd";
import { FaArrowRight } from "react-icons/fa";

const CustomCard = ({ title, incorrectQs, notAttemptedQs, imageUrl }) => (
  <Card
    className="shadow-md rounded-lg"
    bordered={false}
    style={{
      width: 250,
      margin: "10px",
    }}
  >
    <div className="flex items-center">
      <img className="w-5 h-5" src={imageUrl} alt="o2 logo" />
      <div className="px-4">
        <h1 className="font-semibold text-lg">{title}</h1>
        <p>Incorrect Qs: {incorrectQs}</p>
        <p>Not Attempted Qs: {notAttemptedQs}</p>
      </div>
      <FaArrowRight className="ml-auto" />
    </div>
  </Card>
);

export default CustomCard;
