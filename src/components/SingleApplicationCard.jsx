import React from "react";

const SingleApplicationCard = ({ title, desc }) => {
  return (
    <div className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg">
      <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center p-4 gap-3">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-xl font-bold mb-2">{title}</h1>
          <div className="h-1 w-40 bg-[#F36361] flex items-center  mb-2 "></div>
        </div>
        <p className="text-gray-200 text-sm mb-2 max-w-xl">{desc}</p>
      </div>
    </div>
  );
};

export default SingleApplicationCard;
