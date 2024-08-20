import React from "react";

const CompanyModel = () => {
  return (
    <div>
      <div className="flex flex-col mt-6 bg-gradient-to-br from-[#F36361]  to-[#FCC04A] rounded-lg py-24 px-32 items-stretch gap-20">
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="text-3xl text-zinc-800 font-bold">
            Team <span className="text-[#fff]">Fretboard .</span>
          </h1>
          <p className="text-zinc-700 font-medium">
            Team Fretboard . Our versatile team of experts specializes in
            technology and consulting. Their passion for their craft and love
            for their work is reflected in the striking solutions they craft.
            Our team’s competence, versatility, and creativity are key to our
            success in delivering exceptional results to our clients.
          </p>
        </div>
        <div className="flex gap-10">
          <div className="border rounded-lg p-10 flex-1 bg-[#121212] bg-opacity-90 text-white flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <h1 className="text-[#F36361] text-2xl font-semibold">
                Distinctive
              </h1>
              <div className="h-1 w-36 bg-[#F36361]"></div>
              <p>
                We fearlessly pursue our goals and push boundaries to achieve
                success, taking our clients and team along with us on the
                journey to the top.
              </p>
            </div>
          </div>
          <div className="border rounded-lg p-10 flex-1 bg-[#121212] bg-opacity-90 text-white flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <h1 className="text-[#F36361] text-2xl font-semibold">Dynamic</h1>
              <div className="h-1 w-36 bg-[#F36361]"></div>
              <p>
                Our team is always prepared and equipped to handle any
                challenge. With our expertise and quick thinking, we can provide
                effective solutions and deliver impactful results.
              </p>
            </div>
          </div>
          <div className="border rounded-lg p-10 flex-1 bg-[#121212] bg-opacity-90 text-white flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <h1 className="text-[#F36361] text-2xl font-semibold">Drive</h1>
              <div className="h-1 w-36 bg-[#F36361]"></div>
              <p>
                We partner with our clients throughout their journey, providing
                guidance and support to help them achieve their goals and
                inspire them to reach even greater heights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyModel;
