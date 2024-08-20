// JobSeekersCards.jsx
import React from "react";
import { Link } from "react-router-dom";
import image1 from "/src/assets/application.jpg";
import image2 from "/src/assets/about.jpg";
import image3 from "/src/assets/third.jpg";

const cards = [
  {
    image: image1,
    title: "Senior Developer – Java/Cloud Native",
  },
  {
    image: image2,
    title: "Developer – Java/Golang/Nodejs/Kubernetes",
  },
  {
    image: image3,
    title: "Developer/Javascript/Ui5/Html/Css/Ui Development",
  },
];

const DeveloperCard = ({ image, title }) => (
  <Link>
    <div className="relative group overflow-hidden rounded-lg border h-96 shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
      />
      <div className="absolute bottom-0 h-16 left-0 right-0 bg-white group-hover:bg-[#F36361] transition-colors duration-300 p-2 flex items-center justify-center">
        <p className="text-sm font-semibold text-gray-800 group-hover:text-white text-center">
          {title}
        </p>
      </div>
    </div>
  </Link>
);

const JobSeekersCards = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <DeveloperCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default JobSeekersCards;
