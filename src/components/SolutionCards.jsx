import React from "react";
import SingleSolutionCard from "./SingleSolutionCard";

const SolutionCard = () => {
  return (
    <div className="flex items-center gap-20">
      <SingleSolutionCard
        title="Evaluate"
        desc="This is the beginning of an amazing experience. We’re going to learn about each other. Know us, our team, our vision, and about to what length we would go to help you succeed in your goals."
      />
      <SingleSolutionCard
        title="Commit"
        desc="This is where it becomes exciting. You know us. We know you. Let’s sign up to build something exceptional. Let’s elevate your business in ways undreamed-of. Let’s move forward for a great start."
      />
      <SingleSolutionCard
        title="Succeed"
        desc="We offer top-notch solutions consistently and are committed to building lasting partnerships based on trust and support for long-term growth.Let’s move forward for a great start."
      />
    </div>
  );
};

export default SolutionCard;
