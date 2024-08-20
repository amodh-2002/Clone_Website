import React from "react";

const SinglePageTechExpertCardSection = ({
  title,
  description,
  imageLeft,
  src,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-14 py-16 px-6 border-b">
      {imageLeft ? (
        <>
          <div className="md:w-3/12 mb-6 md:mb-0">
            <img
              src={src}
              alt="Section image"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4 text-zinc-800">{title}</h2>
            <p className="mb-6 text-white font-medium text-justify">
              {description}
            </p>
            <button className="bg-[#fff] font-medium text-[#F36361] px-4 py-2 rounded">
              Know More
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4 text-zinc-800">{title}</h2>
            <p className="mb-6 text-white font-medium text-justify">
              {description}
            </p>
            <button className="bg-[#fff] font-medium text-[#F36361] px-4 py-2 rounded">
              Know More
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src={src}
              alt="Section image"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SinglePageTechExpertCardSection;
