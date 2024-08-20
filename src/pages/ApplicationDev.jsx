import React from "react";
import NewHero from "../components/NewHero";
import ApplicationCards from "../components/ApplicationCards";
import TechUsedCards from "../components/TechUsedCards";
import Cards from "../components/Cards";
import ContactUs from "../components/ContactUs";
import image from "/src/assets/odc.jpg";

const ApplicationDev = () => {
  return (
    <>
      <NewHero
        title="Application Development"
        desc="Something take makes the code go long and light to make you weight"
      />
      <div className="max-w-screen-2xl mx-auto px-20 py-4 flex items-center justify-between ">
        <div className="max-w-screen-2xl mx-auto  w-full ">
          <div className="flex justify-between items-center gap-10 w-full my-14">
            <div className="space-y-3 w-2/3">
              <h1 className="text-3xl font-bold text-zinc-800">
                Got an Exceptional app idea?
              </h1>
              <h2 className="text-2xl text-zinc-800">
                Fretboard is dedicated to placing businesses of all sizes at the
                forefront of excellence and innovation
              </h2>
              <p className="text-zinc-700">
                Our team crafts elegant, secure, and scalable web and mobile
                application solutions that not only achieve real business
                objectives but also create a lasting impression on customers.
                Our developers are not only experts in their respective fields
                but also perfectionists with keen attention to detail. Get in
                touch with us today to explore our web app development and
                mobile app development services and discover how we can help you
                achieve your goals.
              </p>
              <button className="bg-[#F36361] text-[#fff] hover:bg-opacity-90 font-medium py-3 px-6 rounded-lg transition duration-300 shadow-lg">
                Enquire Now
              </button>
            </div>
            <div className="w-2/6">
              <img
                src={image}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                alt=""
              />
            </div>
          </div>
          <div className="my-20">
            <div className="flex flex-col items-center justify-between gap-3">
              <h1 className="text-3xl font-bold text-zinc-800">What we do</h1>
              <div className="h-1 w-28 bg-[#F36361] flex items-center  mb-2 "></div>
              <p className="w-[920px] text-zinc-600 text-justify mb-10">
                At Fretboard, we specialize in designing and developing apps
                that deliver tangible and concrete results for startups, SMEs,
                and large corporations alike. Our end-to-end development and
                design expertise encompasses
              </p>
            </div>
            <div>
              <ApplicationCards />
            </div>
          </div>
          <div className="my-20 flex flex-col gap-4">
            <div className="space-y-3">
              <h1 className="text-2xl font-medium">
                <span className="text-[#F36361] ">App</span> Strategy
              </h1>
              <p className="text-zinc-700">
                Our app development projects always begin with a highly focused
                strategic planning phase, which is crucial for success. Before
                we start the actual development, our design team dissects the
                app idea to evaluate its commercial viability. This includes
                analyzing the market and competitors, defining a strong unique
                selling proposition (USP), and thoroughly researching the target
                audience.
              </p>
              <p className="text-zinc-700">
                Afterward, we work closely with our clients to create a design
                roadmap that outlines the app’s structure, flows, and user
                experience. Our exclusive product strategy process prioritizes
                our client’s business goals, with a focus on maximizing the
                app’s potential for success while minimizing costs and risks.
              </p>
            </div>
            <div className="space-y-3">
              <h1 className="text-2xl font-medium">
                <span className="text-[#F36361] ">UX</span> and{" "}
                <span className="text-[#F36361] ">UI</span> Design
              </h1>
              <p className="text-zinc-700">
                Our in-house user experience (UX) design and visually appealing
                user interface (UI) design are crucial elements that contribute
                to the success of an app, but that’s just the beginning. Our
                team of experts dives deep into the design mindset, leveraging
                their extensive app development experience and passion for user
                experience and research to create addictive apps. From creating
                high-fidelity design prototypes to implementing animated
                micro-interactions, we pay meticulous attention to detail and
                utilize the latest cutting-edge design tools to ensure that our
                designs are top-notch.
              </p>
              <ul className="text-zinc-700 list-disc px-8">
                <li>Mobile UX design and wireframing</li>
                <li>Mobile prototype design</li>
                <li>Web app design</li>
                <li>App branding</li>
                <li>Mobile UI design</li>
                <li>Interaction design and animation</li>
              </ul>
            </div>
          </div>
          <div className="my-20 flex flex-col gap-4 justify-center">
            <h1 className="text-center text-3xl font-bold text-[#F36361] mb-10">
              Technology Used
            </h1>
            <TechUsedCards />
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

export default ApplicationDev;
