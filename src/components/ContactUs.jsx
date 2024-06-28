import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-4 h-56 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F36361] via-[#A8A8A8] to-[#FCC04A]">
      <div className="container mx-auto px-11 w-full flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center justify-center flex-col gap-8 mx-auto">
          <h1 className="text-3xl text-gray-900 font-bold  max-w-[880px] text-justify">
            Experience Peace of Mind with Our Services
          </h1>
          <button className="bg-white text-[#F36361] hover:bg-opacity-90 font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
