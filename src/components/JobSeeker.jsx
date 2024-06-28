import React from "react";

const JobSeeker = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-4 my-20 flex items-center justify-center px-4 sm:px-6 lg:px-8 ">
      <div className="container mx-auto px-11 w-full flex flex-col lg:flex-col items-center justify-between">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#333333] mb-4 ">
          Careers
        </h1>
        <p className="text-lg text-center text-[#666666] mb-4 max-w-[820px]">
          Embark on a rewarding career journey by engaging with our latest
          cutting-edge use cases, unlocking vast opportunities for professional
          growth and success.
        </p>
        <div className="flex mt-6 bg-gradient-to-br from-[#F36361]  to-[#FCC04A] rounded-lg py-36 px-40 items-stretch gap-32">
          <div className="border rounded-lg p-10 flex-1 bg-[#121212] bg-opacity-90 text-white flex flex-col justify-between">
            <div>
              <p>Job Seekers</p>
              <h1 className="text-[#F36361] text-2xl font-semibold my-4">
                Dream Bigger, Do Bigger
              </h1>
              <p className="text-[#A8A8A8]">Enter your future @ Fretboard</p>
            </div>
            <button className="mt-4 bg-[#FCC04A] text-black px-4 py-2 rounded-md">
              Apply for Jobs
            </button>
          </div>
          <div className="border rounded-lg p-10 flex-1 bg-[#121212] bg-opacity-90 text-white flex flex-col justify-between">
            <div>
              <p>Hire Talent</p>
              <h1 className="text-[#F36361] text-2xl font-semibold my-4">
                Hire Faster. Hire Smarter
              </h1>
              <p className="text-[#A8A8A8]">
                Ready to build your team? Get in touch with us now.
              </p>
            </div>
            <button className="mt-4 bg-[#FCC04A] text-black px-4 py-2 rounded-md">
              Post your Requirements
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeeker;
