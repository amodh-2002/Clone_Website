import React from "react";
import NewHero from "../components/NewHero";
import CompanyModel from "../components/CompanyModel";
import ContactUs from "../components/ContactUs";
import company from "/src/assets/solution.jpg";
import mission from "/src/assets/third.jpg";

const Company = () => {
  return (
    <>
      <NewHero
        title="About Us"
        desc="Collaborate with a trusted partner to stay ahead ."
      />
      <div className="max-w-screen-2xl mx-auto px-20 py-4 flex items-center justify-between ">
        <div className="max-w-screen-2xl mx-auto  w-full ">
          <div className="flex justify-between items-center gap-10 w-full my-14">
            <div className="space-y-3 w-2/3">
              <h1 className="text-3xl font-bold text-zinc-800">
                Stay Ahead of the Curve: Elevate Your Business with Fretboard's
                Tailored IT Solutions!
              </h1>
              <p className="text-zinc-700">
                Dive into the realm of innovative IT solutions with Fretboard,
                where customization meets quality service to cater to businesses
                of all sizes. Our team excels in crafting bespoke web and mobile
                applications that prioritize exceptional user experiences,
                ensuring timely project delivery through skilled leadership and
                proven methodologies. With a focus on seamless customer
                interactions and mobile optimization, our agile and visually
                captivating systems are designed to enhance sales and exceed
                expectations. Partner with Fretboard to safeguard your business
                interests, outshine competitors, and embark on a path of digital
                success.
              </p>
              <p className="text-zinc-700">
                Our{" "}
                <span className="text-[#F36361] font-medium">
                  “Transformation as a Service”
                </span>{" "}
                approach offers a lean, bootstrapping model that leverages our
                app frameworks and extensive design and development expertise to
                help clients achieve their goals.
              </p>
              <p className="text-zinc-700">
                Whether you’re a large enterprise seeking to mobilize your
                business processes or a startup disrupting the industry, we’re
                committed to delivering innovative solutions that meet your
                unique needs. Our team is passionate about developing web and
                mobile apps that elevate the user experience and drive results.
                We work closely with our clients to understand their objectives
                and develop tailored solutions that exceed expectations.
              </p>
            </div>
            <div className="w-1/2">
              <img
                src={company}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                alt=""
              />
            </div>
          </div>
          <div className="my-20">
            <CompanyModel />
          </div>
          <div className="flex justify-between items-center gap-10 w-full my-14">
            <div className="w-1/2">
              <img
                src={mission}
                alt=""
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-3 w-2/3 flex flex-col gap-4">
              <div className="flex flex-col gap-3 mb-4">
                <h1 className="text-3xl">
                  Our{" "}
                  <span className="text-[#F36361] font-medium">Mission .</span>
                </h1>
                <p className="text-zinc-700">
                  Our mission is to enhance the capabilities of the individuals
                  and organizations we serve. With Fretboard,
                  <span className="text-[#F36361] font-medium">
                    “we unlock a brighter future for our clients.”
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl">
                  Our{" "}
                  <span className="text-[#F36361] font-medium">
                    core values .
                  </span>
                </h1>
                <ul className="list-disc text-zinc-700 px-8">
                  <li>
                    <span className="text-[#F36361] font-medium">
                      Transparency:{" "}
                    </span>
                    Our clients trust us to meet their urgent needs, and we
                    strive to communicate clearly and logically every step of
                    the way to ensure absolute clarity throughout our journey
                    together.
                  </li>
                  <li>
                    <span className="text-[#F36361] font-medium">Trust: </span>
                    Trust is the foundation of our successful project delivery.
                    We share your mission and always act in your best interests,
                    delivering solutions that empower your business to thrive.
                  </li>
                  <li>
                    <span className="text-[#F36361] font-medium">
                      Passionate:{" "}
                    </span>
                    We care deeply about our clients and take pride in our work.
                    Our passion drives our productivity and helps us deliver
                    successful projects for you.
                  </li>
                  <li>
                    <span className="text-[#F36361] font-medium">
                      Expertise:{" "}
                    </span>
                    We provide guidance on evolving technologies and business
                    operations. Our commitment to maintaining our expertise
                    ensures we consistently deliver high-quality services and
                    drive your success.
                  </li>
                  <li>
                    <span className="text-[#F36361] font-medium">
                      Efficiency:{" "}
                    </span>
                    We use proven methodologies to deliver high-quality outcomes
                    and continually invest in improving their precision, value,
                    and efficiency.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="my-20 h-32 bg-gradient-to-br from-[#F36361]  to-[#FCC04A] rounded-lg flex items-center justify-center">
            <h1 className="text-3xl text-zinc-800">
              “Your <span className="text-white">Satisfaction</span> is our top
              priority.”
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

export default Company;
