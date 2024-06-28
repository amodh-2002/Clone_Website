import React from "react";

const SingleCard = ({ title, img }) => {
  return (
    <div className="relative w-72 h-72 overflow-hidden rounded-lg shadow-lg">
      <img
        src={img}
        alt="Application Development"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
        <h2 className="text-white text-xl font-bold mb-2">{title}</h2>
        <button className="bg-white text-black py-2 px-4 rounded-full text-sm font-semibold hover:bg-opacity-90 transition duration-300">
          Know More
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
