import React from "react";
import Card from "@/components/Card.jsx";
import { cardData } from "../app/data.js";

const App = () => (
  <div className="flex flex-wrap justify-start">
    {cardData.map((card) => (
      <Card
        key={card.id}
        title={card.title}
        incorrectQs={card.incorrectQs}
        notAttemptedQs={card.notAttemptedQs}
        imageUrl={card.imageUrl}
      />
    ))}
  </div>
);

export default App;
