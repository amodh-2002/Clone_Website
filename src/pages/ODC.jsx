import React from "react";
import NewHero from "../components/NewHero";
import ODCCards from "../components/ODCCards";
import ODCModelCards from "../components/ODCModelCards";
import Cards from "../components/Cards";
import ContactUs from "../components/ContactUs";
import image from "/src/assets/solution.jpg";

const ODC = () => {
  return (
    <>
      <NewHero
        title="ODC"
        desc="With wings extended there’s no limit to how high you can fly ."
      />
      <div className="max-w-screen-2xl mx-auto px-20 py-4 flex items-center justify-between ">
        <div className="max-w-screen-2xl mx-auto  w-full ">
          <div className="flex justify-between items-center gap-10 w-full my-14">
            <div className="space-y-3 w-2/3">
              <h1 className="text-3xl font-bold text-zinc-800">
                Unleash Your Potential: Elevate Your Team with Our Global Power
                Boost!
              </h1>
              <p className="text-zinc-700">
                Looking to supercharge your team? Our company specializes in
                providing an economical and efficient solution to enhance your
                core team with a global add-on team that consistently delivers
                top-notch quality. By entrusting us with the product development
                cycle, we not only share the responsibility but also pave the
                way towards achieving your business goals efficiently.
              </p>
              <p className="text-zinc-700">
                Say goodbye to development worries with our dedicated offshore
                team comprising a blend of skillful professionals – from
                developers and designers to project managers and solutions
                architects. This dynamic team ensures real-time updates and
                seamless progress, allowing you to refocus on your core business
                functions. Partnering with us not only offers an operational
                cost advantage but also drives overall efficiency improvements,
                propelling your business towards success.
              </p>
            </div>
            <div className="w-2/6">
              <img
                src={image}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                alt=""
              />
            </div>
          </div>
          <div className="mt-32 mb-20 flex flex-col items-center gap-10">
            <h1 className="text-3xl font-bold text-[#F36361]">
              Fretboard Advantage.
            </h1>
            <ODCCards />
          </div>
          <div className="my-20 flex flex-col gap-10">
            <div className="flex flex-col gap-4 items-center mt-10">
              <h1 className="text-3xl text-center font-bold text-zinc-800">
                Fretboard’s strategy is a valuable investment for businesses of
                all sizes, with proven results.
              </h1>
              <h2 className="text-xl text-zinc-700">
                With our Flexible model you have the right to choose the option
                that best fits your needs.
              </h2>
            </div>
            <ODCModelCards />
          </div>
          <div className="my-20 flex flex-col gap-5">
            <h1 className="text-3xl font-medium text-zinc-800">
              Why <span className="text-[#F36361]">Fretboard</span>?
            </h1>
            <p className="text-zinc-700">
              Partner with Fretboard to accelerate your business growth without
              any setup investment. We are young, agile, and flexible, unlike
              larger companies with rigid norms. Our other commendable
              advantages are like:
            </p>
            <ul className="list-disc px-8 text-zinc-700 flex flex-col gap-2">
              <li>
                <span className="text-[#F36361]">Quick Ramp-up: </span>Our
                staffing arm has a vast reach across the nation to swiftly
                mobilize the perfect talent and facilitate rapid ramp-up.
              </li>
              <li>
                <span className="text-[#F36361]">Flexibility: </span>Fretboard
                empowers you to implement your own preferred corporate
                methodologies and management techniques while working with us.
              </li>
              <li>
                <span className="text-[#F36361]">Quality: </span>We value our
                customers and involve them in the team selection process,
                providing them with the freedom to choose the desired skill set
                and quality of team members for their projects.
              </li>
              <li>
                <span className="text-[#F36361]">Cost Effective: </span>Reduced
                expenses of entire software development cost.
              </li>
            </ul>
          </div>
          <div className=" flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl  font-bold text-center text-zinc-800 mt-10 mb-2">
              Our Solutions
            </h1>
            <p className="text-xl text-center text-zinc-700 mb-4">
              Talent is just the beginning, let your competencies take you to
              New Heights.
            </p>
            <Cards />
            <div>
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ODC;
