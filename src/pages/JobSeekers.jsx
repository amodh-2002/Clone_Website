import React from "react";
import NewHero from "../components/NewHero";
import JobSeekersCards from "../components/JobSeekersCards";
import ContactUs from "../components/ContactUs";
import jobImage from "/src/assets/solution.jpg";

const JobSeekers = () => {
  return (
    <>
      <NewHero title="Job Seekers" desc="Dream Believe Achieve." />
      <div className="max-w-screen-2xl mx-auto px-20 py-4 flex items-center justify-between">
        <div className="max-w-screen-2xl mx-auto  w-full">
          <div className="flex justify-between items-center gap-10 w-full my-14">
            <div className="space-y-3 w-2/3">
              <h1 className="text-3xl font-bold text-zinc-800">
                Unleash Your Potential: Join Forces with Fretboard for Tech
                Opportunities!
              </h1>
              <p className="text-zinc-700 ">
                <span className="text-[#F36361] font-medium">Fretboard </span>
                is at the forefront of the rapidly evolving technology
                landscape, offering job seekers an unparalleled platform to
                access strategic roles in cutting-edge research & development
                (R&D), software product development, and emerging technology
                initiatives. With custom technology solutions and a commitment
                to empowering talent, Fretboard provides a gateway for
                individuals to embark on rewarding career journeys and
                contribute to the future of technology innovation. Join
                Fretboard today to explore exciting opportunities and make your
                mark in the tech industry.
              </p>
            </div>
            <div className="w-2/6">
              <img
                src={jobImage}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                alt=""
              />
            </div>
          </div>
          <div className="my-20 space-y-5 ">
            <h1 className="text-3xl font-bold text-center text-zinc-800">
              Job Options
            </h1>
            <div className="bg-gradient-to-br from-[#FCC04A] to-[#A8A8A8] rounded-lg">
              <JobSeekersCards />
            </div>
          </div>
          <div className="">
            <ContactUs />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobSeekers;
