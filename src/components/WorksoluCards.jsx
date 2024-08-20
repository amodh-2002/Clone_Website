import React from "react";
import SingleWorksoluCard from "./SingleWorksoluCard";

const WorksoluCards = () => {
  return (
    <div className="flex items-center justify-center gap-10 flex-wrap">
      <SingleWorksoluCard
        span="At beck and call:"
        title=" We’re dedicated to providing you with quick access to our vast talent pool and will always go above and beyond to ensure your staffing needs are met."
      />
      <SingleWorksoluCard
        span="Cost-effective:"
        title=" Quality staffing doesn’t have to come at a high cost. We provide affordable solutions that deliver the talent you need."
      />
      <SingleWorksoluCard
        span="Ownership:"
        title=" Fretboard is your all-in-one solution for staffing needs. From developer onboarding to quality control, we handle the entire process for you. With our proven track record of successful implementations, you can rely on us to get the job done right. "
      />
      <SingleWorksoluCard
        span="Positive mindset:"
        title=" Our positive attitude drives outstanding results. We’re known for our consistency, collaboration, creativity, and passion for learning."
      />
    </div>
  );
};

export default WorksoluCards;
