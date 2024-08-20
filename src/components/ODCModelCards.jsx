import React from "react";
import SingleODCModelCard from "./SingleODCModelCard";

const ODCModelCards = () => {
  return (
    <div className="flex flex-col  items-center justify-center gap-10 flex-wrap">
      <SingleODCModelCard
        desc="The fixed cost model is the most straightforward and popular engagement model. The cost is determined upfront with no hidden costs, making it ideal for small projects with clear requirements and limited features.Many of our clients with a limited budget opt for this model, which ensures security, timely delivery of deliverables, budget transparency, regular status updates, minimal supervision, and adherence to the timeline. At Fretboard, we are committed to delivering what we promise with complete transparency and accountability."
        title="Fixed Cost Model"
      />
      <SingleODCModelCard
        desc="Our exclusive team model involves assigning a team of experts to a specific project for a set duration. This model is perfect for long-term projects with complex attributes and constantly evolving features. We add SMEs to the team to provide additional value, and these projects are typically sought after by experienced developers, which reduces conventional attrition challenges. This model allows for scaling up and down as needed and facilitates rapid modifications, ensuring productivity is maintained"
        title="Dedicated Team Model"
      />
      <SingleODCModelCard
        desc="Our most desirable model combines the benefits of both fixed and dedicated team engagement. It’s highly recommended when the work scope is tentative and can’t be projected accurately. Based on the team’s efforts, clients are charged. Work is divided into short phases to ensure faster overall delivery.

With this model, rates are predictable, and it’s easy to monitor the team’s progress. However, clients may need to put in considerable effort to manage overall deliverables."
        title="Time & Material Model"
      />
    </div>
  );
};

export default ODCModelCards;
