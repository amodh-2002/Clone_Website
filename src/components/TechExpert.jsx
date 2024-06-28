import React from "react";
import TechExpertCard from "./TechExpertCard";

const TechExpert = () => {
  return (
    <div className="max-w-screen-2xl py-4 mx-auto mt-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-11 flex flex-col gap-16 items-center justify-center w-full ">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#333333] mb-4">
            Technology Expertise
          </h1>
          <p className="text-lg text-center text-[#666666] mb-4">
            Achieving success in technology takes Commitment, Consistency, and
            Creativity
          </p>
        </div>
        <TechExpertCard />
        <div className="my-10 max-w-[1020px]">
          <h1 className="text-lg sm:text-4xl font-bold text-center text-[#333333] mb-4">
            Tailored services for all industries.
          </h1>
          <p className="text-sm text-center text-[#666666] mb-4">
            While we take pride in the fact that, we are capable of providing
            the right solution across all the technology, verticals and domain,
            these are some of the industries where we really know the ropes.
            Information Technology, BFSI, Health Care, Automotive and
            Government.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechExpert;
