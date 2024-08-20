import React from "react";

const NewHero = ({ title, desc }) => {
  return (
    <div className="max-w-screen-2xl h-[420px] mx-auto py-4  flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F36361] via-[#A8A8A8] to-[#FCC04A]">
      <div className="container mx-auto px-11 max-h-96 w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Left side content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1
            className="text-[40px] font-bold text-white mb-4 drop-shadow-lg"
            style={{ lineHeight: "1.5" }}
          >
            {title}
          </h1>

          <p className="text-[22px] text-white mb-6 drop-shadow">{desc}</p>
        </div>

        {/* Right side carousel */}
      </div>
    </div>
  );
};
export default NewHero;
