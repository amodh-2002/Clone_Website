import React from "react";
import SingleODCCard from "./SingleODCCard";

const ODCCards = () => {
  return (
    <div className="flex items-center justify-center gap-10 flex-wrap">
      <SingleODCCard title="Low Development Cost" />
      <SingleODCCard title="Hassel free Infrastructure support." />
      <SingleODCCard title="Secured" />
      <SingleODCCard title="Cost Effective" />
      <SingleODCCard title="Improved Productivity" />
      <SingleODCCard title="Accelerated growth" />
    </div>
  );
};

export default ODCCards;
