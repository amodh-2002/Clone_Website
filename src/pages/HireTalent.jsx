import React from "react";
import NewHero from "../components/NewHero";
import ContactUs from "../components/ContactUs";

const HireTalent = () => {
  return (
    <>
      <NewHero
        title="Hire Talent"
        desc="Connecting you with the best talent ."
      />

      <div className="max-w-screen-2xl mx-auto px-20 py-4 flex items-center justify-between ">
        <div className="max-w-screen-2xl mx-auto  w-full">
          <div className="flex justify-between items-center gap-10 w-full my-14">
            <div className="space-y-3 w-full">
              <h1 className="text-3xl font-bold text-zinc-800">
                Fuel Your Success: Discover Top Tech Talent with Fretboard's
                Expertise!
              </h1>
              <p className="text-zinc-700 text-justify">
                <span className="text-[#F36361] font-medium">Fretboard</span> is
                the ultimate destination for companies seeking to elevate their
                technological capabilities by accessing top-tier talent in the
                technology sector. With a deep understanding of the strategic
                significance of talent acquisition in today's competitive tech
                landscape, Fretboard offers custom solutions tailored to meet
                your staffing needs. From in-depth research & development
                support to software product development expertise, our team
                facilitates the recruitment of skilled professionals through
                Managed Services and staff augmentation models. Partner with
                Fretboard to harness the power of exceptional tech talent and
                drive your business forward in the digital age.
              </p>
            </div>
          </div>
          <div className="text-white my-20 bg-gradient-to-br from-[#F36361] to-[#FCC04A]  rounded-lg h-44 flex items-center justify-center">
            <h1 className="text-2xl text-center font-medium px-8">
              We help you get the best talent available. Do write to us at
              <span className="text-black cursor-pointer">
                {" "}
                info@fretboard.in{" "}
              </span>
              detailing your requirements. Happy to Help!
            </h1>
          </div>
          <div>
            <ContactUs />
          </div>
        </div>
      </div>
    </>
  );
};

export default HireTalent;
