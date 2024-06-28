import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="max-w-screen-2xl mx-auto py-4 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F36361] via-[#A8A8A8] to-[#FCC04A]">
      <div className="container mx-auto px-11 w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Left side content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1
            className="text-3xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg"
            style={{ lineHeight: "1.5" }}
          >
            Empowering Businesses with Tailored IT Solutions
          </h1>

          <p className="text-xl text-white mb-6 drop-shadow">
            Where Superior Service Meets Client Success!
          </p>
          <button className="bg-white text-[#F36361] hover:bg-opacity-90 font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg">
            Explore Fretboard
          </button>
        </div>

        {/* Right side carousel */}
        <div className="lg:w-1/2 w-full max-w-md">
          <Slider {...settings}>
            <div>
              <img
                src={first}
                alt="Slide 1"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src={second}
                alt="Slide 2"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src={third}
                alt="Slide 3"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
