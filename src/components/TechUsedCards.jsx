import React from "react";
import SingleTechUsedCard from "./SingleTechUsedCard";

const TechUsedCards = () => {
  return (
    <div className="flex items-center gap-20">
      <SingleTechUsedCard
        title="Mobile Development"
        list={[
          "iOS",
          "Android",
          "React Native",
          "Flutter",
          "Kotlin Multiplatform",
        ]}
      />
      <SingleTechUsedCard
        title="Web Development"
        list={["Ruby on Rails", "Node JS"]}
      />
      <SingleTechUsedCard
        title="Backend Development"
        list={["Elixir/Phoenix", "Android"]}
      />
      <SingleTechUsedCard
        title="Frontend Development"
        list={["React JS", "Angular"]}
      />
      <SingleTechUsedCard
        title="Embedded Development"
        list={["IoT Device Firmware", "Bluetooth/BLE"]}
      />
    </div>
  );
};

export default TechUsedCards;
