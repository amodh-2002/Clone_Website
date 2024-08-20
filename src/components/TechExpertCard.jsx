import React from "react";
import TechExpertSingleCard from "./TechExpertSingleCard";
import image1 from "/src/assets/application.jpg";
import image2 from "/src/assets/second.jpg";
import image3 from "/src/assets/third.jpg";
import image4 from "/src/assets/solution.jpg";
import image5 from "/src/assets/first.jpg";
import image6 from "/src/assets/odc.jpg";

const TechExpertCard = () => {
  return (
    <div className="flex flex-wrap gap-14 items-center justify-center -mt-6">
      <TechExpertSingleCard
        title="Application and Web Development Tech"
        img={image1}
      />
      <TechExpertSingleCard title="BI" img={image2} />
      <TechExpertSingleCard title="Disruptive Technologies" img={image3} />
      <TechExpertSingleCard title="ERP" img={image1} />
      <TechExpertSingleCard title="Infrastructure" img={image2} />
      <TechExpertSingleCard title="Microsoft Technologies" img={image4} />
      <TechExpertSingleCard title="Mobile Technologies" img={image5} />
      <TechExpertSingleCard title="Testing" img={image6} />
    </div>
  );
};

export default TechExpertCard;
