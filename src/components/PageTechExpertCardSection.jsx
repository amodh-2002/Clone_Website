import React from "react";
import SinglePageTechExpertCardSection from "./SinglePageTechExpertCardSections";
import image1 from "/src/assets/application.jpg";
import image2 from "/src/assets/second.jpg";
import image3 from "/src/assets/third.jpg";

const PageTechExpertCardSection = () => {
  const sections = [
    {
      title: "Application & Web Development Technologies",
      src: image1,
      description:
        "Application and Web development comprehends an enormous arrangement of rules and procedures each site engineer should contemplate about. In recent past HTML5, CSS3, JavaScript, PHP, and MySQL were exploited to be the essential web development advances to build up a site or web application.",
      imageLeft: true,
    },
    {
      title: "Business Intelligence(BI)",
      src: image2,
      description:
        "Fretboard’s BI & BA workforce have experienced different environments and project and have worked across number of industries, from BFSI, Utilities, Technology, Education, NFP and Government. With this range of experience, we are happy to adjust to any condition that might come our way.",
      imageLeft: false,
    },
    {
      title: "Disruptive Technologies",
      src: image3,
      description:
        "Disruptive technology has entirely and permanently altered the way industry functions. Our business models are required to adapt to new technologies in order to sustain the market dynamics and stay relevant. We at Fretboard thoroughly understand these changes initially might not even satisfy the demands of the high end of the markets, but once they appear attractive profit-wise, they surpass market expectations.",
      imageLeft: true,
    },
    {
      title: "ERP",
      src: image1,
      description:
        "One of the key area of expertise of Fretboard is the area of Enterprise resource planning (ERP). We have solid experience in supporting organizations who uses ERP to manage their day-to-day business activities such as accounting, procurement, project management, risk management, compliance, performance management, budgeting, supply chain operation etc.",
      imageLeft: false,
    },
    {
      title: "Infrastructure",
      src: image2,
      description:
        "Growth and diversity of technology services continues to expand and so does the need for technical support for businesses and their clients. Fretboard has a creative way to provide solutions and services in this space and has rich experience in deploying a team of technically-minded professionals who are able to effectively communicate with customers to troubleshoot and resolve IT issues with minimal downtime, and ensure business continuity.",
      imageLeft: true,
    },
  ];

  return (
    <div className="container mx-auto">
      {sections.map((section, index) => (
        <SinglePageTechExpertCardSection key={index} {...section} />
      ))}
    </div>
  );
};

export default PageTechExpertCardSection;
