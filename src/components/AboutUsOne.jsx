import React from "react";
import about from "../assets/about.jpg";

const AboutUsOne = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-4 px-4 sm:px-6 lg:px-8 mt-20 mb-20">
      <div className="container mx-auto px-11 w-full flex items-center justify-between">
        <div className="w-2/3">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Empowering Businesses with Customized IT Solutions
          </h2>
          <p className="text-lg text-gray-700 mb-4 max-w-[720px] text-justify">
            Fretboard Interactive Systems offers tailored technology solutions
            to enhance your business success. Our expert team specializes in
            custom software development, cloud migration, and cybersecurity,
            ensuring you stay ahead of the competition. We are committed to
            providing exceptional service and support to help you achieve your
            goals.
          </p>
          <p className="text-lg text-gray-700">
            Contact us today to elevate your technology and propel your business
            to new heights.
          </p>
          <div className="flex items-center mt-4 gap-2 text-gray-700">
            <p>Learn More: </p>
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-[#F36361]">
                About <span className="text-[#A8A8A8]">|</span>
              </span>
              <span className="text-[#F36361]">
                Job Seekers <span className="text-[#A8A8A8]">|</span>
              </span>
              <span className="text-[#F36361]">
                Hire Talent <span className="text-[#A8A8A8]">|</span>
              </span>
              <span className="text-[#F36361]">Contact Us</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="ml-32">
            <img src={about} alt="" className="max-w-md  rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsOne;
