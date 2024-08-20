import React from "react";
import Cards from "../components/Cards";
import SolutionCard from "../components/SolutionCards";
import ContactUs from "../components/ContactUs";

const SolutionsPage = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-[#F36361] via-[#A8A8A8] to-[#FCC04A] max-w-screen-2xl mx-auto px-20 py-4 flex items-center justify-between ">
        <div className="pt-24 flex  justify-center flex-col gap-10 items-center mx-auto">
          <div className="">
            <h1 className="text-lg sm:text-xl font-bold text-center text-[#333333] mb-4">
              Our Solutions
            </h1>
            <p className="text-3xl text-center font-bold text-black mb-4">
              <span className="text-[#ffbe3c]">Evaluate,</span>{" "}
              <span className="text-white">Commit </span>
              and <span className="text-[#F36361]">Succeed</span> with Fretboard
            </p>
          </div>
          <SolutionCard />
          <Cards />
          <div className="bg-transparent">
            <ContactUs />
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsPage;
