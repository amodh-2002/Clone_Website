import React from "react";
import Cards from "./Cards";

const SolutionsComp = () => {
  return (
    <div className="max-w-screen-2xl py-4 mx-auto mt-20 mb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-11 flex flex-col gap-16 items-center justify-center w-full ">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#333333] mb-4">
            Our Solutions
          </h1>
          <p className="text-lg text-center text-[#666666] mb-4">
            Experience Unmatched Success with Fretboard’s Solutions
          </p>
          <p className="text-lg text-[#666666] text-justify max-w-[950px]">
            At Fretboard, we are not only dedicated to providing top-notch IT
            solutions, but we also strive to assist you in scaling up and
            enhancing value for your clients through our highly proficient IT
            staffing division.
          </p>
        </div>
        <div>
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default SolutionsComp;
