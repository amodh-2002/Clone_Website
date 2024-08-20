import React from "react";
import NewHero from "../components/NewHero";
import PageTechExpertCardSection from "../components/PageTechExpertCardSection";
import ContactUs from "../components/ContactUs";

const TechExpert = () => {
  return (
    <>
      <NewHero
        title="Technology Expertise"
        desc="Focused business requires intense Commitment, Consistency, and Creativity ."
      />
      <div className="max-w-screen-2xl mx-auto px-20 py-4 flex items-center justify-between ">
        <div className="max-w-screen-2xl mx-auto  w-full ">
          <div className="flex justify-between items-center gap-10 w-full my-14">
            <div className="space-y-3 w-full">
              <h1 className="text-3xl font-bold text-zinc-800">
                Empower Your Tech Vision: Fretboard's Strategic Solutions for
                Today's Business Landscape!
              </h1>
              <p className="text-zinc-700 text-justify">
                <span className="text-[#F36361] font-medium">Fretboard</span> has an intense appreciation of what it
                takes to be a strategic partner in the Technology business, as
                companies look to uphold and progress their competitive benefit
                in today’s swiftly altering economy. We play an essential role
                in the in-depth research & development (R&D) process in areas
                such as software product development, including assistance with
                developing new and emerging technologies. Fretboard offers
                custom technology solutions designed to meet our clients’
                demands through both Managed Services and staff augmentation
                models.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#F36361] to-[#A8A8A8]  rounded-lg">
            <PageTechExpertCardSection />
          </div>
          <div className="">
            <ContactUs />
          </div>
        </div>
      </div>
    </>
  );
};

export default TechExpert;
