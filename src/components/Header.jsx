import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [techExpertiseOpen, setTechExpertiseOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-20 backdrop-blur-lg shadow-lg text-gray-800"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="max-w-screen-2xl mx-auto px-20 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">FRETBOARD ENGAGE</div>
        <ul className="flex space-x-6">
          <li className="relative group">
            <div
              className="cursor-pointer flex items-center"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <span className="relative">
                <Link
                  to="/solutions"
                  className={`hover:text-gray-600 ${
                    isScrolled ? "text-gray-800" : "text-white"
                  }`}
                >
                  Solutions
                </Link>
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-current transform origin-left transition-transform duration-300 ${
                    solutionsOpen ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <div
                className={`absolute left-1/2 top-full z-10 -translate-x-1/2 pt-4 transition-all duration-300 ${
                  solutionsOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent" />
                <div className="relative bg-white text-gray-700 rounded-md shadow-lg">
                  <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                  <ul className="relative z-10 py-2 rounded-md w-[260px]">
                    <li className="px-4 py-2 hover:bg-gray-100 border-b">
                      <Link to="/applicationDevelopment" className="">
                        Application Development
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 border-b">
                      <Link to="/ODC" className="">
                        ODC
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 border-b">
                      <Link to="/workforce" className=" ">
                        Workforce solutions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group">
            <div
              className="cursor-pointer flex items-center"
              onMouseEnter={() => setTechExpertiseOpen(true)}
              onMouseLeave={() => setTechExpertiseOpen(false)}
            >
              <Link
                to="/technology-expertise"
                className={`hover:text-gray-600 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                Technology Expertise
              </Link>
              <span
                className={`absolute -bottom-1 left-0 w-full h-0.5 bg-current transform origin-left transition-transform duration-300 ${
                  techExpertiseOpen ? "scale-x-100" : "scale-x-0"
                }`}
              />
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <div
                className={`absolute left-1/2 top-full z-10 -translate-x-1/2 pt-4 transition-all duration-300 ${
                  techExpertiseOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent" />
                <div className="relative bg-white text-gray-700 rounded-md shadow-lg">
                  <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                  <ul className="relative z-10 py-2 rounded-md w-[320px]">
                    <li className="px-4 py-2 hover:bg-gray-100 border-b">
                      <Link to="/tech1" className="">
                        Application and Web Development Tech
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 border-b">
                      <Link to="/tech2" className="">
                        BI
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 border-b">
                      <Link to="/tech3" className=" ">
                        Disruptive Technologies
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 border-b">
                      <Link to="/tech4" className="">
                        ERP
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 border-b">
                      <Link to="/tech5" className="">
                        Infrastructure
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link
              to="/job-seekers"
              className={`hover:text-gray-600 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Job Seekers
            </Link>
          </li>
          <li>
            <Link
              to="/hire-talent"
              className={`hover:text-gray-600 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Hire Talent
            </Link>
          </li>
          <li>
            <Link
              to="/company"
              className={`hover:text-gray-600 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Company
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className={`hover:text-gray-600  ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
