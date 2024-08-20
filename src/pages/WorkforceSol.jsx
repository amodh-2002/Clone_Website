import React from "react";
import NewHero from "../components/NewHero";
import WorksoluCards from "../components/WorksoluCards";
import SingleODCModelCard from "../components/SingleODCModelCard";
import Cards from "../components/Cards";
import ContactUs from "../components/ContactUs";

const WorkforceSol = () => {
  return (
    <>
      <NewHero
        title="Workforce Solutions"
        desc="Streamline your hiring process ."
      />
      <div className="max-w-screen-2xl mx-auto px-20 py-4 flex items-center justify-between">
        <div className="max-w-screen-2xl mx-auto  w-full ">
          <div className="flex justify-between items-center gap-10 w-full my-14">
            <div className="space-y-3 w-2/3">
              <h1 className="text-3xl font-bold text-zinc-800">
                Unlock Your Potential: Elevate Your Team with Tailored Staffing
                Solutions from Fretboard!
              </h1>
              <p className="text-zinc-700">
                At Fretboard, we recognize the invaluable role of individuals
                within your organization. Our meticulous approach to staffing
                underscores our belief in the significance of people, ensuring
                the hiring process is seamless and efficient for our clients.
                Leveraging AI-powered matching and dedicated recruiters, we
                swiftly connect you with the best resources in the market,
                catering to your need for highly skilled temporary or permanent
                professionals.
              </p>
              <p className="text-zinc-700">
                Committed to understanding your business needs, our team
                delivers candidates tailored to your job description, company
                culture, and team dynamics. We prioritize consistency in
                delivering quality, earning your trust through our personalized
                approach. With extensive industry experience and relationships,
                our custom solutions offer both quality and timeliness. Whether
                it's complex project or personnel requirements, our flexible
                engagement model supports your organization's critical needs,
                helping you build the right team and propel your business to new
                heights.
              </p>
              <p className="text-[#F36361]">
                Your best option to get there is to reach out to Team Fretboard.
              </p>
            </div>
            <div className="w-2/6">
              <img
                src="/src/assets/ODC.jpg"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                alt=""
              />
            </div>
          </div>
          <div className="mt-20 mb-20 flex flex-col items-center gap-10">
            <h1 className="text-3xl font-bold text-zinc-800">
              Fretboard Advantage.
            </h1>
            <WorksoluCards />
          </div>
          <div className="mt-20 flex flex-col gap-10  bg-gradient-to-br from-[#F36361] via-[#A8A8A8] to-[#FCC04A] w-full">
            <SingleODCModelCard
              title="Technology Staffing"
              desc="At Fretboard, we offer access to world-class developers to help you meet your project deadlines. We can ramp up developers with a variety of skills, whether you need a simple web developer or someone with the latest disruptive skills.
              Our team conducts detailed assessments to understand your business requirements, solution, architecture, technology stack, KRA, timeliness, and project durations, and we create a customized resource selection procedure based on your needs. Whether you require front-end developers, back-end developers, full-stack developers, or DevOps engineers, we handpick the best talent for your team based on key attributes and skills."
            />
            <SingleODCModelCard
              title="Project based hiring"
              desc="At Fretboard, our technical team has the expertise to complete the entire gamut of the SDLC process. We offer a seamless and valuable extension to your team, from project planning and solution design to implementation and maintenance.
              Our comprehensive pricing and quick TAT will help you assemble the entire team required to execute your project. We handle the entire onboarding process for each developer, covering concepts such as company culture, project responsibilities, and approval processes.We direct the team on everything including technology, client processes, project information to compliance standards, and all other important details to get them started."
            />
            <SingleODCModelCard
              title="Recruitment Solution"
              desc="Fretboard understands that the IT recruiting model is constantly changing, and we strive to adapt quickly to deliver industry-leading staffing resources to our clients. Our internal process model is simple yet effective, and we customize our strategies to meet each client’s unique requirements.
              Our team is always equipped to think outside the box, and we emphasize trust, appropriate representation, respect, and ROI as the core values of our recruitment solution. We understand the importance of seamlessly integrating our resources into our client’s IT environments and providing cost-effective solutions that deliver the expected ROI."
            />
          </div>
          <p className="text-[#F36361] text-center my-4 font-medium">
            Resource and Client Satisfaction | Far-fetched Research |
            Relationship Development | Career Goal Accuracy
          </p>
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

export default WorkforceSol;
