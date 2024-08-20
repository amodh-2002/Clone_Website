import React from "react";
import SingleApplicationCard from "./SingleApplicationCard";

const ApplicationCards = () => {
  return (
    <div className="flex items-center justify-center gap-20">
      <SingleApplicationCard
        title="Development"
        desc="Our competent team builds tough, secured and agile mobile solutions and connected web platforms."
      />
      <SingleApplicationCard
        title="Strategy"
        desc="Every Outstanding app we design starts with a complete business and launch strategy."
      />
      <SingleApplicationCard
        title="UX and UI Design"
        desc="User-centric UX and UI design is one of our core expertise. We design apps that engage users n develop an obsession towards it."
      />
      <SingleApplicationCard
        title="Maintenance"
        desc="We offer flexible long term maintenance options to ensure your app stays live, up-to-date and running smoothly."
      />
    </div>
  );
};

export default ApplicationCards;
