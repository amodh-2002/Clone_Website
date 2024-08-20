import React from "react";

const SingleTechUsedCard = ({ list, title }) => {
  return (
    <div className="relative w-64 h-72 overflow-hidden rounded-lg shadow-lg">
      <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center p-4 gap-3">
        <h1 className="text-white text-xl font-bold mb-2 text-center">
          {title}
        </h1>
        <div className="h-1 w-28 bg-[#F36361] mb-2"></div>
        <ul className="text-white flex flex-col list-disc gap-2 text-sm">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleTechUsedCard;
