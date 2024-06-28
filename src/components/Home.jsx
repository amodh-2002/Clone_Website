import React from "react";
import HeroSection from "./Hero";
import AboutUsOne from "./AboutUsOne";
import AboutUsTwo from "./AboutUsTwo";
import SolutionsComp from "./SolutionsComp";
import JobSeeker from "./JobSeeker";
import TechExpert from "./TechExpert";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUsOne />
      <AboutUsTwo />
      <SolutionsComp />
      <JobSeeker />
      <TechExpert />
      <ContactUs />
    </div>
  );
};

export default Home;
