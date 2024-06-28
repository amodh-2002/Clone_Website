import React from "react";
import SingleCard from "./SingleCard";
import solution from "../assets/solution.jpg";
import odc from "../assets/odc.jpg";
import application from "../assets/application.jpg";

const Cards = () => {
  return (
    <div className="flex items-center gap-20">
      <SingleCard title="Application Development" img={application} />
      <SingleCard title="ODC" img={odc} />
      <SingleCard title="Workforce Solutions" img={solution} />
    </div>
  );
};

export default Cards;
