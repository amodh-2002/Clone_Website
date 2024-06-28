import React from "react";
import TechExpertSingleCard from "./TechExpertSingleCard";

const TechExpertCard = () => {
  return (
    <div className="flex flex-wrap gap-14 items-center justify-center -mt-6">
      <TechExpertSingleCard
        title="Application and Web Development Tech"
        img="/src/assets/application.jpg"
      />
      <TechExpertSingleCard title="BI" img="/src/assets/second.jpg" />
      <TechExpertSingleCard
        title="Disruptive Technologies"
        img="/src/assets/third.jpg"
      />
      <TechExpertSingleCard title="ERP" img="/src/assets/application.jpg" />
      <TechExpertSingleCard
        title="Infrastructure"
        img="/src/assets/second.jpg"
      />
      <TechExpertSingleCard
        title="Microsoft Technologies"
        img="/src/assets/solution.jpg"
      />
      <TechExpertSingleCard
        title="Mobile Technologies"
        img="/src/assets/first.jpg"
      />
      <TechExpertSingleCard title="Testing" img="/src/assets/odc.jpg" />
    </div>
  );
};

export default TechExpertCard;
