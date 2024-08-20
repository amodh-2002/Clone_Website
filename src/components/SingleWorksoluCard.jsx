import React from "react";

const SingleWorksoluCard = ({ span, title }) => {
  return (
    <div className="relative w-[520px] h-[220px] overflow-hidden rounded-lg shadow-lg">
      <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center p-4 gap-3">
        <h1 className="text-white text-[16px] font-medium  mb-2 text-justify">
          <span className="text-[#F36361]">{span}</span>
          {title}
        </h1>
      </div>
    </div>
  );
};

export default SingleWorksoluCard;
