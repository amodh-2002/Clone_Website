import React from "react";
import NewHero from "../components/NewHero";
import ContactForm from "../components/ContactForm";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <NewHero title="Contact Us" desc="Let’s start a Conversation ." />
      <div className="max-w-screen-2xl mx-auto px-20 py-4 flex items-center justify-between ">
        <div className="max-w-screen-2xl mx-auto  w-full ">
          <div className="flex flex-col justify-center items-center gap-4 w-full my-14">
            <h1 className="text-3xl font-bold text-zinc-800">
              Ready to Embrace Seamless Solutions? Share Your Challenges, and
              Let's Connect!
            </h1>
            <p className="text-zinc-700 text-justify">
              Feel free to reach out to us with any obstacles hindering your
              progress, and our team will swiftly get in touch to explore how we
              can help you achieve frictionless operations. Whether it's
              streamlining processes, enhancing efficiency, or addressing
              specific concerns, we're here to support your journey towards
              seamless success.
            </p>
          </div>
          <div className="flex items-center gap-10 justify-between w-full">
            <div className="w-2/3">
              <ContactForm />
            </div>
            <div className="flex flex-col text-white justify-between gap-10 bg-gradient-to-br from-[#FCC04A]  to-[#F36361] rounded-lg px-8 py-8">
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold ">Get in touch</h1>
                <p className="  ">
                  Drop us a line & get the instant response from us. We are just
                  a click away
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <FaPhoneAlt size={28} className="text-zinc-800" />
                <p className="">+91-80-35837591(India)</p>
                <p className="">+91-91484-67007(India)</p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <IoIosMail size={32} className="text-zinc-800" />
                <span className="cursor-pointer text-white font-medium">
                  info@fretboard.in
                </span>
              </div>
            </div>
          </div>
          <div className="mt-20 h-32 bg-gradient-to-br from-[#F36361]  to-[#FCC04A] rounded-lg flex items-center justify-center text-zinc-800">
            <h1 className="text-3xl text-zinc-800">
              “Let’s Get Your <span className="text-white">Project</span> is our
              top Started!”
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
